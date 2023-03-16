import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Home", () => {
  it("renders home page", () => {
    render(<Home />);
    // check if all components are rendered
    expect(screen.getByTestId("title")).toBeInTheDocument();
    expect(screen.getByTestId("create-your-own-package")).toBeInTheDocument();
    expect(screen.getByTestId("ozel-paketin")).toBeInTheDocument();
  });
});
