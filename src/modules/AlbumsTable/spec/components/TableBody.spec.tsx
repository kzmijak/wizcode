import { describe, it, expect } from "vitest";
import { TableBody } from "../../src/components/TableBody";
import { AlbumsTableRow } from "modules/AlbumsTable/src/models/AlbumsTableRow";
import { renderWithRouter } from "testUtils/renderWithRouter";

const row1 = {
  artistName: "name 1",
  id: "1",
  imageUrl: "",
  title: "title 1",
} as AlbumsTableRow;
const row2 = {
  artistName: "name 2",
  id: "2",
  imageUrl: "",
  title: "title 2",
} as AlbumsTableRow;

const allRows = [row1, row2];
const displayedRows = [row1];

describe("TableBody", () => {
  const Component = () => (
    <TableBody allRows={allRows} displayedRows={displayedRows} />
  );

  it("should match snapshot", () => {
    expect(renderWithRouter(<Component />)).toMatchSnapshot();
  });
});
