import {
  AppBar,
  Box,
  InputBase,
  Toolbar,
  Typography,
  alpha,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Search as SearchIcon } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  pointerEvents: "none",
  padding: theme.spacing(0, 2),
  height: "100%",
  left: "0",
  top: "0",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    width: "12ch",
    paddingLeft: theme.spacing(6),
    transition: theme.transitions.create("width", {
      duration: theme.transitions.duration.standard,
    }),
    "&:focus": {
      width: "20ch",
    },
  },
}));

const StyledMenuNav = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  paddingLeft: theme.spacing(5),
  paddingRight: theme.spacing(5),
  gap: theme.spacing(2),
  "& a": {
    color: "white",
    position: "relative",
    transition: theme.transitions.create("color", {
      duration: theme.transitions.duration.standard,
    }),
    "&:hover": {
      color: theme.palette.secondary.light,
    },
    "&.active": {
      color: theme.palette.secondary.light,
    },
    "&.active::after": {
      content: `""`,
      position: "absolute",
      width: "calc(100% + 30px)",
      height: "3px",
      backgroundColor: theme.palette.secondary.light,
      top: "41px",
      right: "0",
      transform: " translateX(15px)",
    },
  },
}));

function Header() {
  const [active, setActive] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    setActive(pathname.split("/")[1]);
  }, [pathname]);
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box display='flex' alignItems='center'>
          <img src="/src/assets/logo.png" alt=""  width='80px'/>
        <Typography variant="h6">
          Water&rsquo;s Tale
          </Typography>
        </Box>
        <StyledMenuNav>
          <Link to="/" className={active === "" ? "active" : null}>
            Home
          </Link>
          <Link to="/fishes" className={active === "fishes" ? "active" : null}>
            Species
          </Link>
        </StyledMenuNav>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search..."
            inputProps={{ "aria-label": "Search" }}
          />
        </Search>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
