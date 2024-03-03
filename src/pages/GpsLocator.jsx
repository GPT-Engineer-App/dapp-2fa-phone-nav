import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Navigation from "../components/Navigation";

const GpsLocator = () => {
  return (
    <Box>
      <Navigation />
      <Text>GPS Locator</Text>
      <iframe title="GPS Locator" src="https://maps.example.com" width="100%" height="500px" style={{ border: "0" }} />
      {}
    </Box>
  );
};

export default GpsLocator;
