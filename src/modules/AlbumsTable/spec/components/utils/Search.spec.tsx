import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Search } from "../../../src/components/utils/Search";

describe("Search", () => {
  const Component = () => <Search value="" onChange={() => null} />;

  it("should match snapshot", () => {
    expect(render(<Component />)).toMatchSnapshot();
  });

  it("should render static component", () => {
    render(<Component />);

    const component = screen.getByLabelText("Search");
    expect(component).toHaveAttribute("type", "search");
    expect(component).toHaveAttribute("placeholder", "Type here...");
  });
});
