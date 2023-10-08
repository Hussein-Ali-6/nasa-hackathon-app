import styled from "@emotion/styled";
import { speciesData } from "../../state/speciesData";
import "./style.css";
import { Box, Modal, Tooltip, tooltipClasses, ButtonBase } from "@mui/material";
import { useState } from "react";
import SingleSpecie from "../../components/SingleSpecie";

const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    transform: "translateY(30px) !important",
  },
}));

function LandingWater() {
  const [modalOpen, setModalOpen] = useState(false);
  const [specieIndex, setSpecieIndex] = useState(0);

  return (
    <>
      <div className="container">
        <div className="speciesContainer">
          {speciesData.map(({ id, name }, i) => (
            <StyledTooltip key={i} title={name} placement="top" arrow>
              <div className={`specie specie-0${i + 1}`}>
                <ButtonBase
                  onClick={() => {
                    setSpecieIndex(i);
                    setModalOpen(true);
                  }}
                >
                  <img src={`src/assets/png-species/${id}.png`} alt="" />
                </ButtonBase>
              </div>
            </StyledTooltip>
          ))}
        </div>
        <div className="cPos">
          <div className="cc">
            <div className="circle one"></div>
            <div className="circle two"></div>
            <div className="circle three"></div>
            <div className="circle four"></div>
          </div>
        </div>
        <div className="triangleContainer">
          <div className="triangleBar"></div>
          {[...Array(30)].map((_, i) => (
            <span key={i} className="triangle"></span>
          ))}
        </div>
        <div className="gradientContainer">
          <div className="overlay one"></div>
          <div className="gradient">
            {[...Array(48)].map((_, i) => (
              <span key={i} className={`ray${i + 1}`}></span>
            ))}
            {[...Array(48)].map((_, i) => (
              <span key={i} className={`ray${i + 1}`}></span>
            ))}
          </div>
        </div>
        <div className="rocks">
          <div className="rock one"></div>
          <div className="rock two"></div>
          <div className="rock three"></div>
          <div className="rock four"></div>
        </div>
        <div className="bubbleContainer">
          {[...Array(49)].map((_, i) => (
            <span key={i} className={`bubbleY${i + 1}`}>
              <span className={`bubbleX${i + 1}`}></span>
            </span>
          ))}
        </div>
      </div>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -60%)",
            mt: (theme) => theme.spacing(7),
            overflowY: "auto",
            width: "400px",
            maxHeight: "520px",
          }}
        >
          <SingleSpecie specie={speciesData[specieIndex]} />
        </Box>
      </Modal>
    </>
  );
}

export default LandingWater;
