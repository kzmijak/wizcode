import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CategoryChipItem } from "../../src/components/CategoryChipItem";
import { RouterProvider, createMemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";

describe("CategoryChipItem", () => {
  const Component = (props: { active?: boolean }) => (
    <RouterProvider
      router={createMemoryRouter(
        [{ path: "*", element: <CategoryChipItem category="Pop" /> }],
        {
          initialEntries: props.active ? ["?categories=Pop"] : ["?categories="],
        }
      )}
    />
  );

  it("should match snapshot", () => {
    expect(render(<Component />)).toMatchSnapshot();
  });

  it("should toggle on if inactive", async () => {
    render(<Component />);
    userEvent.click(screen.getByRole("link", { name: "Pop" }));
    expect(screen.getByRole("link", { name: "Pop" })).toHaveAttribute(
      "href",
      "/?categories=Pop"
    );
  });

  it("should toggle off if active", async () => {
    render(<Component active />);
    userEvent.click(screen.getByRole("link", { name: "Pop" }));
    expect(screen.getByRole("link", { name: "Pop" })).toHaveAttribute(
      "href",
      "/?categories="
    );
  });
});
