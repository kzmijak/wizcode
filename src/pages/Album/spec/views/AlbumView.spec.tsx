import { describe, it, expect } from "vitest";
import { AlbumView } from "../../src/views/AlbumView";
import { renderWithRouter } from "testUtils/renderWithRouter";

describe("AlbumView", () => {
  const Component = () => <AlbumView />;

  it("should match snapshot", () => {
    expect(renderWithRouter(<Component />)).toMatchSnapshot();
  });
});
