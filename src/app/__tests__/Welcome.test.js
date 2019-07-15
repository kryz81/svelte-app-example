import { render, cleanup } from "@testing-library/svelte";

import Welcome from "../Welcome.svelte";

beforeEach(cleanup);

describe("Welcome", () => {
  it("renders component", () => {
    const { container } = render(Welcome, { props: { user: "Test User" } });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders welcome message", () => {
    const { getByText } = render(Welcome, { props: { user: "Test User" } });

    expect(getByText("Hello Test User! Welcome in eCampus."));
  });
});
