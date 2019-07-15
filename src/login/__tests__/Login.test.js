import {
  render,
  cleanup,
  fireEvent,
  waitForElement
} from "@testing-library/svelte";

import Login from "../Login.svelte";

window.location.reload = jest.fn();

beforeEach(() => {
  cleanup();
});

describe("Login", () => {
  it("renders component", () => {
    const { container } = render(Login);

    expect(container.firstChild).toMatchSnapshot();
  });

  it("does not login and shows error message on invalid credentials", async () => {
    // given
    const { getByText, container } = render(Login);

    // when
    fireEvent.click(getByText("Login"));

    const errMessage = await waitForElement(
      () => container.querySelector("div.alert").innerHTML
    );

    // then
    expect(errMessage).toBe("Invalid username/password");
  });
});
