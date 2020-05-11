import React from "react";
import { render } from "@testing-library/react";
import AppHeader from "../header/AppHeader";

test("renders name in navbar correctly", () => {
  const { getByText } = render(<AppHeader />);
  const h1Element = getByText(/Scott Murray/i);
  expect(h1Element).toBeInTheDocument();
});
