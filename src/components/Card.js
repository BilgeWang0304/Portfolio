import { Box, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, url }) => {
  return (
    <>
      <Box textAlign="left" bg="white" boxShadow="0px 4px 10px rgba(0, 0, 0, 0.8)">
        <Image src={imageSrc} width="600px" height="300px" objectFit="cover" />
        <div style={{padding: 25}}>
        <Heading as="h4" size="md" color="black">
          {title}
        </Heading>
        <Text color="black" py='2'>{description}</Text>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Text color='black'fontSize='sm' >See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </Text>
        </a>
        </div>
      </Box>
    </>
  );
};

export default Card;
