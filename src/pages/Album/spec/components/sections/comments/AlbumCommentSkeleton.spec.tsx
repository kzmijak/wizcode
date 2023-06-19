import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { AlbumCommentSkeleton } from "../../../../src/components/sections/comments/AlbumCommentSkeleton";

describe("AlbumCommentSkeleton", () => {
  const Component = () => <AlbumCommentSkeleton />;

  it("should match snapshot", () => {
    expect(render(<Component />)).toMatchSnapshot();
  });
});
