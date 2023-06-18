import { describe, it, expect } from "vitest";
import { AlbumsView } from "../src/AlbumsView";
import { renderWithRouter } from "testUtils/renderWithRouter";

describe("AlbumsView", () => {
  const Component = () => <AlbumsView />;

  it("should match snapshot", () => {
    expect(renderWithRouter(<Component />)).toMatchSnapshot();
  });
});
