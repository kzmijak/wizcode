import { Container, Stack } from "@mui/joy";
import { FC } from "react";
import { Outlet } from "react-router";

export const DashboardLayout: FC = () => {
  return (
    <Container>
      <Stack
        sx={{ minHeight: "100vh" }}
        justifyContent="center"
        alignItems="center"
      >
        <Outlet />
      </Stack>
    </Container>
  );
};
