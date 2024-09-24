import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import portrait from "../images/portrait.jpg"

const greeting = "Hello, I am Zixi Wang!";
const bio1 = "A frontend developer";
const bio2 = "and a full-stack developer";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar
        size="2xl"
        name="Zixi Wang"
        src={portrait}
      />
      <p>{greeting}</p>
      <Heading>{bio1}</Heading>
      <Heading>{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
