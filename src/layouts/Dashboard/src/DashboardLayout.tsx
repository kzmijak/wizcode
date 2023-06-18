import { Container, Stack } from "@mui/joy";
import { FC } from "react";
import { Outlet } from "react-router";

export const DashboardLayout: FC = () => {
  return (
    <Container>
      <Stack minHeight="100vh">
        <Outlet />
      </Stack>
    </Container>
  );
};
