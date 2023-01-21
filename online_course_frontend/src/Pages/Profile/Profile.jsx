import {
  Avatar,
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Profile = () => {
  //  TODO Data will get from the API
  const user = {
    name: "krishan",
    email: "krishankumarsafi7@gmail.com",
    createAt: String(new Date().toISOString()),
    role: "user",
    subscription: {
      status: "active",
    },
    playlist: [
      {
        course: "course",
        poster: "role",
      },
    ],
  };
  return (
    <Container minH={"95vh"} maxW="container.lg" py="8">
      <Heading children="Profile" m={"8"} textTransform={"uppercase"}></Heading>
      <Stack
        justifyContent={"flex-start"}
        direction={["column", "row"]}
        alignItems={"center"}
        spacing={["8", "16"]}
        padding={"8"}
      >
        <VStack>
          <Avatar boxSize={"48"} />
          <Button colorScheme={"yellow"} variant={"ghost"}>
            Change Photo
          </Button>
        </VStack>
        <VStack spacing={"4"} alignItems={["center", "flex-start"]}>
          <HStack>
            <Text children="Name" fontWeight={"bold"} />
            <Text children={user.name} fontWeight={"bold"} />
          </HStack>
          <HStack>
            <Text children="Email" fontWeight={"bold"} />
            <Text children={user.email} fontWeight={"bold"} />
          </HStack>
          <HStack>
            <Text children="createAt" fontWeight={"bold"} />
            <Text children={user.createAt.split("T")[0]} fontWeight={"bold"} />
          </HStack>
          {user.role !== "admin" && (
            <HStack>
              <Text children="Subscription" fontWeight={"bold"} />
              {user.subscription.status === "active" ? (
                <Button>Cancel Subscription</Button>
              ) : (
                <Link to="/subscribe">
                  <Button colorScheme={"yellow"}>subscribe</Button>
                </Link>
              )}
            </HStack>
          )}
          <Stack direction={["column", "row"]} alignItems={"center"}>
            <Link to="/updateprofile">
              <Button>Update Profile</Button>
            </Link>
            <Link to="/changepassword">
              <Button>Change Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>
      <Heading children="Playlist" size={"md"} my="8" />
      {user.playlist.length > 0 && (
        <Stack
          direction={["column", "row"]}
          alignItems={"center"}
          flexWrap={"wrap"}
          p={"4"}
        >
          {user.playlist.map((item, index) => (
            <VStack w={"48"} m={"2"} key={item.course}>
              <Image boxSize={"full"} objectFit={"contain"} src="item.poster" />
            </VStack>
          ))}
        </Stack>
      )}
    </Container>
  );
};
