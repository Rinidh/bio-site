import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      borderRadius={12}
      backgroundColor={"gray.200"}
      color={"black"}
      overflow={"hidden"}
    >
      <Image src={imageSrc} borderRadius={12} />
      <VStack p={5} gap={5} alignItems={"start"}>
        <Heading size={"md"}>{title}</Heading>
        <Text>{description}</Text>
        <Text>
          See more <FontAwesomeIcon icon={faArrowRight} size="sm" />
        </Text>
      </VStack>
    </VStack>
  );
};

export default Card;
