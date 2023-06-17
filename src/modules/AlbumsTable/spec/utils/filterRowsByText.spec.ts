import { AlbumsTableRow } from "../../src/models/AlbumsTableRow";
import { filterRowsByText } from "../../src/utils/filterRowsByText";
import { describe, it, expect } from "vitest";

const album1: AlbumsTableRow = {
  artistName: "Modern Artist 1",
  imageUrl: "",
  id: "1",
  title: "Title 1",
};
const album2: AlbumsTableRow = {
  artistName: "Modern Artist 2",
  imageUrl: "",
  id: "2",
  title: "Title 2",
};
const album3: AlbumsTableRow = {
  artistName: "Classical Artist 3",
  imageUrl: "",
  id: "3",
  title: "Title 3",
};

const source = [album1, album2, album3];

describe("filterRowsByText", () => {
  it("should find filter entries by text from artistName", () => {
    const result = filterRowsByText(source, "Modern");
    expect(result).toContain(album1);
    expect(result).toContain(album2);
    expect(result).not.toContain(album3);
  });

  it("should find filter entries by text from title", () => {
    const result = filterRowsByText(source, "Title 2");
    expect(result).toContain(album2);
  });

  it("should find filter entries by text, ignoring casing", () => {
    const result = filterRowsByText(source, "modern");
    expect(result).toContain(album1);
  });
});
