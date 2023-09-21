import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils"; // Import act
import App from "./App";

describe("App", () => {
  it("renders the app", () => {
    render(<App />);
    expect(screen.getByText("Vite + React")).toBeInTheDocument();
  });
  it("increments the count", () => {
    render(<App />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("count is 0");
    act(() => {
      button.click();
    });
    act(() => {
      button.click();
    });
    act(() => {
      button.click();
    });
    act(() => {
      button.click();
    });
    act(() => {
      button.click();
    });
    act(() => {
      button.click();
    });
    act(() => {
      button.click();
    });
    act(() => {
      button.click();
    });
    act(() => {
      button.click();
    });
    act(() => {
      button.click();
    });
    act(() => {
      button.click();
    });
    expect(button).toHaveTextContent("count is 10");
  });
});
