import { createContext, useContext } from "react";

const AnimationsContext = createContext({
  // create placeholder functions in new context object
  playAllAnimations: () => {},
  setPlayAllAnimations: () => {},
});

export const useAnimationsContext = () => useContext(AnimationsContext);

export default AnimationsContext;
