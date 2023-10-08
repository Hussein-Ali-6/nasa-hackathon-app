import { Box, Typography } from "@mui/material";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

function SecondSection({
  classIndex,
  data: {
    title,
    body: { p1 },
    img,
  },
}) {
  const { id } = useParams();
  const png = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(png.current, {
        scale: "1.1",
        opacity: "0.9",
        repeat: -1,
        yoyo: true,
        duration: 5,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Box
      className={`second-section-${classIndex}`}
      sx={{
        backgroundColor: "#ffffb5",
        backgroundImage: "linear-gradient(315deg, #ffffb5 0%, #247ba0 74%)",
        position: "relative",
        height: "100vh",
        width: "100%",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bottom: "30px",
          right: "70px",
          // zIndex: -1,
        }}
      >
        <img
          className="png-2"
          ref={png}
          src="/src/assets/backgrounds-png/02.png"
          width="100px"
          style={{
            filter: "blur(2px)",
            opacity: "0.5",
          }}
        />
      </Box>
      <Box
        sx={{
          pt: "3rem",
          pl: "3rem",
          width: "60%",
        }}
      >
        <Typography
          variant="h1"
          className="title-2"
          component="div"
          sx={{
            lineHeight: "1.2",
            mb: "2rem",
            background: "linear-gradient(to right, #78ffd6, #a8ff78)",
            backgroundClip: "text",
            textFillColor: "transparent",
            fontWeight: 400,
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          className="body-2"
          sx={{
            color: "white",
            fontSize: "1.5rem",
            ml: "500px",
            width: "100%",
          }}
        >
          {p1}
        </Typography>
      </Box>
      {img && (
        <Box
          className="img-2"
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "500px",
            display: "flex",
            alignItems: "flex-end",
            borderTopRightRadius: "15px",
            overflow: "hidden",
          }}
        >
          <img src={`/src/assets/stories/${id}/${img}`} width="100%" />
        </Box>
      )}
    </Box>
  );
}

SecondSection.propTypes = {
  classIndex: PropTypes.string,
  data: PropTypes.object,
};

export default SecondSection;
