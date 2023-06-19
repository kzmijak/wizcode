import { useTheme } from "@mui/joy";
import { useMediaQuery } from "usehooks-ts";

export type MediaType =
  | "largeDesktop"
  | "smallDesktop"
  | "desktop"
  | "compact"
  | "mobile";

export const useRwd = () => {
  const {
    breakpoints: { up, down, between },
  } = useTheme();

  const isLargeDesktop = useBreakpoint(up(1600));
  const isSmallDesktop = useBreakpoint(between(1280, 1600));
  const isDesktop = useBreakpoint(up(1280));
  const isCompact = useBreakpoint(between(686, 1280));
  const isMobile = useBreakpoint(down(686));

  let mediaType: MediaType;

  switch (true) {
    case isLargeDesktop:
      mediaType = "largeDesktop";
      break;
    case isSmallDesktop:
      mediaType = "smallDesktop";
      break;
    case isDesktop:
      mediaType = "desktop";
      break;
    case isCompact:
      mediaType = "compact";
      break;
    default:
      mediaType = "mobile";
  }

  return {
    mediaType,
    isLargeDesktop,
    isSmallDesktop,
    isDesktop,
    isCompact,
    isMobile,
  };
};

const useBreakpoint = (mediaQuery: string) => {
  return useMediaQuery(
    mediaQuery.slice(mediaQuery.indexOf("("), mediaQuery.indexOf(")"))
  );
};
