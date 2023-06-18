import { Route, createBrowserRouter } from "react-router-dom";
import { Navigate, createRoutesFromElements } from "react-router";
import { PATH_APP } from "./paths";
import { DashboardLayout } from "layouts/Dashboard";
import { AlbumsView } from "pages/Albums";
import { AlbumView } from "pages/Album";
import { NotFoundView } from "pages/NotFound";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={PATH_APP.root} element={<DashboardLayout />}>
      <Route path={PATH_APP.root} element={<AlbumsView />} />
      <Route path={PATH_APP.album + ":albumId"} element={<AlbumView />} />

      <Route path="*" element={<Navigate to={PATH_APP.notFound} />} />
      <Route path={PATH_APP.notFound} element={<NotFoundView />} />
    </Route>
  )
);
