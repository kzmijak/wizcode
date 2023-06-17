import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TableNavigation } from "../../src/components/TableNavigation";

describe("TableNavigation", () => {
  const Component = () => (
    <TableNavigation search="" onSearchChange={() => null} />
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
