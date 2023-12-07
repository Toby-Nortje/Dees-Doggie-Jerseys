import { useParams } from "react-router-dom";
import ItemDescWidget from "widgets/ItemDescWidget";
import ItemImageTabWidget from "widgets/ItemImageTabWidget";
import ItemInfoTabWidget from "widgets/ItemInfoTabWidget";
import { useMediaQuery } from "@mui/material";

import { stockItems } from "../stockPage/stock";

const ItemPage = () => {
  const { id } = useParams();
  const isLargeScreens = useMediaQuery("(min-width: 1000px)");
  const isMediumScreens = useMediaQuery("(min-width: 640px)");
  const stock = stockItems.filter((item) => item._id == id)[0];
  console.log(stock);
  return (
    <div style={{ padding: "2%" }}>
      <div
        style={{
          display: "flex",
          gap: "10%",
          alignItems: isMediumScreens ? null : "center",
          flexDirection: isMediumScreens ? "row" : "column",
        }}
      >
        <ItemImageTabWidget item={stock} style={{ flexBasis: "40%" }} />
        <ItemInfoTabWidget item={stock} style={{ flexBasis: "50%" }} />
      </div>
      <div>
        <ItemDescWidget />
      </div>
    </div>
  );
};

export default ItemPage;
