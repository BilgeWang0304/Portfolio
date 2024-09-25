import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: bilge04871@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/BilgeWang0304?tab=repositories",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
];

const Header = () => {
  const headerRef = useRef(null); 
  useEffect(() => { 
    let prevScrollPos = window.scrollY; 
    const handleScroll = () => { 
      const currentScrollPos = window.scrollY; 
      const headerElement = headerRef.current; 
      if (!headerElement) { 
        return; 
      } 
      if (prevScrollPos > currentScrollPos) { 
        headerElement.style.transform = "translateY(0)"; 
      } else { 
        headerElement.style.transform = "translateY(-200px)"; 
      } 
      prevScrollPos = currentScrollPos; 
    } 
    window.addEventListener('scroll', handleScroll) 
    return () => { 
      window.removeEventListener('scroll', handleScroll) 
    } 
  }, []); 

  const handleClick = (anchor) => () => {
    console.log("clicked");
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".4s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef} 
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack>
              {
                socials.map( (social, index) => 
                <a href={social?.url} key={index}><FontAwesomeIcon icon={social.icon} size="2x" /></a>)
              }
            </HStack>
          </nav>
          <nav>
            <HStack spacing={10}>
              <a href="#projects" onClick={handleClick("projects")} style={{ fontSize: "20px" }}> 
               Projects 
             </a> 
             <a href="#contactme" onClick={handleClick("contactme")} style={{ fontSize: "20px" }}> 
               Contact Me 
             </a> 
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
