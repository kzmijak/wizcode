import { Route, createBrowserRouter } from "react-router-dom";
import { createRoutesFromElements } from "react-router";
import { PATH_APP } from "./paths";
import { DashboardLayout } from "layouts/Dashboard";
import { AlbumsView } from "pages/Albums";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={PATH_APP.root} element={<DashboardLayout />}>
      <Route path={PATH_APP.root} element={<AlbumsView />} />
    </Route>
  )
);
