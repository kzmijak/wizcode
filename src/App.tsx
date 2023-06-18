import { RouterProvider } from "react-router";
import { RecoilRoot } from "recoil";
import { router } from "routes";

export const App = () => (
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>
);
