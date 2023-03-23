import { useEffect, useState } from "react";
import { getUsers } from "../../../API/Admin";
import { useSelector } from "react-redux";
import AlertMessage from "../../AlertMessage/AlertMessage";

const Table = () => {
  const { token } = useSelector((state) => state.admin);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const UserList = async () => {
    const response = await getUsers(token);
    if (response.status === 200) {
      setData(response.data);
    } else {
      setError(response?.error?.message);
    }
  };

  const TableHeadings = ["User Name", "Email", "Contact Number"];

  useEffect(() => {
    UserList();
  }, []);
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
                  {TableHeadings?.map((heading, index) => (
                    <th className="p-3" key={index}>
                      {heading}{" "}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((user) => (
                  <tr className="border-b border-opacity-20 border-gray-300 bg-gray-50 text-center">
                    <td className="p-3">
                      <p>{user.name}</p>
                    </td>
                    <td className="p-3">
                      <p>{user.email}</p>
                    </td>
                    <td className="p-3">
                      <p>{user.mobile}</p>
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
