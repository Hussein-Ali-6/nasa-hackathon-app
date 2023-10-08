import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

function SingleSpecie({
  specie: {
    mainImg,
    name,
    subName,
    endangeredType,
    weight,
    height,
    lifeSpan,
    numberLeft,
    endangeredSince,
    region,
    id,
  },
}) {
  const theme = useTheme();
  const [showMore, setShowMore] = useState(false);

  const infoElements = [weight, height, lifeSpan, numberLeft].map(({value, unit}, i) => {
    if (unit.includes("{value}")) {
      return <Typography sx={{ fontSize: ".85rem", color: "#222222" }} key={i}>
              <Box sx={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span style={{
                  fontWeight: 'bold'
                }}>{i === 0 ? "Weight" : i === 1 ? "Height" : i === 3 ? "Life Span" : "Number Left"}</span>
                <Box>
                {unit.split('{value}')[0]}
                <span style={{ color: "#000080", fontSize: '1.2rem' }}>{value}</span>
                {" "}{unit.split('{value}')[1]}

                </Box>

              </Box>
            </Typography>
    }
    return <Typography sx={{ fontSize: ".85rem", color: "#222222" }} key={i}>
              <Box sx={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span style={{
                  fontWeight: 'bold'
                }}>{i === 0 ? "Weight" : i === 1 ? "Height" : i === 3 ? "Life Span" : "Number Left"}</span>
                <Box>
                <span style={{ color: "#000080", fontSize: '1.2rem' }}>{value}</span>
                {" "}{unit}
                </Box>

              </Box>
            </Typography>
  })

  return (
    <Card sx={{ flexBasis: "300px", height: "fit-content" }}>
      <CardMedia component="img" alt="image" image={`src/assets/main-images/${mainImg}`} />
      <Box display="flex" flexDirection="column" minHeight="248px">
        <CardContent>
          <Typography
            variant="h5"
            gutterBottom
            color="#222222"
            sx={{ lineHeight: "0.95", fontWeight: "bold" }}
          >
            {name}
            <span style={{ fontSize: "12px" }}>
              {" ("}{subName}{")"}
            </span>
          </Typography>
          <Chip
            label={endangeredType}
            size="small"
            sx={{
              backgroundColor:
                endangeredType === "Endangered" ? "error.light" : "error.main",
              fontSize: ".65rem",
            }}
          />
          <Divider sx={{ my: 2 }} />
          <Stack
            spacing={2}
            overflow="hidden"
            sx={{
              maxHeight: showMore ? "400px" : "83px",
              transition: theme.transitions.create("max-height", {
                duration: theme.transitions.duration.standard,
              }),
            }}
          >
            {/* <Typography sx={{ fontSize: ".85rem", color: "#222222" }}>
              <Box sx={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span style={{
                  fontWeight: 'bold'
                }}>Weight:</span>
                <Box>
                <span style={{ color: "#000080", fontSize: '1.2rem' }}>{weight.value}</span>
                {" "}{weight.unit}
                </Box>

              </Box>
            </Typography>
            <Typography sx={{ fontSize: ".85rem", color: "#222222" }}>
              <Box sx={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span style={{
                  fontWeight: 'bold'
                }}>Height:</span>
                <Box>
                <span style={{ color: "#000080", fontSize: '1.2rem' }}>{height.value}</span>
                {" "}{height.unit}
                </Box>

              </Box>
            </Typography>
            <Typography sx={{ fontSize: ".85rem", color: "#222222" }}>
              <Box sx={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span style={{
                  fontWeight: 'bold'
                }}>Life Span:</span>
                <Box>
              <span style={{ color: "#000080", fontSize: '1.2rem' }}>{lifeSpan.value}</span>
                  {" "}{lifeSpan.unit}
                </Box>

              </Box>
            </Typography>
            <Typography sx={{ fontSize: ".85rem", color: "#222222" }}>
              <Box sx={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span style={{
                  fontWeight: 'bold'
                }}>Number Left:</span>
              <span style={{ color: "#000080", fontSize: '1.2rem' }}>{numberLeft.value}</span>

              </Box>
            </Typography> */}
            {infoElements}
            <Typography sx={{ fontSize: ".85rem", color: "#222222" }}>
              <Box sx={{
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <span style={{
                  fontWeight: 'bold'
                }}>Endangered Since:</span>
              <span style={{ color: "#000080", fontSize: '1.2rem' }}>{endangeredSince}</span>

              </Box>
            </Typography>
            <Typography sx={{ fontSize: ".85rem", color: "#222222" }}>
              <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '20px'
              }}>
                <span style={{
                  fontWeight: 'bold'
                }}>Region:</span>
              <span style={{ color: "#111" }}>{region}</span>

              </Box>
            </Typography>
          </Stack>
        </CardContent>
        <Box flexGrow={1}></Box>
        <CardActions>
          <Button size="small" onClick={() => setShowMore((prev) => !prev)}>
            Show {showMore ? "less" : "more"}
          </Button>
          <Button>
            <Link
              to={`/specie/${id}`}
              style={{
                color: theme.palette.primary.main,
              }}
            >
              Go to Story
            </Link>
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
}

SingleSpecie.propTypes = {
  specie: PropTypes.object.isRequired,
};

export default SingleSpecie;
