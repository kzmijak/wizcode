import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { AlbumsFiltersBar } from "../src/AlbumsFiltersBar";

describe("AlbumsFiltersBar", () => {
  const Component = () => (
    <AlbumsFiltersBar
      search=""
      onSearchChange={() => null}
      allCategories={[]}
    />
  );

  it("should match snapshot", () => {
    expect(render(<Component />)).toMatchSnapshot();
  });

  it("should contain search input", () => {
    render(<Component />);

    const inputDOM = screen.getByLabelText("Search");
    expect(inputDOM).toBeInTheDocument();
  });
});
