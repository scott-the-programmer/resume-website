import React from "react";
import { render, mount } from "@testing-library/react";
import Hero from "../hero/Hero";
import Social from "../social/Social";

test("renders name in Hero correctly", () => {
  const { getByText } = render(<Hero />);
  const h1Element = getByText(/Scott Murray/i);
  expect(h1Element).toBeInTheDocument();
});

test("returns correct github link", () => {
  const { container } = render(<Social />);
  expect(container.querySelector('a[title="github"').href).toEqual("https://www.github.com/scott-the-programmer/");
});

test("returns correct instagram link", () => {
  const { container } = render(<Social />);
  expect(container.querySelector('a[title="instagram"').href).toEqual("https://www.instagram.com/shxppingtrxllxy/");
});

test("returns correct linkedin link", () => {
  const { container } = render(<Social />);
  expect(container.querySelector('a[title="linkedin"').href).toEqual("https://www.linkedin.com/in/scottalexandermurray/");
});

test("returns correct twitter link", () => {
  const { container } = render(<Social />);
  expect(container.querySelector('a[title="twitter"').href).toEqual("https://www.twitter.com/ScottProgrammer/");
});