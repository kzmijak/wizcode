import { describe, it, expect } from "vitest";
import { filterAlbumsByCategory } from "../../src/utils/filterAlbumsByCategory";
import { AlbumModel } from "models/Album";

const popAlbum1 = {
  category: "Pop",
};
const countryAlbum2 = {
  category: "Country",
};
const rockAlbum3 = {
  category: "Rock",
};
const rockAlbum4 = {
  category: "Rock",
};

const albums = [
  popAlbum1,
  countryAlbum2,
  rockAlbum3,
  rockAlbum4,
] as AlbumModel[];

describe("filterAlbumsByCategory", () => {
  it("should handle single category", () => {
    const result = filterAlbumsByCategory(albums, "Pop");

    expect(result).toContain(popAlbum1);
    expect(result).not.toContain(countryAlbum2);
    expect(result).not.toContain(rockAlbum3);
    expect(result).not.toContain(rockAlbum4);
  });

  it("should handle multiple category", () => {
    const result = filterAlbumsByCategory(albums, "Pop", "Country");

    expect(result).toContain(popAlbum1);
    expect(result).toContain(countryAlbum2);
    expect(result).not.toContain(rockAlbum3);
    expect(result).not.toContain(rockAlbum4);
  });

  it("should handle many results", () => {
    const result = filterAlbumsByCategory(albums, "Rock");

    expect(result).not.toContain(popAlbum1);
    expect(result).not.toContain(countryAlbum2);
    expect(result).toContain(rockAlbum3);
    expect(result).toContain(rockAlbum4);
  });

  it("should return everything if no dependency array is empty", () => {
    const result = filterAlbumsByCategory(albums);

    expect(result).toContain(popAlbum1);
    expect(result).toContain(countryAlbum2);
    expect(result).toContain(rockAlbum3);
    expect(result).toContain(rockAlbum4);
  });
});
