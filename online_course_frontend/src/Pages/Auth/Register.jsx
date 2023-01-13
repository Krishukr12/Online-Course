import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  Box,
} from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
const fileUploadStyle = {
  "&::file-selector-button": {
    cursor: "pointer",
    border: "none",
    marginLeft: "-20%",
    width: "80%",
    height: "100%",
    color: "#ECC948",
    // backgroundColor: "white",
  },
};
export function Register() {
  const [prevImage, setPrevImage] = useState("");
  const [image, setImage] = useState("");
  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPrevImage(reader.result);
      setImage(file);
    };
  };
  const handleResetImage = () => {
    setPrevImage("");
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
        textAlign={["center", "left"]}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
          SIGN UP
        </Heading>
        <FormControl id="userName">
          <Stack direction={["column", "row"]} spacing={6}>
            <Center>
              <Avatar size="xl" src={prevImage}>
                <AvatarBadge
                  as={IconButton}
                  size="sm"
                  rounded="full"
                  top="-10px"
                  colorScheme="red"
                  aria-label="remove Image"
                  icon={<SmallCloseIcon onClick={handleResetImage} />}
                />
              </Avatar>
            </Center>
            <Center>
              <Input
                accept="image/*"
                isRequired
                // id="chooseAvatar"
                type={"file"}
                focusBorderColor="yellow.500"
                css={fileUploadStyle}
                onChange={handleAvatarUpload}
              />
            </Center>
          </Stack>
        </FormControl>
        <FormControl id="userName" isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder="Name"
            _placeholder={{ color: "gray.500" }}
            type="text"
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: "gray.500" }}
            type="email"
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="Password"
            _placeholder={{ color: "gray.500" }}
            type="password"
          />
        </FormControl>
        <Stack spacing={6} direction={["column", "row"]}>
          <Button colorScheme={"yellow"} color={"black"} w="120">
            Sign Up
          </Button>
        </Stack>
        <Box my="1">
          {" "}
          Already Singed Up?{" "}
          <Link to="/login">
            <Button colorScheme={"yellow"} variant={"link"}>
              Login
            </Button>{" "}
            here
          </Link>
        </Box>
      </Stack>
    </Flex>
  );
}
