import { Box, HStack, Heading, Stack, VStack } from "@chakra-ui/react";
import React from "react";
import { TiSocialYoutubeCircular } from "react-icons/ti";
export const Footer = () => {
  return (
    <Box padding={4} bg={"blackAlpha.900"} minH={"10vh"}>
      <Stack direction={["column", "row"]}>
        <VStack alignItems={["center", "flex-start"]} width={"full"}>
          <Heading children="All Rights Reservered" color={"white"} />
          <Heading
            size="sm"
            children="@krishan kumar safi"
            color={"yellow.400"}
          />
        </VStack>
        <HStack
          spacing={["2", "6"]}
          justifyContent={"center"}
          color={"white"}
          fontSize="40"
        >
          <a href="https://youtube.com" target={"_blank"}>
            <TiSocialYoutubeCircular />
          </a>
          <a href="https://youtube.com" target={"_blank"}>
            <TiSocialYoutubeCircular />
          </a>
          <a href="https://youtube.com" target={"_blank"}>
            <TiSocialYoutubeCircular />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};
