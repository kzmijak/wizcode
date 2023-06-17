import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { AlbumsTable } from "../../AlbumsTable/src/AlbumsTable";
import { AlbumModel } from "models/Album";

const rows = [{}, {}, {}] as AlbumModel[];

describe("AlbumsTable", () => {
  const Component = () => <AlbumsTable rows={rows} displayedRows={rows} />;

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
