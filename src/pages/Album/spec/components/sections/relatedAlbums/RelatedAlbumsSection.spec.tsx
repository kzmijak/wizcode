import { describe, it, expect, vi } from "vitest";
import { screen } from "@testing-library/react";
import { RelatedAlbumsSection } from "../../../../src/components/sections/relatedAlbums/RelatedAlbumsSection";
import * as recoil from "recoil";
import { renderWithRouter } from "testUtils/renderWithRouter";
import { getFakeAlbums } from "testUtils/mocks/getFakeAlbums";

vi.mock("recoil", async () => {
  const lib = (await vi.importActual("recoil")) as object;
  return {
    ...lib,
    useRecoilValue: vi.fn(),
  };
});

const albums = getFakeAlbums(20);

describe("RelatedAlbumsSection", () => {
  const useRecoilValueMocked = vi.mocked(recoil.useRecoilValue);

  afterEach(() => {
    useRecoilValueMocked.mockReset();
  });

  const Component = () => (
    <RelatedAlbumsSection category="pop" id="thisAlbum" />
  );

  it("should match snapshot", () => {
    useRecoilValueMocked.mockReturnValue([albums[0]]);
    expect(renderWithRouter(<Component />)).toMatchSnapshot();
  });

  it("should render header", () => {
    useRecoilValueMocked.mockReturnValue([albums[0]]);
    renderWithRouter(<Component />);

    expect(screen.queryByText("Other albums you may like")).toBeInTheDocument();
  });

  it("should render nothing, when na related albums available", () => {
    useRecoilValueMocked.mockReturnValue([]);
    renderWithRouter(<Component />);

    expect(
      screen.queryByText("Other albums you may like")
    ).not.toBeInTheDocument();
  });

  it("should only display up to 14 albums at a time", () => {
    useRecoilValueMocked.mockReturnValue(albums);
    renderWithRouter(<Component />);

    expect(screen.queryAllByRole("img").length).toBe(14);
  });

  it("should contain show all button", () => {
    useRecoilValueMocked.mockReturnValue(albums);
    renderWithRouter(<Component />);

    const showAllButton = screen.queryByText("Show all");
    expect(showAllButton).toBeInTheDocument();
    expect(showAllButton).toHaveAttribute("href", "/");
  });
});
