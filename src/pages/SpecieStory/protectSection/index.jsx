import { Box, Typography } from "@mui/material";
import "./style.css";
import gsap from "gsap"
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/all";

const points = ["Combat Illegal Fishing: Report and oppose illegal fishing practices that endanger marine life and deplete ocean resources.", " Reduce Energy Use: Cut energy consumption by walking, biking, using energy-efficient lighting, and buying energy-efficient appliances and cars to help combat climate change's impact on oceans.", " Ditch Single-Use Plastics: Eliminate single-use plastics, like bags, straws, and cups, to prevent harm to sea animals.", "Beach Care: Clean up after yourself at the beach and consider volunteering for beach cleanup efforts.", "Avoid Exploitative Products: Don't buy products made from exploited sea animals, and support ocean conservation with your purchases."]

function ProtectSection() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.protect-section',
          start: '50px center',
          toggleActions: "play none none reset",
        }
      })

      tl.from(".protect-point", {
        y: 50,
        opacity: 0,
        ease: 'Power3.easeInOut',
        duration: 1,
        stagger: 0.2
      }).from(".protect-img", {
        y: -70,
        opacity: 0,
        ease: "Back.easeInOut.config(1.7)",
        duration: 1,
        stagger: 0.2
      }, "-=0.5")
    })

    return () => ctx.revert()
  }, [])
  return (
    <Box
      className="protect-section"
      sx={{
        backgroundColor: "#008",
        width: "100%",
        height: "100vh",
        position: 'relative',
        overflow:'hidden',
        background: "radial-gradient(circle, rgba(0,128,128,1) 5%, rgba(9,9,121,1) 100%, rgba(0,212,255,1) 100%)"
      }}
    >
      <Box className="wave-container">
        {[...Array(480)].map((_, i) => (
          <div className="line" key={i}></div>
        ))}
      </Box>
      <Box sx={{
        display: 'flex',
        gap: '3rem',
      }}>
        <Box mt='1.5rem' p='1rem' flexBasis="60%">
          <Typography variant="h2" component='div' sx={{
            mb: '1rem',
            fontWeight: 'bold'
          }}>
            How to protect:
          </Typography>
          {points.map((point, i) => (
            <Typography className='protect-point' key={i} color='white' sx={{
              ml: '2rem',
              mb: '1rem',
              fontSize: '1.2rem'
            }}>
              <span style={{
                fontWeight: 'bold',
                textDecoration: 'underline'
              }}>{point.split(": ")[0]}:</span> {point.split(": ")[1]}
            </Typography>
          ))}
        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
          height: '100%',
          flexBasis: '40%',
          py: '1rem',
          mb: '2rem'
        }}>
          <Box width="300px" className="protect-img">
            <img src="/src/assets/protect-images/1.jpg" alt="" width='100%' />
          </Box>
          <Box width="300px" className="protect-img">
            <img src="/src/assets/protect-images/2.jpg" alt="" width='100%' />
          </Box>
          <Box width="300px" className="protect-img">
            <img src="/src/assets/protect-images/3.jpg" alt="" width='100%' />
          </Box>

        </Box>
      </Box>
    </Box>
  );
}

export default ProtectSection;
