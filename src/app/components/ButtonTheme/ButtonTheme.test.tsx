import { fireEvent, render, screen } from "@testing-library/react";
import ButtonTheme from ".";

describe("ButtonTheme", () => {
  it("should render default", () => {
    render(<ButtonTheme text="Teste" />);

    const button = screen.getByRole("button");
    expect(button).toHaveClass(
      "border-2 border-[#800080]  text-white font-bold py-6 px-16 rounded"
    );
  });

  it("should render background different when selected ", () => {
    render(<ButtonTheme text="Teste" selected />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(button).toHaveClass("bg-[#800080]");
  });
});
