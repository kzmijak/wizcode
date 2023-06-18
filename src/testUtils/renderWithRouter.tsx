import { render } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router";

export const renderWithRouter = (ui: JSX.Element, ...location: string[]) => {
  const router = createMemoryRouter([{ path: "*", element: ui }], {
    initialEntries: ["", ...location],
  });

  return render(<RouterProvider router={router} />);
};
