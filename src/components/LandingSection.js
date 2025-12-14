import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import rinidh from "../images/rinidh.jpg";

const greeting = "Hi, I am Rinidh!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React, React Hook Form, Chakra UI and more.";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2a4365ff"
  >
    <VStack>
      <Avatar src={rinidh} name="Rinidh" size={"xl"} />
      <Heading size="sm" mb={7}>
        {greeting}
      </Heading>
      <Heading size="xl">{bio1}</Heading>
      <Heading size="xl">{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
