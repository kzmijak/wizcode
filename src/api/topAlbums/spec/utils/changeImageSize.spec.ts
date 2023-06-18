import { describe, it, expect } from "vitest";
import { changeImageSize } from "../../src/utils/changeImageSize";

describe("changeImageSize", () => {
  it("should return same image but of different size, when image is from same api", () => {
    const originalImage =
      "https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/52/0d/7e/520d7ec3-ec22-9e15-a3f8-f801a10c4c31/23UMGIM18781.rgb.jpg/55x55bb.png";
    const expectedImageUrl =
      "https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/52/0d/7e/520d7ec3-ec22-9e15-a3f8-f801a10c4c31/23UMGIM18781.rgb.jpg/200x200bb.png";

    const result = changeImageSize(originalImage, 200);

    expect(result).toBe(expectedImageUrl);
  });

  it("should return same image, when it does not originate from itunes api", () => {
    const result = changeImageSize("some-image", 200);

    expect(result).toBe("some-image");
  });
});
