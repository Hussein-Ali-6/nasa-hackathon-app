import styled from "@emotion/styled";
import Reefs from "./Reefs";
import Sections from "./Sections";
import MainSection from "./MainSection";
import ProtectSection from "./protectSection";

function SpecieStory() {
  return (
    <>
      <MainSection />
      <Divider />
      <Reefs />
      <Sections />
      <ProtectSection />
    </>
  );
}

const Divider = styled("div")(() => ({
  width: "100%",
  boxShadow: "0px 0px 47px 37px rgba(45,255,196,.6)",
  zIndex: 1000,
  position: "relative",
}));

export default SpecieStory;
