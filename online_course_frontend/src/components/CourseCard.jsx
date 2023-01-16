import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const CourseCard = () => {
  //* I handleAddToPlaylist will come in props
  const handleAddToPlaylist = () => {};
  return (
    <Card fontSize={"15px"} maxW="19rem">
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="0">
          <Heading size="md">Sampel</Heading>
          <Text fontSize="xl">Sampel</Text>
          <Text fontSize="xl">Creator:</Text>
          <Text fontSize="xl">Lectures:</Text>
          <Text fontSize="xl">Views:</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Link to={`/course/${2}`}>
            <Button variant="solid" colorScheme="blue">
              Watch Now
            </Button>
          </Link>
          <Button
            onClick={handleAddToPlaylist}
            variant="ghost"
            colorScheme="blue"
          >
            Add to Playlist
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
