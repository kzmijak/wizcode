import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App } from "./App";

describe("App.tsx", () => {
  it("should render button", () => {
    render(<App />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should increment counter after clicking the button", async () => {
    render(<App />);

    userEvent.click(screen.getByRole("button"));

    expect(
      await screen.findByText(/Kliknięto mnie już 1 razy/)
    ).toBeInTheDocument();
  });
});
