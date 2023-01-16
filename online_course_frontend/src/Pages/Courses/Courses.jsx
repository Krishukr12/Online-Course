import {
  Button,
  Container,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { CourseCard } from "../../components/CourseCard";

export const Courses = () => {
  const [input, setInput] = useState("");
  // ? ARRAY OF ALL CATEGORIES
  const Categories = [
    "Web development",
    "Artifical Inteligence",
    "Data Structure & Algorithem",
    "App Developement",
    "Data Science",
    "Game Developement",
  ];
  return (
    <Container minH={"95vh"} maxW="container.lg" paddingY={"8"}>
      <Heading children="All Courses" m={"8"} />
      <Input
        type="text"
        placeholder="Search a course"
        onChange={(e) => setInput(e.target.value)}
        value={input}
        focusBorderColor="yellow.500"
      />
      <HStack overflowX={"auto"} paddingY={"8"}>
        {Categories.map((item, index) => (
          <Button key={index}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>
      <Stack
        direction={["column", "row"]}
        flexWrap="wrap"
        justifyContent={["flex-start", "space-evenly"]}
        alignItems={["center", "flex-start"]}
      >
        <CourseCard />
      </Stack>
    </Container>
  );
};
