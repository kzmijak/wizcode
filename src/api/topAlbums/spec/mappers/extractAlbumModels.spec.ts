import { extractAlbumModels } from "../../src/mappers/extractAlbumModels";
import { TopAlbumsResponse } from "../../src/models/TopAlbumsResponse";
import { describe, it, expect } from "vitest";
import mockResponse from "../mocks/fetchTopAlbums.json";

const response: TopAlbumsResponse = mockResponse;

describe("extractAlbumModels", () => {
  const extractionResult = extractAlbumModels(response);
  const firstEntry = extractionResult[0];

  it("should automatically generate ID", () => {
    expect(firstEntry).toHaveProperty("id");
  });

  it("should extract response attributes to assemble Album models", () => {
    expect(firstEntry.artistName).toBe("ATEEZ");
    expect(firstEntry.title).toBe("THE WORLD EP.2 : OUTLAW");
    expect(firstEntry.imageUrl).toBe(
      "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/ac/6a/9a/ac6a9abc-47cf-a4b9-a979-7bd5d4266ea0/196871212342.jpg/55x55bb.png"
    );
  });

  it("should map all items from response", () => {
    expect(extractionResult).toHaveLength(response.feed.entry.length);
  });
});
