import React from "react";
import ColorSwitcher from "./ColorSwitcher";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { RiDashboardFill, RiLoginBoxLine, RiMenu5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const LinkButton = ({ url, title = "Home", onClose }) => (
  <Link onClick={onClose} to={url}>
    <Button variant="ghost">{title}</Button>
  </Link>
);
export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuthenticated = true;
  const user = {
    role: "admin",
  };
  const handleLogout = () => {
    alert("Logout Successfull");
    onClose();
  };
  const btnRef = React.useRef();
  return (
    <div>
      <ColorSwitcher />
      <Button
        onClick={onOpen}
        position={"fixed"}
        colorScheme={"yellow"}
        width="12"
        height={"12"}
        rounded="full"
        left="6"
        top="6"
        zIndex={"overlay"}
      >
        <RiMenu5Fill />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth={"2px"}>COURSE BUNDLER</DrawerHeader>

          <DrawerBody>
            <VStack spacing={4} alignItems="flex-start">
              <LinkButton onClose={onClose} url="/" title="HOME" />
              <LinkButton
                onClose={onClose}
                url="/courses"
                title="ALL COURSES"
              />
              <LinkButton
                onClose={onClose}
                url="/request"
                title="REQUEST A COURSE"
              />
              <LinkButton onClose={onClose} url="/contact" title="CONTACT US" />
              <LinkButton onClose={onClose} url="/about" title="ABOUT US" />
              <HStack
                justifyContent={"space-evenly"}
                position={"absolute"}
                bottom={"2rem"}
                width={"80%"}
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link onClick={onClose} to="/profile">
                          <Button variant={"ghost"} colorScheme={"yellow"}>
                            Profile
                          </Button>
                        </Link>
                        <Button onClick={handleLogout} variant={"ghost"}>
                          <RiLoginBoxLine />
                          Logout
                        </Button>
                      </HStack>
                      {user && user.role === "admin" && (
                        <Link onClick={onClose} to="/admin/dashboard">
                          <Button colorScheme={"purple"} variant={"ghost"}>
                            <RiDashboardFill style={{ margin: "6px" }} />{" "}
                            Dashboard
                          </Button>
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link onClick={onClose} to="/login">
                      <Button colorScheme={"yellow"}>Login</Button>
                    </Link>
                    <p>OR</p>
                    <Link onClick={onClose} to="/register">
                      <Button colorScheme={"yellow"}>Sign Up</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
