import { EmailIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  HStack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
export const PaymentSucess = () => {
  return (
    <HStack display={"flex"} h={"85vh"}>
      <Alert
        w={["100%", "30%"]}
        height={["50vh", "60vh"]}
        status="success"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        justifyItems="center"
        margin="auto"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Payment success!
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          Congratulation Now You're a pro member, You have access of premium
          content
        </AlertDescription>
        <Link to="/profile">
          <Button
            mt={"7"}
            leftIcon={<CgProfile />}
            colorScheme="teal"
            variant="solid"
          >
            Go to Profile
          </Button>
        </Link>
        <Text mt={"3"} as="ins">
          Reference : krishan@gmail.com
        </Text>
      </Alert>
    </HStack>
  );
};
