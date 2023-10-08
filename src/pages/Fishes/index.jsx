import { Box, Typography } from "@mui/material";
import Waving from "../../components/Waving";
import "./style.css";
import { speciesData } from "../../state/speciesData";
import SingleSpecie from "../../components/SingleSpecie";

function Fishes() {
  return (
    <Box backgroundColor="#DBE9FA" paddingBottom={10}>
      <Waving />
      <Box paddingX={5} mt={4}>
        <Typography variant="h3" color="secondary.main" gutterBottom>
          ALL Species
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: (theme) => theme.spacing(2),
            flexWrap: "wrap",
          }}
        >
          {speciesData.map((specie, i) => (
            <SingleSpecie key={i} specie={specie} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Fishes;
