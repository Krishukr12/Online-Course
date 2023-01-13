import {
  Button,
  Heading,
  Stack,
  Text,
  VStack,
  Image,
  Box,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { CgGoogle, CgYoutube } from "react-icons/cg";
import { SiCoursera, SiUdemy } from "react-icons/si";
import { DiAws } from "react-icons/di";
import introVideo from "../../assets/videos/courseIntro.mp4";
export const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={["column", "row"]}
          height="100%"
          justifyContent={["center", "space-between"]}
          alignItems="center"
          spacing={["16", "56"]}
        >
          <VStack
            spacing={"4"}
            width={"full"}
            alignItems={["center", "flex-end"]}
          >
            <Heading children="LEARN FROM THE EXPERTS" size={"xl"} />
            <Text
              textAlign={["center", "left"]}
              fontFamily="cursive"
              fontSize={"xl"}
              children="Find Valuable Content At Resonable Price"
            />
            <Link to="/courses">
              <Button size={"lg"} colorScheme="yellow">
                Explore Now
              </Button>
            </Link>
          </VStack>
          <Image
            className="vector-graphics"
            objectFit="contain"
            boxSize={"sm"}
            src="https://www.k5learning.com/sites/all/files/studying%20child.jpg"
          />
        </Stack>
      </div>
      <Box padding={"8"} bg={"blackAlpha.800"}>
        <Heading
          textAlign={"center"}
          fontFamily="body"
          color="yellow.400"
          children="OUR BRANDS"
        />
        <HStack
          marginTop="4"
          justifyContent={"space-evenly"}
          className="brandsBanner"
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>
      <div className="intro-video-container">
        <video
          // autoPlay
          src={introVideo}
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        ></video>
      </div>
    </section>
  );
};
