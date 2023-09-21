import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();

  return <h4 className="text-4xl font-bold">There was an error...</h4>;
};
export default ErrorElement;
