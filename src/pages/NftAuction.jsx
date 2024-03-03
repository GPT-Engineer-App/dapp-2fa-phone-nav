import React from "react";
import { Box, VStack, Input, InputGroup, InputRightElement, IconButton, SimpleGrid, Text, Divider } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import Navigation from "../components/Navigation";

const TopNfts = () => (
  <SimpleGrid columns={3} spacing={10}>
    {}
    <Box bg="gray.200" height="200px">
      Top NFT 1
    </Box>
    <Box bg="gray.200" height="200px">
      Top NFT 2
    </Box>
    <Box bg="gray.200" height="200px">
      Top NFT 3
    </Box>
  </SimpleGrid>
);

const SearchNfts = ({ onSearch }) => (
  <InputGroup size="md">
    <Input pr="4.5rem" type="text" placeholder="Search NFTs" onChange={(e) => onSearch(e.target.value)} />
    <InputRightElement width="4.5rem">
      <IconButton aria-label="Search NFTs" icon={<FaSearch />} />
    </InputRightElement>
  </InputGroup>
);

const NftList = () => (
  <VStack spacing={4} align="stretch">
    {}
    <Box bg="gray.100">NFT 1 - Ending Soon</Box>
    <Box bg="gray.100">NFT 2 - Ending Soon</Box>
    <Box bg="gray.100">NFT 3 - Ending Soon</Box>
    {}
  </VStack>
);

const NftAuction = () => {
  const handleSearch = (value) => {
    console.log(value);
  };

  return (
    <Box>
      <Navigation />
      <VStack spacing={8}>
        <Text fontSize="2xl" fontWeight="bold">
          Auction House
        </Text>
        <TopNfts />
        <Divider my={8} />
        <SearchNfts onSearch={handleSearch} />
        <Divider my={8} />
        <NftList />
      </VStack>
    </Box>
  );
};

export default NftAuction;
