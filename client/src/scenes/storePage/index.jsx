import "./index.css";
import {
  Routes,
  Route,
  Link,
  Outlet,
  useLocation,
  useMatches,
} from "react-router-dom";
import NavbarMain from "scenes/navbar";
import Breadcrumbs from "components/Breadcrumbs";
import SectionTitle from "components/SectionTitle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HomeIcon from "@mui/icons-material/Home";
import { useMediaQuery } from "@mui/material";

const StorePage = () => {
  const isLargeScreens = useMediaQuery("(min-width: 1000px)");
  const isMediumScreens = useMediaQuery("(min-width: 640px)");

  let location = useLocation();
  const breadcrumbs = location.pathname.split("/").slice(1);

  return (
    <section
      id="store"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: isLargeScreens ? "1000px" : "100%",
        }}
      >
        <div
          style={{
            margin: "1% 3%",
            background: "rgba(250,250,250,0.3)",
            padding: "4px",
            fontSize: "16px",
            borderRadius: "4px",
          }}
        >
          <Link to="/" style={{ color: "black", margin: "0 4px" }}>
            <HomeIcon>Home</HomeIcon>
          </Link>
          <ArrowForwardIosIcon sx={{ fontSize: "16px" }} />
          {breadcrumbs.map((crumb, index, crumbs) => {
            if (index === breadcrumbs.length - 1) {
              return (
                <span style={{ color: "black", margin: "0 4px" }}>{crumb}</span>
              );
            } else {
              const path = ["", ...crumbs.slice(0, index + 1)].join("/");
              return (
                <span>
                  <Link
                    style={{
                      margin: "0 4px",
                      fontSize: "16px",
                      color: "black",
                      textDecoration: "none",
                    }}
                    key={path}
                    to={path}
                  >
                    {crumb}
                  </Link>
                  <ArrowForwardIosIcon sx={{ fontSize: "16px" }} />
                </span>
              );
            }
          })}
        </div>
        <Outlet />
      </div>
    </section>
  );
};

export default StorePage;
