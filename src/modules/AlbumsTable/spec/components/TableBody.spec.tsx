import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { TableBody } from "../../src/components/TableBody";
import { AlbumsTableRow } from "modules/AlbumsTable/src/models/AlbumsTableRow";

const row1: AlbumsTableRow = {
  artistName: "name 1",
  id: "1",
  imageUrl: "",
  title: "title 1",
};
const row2: AlbumsTableRow = {
  artistName: "name 2",
  id: "2",
  imageUrl: "",
  title: "title 2",
};

const allRows = [row1, row2];
const displayedRows = [row1];

describe("TableBody", () => {
  const Component = () => (
    <TableBody allRows={allRows} displayedRows={displayedRows} />
  );

  it("should match snapshot", () => {
    expect(render(<Component />)).toMatchSnapshot();
  });
});
