import { Box, Typography } from "@mui/material";
import OceanBg from "./oceanBg/OceanBg";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

function FirstSection({
  classIndex,
  data: {
    title,
    body: { p1 },
    img,
  },
}) {
  const { id } = useParams();
  return (
    <Box
      className={`first-section-${classIndex}`}
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
      }}
    >
      <OceanBg>
        <Box
          sx={{
            pt: "3rem",
            pl: "3rem",
            width: "60%",
          }}
        >
          <Typography
            variant="h1"
            className="title-1"
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
            className="body-1"
            sx={{
              color: "white",
              fontSize: "1.5rem",
            }}
          >
            {p1}
          </Typography>
        </Box>
        {img && (
          <Box
            className="img-1"
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: "500px",
              display: "flex",
              alignItems: "flex-end",
              borderTopLeftRadius: "15px",
              overflow: "hidden",
            }}
          >
            <img src={`/src/assets/stories/${id}/${img}`} width="100%" />
          </Box>
        )}
      </OceanBg>
    </Box>
  );
}

FirstSection.propTypes = {
  classIndex: PropTypes.string,
  data: PropTypes.object,
};

export default FirstSection;
