import { Container, Text, VStack, Box, Heading, Image, Button } from "@chakra-ui/react";
import { FaLeaf } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to Plant Paradise
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Discover the beauty and benefits of houseplants
          </Text>
        </Box>
        <Image
          src="https://images.unsplash.com/photo-1524594154908-edd0acfa2f9e"
          alt="Beautiful houseplants"
          borderRadius="md"
          boxShadow="lg"
          maxW="100%"
        />
        <Button
          rightIcon={<FaLeaf />}
          colorScheme="green"
          variant="solid"
          size="lg"
        >
          Explore More
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;