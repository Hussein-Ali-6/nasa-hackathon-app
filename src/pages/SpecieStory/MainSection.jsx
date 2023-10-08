import { Box, Typography } from "@mui/material";
import Bubble from "./Bubble";
import gsap, { Back } from "gsap";
import { useLayoutEffect } from "react";
import { speciesData } from "../../state/speciesData";
import { useParams } from "react-router-dom";

function MainSection() {
  const { id } = useParams()
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      const bubble1 = gsap
        .timeline()
        .to(
          ".bubble-01",
          {
            y: -500,
            duration: 6,
            ease: "Power1.out",
          },
          "<"
        )
        .to(
          ".bubble-01",
          {
            x: 20,
            yoyo: true,
            repeat: -1,
            ease: "Power1.easeInOut",
            duration: 7,
          },
          "<"
        );

      const bubble2 = gsap
        .timeline()
        .to(
          ".bubble-02",
          {
            y: -400,
            duration: 7,
            ease: Back.easeInOut,
          },
          "<"
        )
        .to(
          ".bubble-02",
          {
            x: -30,
            yoyo: true,
            repeat: -1,
            ease: "Power1.easeInOut",
            duration: 7,
          },
          "<"
        );

      const bubble3 = gsap
        .timeline()
        .to(
          ".bubble-03",
          {
            y: -600,
            duration: 5,
            ease: Back.easeInOut,
          },
          "<"
        )
        .to(
          ".bubble-03",
          {
            x: -50,
            yoyo: true,
            repeat: -1,
            ease: "Power1.easeInOut",
            duration: 10,
          },
          "<"
        );

      const bubble4 = gsap
        .timeline()
        .to(
          ".bubble-04",
          {
            y: -300,
            duration: 10,
            ease: Back.easeInOut,
          },
          "<"
        )
        .to(
          ".bubble-04",
          {
            x: 50,
            yoyo: true,
            repeat: 5,
            ease: "Power1.easeInOut",
            duration: 5,
          },
          "<"
        );

      tl.from(".main-header", {
        duration: 1.5,
        y: 200,
        opacity: 0,
        fontSize: "3rem",
      }).from(
        ".specie-image",
        {
          xPercent: -100,
          y: 100,
          opacity: 0,
          duration: 2,
          scale: 0.5,
        },
        "-=1"
      );

      tl.add([bubble1, bubble2, bubble3, bubble4], "<");
    });

    return () => ctx.revert();
  }, []);


  return (
    <Box
      className="main-section"
      sx={{
        background: 'url("/src/assets/backgrounds/background-01.jpg") center',
        backgroundSize: "cover",
        width: 1,
        height: "calc(100vh - 64px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        width="fit-content"
        className="specie-image"
        sx={{
          position: "absolute",
          bottom: "-130px",
        }}
      >
        <img src={`/src/assets/png-species/${id}.png`} width="500px" />
      </Box>
      <Typography
        variant="h1"
        color="common.white"
        className="main-header"
        sx={{
          fontWeight: 600,
          position: "absolute",
          top: "20%",
          transform: "translateX(-50%)",
          left: "50%",
          fontSize: "7rem",
          textShadow: "3px 4px 7px rgba(81,67,21,0.8)",
          width: "100%",
          textAlign: "center",
          letterSpacing: "4px",
        }}
      >
        {speciesData[Number(id) - 1].name}
      </Typography>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
        }}
      >
        <Bubble className="bubble-01" left="30px" scale="0.5" />
        <Bubble className="bubble-02" left="230px" scale="0.3" />
        <Bubble className="bubble-03" left="630px" scale="0.45" />
        <Bubble className="bubble-04" left="930px" scale="0.65" />
      </Box>
    </Box>
  );
}

export default MainSection;
