import { render, screen, fireEvent } from "@testing-library/react";
import SignUpPage from "./SignUpPage";

test("renders the registration form", async () => {
  render(<SignUpPage />);

  expect(
    screen.getByText("Book Inventory")
  ).toBeInTheDocument();

  expect(screen.getByLabelText("Name")).toBeInTheDocument();
  expect(screen.getByLabelText("Email")).toBeInTheDocument();
  expect(screen.getByLabelText("Password")).toBeInTheDocument();
  expect(
    screen.getByLabelText("Confirm Password")
  ).toBeInTheDocument();

  expect(screen.getByRole("button", { name: "Registration" })).toBeInTheDocument();
});

test("validates the input fields", async () => {
  render(<SignUpPage />);

  fireEvent.input(screen.getByLabelText("Name"), {
    target: { value: "" },
  });
  fireEvent.input(screen.getByLabelText("Email"), {
    target: { value: "" },
  });
  fireEvent.input(screen.getByLabelText("Password"), {
    target: { value: "" },
  });
  fireEvent.input(screen.getByLabelText("Confirm Password"), {
    target: { value: "" },
  });

  fireEvent.click(screen.getByRole("button", { name: "Registration" }));

  expect(await screen.findByText("Please enter your name")).toBeInTheDocument();
  expect(await screen.findByText("Please enter your email")).toBeInTheDocument();
  expect(await screen.findByText("Please enter your password")).toBeInTheDocument();
  expect(await screen.findByText("required")).toBeInTheDocument();
});

// You need to have a backend service available in order to test the following test cases
test("submits the form successfully", async () => {
  render(<SignUpPage />);

  fireEvent.input(screen.getByLabelText("Name"), {
    target: { value: "John" },
  });
  fireEvent.input(screen.getByLabelText("Email"), {
    target: { value: "john@example.com" },
  });
  fireEvent.input(screen.getByLabelText("Password"), {
    target: { value: "password" },
  });
  fireEvent.input(screen.getByLabelText("Confirm Password"), {
    target: { value: "password" },
  });

  fireEvent.click(screen.getByRole("button", { name: "Registration" }));

  // Wait for the user to be redirected to the main page after a successful registration
  expect(await screen.findByText("Welcome to the Main page")).toBeInTheDocument();
});

test("redirects to the main page if the user is already authenticated", async () => {
  localStorage.setItem("auth", "token");

  render(<SignUpPage />);

  expect(await screen.findByText("Welcome to the Main page")).toBeInTheDocument();
});