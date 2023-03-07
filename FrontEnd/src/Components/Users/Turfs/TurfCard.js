const TurfCard = ({ _id,  turfName, images }) => {
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50 my-20 mx-10">
      <img
        src="https://source.unsplash.com/random/300x300/?1"
        alt=""
        className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
          Quisque
        </span>
        <h2 className="text-xl font-semibold tracking-wide">
          Nam maximus purus
        </h2>
      </div>
      <p className="dark:text-gray-100">
        Mauris et lorem at elit tristique dignissim et ullamcorper elit. In sed
        feugiat mi. Etiam ut lacinia dui.
      </p>
    </div>  
  );
};
export default TurfCard;
