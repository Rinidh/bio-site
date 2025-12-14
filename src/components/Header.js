import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import "../style/Header.css";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const sliderBoxRef = useRef(null);
  const previousScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = (e) => {
      if (window.scrollY > previousScrollY.current) {
        if (sliderBoxRef.current) {
          sliderBoxRef.current.style.transform = "translateY(-200px)";
        }
      } else {
        if (sliderBoxRef.current) {
          sliderBoxRef.current.style.transform = "translateY(0)";
        }
      }
      previousScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      ref={sliderBoxRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex={
        100
      } /* to prevent form fields from overlapping when scrolling down */
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={3}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={3}>
              {socials.map((social, index) => (
                <a href={social.url} key={index}>
                  <FontAwesomeIcon icon={social.icon} size="2x" key={index} />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="#projects-section">Projects</a>
              <a href="#contactme-section">Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
