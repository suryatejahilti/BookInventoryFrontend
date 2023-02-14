import { render, screen } from "@testing-library/react"
import BookCard from "./card";

test("bookcard is shown",()=>{
    render(<BookCard/>);
    const bookCard=screen.getByTestId("bookCard")
    expect(bookCard).toBeInTheDocument();
})