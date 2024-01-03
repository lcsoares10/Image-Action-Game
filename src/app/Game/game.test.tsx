import { fireEvent, render, screen } from "@testing-library/react";
import Game from "./page";
import { MOCK_TEMAS } from "./mock";
describe("<Logo />", () => {
  it("should render", () => {
    render(<Game />);
    expect(
      screen.queryByRole("heading", {
        name: /Selecione os temas que deseja jogar!/i,
      })
    ).toBeInTheDocument();
  });

  it("should render buttons with themes", () => {
    render(<Game />);

    const buttons = screen.getAllByLabelText("ButtonTheme");
    expect(buttons.length).toBe(MOCK_TEMAS.length);
  });

  it("add more themes", () => {
    render(<Game />);

    const buttons = screen.getAllByLabelText("ButtonTheme");
    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[2]);
    fireEvent.click(buttons[3]);

    expect(buttons[0]).toHaveClass("bg-[#800080]");
    expect(buttons[2]).toHaveClass("bg-[#800080]");
    expect(buttons[3]).toHaveClass("bg-[#800080]");
  });

  it("handles adding a theme", () => {
    render(<Game />);
    const themeButton = screen.getByText(MOCK_TEMAS[0]);

    fireEvent.click(themeButton);

    expect(themeButton).toHaveClass("bg-[#800080]");
  });

  it("handles removing a theme", () => {
    const { getByText } = render(<Game />);
    const themeButton = getByText(MOCK_TEMAS[0]);

    fireEvent.click(themeButton);
    fireEvent.click(themeButton);

    expect(themeButton).not.toHaveClass("bg-[#800080]");
  });
});
