import { Heading, VStack, Text } from '@chakra-ui/react';

const Details = () => {
  return (
    <VStack h="full" w="full" p={10} spacing={10} alignItems="flex-start">
      <VStack spacing={3} alignItems="flex-start">
        <Heading size="2xl">Your Details</Heading>
        <Text>If you already have an account, click here to log in.</Text>
      </VStack>
    </VStack>
  );
};

export default Details;
