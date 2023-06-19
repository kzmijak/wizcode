import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { CommentsSection } from "../../../../src/components/sections/comments/CommentsSection";
import { RecoilRoot } from "recoil";
import { AlbumCommentsResponseItem } from "api/albumComments/src/models/AlbumCommentsResponseItem";

const comments = [...Array(10).keys()].map<AlbumCommentsResponseItem>(
  (key) => ({
    id: key.toString(),
    albumId: key.toString(),
    userName: key.toString(),
    userAvatar: key.toString(),
    title: key.toString(),
    description: key.toString(),
    lastModificationDate: key.toString(),
  })
);

vi.mock("axios", () => ({
  get: vi.fn().mockImplementation(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(comments);
      }, 80);
    });
  }),
}));

describe("CommentsSection", () => {
  const Component = () => (
    <RecoilRoot>
      <CommentsSection id="some-album" />
    </RecoilRoot>
  );

  it("should match snapshot", () => {
    expect(render(<Component />)).toMatchSnapshot();
  });

  it("should have header", () => {
    render(<Component />);
    expect(screen.getByText("Comments")).toBeInTheDocument();
  });

  it("should initially display skeleton for comments", () => {
    render(<Component />);

    screen.queryAllByTestId("comment-skeleton").forEach((result) => {
      expect(result).toBeInTheDocument();
    });
  });

  it("should display comments after data loaded", async () => {
    render(<Component />);

    setTimeout(() => {
      expect(screen.getAllByTestId("comment-genuine").length).toBeGreaterThan(
        0
      );
    }, 100);
  });
});
