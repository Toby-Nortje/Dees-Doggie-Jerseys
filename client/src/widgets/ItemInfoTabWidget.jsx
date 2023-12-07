import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import { useState } from "react";
const ItemInfoTabWidget = ({ item }) => {
  const [productInfo, setProductInfo] = useState(0);
  return (
    <div style={{ width: "100%" }}>
      <h6>Brand</h6>
      <h2>{item.title}</h2>
      <h4>
        R {item.cost}
        <span style={{ fontSize: "12px" }}>.00</span>
      </h4>
      <hr />
      <div style={{ fontSize: "16px" }}>Product ID: 00000000</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          fontSize: "20px",
          gap: "24px",
          padding: "16px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            border: "1px solid black",
            borderRadius: "2px",
          }}
        >
          <div style={{ padding: "8px", borderRight: "1px solid black" }}>
            Size
          </div>
          <div style={{ padding: "8px", width: "100%", textAlign: "center" }}>
            {item.size}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            border: "1px solid black",
            borderRadius: "2px",
          }}
        >
          <div style={{ padding: "8px", borderRight: "1px solid black" }}>
            Qty
          </div>
          <div style={{ padding: "8px", width: "100%", textAlign: "center" }}>
            0
          </div>
        </div>
      </div>
      <Box
        sx={{
          border: "1px solid black",
          padding: "8px",
          width: "100%",
          fontSize: "20px",
          textAlign: "center",
          cursor: "pointer",
          "&:hover": {
            background: "rgba(250,250,250,0.2)",
          },
        }}
      >
        Order Now
      </Box>
      <hr />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h5>Product Info</h5>
        <ExpandMoreIcon
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
          onClick={() => {
            setProductInfo(!productInfo);
          }}
        />
      </div>
      <div
        style={{
          display: productInfo ? "block" : "none",
        }}
      >
        <p>Test text</p>
      </div>
      <hr />
    </div>
  );
};

export default ItemInfoTabWidget;
