import { Breakpoint } from "@mui/system";
import { useMediaQuery } from "usehooks-ts";

export const useRwd = () => {
  const isXl = useAbove(1920);
  const isLg = useAbove(1600);
  const isMd = useAbove(1280);
  const isSm = useAbove(686);
  const isXs = useAbove(1920);

  let mediaType: Breakpoint;

  switch (true) {
    case isXl:
      mediaType = "xl";
      break;
    case isLg:
      mediaType = "lg";
      break;
    case isMd:
      mediaType = "md";
      break;
    case isSm:
      mediaType = "sm";
      break;
    default:
      mediaType = "xs";
  }

  return { mediaType, isLg, isXl, isMd, isSm, isXs };
};

const useAbove = (breakpoint: number) => {
  return useMediaQuery(`(min-width: ${breakpoint}px)`);
};
