import { Avatar, Box, Stack, styled } from "@mui/joy";
import { FC } from "react";
import { AlbumCommentProps } from "./AlbumComment";

const Paragraph = styled(Box)({
  backgroundColor: "lightgray",
  height: "1em",
  minWidth: 70,
  // width: "100%",
});

type AlbumCommentSkeletonProps = Pick<AlbumCommentProps, "orientation">;

export const AlbumCommentSkeleton: FC<AlbumCommentSkeletonProps> = ({
  orientation,
}) => {
  const isVertical = orientation === "column";
  return (
    <Stack
      data-testid="comment-skeleton"
      component="article"
      direction={orientation}
      spacing={3}
      padding={2}
      borderRadius={10}
      alignItems={isVertical ? "center" : "unset"}
      border={(theme) => `dotted 2px ${theme.palette.divider}`}
      minWidth={1}
    >
      <Stack
        spacing={2}
        maxWidth={60}
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <Avatar variant="solid" color="neutral" />
        <Paragraph />

        {isVertical && <Paragraph />}
      </Stack>
      <Stack flex={1} minWidth={isVertical ? 1 : "unset"} spacing={2}>
        <Paragraph />
        <Paragraph minHeight="3em" />
      </Stack>
      {!isVertical && <Paragraph />}
    </Stack>
  );
};
