import { useParams } from "react-router-dom";

const ItemPage = () => {
  const { id } = useParams();

  return <div>{id}</div>;
};

export default ItemPage;
