import { Container } from "@mui/joy";
import { FC } from "react";
import { Outlet } from "react-router";

export const DashboardLayout: FC = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  );
};
