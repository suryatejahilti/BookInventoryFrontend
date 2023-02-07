
import { Button } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import { useState } from "react"
import { useSelector } from "react-redux"
import { getAllBooks } from "../store/reducers/BooksSlice"

export const BookTableAdmin=()=>{
    const books=useSelector(getAllBooks)
    const [checkboxSelection, setCheckboxSelection] = useState(true);
    return (
        <div style={{ width: '100%' }}>
        <Button
          sx={{ mb: 2 }}
          onClick={() => setCheckboxSelection(!checkboxSelection)}
        >
          Toggle checkbox selection
        </Button>
        <div style={{ height: 400 }}>
          <DataGrid checkboxSelection={checkboxSelection} {...books} />
        </div>
      </div>
    )
}