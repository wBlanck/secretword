import { render } from "@testing-library/react";
import { checkMatchingLetters } from "../components/context/AppActions";
import Input from "./Input";

it("check how many matching letters in the guessedWord", () => {
  expect(checkMatchingLetters("beer", "beer")).toBe(4);
});

/* it("check if input clears after submit", () => {
  const comp = render(<Input />);
});
 */
