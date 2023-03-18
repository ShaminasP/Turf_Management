import { useState } from "react";
import { Location_Search } from "../../../API/Mapbox";
import { toGetTurfBySearch } from "../../../API/UserAuth";
import { useDispatch } from "react-redux";
import { setTurfSearch } from "../../../Store/userSlice";

const SearchBar = ({ error }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestion] = useState([]);
  const [selected, setSelected] = useState("");

  const onChange = async (e) => {
    setSearch(e.target.value);
    const results = await Location_Search(search);
    console.log(results);
    setSuggestion(results.map((f) => f.place_name));
  };

  const handleLocation = async (suggestion) => {
    setSelected(suggestion);
    setSearch("");
    setSuggestion([]);
  };

  const fetchData = async (selected) => {
    setSelected("")
    const turf = await toGetTurfBySearch(selected);
    if (turf.status === 200) return dispatch(setTurfSearch(turf.data));
    if (turf.status === 404) {
      return error("Turfs are not available in that location");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
    >
      <input
        type="search"
        name="search"
        className="mx-5 h-8 px-3  rounded-lg border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:border-red-500"
        placeholder="Search..."
        value={search ? search : selected}
        onInput={onChange}
      />
      {suggestions.length > 0 && (
        <ul className="absolute z-10 bg-white border border-gray-400 w-72 max-h-56 overflow-y-scroll mt-32 rounded shadow-md">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleLocation(suggestion)}
              className="cursor-pointer hover:bg-gray-200 p-2 border-b border-gray-400"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
      <button
        className="px-4 py-2 text-sm font-medium text-red-600 bg-white rounded-lg hover:bg-red-600 hover:text-white"
        onClick={() => fetchData(selected)}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
