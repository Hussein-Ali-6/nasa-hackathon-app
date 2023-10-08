import { Box } from "@mui/material";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import FifthSection from "./FifthSection";
import { speciesData } from "../../state/speciesData";
import { useParams } from "react-router-dom";

function Sections() {
    const { id } = useParams();
    console.log(speciesData)
  const towPgChapterIndex = useRef(0);
  const towPgChapters = [ThirdSection, FourthSection];
  const chapterIndex = useRef(0);
  const chapters = [FirstSection, SecondSection, FifthSection];
  const usedSectionsNo = useRef([0, 0, 0, 0, 0]);

  const selectTowPgChapter = (props) => {
    const firstOne = Object.values(usedSectionsNo.current).every(
      (v) => Boolean(v) === false
    );

    const Chapter = towPgChapters[towPgChapterIndex.current];

    usedSectionsNo.current[towPgChapterIndex.current + 2]++;

    props.classIndex = firstOne
      ? "10"
      : usedSectionsNo.current[towPgChapterIndex.current + 2].toString();

    towPgChapterIndex.current =
      towPgChapterIndex.current === towPgChapters.length - 1
        ? 0
        : towPgChapterIndex.current + 1;

    return <Chapter {...props} />;
  };

  const selectChapter = (props) => {
    const firstOne = Object.values(usedSectionsNo.current).every(
      (v) => Boolean(v) === false
    );

    const Chapter = chapters[chapterIndex.current];
    usedSectionsNo.current[
      chapterIndex.current === 2 ? 4 : chapterIndex.current
    ]++;

    props.classIndex = firstOne
      ? "10"
      : usedSectionsNo.current[
          chapterIndex.current === 2 ? 4 : chapterIndex.current
        ].toString();

    chapterIndex.current =
      chapterIndex.current === chapters.length - 1
        ? 0
        : chapterIndex.current + 1;

    return <Chapter {...props} />;
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      const sections = gsap.utils.toArray(".single-section");
      const scrollTween = gsap.timeline({
        scrollTrigger: {
          trigger: ".sections-container",
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () =>
            "+=" + document.querySelector(".sections-container").offsetWidth,
        },
      });

      scrollTween.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
      });

      [...Array(usedSectionsNo.current[0])].forEach((_, i) => {
        const stTl = gsap.timeline({
          scrollTrigger: {
            trigger: `.first-section-${i + 1} .title-1`,
            containerAnimation: scrollTween,
            start: "left center",
            toggleActions: "play none none reset",
          },
        });

        stTl
          .from(
            `.first-section-${i + 1} .title-1`,
            {
              x: -50,
              opacity: 0,
            },
            "<"
          )
          .from(
            `.first-section-${i + 1} .body-1`,
            {
              x: 50,
              opacity: 0,
            },
            "<"
          )
          .from(`.first-section-${i + 1} .img-1`, {
            opacity: 0,
          });
      });

      [...Array(usedSectionsNo.current[1])].forEach((_, i) => {
        const ndTl = gsap.timeline({
          scrollTrigger: {
            trigger: `.second-section-${i + 1} .title-2`,
            containerAnimation: scrollTween,
            start: "left center",
            toggleActions: "play none none reset",
          },
        });

        ndTl
          .from(`.second-section-${i + 1} .title-2`, {
            x: -100,
            opacity: 0,
          })
          .from(
            `.second-section-${i + 1} .body-2`,
            {
              x: 100,
              opacity: 0,
            },
            "<"
          )
          .from(`.second-section-${i + 1} .img-2`, {
            opacity: 0,
          });
      });

      [...Array(usedSectionsNo.current[2])].forEach((_, i) => {
        const thTl = gsap.timeline({
          scrollTrigger: {
            trigger: `.third-section-${i + 1} .title-3`,
            containerAnimation: scrollTween,
            start: "left center",
            toggleActions: "play none none reset",
          },
        });

        thTl
          .from(`.third-section-${i + 1} .title-3`, {
            x: -100,
            opacity: 0,
          })
          .from(`.third-section-${i + 1} .divider-3`, {
            height: 0,
          })
          .from(`.third-section-${i + 1} .body-3a`, {
            y: 100,
            opacity: 0,
          })
          .from(
            `.third-section-${i + 1} .body-3b`,
            {
              y: -100,
              opacity: 0,
            },
            "<"
          );
      });

      [...Array(usedSectionsNo.current[3])].forEach((_, i) => {
        const fthTl = gsap.timeline({
          scrollTrigger: {
            trigger: `.fourth-section-${i + 1} .title-4`,
            start: `left center`,
            containerAnimation: scrollTween,
            toggleActions: `play none none reset`,
          },
        });

        fthTl
          .from(`.fourth-section-${i + 1} .title-4`, {
            opacity: 0,
            duration: 1,
          })
          .from(
            `.fourth-section-${i + 1} .divider-4`,
            {
              width: 0,
            },
            `-=0.5`
          )
          .from(`.fourth-section-${i + 1} .body-4a`, {
            x: -100,
            opacity: 0,
          })
          .from(
            `.fourth-section-${i + 1} .body-4b`,
            {
              x: 100,
              opacity: 0,
            },
            `<`
          );
      });

      [...Array(usedSectionsNo.current[4])].forEach((_, i) => {
        const fifthTl = gsap.timeline({
          scrollTrigger: {
            trigger: `.fifth-section-${i + 1} .title-5`,
            start: `left center`,
            containerAnimation: scrollTween,
            toggleActions: `play none none reset`,
          },
        });

        fifthTl
          .from(`.fifth-section-${i + 1} .title-5`, {
            x: -100,
            opacity: 0,
            duration: 1.5,
          })
          .from(
            `.fifth-section-${i + 1} .body-5`,
            {
              y: 100,
              opacity: 0,
            },
            `<`
          );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Box
      className="sections-container"
      sx={{
        display: "flex",
        overflow: "hidden",
        "& > div": {
          flex: "0 0 100%",
        },
      }}
    >
      {speciesData[Number(id) - 1].story.map((chapter, i) => {
        
        return (
          <Box className="single-section" width="100%" height="100vh" key={i}>
            {Object.keys(chapter.body).length > 1
              ? selectTowPgChapter({ data: chapter })
              : selectChapter({ data: chapter })}
          </Box>
        );
      })}
    </Box>
  );
}

export default Sections;
