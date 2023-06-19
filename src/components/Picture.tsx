import { CircularProgress, Stack } from "@mui/joy";
import { FC, useState } from "react";

type PictureProps = {
  src: string;
  alt: string;
  height?: number | string;
  width?: number | string;
};

export const Picture: FC<PictureProps> = ({ alt, src, height, width }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const showImage = () => setIsLoaded(true);

  return (
    <Stack justifyContent="center" alignItems="center" position="relative">
      {!isLoaded && (
        <CircularProgress sx={{ position: "absolute", height, width }} />
      )}
      <img
        key={src}
        src={src}
        alt={alt}
        onLoad={showImage}
        style={{ opacity: isLoaded ? 1 : 0, height, width }}
      />
    </Stack>
  );
};
