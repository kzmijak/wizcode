import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TitleCell } from "../../../../src/components/cells/TitleCell";
import { row1 } from "./fixture";

describe("TitleCell", () => {
  const Component = () => <TitleCell currentRow={row1} />;

  it("should match snapshot", () => {
    expect(render(<Component />)).toMatchSnapshot();
  });

  it("should display title", () => {
    render(<Component />);
    expect(screen.queryByText("Some album name")).toBeInTheDocument();
  });
});
