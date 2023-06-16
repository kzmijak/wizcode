import { extractAlbumModels } from "../../src/mappers/extractAlbumModels";
import { TopAlbumsResponse } from "../../src/models/TopAlbumsResponse";
import { describe, it, expect } from "vitest";
import mockResponse from "../mocks/fetchTopAlbums.json";
import { AlbumModel } from "models/Album";

const response: TopAlbumsResponse = mockResponse;

describe("extractAlbumModels", () => {
  it("should extract response attributes to assemble Album models", () => {
    const expectedAlbum: AlbumModel = {
      artistName: "ATEEZ",
      title: "THE WORLD EP.2 : OUTLAW",
      imageUrl:
        "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/ac/6a/9a/ac6a9abc-47cf-a4b9-a979-7bd5d4266ea0/196871212342.jpg/55x55bb.png",
    };

    const extractionResult = extractAlbumModels(response);

    expect(extractionResult).toContainEqual(expectedAlbum);
  });
});
