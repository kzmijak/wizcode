import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router";
import { RecoilRoot } from "recoil";
import { router } from "routes";

export const App = () => (
  <HelmetProvider>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </HelmetProvider>
);
