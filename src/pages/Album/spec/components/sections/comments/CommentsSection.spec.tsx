import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { CommentsSection } from "../../../../src/components/sections/comments/CommentsSection";
import { RecoilRoot } from "recoil";

const comments = [...Array(10).keys()].map((key) => ({
  id: key,
  userName: key,
  userAvatar: key,
  title: key,
  description: key,
  lastModificationDate: key,
}));

vi.mock("axios", () => ({
  get: vi.fn().mockImplementation(async () => {
    setTimeout(() => {
      Promise.resolve(comments);
    }, 1);
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

  it("should initially display skeleton for comments", () => {
    render(<Component />);

    screen.queryAllByTestId("comment-skeleton").forEach((result) => {
      expect(result).toBeInTheDocument();
    });
  });

  it.skip("should display comments after data loaded", async () => {
    render(<Component />);

    expect(await screen.findAllByTestId("comment-genuine")).toBeInTheDocument();
    (await screen.findAllByTestId("comment-skeleton")).forEach((result) => {
      expect(result).toBeInTheDocument();
    });
  });
});
