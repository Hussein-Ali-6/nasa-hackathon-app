import { styled } from "@mui/material/styles";

const Bubble = styled("div", {
  shouldForwardProp: (prop) => prop !== "left" || prop !== "scale",
})(({ left, scale }) => ({
  borderRadius: " 50%",
  boxShadow:
    "0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgba(255, 255, 255, 1)",
  height: "200px",
  position: "absolute",
  width: "200px",
  left: left,
  transform: `scale(${scale})`,
  "&::after": {
    background:
      "radial-gradient(ellipse at center,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 70%)" /* W3C */,
    filter:
      "progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#00ffffff',GradientType=1 )" /* IE6-9 fallback on horizontal gradient */,
    borderRadius: "50%",
    boxShadow: "inset 0 20px 30px rgba(255, 255, 255, 0.3)",
    content: `""`,
    height: " 180px",
    left: "10px",
    position: "absolute",
    width: "180px",
  },
}));

export default Bubble;
