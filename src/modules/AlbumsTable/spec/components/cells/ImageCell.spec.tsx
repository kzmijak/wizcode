import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ImageCell } from "../../../src/components/cells/ImageCell";
import { row1 } from "./fixture";

describe("ImageCell", () => {
  const Component = () => <ImageCell currentRow={row1} />;

  it("should match snapshot", () => {
    expect(render(<Component />)).toMatchSnapshot();
  });

  it("should display image", () => {
    render(<Component />);
    const imageDOM = screen.getByRole("img");

    expect(imageDOM).toHaveAttribute("src", "imageurl1");
    expect(imageDOM).toHaveAttribute("alt", "Some album name album image");
  });
});
