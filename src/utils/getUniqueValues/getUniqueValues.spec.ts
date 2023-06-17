import { describe, it, expect } from "vitest";
import { getUniqueValues } from "./getUniqueValues";

describe("getUniqueValues", () => {
  it("should return array with unique values", () => {
    const source = ["2", "3", "3", "2", "4", "3"];
    const expected = ["2", "3", "4"];

    const result = getUniqueValues(source);
    expect(result).toStrictEqual(expected);
  });
});
