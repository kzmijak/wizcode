import { Button, Stack, Typography } from "@mui/joy";
import { Page } from "components/Page";
import { FC } from "react";
import { Link } from "react-router-dom";
import { PATH_APP } from "routes/src/paths";

export const NotFoundView: FC = () => {
  return (
    <Page title="404">
      <Stack
        flexGrow={1}
        justifyContent="center"
        alignItems="center"
        spacing={3}
      >
        <Typography level="display1">Whoopsie Daisy!</Typography>
        <Typography level="h4">Resource not found, sorry about that</Typography>
        <Button component={Link} to={PATH_APP.root}>
          Go Home
        </Button>
      </Stack>
    </Page>
  );
};
