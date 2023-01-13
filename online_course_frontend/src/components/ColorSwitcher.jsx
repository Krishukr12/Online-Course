import { Button, useColorMode } from "@chakra-ui/react";
import { AiFillSetting } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
export default function ColorSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      variant={"ghost"}
      position={"fixed"}
      top={6}
      right={6}
      fontSize="20px"
      onClick={toggleColorMode}
    >
      {colorMode === "light" ? <MdDarkMode /> : <AiFillSetting />}
    </Button>
  );
}
