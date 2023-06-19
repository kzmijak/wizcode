import { Avatar, Box, Stack, styled } from "@mui/joy";
import { FC } from "react";

const Paragraph = styled(Box)({
  backgroundColor: "lightgray",
  height: "1em",
  minWidth: 70,
});

export const AlbumCommentSkeleton: FC = () => {
  return (
    <Stack
      data-testid="comment-skeleton"
      component="article"
      direction="row"
      spacing={3}
      padding={2}
      borderRadius={10}
      border={(theme) => `dotted 2px ${theme.palette.divider}`}
    >
      <Stack spacing={2} width={60} justifyContent="center" alignItems="center">
        <Avatar variant="solid" color="neutral" />
        <Paragraph />
      </Stack>
      <Stack flex={1} spacing={2}>
        <Paragraph />
        <Paragraph minHeight="3em" />
      </Stack>
      <Paragraph />
    </Stack>
  );
};
