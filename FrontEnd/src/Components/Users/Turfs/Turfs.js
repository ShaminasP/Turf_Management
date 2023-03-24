import TurfCard from "./TurfCard";
import { useEffect, useState } from "react";
import { getTurfs } from "../../../API/UserAuth";
import Searchbar from "../Searchbar/Searchbar";
import { useSelector } from "react-redux";
import AlertMessage from "../../AlertMessage/AlertMessage";

const Turf = () => {
  const [error, setError] = useState("");
  const [turfs, setTurfs] = useState([]);
  const { search } = useSelector((state) => state.user);
  console.log(turfs);

  const handleClose = () => {
    setError("");
  };

  useEffect(() => {
    const fetchTurfs = async () => {
      const res = await getTurfs();
      setTurfs(res.turfs);
    };
    fetchTurfs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 pt-[70px]">
      <Searchbar error={setError} />
      {error && <AlertMessage message={error} close={handleClose} />}
      <section className="py-16 sm:py-16 bg-gray-100 text-black">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Let's Play Together</h2>

            <p className="font-serif text-sm text-black">
              Select your playspots and book your playtime by a tap...
            </p>
          </div>
          {search.length !== 0 ? (
            <>
              <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                {search.map((turf) => (
                  <TurfCard key={turf._id} {...turf} />
                ))}
              </div>
            </>
          ) : (
            <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
              {turfs?.map((turf) => (
                <TurfCard key={turf._id} {...turf} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Turf;
