import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { ColumnHeader } from "../../src/components/ColumnHeader";

describe("ColumnHeader", () => {
  const Component = () => <ColumnHeader column="Artist" />;

  it("should match snapshot", () => {
    expect(render(<Component />)).toMatchSnapshot();
  });
});
