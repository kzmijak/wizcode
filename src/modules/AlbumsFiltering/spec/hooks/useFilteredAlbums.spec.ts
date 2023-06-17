import { renderHook } from "@testing-library/react";
import { useFilteredAlbums } from "../../src/hooks/useFilteredAlbums";
import * as useCategoryQueryObj from "modules/CategoryFilter";
import { describe, it, vi } from "vitest";
import { AlbumModel } from "models/Album";

vi.mock("../../../CategoryFilter/src/hooks/useCategoryQuery", () => {
  return {
    useCategoryQuery: vi.fn(),
  };
});

const popAlbum1 = {
  title: "Album1",
  artistName: "Artist1",
  category: "Pop",
};
const countryAlbum2 = {
  title: "Album2",
  artistName: "Artist2",
  category: "Country",
};
const countryAlbum3 = {
  title: "Name that is not matching",
  artistName: "Artist2",
  category: "Country",
};
const albums = [popAlbum1, countryAlbum2, countryAlbum3] as AlbumModel[];

describe("useFilteredAlbums", () => {
  const useCategoryQuery = vi.mocked(useCategoryQueryObj.useCategoryQuery);

  it("should return all albums if no filters active", () => {
    useCategoryQuery.mockReturnValue({ categories: [] } as never);

    const { result } = renderHook(() => useFilteredAlbums(albums));

    expect(result.current).toContain(popAlbum1);
    expect(result.current).toContain(countryAlbum2);
    expect(result.current).toContain(countryAlbum3);
  });

  it("should return albums based on search", () => {
    useCategoryQuery.mockReturnValue({ categories: [] } as never);

    const { result } = renderHook(() => useFilteredAlbums(albums, "Album2"));

    expect(result.current).not.toContain(popAlbum1);
    expect(result.current).toContain(countryAlbum2);
    expect(result.current).not.toContain(countryAlbum3);
  });

  it("should return albums based on categories", () => {
    useCategoryQuery.mockReturnValue({ categories: ["Country"] } as never);

    const { result } = renderHook(() => useFilteredAlbums(albums));

    expect(result.current).not.toContain(popAlbum1);
    expect(result.current).toContain(countryAlbum2);
    expect(result.current).toContain(countryAlbum3);
  });

  it("should return albums based on categories and search", () => {
    useCategoryQuery.mockReturnValue({ categories: ["Country"] } as never);

    const { result } = renderHook(() => useFilteredAlbums(albums, "Album"));

    expect(result.current).not.toContain(popAlbum1);
    expect(result.current).toContain(countryAlbum2);
    expect(result.current).not.toContain(countryAlbum3);
  });
});
