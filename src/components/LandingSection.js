import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import portrait from "../images/portrait.jpg"

const greeting = "Hello, I am Zixi Wang!";
const bio1 = "Frontend Developer";
const bio2 = "Full-stack developer";
const bio3 = "Master Student in Information Security";

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
      <Heading>{bio3}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
