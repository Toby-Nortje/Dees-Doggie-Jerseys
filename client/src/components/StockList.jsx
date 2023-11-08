import {
  Card,
  CardMedia,
  Box,
  CardContent,
  Typography,
  useMediaQuery,
} from "@mui/material";

const StockList = ({ title, cost, desc, imageSrc, color, size }) => {
  const isLargeScreens = useMediaQuery("(min-width: 1000px)");
  const isMediumScreens = useMediaQuery("(min-width: 640px)");
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: isMediumScreens ? "row" : "column",
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
        sx={{
          width: isMediumScreens ? "35%" : "100%",
        }}
        image={imageSrc}
      />

      <Box>
        <CardContent>
          <h3>{title}</h3>
          <h5>R {cost}</h5>
          <p>{desc}</p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography sx={{ display: "flex" }}>
              {size.toUpperCase()}
            </Typography>
            {color.map((color, index) => {
              return (
                <div
                  key={index}
                  style={{
                    background: color,
                    width: "15px",
                    height: "15px",
                    borderRadius: "50%",
                  }}
                />
              );
            })}
          </div>
        </CardContent>
      </Box>
    </Card>
  );
};

export default StockList;
