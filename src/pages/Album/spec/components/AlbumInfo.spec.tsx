import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { AlbumInfo } from "../../src/components/AlbumInfo";

describe("AlbumInfo", () => {
  const Component = () => (
    <AlbumInfo artistName="Artist" title="Title" imageUrl="Image" />
  );

  it("should match snapshot", () => {
    expect(render(<Component />)).toMatchSnapshot();
  });

  it("should render static element", () => {
    render(<Component />);

    expect(screen.queryByText("Artist")).toBeInTheDocument();
    expect(screen.queryByText("Title")).toBeInTheDocument();
    expect(screen.queryByAltText("Title album cover")).toBeInTheDocument();
  });
});
