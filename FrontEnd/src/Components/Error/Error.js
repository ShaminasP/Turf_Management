import { Link } from "react-router-dom";

const Error = ({ link }) => {
  return (
    <section className="flex items-center p-16 min-h-screen bg-gray-500 text-gray-700">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-gray-800">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 text-gray-700">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link
            to={link}
            className="px-8 py-3 font-semibold rounded bg-emerald-600 text-gray-50"
          >
            Back to home
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Error;
