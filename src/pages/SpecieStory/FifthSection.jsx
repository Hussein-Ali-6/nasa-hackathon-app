import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

function FifthSection({
  classIndex,
  data: {
    title,
    body: { p1 },
  },
}) {
  return (
    <Box
      className={`fifth-section-${classIndex}`}
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        gap: "3rem",
        pt: "3rem",
        pl: "3rem",
        backgroundColor: "#1b2845",
        backgroundImage: "linear-gradient(315deg, #1b2845 0%, #274060 74%)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bottom: "20px",
          left: "70px",
          //   zIndex: "-1",
        }}
      >
        <img
          src="/src/assets/backgrounds-png/01.png"
          style={{
            width: "100px",
            transform: "rotate(29deg)",
            filter: "blur(0.7px)",
          }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "20px",
          right: "70px",
          //   zIndex: "-1",
        }}
      >
        <img
          src="/src/assets/backgrounds-png/04.png"
          style={{
            width: "200px",
            transform: "rotate(29deg)",
            filter: "blur(0.7px)",
          }}
        />
      </Box>
      <Typography
        variant="h1"
        className="title-5"
        component="div"
        sx={{
          lineHeight: "1.2",
          mb: "4rem",
          background: "linear-gradient(90deg, #f8ff00 0%, #3ad59f 100%)",
          backgroundClip: "text",
          textFillColor: "transparent",
          fontWeight: 400,
          WebkitTextStrokeWidth: "1px",
          WebkitTextStrokeColor: "#525252",
        }}
      >
        {title}
      </Typography>

      <Typography
        variant="body1"
        className="body-5"
        sx={{
          fontSize: "1.5rem",
          color: "white",
          fontWeight: "bold",
          mr: "10rem",
        }}
      >
        {p1}
      </Typography>
    </Box>
  );
}

FifthSection.propTypes = {
  classIndex: PropTypes.string,
  data: PropTypes.object,
};

export default FifthSection;
