const AlertMessage = (props) => {

  return (
    <div className="alert border border-red-600 shadow-lg mt-3 ">
      <div className="h-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current flex-shrink-0 h-3 w-6 "
          fill="none"
          viewBox="0 0 24 24"
          onClick={props.close}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="text-red-600">{props?.message}</span>
      </div>
    </div>
  );
};
export default AlertMessage;
