import { Avatar, Stack, Typography } from "@mui/joy";
import { AlbumCommentModel } from "models/AlbumComment";
import { FC } from "react";

type AlbumCommentProps = Pick<
  AlbumCommentModel,
  "description" | "lastModificationDate" | "title" | "userAvatar" | "userName"
>;

export const AlbumComment: FC<AlbumCommentProps> = ({
  description,
  lastModificationDate,
  title,
  userAvatar,
  userName,
}) => {
  return (
    <Stack
      data-testid="comment-genuine"
      component="article"
      direction="row"
      spacing={3}
      padding={2}
      borderRadius={10}
      border={(theme) => `dotted 2px ${theme.palette.divider}`}
    >
      <Stack spacing={2} width={60} justifyContent="center" alignItems="center">
        <Avatar
          variant="solid"
          color="warning"
          src={userAvatar}
          alt={`${userName}'s avatar`}
        />
        <Typography variant="solid" fontFamily="monospace">
          {userName}
        </Typography>
      </Stack>
      <Stack flex={1}>
        <Typography level="h6">{title}</Typography>
        <Typography variant="soft" flex={1}>
          {description}
        </Typography>
      </Stack>
      <Typography level="body2">
        {lastModificationDate.toLocaleDateString("pl")}
      </Typography>
    </Stack>
  );
};
