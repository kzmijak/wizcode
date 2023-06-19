import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { AlbumComment } from "../../../../src/components/sections/comments/AlbumComment";

describe("AlbumComment", () => {
  const Component = () => (
    <AlbumComment
      description="Comment description"
      lastModificationDate={new Date("06.19.2023")}
      title="Comment title"
      userAvatar="imgsrc"
      userName="User name"
    />
  );

  it("should match snapshot", () => {
    expect(render(<Component />)).toMatchSnapshot();
  });

  it("should render static component", () => {
    render(<Component />);

    expect(screen.queryByText("Comment description")).toBeInTheDocument();
    expect(screen.queryByText("Comment title")).toBeInTheDocument();
    expect(screen.queryByText("User name")).toBeInTheDocument();
    expect(screen.queryByText("19.06.2023")).toBeInTheDocument();
  });

  it("should properly render image", () => {
    render(<Component />);

    expect(screen.queryByRole("img")).toBeInTheDocument();
    expect(screen.queryByRole("img")).toHaveAttribute(
      "alt",
      "User name's avatar"
    );
  });
});
