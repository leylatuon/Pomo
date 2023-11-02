import React, { useState, useContext } from "react";

const AnimationsContext = React.createContext({
  playAllAnimations: () => {},
  setPlayAllAnimations: () => {},
});

export const useAnimationsContext = () => useContext(AnimationsContext);

export default AnimationsContext;
