import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "React Project",
    description:
      "LittleLemon is a restaurant webpage built with React, showcasing information that allows customers to explore delectable dishes and make online reservations. The site features sections for the restaurant's story, contact information, and a welcoming home page. ",
    getImageSrc: () => require("../images/photo1.jpg"),
    url: "https://littlelemon-bw.netlify.app",
  },
  {
    title: "Full-stack Project",
    description:
      "The project involves creating a Django web application with user management, React frontend, and integrating various services for managing car dealerships and reviews using a Node.js backend with MongoDB and Docker.",
    getImageSrc: () => require("../images/photo2.jpg"),
    url: "https://github.com/BilgeWang0304/full-stack-project/tree/main"
  },
  {
    title: "Portfolio Webpage",
    description:
      "This portfolio webpage is built using Charka, providing a clean, responsive interface with sections like project introduction and contact. It leverages Chakra UI's design system for consistent styling and smooth user experience across different screen sizes.",
    getImageSrc: () => require("../images/photo3.jpg"),
    url: "https://bilgewang.vercel.app/"
  },
  {
    title: "WeatherGPT",
    description:
      "WeatherGPT is a web application built with Next.js that allows users to search for real-time weather data by location. Powered by external weather APIs, it provides accurate information on temperature, humidity, and conditions in a simple and intuitive interface.",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8} 
      > 
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
