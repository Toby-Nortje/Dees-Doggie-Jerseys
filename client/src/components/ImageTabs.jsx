import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";

const ImageTabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`image-tabpanel-${index}`}
      aria-labelledby={`image-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: "8px" }}>{children}</Box>}
    </div>
  );
};

function a11yProps(index) {
  return {
    id: `image-tab-${index}`,
    "aria-controls": `image-tabpanel-${index}`,
  };
}

const ImageTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <ImageTabPanel value={value} index={0}>
        <Avatar
          sx={{ width: "300px", height: "300px" }}
          variant="rounded"
          alt="tab3"
          src={process.env.PUBLIC_URL + "/images/IMG-20221012-WA0037.jpg"}
        />
      </ImageTabPanel>
      <ImageTabPanel value={value} index={1}>
        <Avatar
          sx={{
            width: "300px",
            height: "300px",
          }}
          variant="rounded"
          alt="tab3"
          src={process.env.PUBLIC_URL + "/images/IMG-20221012-WA0038.jpg"}
        />
      </ImageTabPanel>
      <ImageTabPanel value={value} index={2}>
        <Avatar
          variant="rounded"
          alt="tab3"
          src={process.env.PUBLIC_URL + "/images/IMG-20221012-WA0039.jpg"}
          sx={{ width: "300px", height: "300px" }}
        />
      </ImageTabPanel>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="image tabs example"
          sx={{
            "& .MuiTabs-indicator": {
              display: "none",
            },
          }}
        >
          <Tab
            {...a11yProps(0)}
            component={() => (
              <Avatar
                sx={{
                  margin: "8px",
                  "&:hover": { cursor: "pointer", transform: "scale(1.1)" },
                }}
                variant="rounded"
                alt="tab1"
                onClick={() => setValue(0)}
                src={process.env.PUBLIC_URL + "/images/IMG-20221012-WA0037.jpg"}
              />
            )}
          />
          <Tab
            label="Item Two"
            {...a11yProps(1)}
            component={() => (
              <Avatar
                sx={{
                  margin: "8px",
                  "&:hover": { cursor: "pointer", transform: "scale(1.1)" },
                }}
                variant="rounded"
                alt="tab2"
                onClick={() => setValue(1)}
                src={process.env.PUBLIC_URL + "/images/IMG-20221012-WA0038.jpg"}
              />
            )}
          />
          <Tab
            label="Item Three"
            {...a11yProps(2)}
            component={() => (
              <Avatar
                sx={{
                  margin: "8px",
                  "&:hover": { cursor: "pointer", transform: "scale(1.1)" },
                }}
                variant="rounded"
                alt="tab3"
                onClick={() => setValue(2)}
                src={process.env.PUBLIC_URL + "/images/IMG-20221012-WA0039.jpg"}
              />
            )}
          />
        </Tabs>
      </Box>
    </Box>
  );
};

export default ImageTabs;
