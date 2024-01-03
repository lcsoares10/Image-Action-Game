import { render, screen } from "@testing-library/react";
import ButtonInit from ".";

describe("ButtonInit", () => {
  it("should render a button default", () => {
    render(<ButtonInit />);
    expect(screen.getByRole("button")).toHaveClass(" bg-[#7CFC00] text-black ");
  });
});
