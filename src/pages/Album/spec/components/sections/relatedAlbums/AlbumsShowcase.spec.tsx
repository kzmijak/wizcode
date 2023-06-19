import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { AlbumsShowcase } from "../../../../src/components/sections/relatedAlbums/AlbumsShowcase";
import { renderWithRouter } from "testUtils/renderWithRouter";
import { getFakeAlbums } from "testUtils/mocks/getFakeAlbums";

describe("AlbumsShowcase", () => {
  const Component = () => <AlbumsShowcase albums={getFakeAlbums(20)} />;

  it("should match snapshot", () => {
    expect(renderWithRouter(<Component />)).toMatchSnapshot();
  });

  it("should render list of album images with alts", () => {
    renderWithRouter(<Component />);
    const images = screen.queryAllByRole("img");

    expect(images.length).toBeGreaterThan(0);
    images.forEach((image) => {
      expect(image).toHaveAttribute("alt");
    });
  });
});
