const ModalMessage = (props) => {
  return (
    <div className="relative flex flex-col items-center max-w-lg gap-4 p-6 rounded-md shadow-md sm:py-8 sm:px-12 bg-gray-50 text-gray-800">
      <button className="absolute top-2 right-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
          className="flex-shrink-0 w-6 h-6"
          onClick={props.close}
        >
          <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
        </svg>
      </button>

      <h2 className="text-2xl font-semibold leading-tight tracking-wide text-green-700">
        {props.message}
      </h2>
      <p className="flex-1 text-center text-gray-700">{props.text}</p>
    </div>
  );
};
export default ModalMessage;
