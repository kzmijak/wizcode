import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { AlbumsTable } from "../../AlbumsTable/src/AlbumsTable";
import { AlbumModel } from "models/Album";

const imageUrl = "https://picsum.photos";

const rows: AlbumModel[] = [
  {
    id: "1",
    artistName: "Artist 1",
    title: "Title 1",
    imageUrl,
  },
  {
    id: "2",
    artistName: "Artist 2",
    title: "Title 2",
    imageUrl,
  },
  {
    id: "3",
    artistName: "Artist 3",
    title: "Title 3",
    imageUrl,
  },
];

describe("AlbumsTable", () => {
  const Component = () => <AlbumsTable rows={rows} />;

  it("should match snapshot", () => {
    expect(render(<Component />)).toMatchSnapshot();
  });

  it("should render as many rows as there were passed in prop", () => {
    render(<Component />);

    const lastIndexCell = screen.queryByRole("cell", {
      name: rows.length.toString(),
    });

    expect(lastIndexCell).toBeInTheDocument();
  });

  it("should not render more rows than passed in prop", () => {
    render(<Component />);

    const overflowingIndexCell = screen.queryByRole("cell", {
      name: (rows.length + 1).toString(),
    });

    expect(overflowingIndexCell).not.toBeInTheDocument();
  });
});
