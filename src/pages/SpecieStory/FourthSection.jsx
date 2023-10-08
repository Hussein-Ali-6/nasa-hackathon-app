import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

function FourthSection({
  classIndex,
  data: {
    title,
    body: { p1, p2 },
  },
}) {
  return (
    <Box
      className={`fourth-section-${classIndex}`}
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        gap: "3rem",
        pt: "3rem",
        pl: "3rem",
        backgroundColor: "#ffffb5",
        backgroundImage: "linear-gradient(315deg, #ffffb5 0%, #247ba0 74%)",
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
          src="/src/assets/backgrounds-png/03.png"
          style={{
            width: "200px",
            transform: "rotate(29deg)",
            filter: "blur(0.7px)",
          }}
        />
      </Box>
      <Typography
        variant="h1"
        className="title-4"
        component="div"
        sx={{
          lineHeight: "1.2",
          mb: "4rem",
          background: "linear-gradient(90deg, #efd5ff 0%, #515ada 100%)",
          backgroundClip: "text",
          textFillColor: "transparent",
          fontWeight: 400,
          WebkitTextStrokeWidth: "1px",
          WebkitTextStrokeColor: "#525252",
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
          flexDirection: "column",
        }}
      >
        <Typography
          variant="body1"
          className="body-4a"
          sx={{
            fontSize: "1.5rem",
            color: "#2e2b2b",
            fontWeight: "bold",
          }}
        >
          {p1}
        </Typography>
        <Box
          className="divider-4"
          sx={{
            height: "2px",
            width: "100%",
            backgroundColor: "black",
            my: "1.5rem",
            background:
              "linear-gradient(90deg, rgb(78 78 78), #2196F3, rgb(78 78 78))",
            borderRadius: "16px",
          }}
        ></Box>
        <Typography
          variant="body1"
          className="body-4b"
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

FourthSection.propTypes = {
  classIndex: PropTypes.string,
  data: PropTypes.object,
};

export default FourthSection;
