import { AlbumModel } from "models/Album";
import { filterAlbumsByText } from "../../src/utils/filterAlbumsByText";
import { describe, it, expect } from "vitest";

const album1 = {
  artistName: "Modern Artist 1",
  id: "1",
  title: "Title 1",
} as AlbumModel;
const album2 = {
  artistName: "Modern Artist 2",
  id: "2",
  title: "Title 2",
} as AlbumModel;
const album3 = {
  artistName: "Classical Artist 3",
  id: "3",
  title: "Title 3",
} as AlbumModel;

const source = [album1, album2, album3];

describe("filterAlbumsByText", () => {
  it("should find filter entries by text from artistName", () => {
    const result = filterAlbumsByText(source, "Modern");
    expect(result).toContain(album1);
    expect(result).toContain(album2);
    expect(result).not.toContain(album3);
  });

  it("should find filter entries by text from title", () => {
    const result = filterAlbumsByText(source, "Title 2");
    expect(result).toContain(album2);
  });

  it("should find filter entries by text, ignoring casing", () => {
    const result = filterAlbumsByText(source, "modern");
    expect(result).toContain(album1);
  });
});
