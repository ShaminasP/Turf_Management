function Button(props) {
  return (
    <button
      className={`${props.color} ${props.text} mb-2 font-[Poppins] py-2 px-6 rounded hover:bg-white hover:text-red-600 duration-500 hover:border-2 border-red-600`}
    >
      {props.children}
    </button>
  );
}

export default Button;
