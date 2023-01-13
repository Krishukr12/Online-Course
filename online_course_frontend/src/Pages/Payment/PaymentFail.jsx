import { Button, Container, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import { Link } from "react-router-dom";
export const PaymentFail = () => {
  return (
    <Container h="85vh">
      <VStack justifyContent={"center"} h={"full"} spacing={"4"}>
        <RiErrorWarningFill size={"5rem"} />
        <Heading textTransform={"uppercase"}>Payment Fail !</Heading>
        <Link to="/subscribe">
          <Button>Try Again</Button>
        </Link>
      </VStack>
    </Container>
  );
};
