import { Avatar, Stack, Typography } from "@mui/joy";
import { AlbumCommentModel } from "models/AlbumComment";
import { FC } from "react";

export type AlbumCommentProps = Pick<
  AlbumCommentModel,
  "description" | "lastModificationDate" | "title" | "userAvatar" | "userName"
> & {
  orientation?: "row" | "column";
};

export const AlbumComment: FC<AlbumCommentProps> = ({
  description,
  lastModificationDate,
  title,
  userAvatar,
  userName,
  orientation,
}) => {
  const dateComponent = (
    <Typography level="body2">
      {lastModificationDate.toLocaleDateString("pl")}
    </Typography>
  );

  return (
    <Stack
      data-testid="comment-genuine"
      component="article"
      direction={orientation}
      spacing={3}
      padding={2}
      borderRadius={10}
      alignItems={orientation === "column" ? "center" : "start"}
      border={(theme) => `dotted 2px ${theme.palette.divider}`}
    >
      <Stack
        spacing={2}
        maxWidth={60}
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          variant="solid"
          color="warning"
          src={userAvatar}
          alt={`${userName}'s avatar`}
        />
        <Typography variant="solid" fontFamily="monospace">
          {userName}
        </Typography>
        {orientation === "column" && dateComponent}
      </Stack>
      <Stack flex={1}>
        <Typography level="h6">{title}</Typography>
        <Typography variant="soft" flex={1}>
          {description}
        </Typography>
      </Stack>
      {orientation === "row" && dateComponent}
    </Stack>
  );
};
