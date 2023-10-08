import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

function ThirdSection({
  classIndex,
  data: {
    title,
    body: { p1, p2 },
  },
}) {
  return (
    <Box
      className={`third-section-${classIndex}`}
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        gap: "3rem",
        pt: "3rem",
        pl: "3rem",
        background: "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          bottom: "20px",
          left: "70px",
          // zIndex: "-1",
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
      <Typography
        variant="h1"
        className="title-3"
        component="div"
        sx={{
          lineHeight: "1.2",
          mb: "2rem",
          background: "linear-gradient(to right, #2C5364, #203A43, #0F2027)",
          backgroundClip: "text",
          textFillColor: "transparent",
          fontWeight: 400,
        }}
      >
        {title}
      </Typography>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "space-between",
          mx: "40px",
        }}
      >
        <Typography
          variant="body1"
          className="body-3a"
          sx={{
            fontSize: "1.5rem",
            color: "#2e2b2b",
            fontWeight: "bold",
          }}
        >
          {p1}
        </Typography>
        <Box
          className="divider-3"
          sx={{
            height: "300px",
            flex: "0 0 2px",
            backgroundColor: "black",
            mx: "10px",
            background:
              "linear-gradient(180deg, rgb(78 78 78), #2196F3, rgb(78 78 78))",
            borderRadius: "16px",
          }}
        ></Box>
        <Typography
          variant="body1"
          className="body-3b"
          sx={{
            fontSize: "1.5rem",
            color: "#2e2b2b",
            fontWeight: "bold",
          }}
        >
          {p2}
        </Typography>
      </Box>
    </Box>
  );
}

ThirdSection.propTypes = {
  classIndex: PropTypes.string,
  data: PropTypes.object,
};

export default ThirdSection;
