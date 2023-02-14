import { render, screen } from "@testing-library/react";
import BookTable from "./booktable";

test("username input should be rendered",()=>{
    render(<BookTable/>);
    const usernameInput = screen.getAllByTestId("tableHeader");
    expect(usernameInput).toBeInTheDocument();
})