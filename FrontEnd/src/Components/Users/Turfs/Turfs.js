import TurfCard from "./TurfCard";
import { useEffect, useState } from "react";
import { getTurfs } from "../../../API/TurfAuth";

const Turf = () => {
  const [turfs, setTurfs] = useState([]);

  const fetchTurfs = async () => {
    await getTurfs().then((res) => {
      console.log(res.turfs);
        setTurfs(res.turfs);
    });
  };

  useEffect(() => {
    fetchTurfs();   
    console.log(turfs);
  }, []);

  return (
    <div className="min-h-screen bg-indigo-900 pt-[70px]">
      <section className="py-16 sm:py-16 bg-indigo-900 text-white">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Let's Play Together</h2>
            <p className="font-serif text-sm text-white">
              Select your playspots and book your playtime by a tap...
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {turfs.map((turf) => (
              <TurfCard key={turf._id} {...turf} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Turf;
