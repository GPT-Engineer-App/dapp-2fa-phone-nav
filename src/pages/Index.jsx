import React from "react";
import { ChakraProvider, Box, Text, VStack, Grid, theme, Container, Flex, Heading, Image, IconButton, Input } from "@chakra-ui/react";
import Navigation from "../components/Navigation";
import { FaGamepad, FaGavel, FaMapMarkedAlt, FaComments, FaPhoneAlt } from "react-icons/fa";

const Index = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Container maxW="container.xl">
              <Navigation />
              <Flex align="center" justify="center" height="calc(100vh - 100px)" direction="column">
                <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1522444195799-478538b28823?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIzJTIwZGFwcCUyMGhvbWV8ZW58MHx8fHwxNzA5NDgxMzQ2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Web3 DApp Home" />
                <Heading as="h2" size="2xl" mt={6} mb={2}>
                  Welcome to Your Web3 Hub
                </Heading>
                <Text fontSize="xl">Connect and interact with the decentralized world.</Text>
              </Flex>
            </Container>
          </VStack>
          <Box>
            <VStack>
              <Text>Secure 2FA Authentication</Text>
              <Input placeholder="Enter your phone number" size="md" width="300px" />
              <IconButton aria-label="Send 2FA code" icon={<FaPhoneAlt />} />
            </VStack>
          </Box>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
