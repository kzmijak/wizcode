import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { AlbumsTable } from "../../AlbumsTable/src/AlbumsTable";
import { AlbumModel } from "models/Album";
import { renderWithRouter } from "testUtils/renderWithRouter";

const rows = [{}, {}, {}] as AlbumModel[];

describe("AlbumsTable", () => {
  const Component = () => <AlbumsTable rows={rows} displayedRows={rows} />;

  it("should match snapshot", () => {
    expect(renderWithRouter(<Component />)).toMatchSnapshot();
  });

  it("should render as many rows as there were passed in prop", () => {
    renderWithRouter(<Component />);

    const lastIndexCell = screen.queryByRole("cell", {
      name: rows.length.toString(),
    });

    expect(lastIndexCell).toBeInTheDocument();
  });

  it("should not render more rows than passed in prop", () => {
    renderWithRouter(<Component />);

    const overflowingIndexCell = screen.queryByRole("cell", {
      name: (rows.length + 1).toString(),
    });

    expect(overflowingIndexCell).not.toBeInTheDocument();
  });
});
