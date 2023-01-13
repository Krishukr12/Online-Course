import { Avatar, Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";

export function About() {
  return (
    <Stack
      h={"85vh"}
      bg={useColorModeValue("gray.50", "gray.800")}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={"center"}
      direction={"column"}
    >
      <Text
        fontSize={{ base: "xl", md: "2xl" }}
        textAlign={"center"}
        maxW={"3xl"}
        my={"20"}
      >
        We had an incredible experience working with Chakra Templates and were
        impressed they made such a big difference in only three weeks. Our team
        is so grateful for the wonderful improvements they made and their
        ability to get familiar with the product concept so quickly.
      </Text>
      <Box textAlign={"center"}>
        <Avatar
          src={"https://i.ibb.co/t2kK06p/Krishan-Kumar-Safi.png"}
          alt={"Krishan Kumar Safi"}
          mb={2}
        />

        <Text fontWeight={600}>Krishan Kumar Safi</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.400", "gray.400")}>
          Founder of Course Bundler
        </Text>
      </Box>
    </Stack>
  );
}
