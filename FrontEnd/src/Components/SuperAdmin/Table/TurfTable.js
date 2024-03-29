import { deleteRequest, getRequestedTurf } from "../../../API/Admin";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { changeStatus } from "../../../API/Admin";

import AlertMessage from "../../AlertMessage/AlertMessage";

const Table = () => {
  const { token } = useSelector((state) => state?.admin);

  const [error, setError] = useState("");
  const [turfs, setTurfs] = useState([]);

  const acceptRequest = async (id) => {
    const response = await changeStatus(id, token);

    if (response.status === 200) {
      setTurfs((prevTurfs) =>
        prevTurfs.map((turf) =>
          turf._id === id ? { ...turf, turfStatus: response.data } : turf
        )
      );
    }
  };

  const cancelTurfRequest = async (id) => {
    const response = await deleteRequest(id, token);
  };

  const fetchRequestedTurf = async () => {
    const response = await getRequestedTurf(token);
    if (response.status === 200) {
      setTurfs(response.data);
    } else {
      setError(response?.data?.message);
    }
  };

  useEffect(() => {
    token && fetchRequestedTurf();
  }, [token]);

  return (
    <>
      <div className="container p-2 mx-auto sm:p-4 text-gray-800 mt-10">
        <h2 className="mb-4 text-2xl font-semibold leading-tight"></h2>
        <div className="overflow-x-auto">
          {error ? (
            <AlertMessage message={error} />
          ) : (
            <table className="min-w-full text-xs">
              <colgroup>
                <col />
                <col />
                <col />
                <col />
                <col />
                <col className="w-24" />
              </colgroup>
              <thead className="bg-gray-300">
                <tr className="text-center">
                  <th className="p-3">Name </th>
                  <th className="p-3">Location</th>
                  <th className="p-3">Contact Number</th>
                  <th className="p-3 ">ACTION</th>
                </tr>
              </thead>
              <tbody>
                {turfs.map((turf) => (
                  <tr
                    key={turf._id}
                    className="border-b border-opacity-20 border-gray-300 bg-gray-50 text-center"
                  >
                    <td className="p-3">
                      <p>{turf.turfName}</p>
                    </td>
                    <td className="p-3">
                      <p>{turf.location}</p>
                    </td>
                    <td className="p-3">
                      <p>{turf.contactNumber}</p>
                    </td>
                    <td className="p-3 text">
                      <button
                        className="btn btn-success btn-sm m-2"
                        onClick={() => acceptRequest(turf._id)}
                      >
                        {" "}
                        ACCEPT
                      </button>
                      <button
                        className="btn btn-success btn-sm m-2 "
                        onClick={() => cancelTurfRequest(turf._id)}
                      >
                        {" "}
                        CANCEL
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};
export default Table;
