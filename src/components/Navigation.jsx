import React from "react";
import { Flex, Link, Button, Spacer, Heading } from "@chakra-ui/react";
import { FaGamepad, FaGavel, FaMapMarkedAlt, FaComments } from "react-icons/fa";

const Navigation = () => {
  return (
    <Flex align="center" justify="space-between" padding="4" bg="gray.800" color="white">
      <Heading as="h1" size="xl">
        Web3 DApp
      </Heading>
      <Spacer />
      <Flex align="center">
        <Link href="/play-games" style={{ textDecoration: "none" }}>
          <Button leftIcon={<FaGamepad />} colorScheme="teal" variant="solid">
            Play Games
          </Button>
        </Link>
        <Spacer />
        <Link href="/nft-auction" style={{ textDecoration: "none" }}>
          <Button leftIcon={<FaGavel />} colorScheme="teal" variant="solid">
            NFT Auction House
          </Button>
        </Link>
        <Spacer />
        <Link href="/gps-locator" style={{ textDecoration: "none" }}>
          <Button leftIcon={<FaMapMarkedAlt />} colorScheme="teal" variant="solid">
            GPS Locator
          </Button>
        </Link>
        <Spacer />
        <Link href="/social" style={{ textDecoration: "none" }}>
          <Button leftIcon={<FaComments />} colorScheme="teal" variant="solid">
            Social Chat
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navigation;
