import { Box } from "@mui/material";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function Reefs() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap
        .timeline()
        .from(".reef1", {
          xPercent: -100,
          yPercent: 100,
          duration: 2,
          delay: 2,
        })
        .to(".reef1", {
          scrollTrigger: {
            trigger: ".main-section",
            scrub: true,
            start: "80% center",
            end: "+=800 ",
          },
          rotation: 150,
        });
    });

    return () => {
      ctx.revert();
    };
  }, []);
  return (
    <Box position="relative" width="fit-content">
      <Box
        className="reef1"
        sx={{
          position: "absolute",
          top: "-250px",
          transform: "rotate(45deg)",
          left: "-155px",
          opacity: "0.7",
          zIndex: 1,
        }}
      >
        <img src="/src/assets/reef-02.png" width="400px" />
      </Box>
    </Box>
  );
}

export default Reefs;
