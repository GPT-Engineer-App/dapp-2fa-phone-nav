import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";
import SnakeGame from "../components/SnakeGame";
import Navigation from "../components/Navigation";

const Games = () => {
  return (
    <Box>
      <Navigation />
      <VStack spacing={8}>
        <Text>Enjoy our selection of games!</Text>
        <SnakeGame />
      </VStack>
      {}
    </Box>
  );
};

export default Games;
