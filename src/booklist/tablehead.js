import { Checkbox, TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material";
import { Box } from "@mui/system";
import { visuallyHidden } from '@mui/utils';
const headCells = [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Book info',
    },
    {
      id: 'price',
      numeric: true,
      disablePadding: false,
      label: 'price',
    },
    {
      id: 'quantity',
      numeric: true,
      disablePadding: false,
      label: 'quantity',
    },
    {
      id: 'status',
      numeric: true,
      disablePadding: false,
      label: 'status',
    },

  ];
function TableHeader( { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort }) {
    const createSortHandler=() =>{ return true
    };
  
    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{
                'aria-label': 'select all desserts',
              }}
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={headCell.id}
              align={headCell.numeric ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  export default TableHeader;