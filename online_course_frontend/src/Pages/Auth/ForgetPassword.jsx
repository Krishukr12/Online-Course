import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";

export function ForgetPassword() {
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    let newEmail = e.target.value.trim();
    setEmail(newEmail);
  };
  const handleFormSubmit = () => {
    alert(email);
  };
  return (
    <Flex
      minH={"85vh"}
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
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
          Forgot your password?
        </Heading>
        <Text
          fontSize={{ base: "sm", sm: "md" }}
          color={useColorModeValue("gray.800", "gray.400")}
        >
          You&apos;ll get an email with a reset link
        </Text>
        <FormControl id="email">
          <Input
            onChange={handleChange}
            placeholder="your-email@example.com"
            _placeholder={{ color: "gray.500" }}
            type="email"
          />
        </FormControl>
        <Stack spacing={6}>
          <Button
            onClick={() => handleFormSubmit()}
            fontWeight={"bolder"}
            colorScheme={"yellow"}
            color={"black"}
          >
            Send Request
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
