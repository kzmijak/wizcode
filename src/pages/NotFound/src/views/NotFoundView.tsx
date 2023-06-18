import { Stack, Typography } from "@mui/joy";
import { FC } from "react";

export const NotFoundView: FC = () => {
  return (
    <Stack flexGrow={1} justifyContent="center" alignItems="center">
      <Typography level="display1">Whoopsie Daisy!</Typography>
      <Typography level="h4">Resource not found, sorry about that </Typography>
    </Stack>
  );
};
