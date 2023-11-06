//import Button from "react-bootstrap/Button";
//import Card from "react-bootstrap/Card";
import {
  Card,
  CardMedia,
  Box,
  CardContent,
  Typography,
  useMediaQuery,
  withStyles,
} from "@mui/material";
import FlexBetween from "./FlexBetween";

const StockCard = ({ title, cost, imageSrc, desc, size, color }) => {
  const isLargeScreens = useMediaQuery("(min-width: 1000px)");
  const isMediumScreens = useMediaQuery("(min-width: 640px)");

  return (
    // <Card width="100%">
    //   <Card.Img variant="top" src={process.env.PUBLIC_URL + imgSrc} />
    //   <Card.Body>
    //     <Card.Title>{title}</Card.Title>
    //     <Card.Text>R {cost}</Card.Text>
    //     <Button variant="primary">Buy</Button>
    //   </Card.Body>
    // </Card>
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        margin: "2rem 0",
        position: "relative",
        "&::after": {
          position: "absolute",
          content: `''`,
        },
      }}
    >
      <CardMedia
        component="img"
        // sx={{
        //   width: isMediumScreens ? "35%" : "100%",
        // }}
        image={imageSrc}
      />
      {/* https://i.pinimg.com/originals/6e/d1/6a/6ed16a033c81ccaf082d6eac7634c16a.jpg */}
      <Box
        sx={{
          padding: "10px",
        }}
      >
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            boxShadow: "0px 0px 2px 5px lightgrey",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "5px",
              alignSelf: "center",
              justifySelf: "center",
              padding: "5px",
            }}
          >
            {color.map((color) => {
              return (
                <div
                  style={{
                    background: color,
                    width: "17px",
                    height: "17px",
                    borderRadius: "50%",
                    borderRadius: "50%",
                    border: "1px solid grey",
                  }}
                />
              );
            })}
          </div>
          <Typography type="h6">{title}</Typography>

          <Typography
            style={{ fontSize: "16px", fontWeight: "bold" }}
          >{`R ${cost}.00`}</Typography>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              padding: "10px 0",
            }}
          >
            <div
              style={{
                borderRadius: "50%",
                border: "2px solid grey",
                padding: "3px",
                width: "30px",
                height: "30px",
              }}
            >
              <Typography variant="body2">{size.toUpperCase()}</Typography>
            </div>
          </div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                background: "grey",
                color: "white",
                padding: "5px 10px",
                borderRadius: "5px",
                fontSize: "13px",
                fontWeight: "bold",
              }}
            >
              Order Now
            </div>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default StockCard;
