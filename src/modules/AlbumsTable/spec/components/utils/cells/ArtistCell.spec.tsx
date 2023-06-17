import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ArtistCell } from "../../../../src/components/cells/ArtistCell";
import { row1 } from "./fixture";

describe("ArtistCell", () => {
  const Component = () => <ArtistCell currentRow={row1} />;

  it("should match snapshot", () => {
    expect(render(<Component />)).toMatchSnapshot();
  });

  it("should display artist", () => {
    render(<Component />);
    expect(screen.queryByText("Famous Artist")).toBeInTheDocument();
  });
});
