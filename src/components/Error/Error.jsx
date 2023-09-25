import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const error = useRouteError();

  const handleGoBack = () => {
    navigate("/");
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-6 p-44">
          <hr />
          {error.status === 404 ? (
            <div className="text-3xl font-bold text-center">Page not found</div>
          ) : (
            ""
          )}
          <div>
            <h2 className="text-xl text-center">Code: {error.status}</h2>
            <h2 className="text-xl text-center">Status: {error.statusText}</h2>
          </div>
          <hr />
          <button
            className="btn bg-primaryOne hover:bg-primaryOne text-white normal-case"
            onClick={handleGoBack}
          >
            Go Back To Home
          </button>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Error;
