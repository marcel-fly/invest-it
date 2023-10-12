import React from "react";
import { Switch, VStack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../reducers/app";

const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.app.darkMode);

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };
  return (
    <VStack>
      <p>Dark theme</p>
      <Switch
        colorScheme="teal"
        size="lg"
        isChecked={darkMode}
        onChange={handleToggle}
      />
    </VStack>
  );
};

export default ThemeSwitch;
