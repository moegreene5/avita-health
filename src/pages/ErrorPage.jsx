import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="p-3 text-center">
      <h1 className="text-base md:text-2xl lg:text-4xl">oops</h1>
      <p className="text-red-700 text-base md:text-2xl lg:text-4xl">
        {isRouteErrorResponse(error)
          ? "This page does not exist."
          : "An unexpected error occurred."}
      </p>
    </div>
  );
};

export default ErrorPage;
