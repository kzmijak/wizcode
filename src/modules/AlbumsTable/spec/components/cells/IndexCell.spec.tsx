import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { IndexCell } from "../../../src/components/cells/IndexCell";
import { row3, rows } from "./fixture";

describe("IndexCell", () => {
  const Component = () => <IndexCell currentRow={row3} rows={rows} />;

  it("should match snapshot", () => {
    expect(render(<Component />)).toMatchSnapshot();
  });

  it("should display index of the element in array", () => {
    render(<Component />);
    expect(screen.queryByText("3")).toBeInTheDocument();
  });
});
