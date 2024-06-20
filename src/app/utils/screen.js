import useMediaQuery from "./useMediaQuery";

const screen = () => {
  const small = useMediaQuery("(max-width: 640px)");

  return { small };
};

export default screen;
