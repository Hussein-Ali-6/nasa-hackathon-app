import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LandingWater from "./pages/LandingWater";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import RootLayout from "./components/RootLayout";
import { CssBaseline } from "@mui/material";
import Fishes from "./pages/Fishes";
import SpecieStory from "./pages/SpecieStory";
import Map from "./pages/map";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LandingWater />} />
      <Route path="fishes" element={<Fishes />} />
      <Route path="specie/:id" element={<SpecieStory />} />
      <Route path="map" element={<Map />} />
    </Route>
  )
);

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#12486B",
      },
      secondary: {
        main: "#419197",
        light: "#78D6C6",
      },
      neutral: {
        main: "#F5FCCD",
      },
      text: {
        primary: "#F8F0E3",
        dark: "#444444",
      },
    },
    typography: {
      fontFamily: "'Rubik', sans-serif",
    },
    zIndex: {
      tooltip: 10000,
      modal: 12000,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
