import { useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  return <div>{location}</div>;
};

export default Breadcrumbs;
