//import { Search } from "@mui/icons-material"
import { alpha, InputBase } from "@mui/material";
import { NavLink } from "react-router-dom"
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from "react-redux";
import { getSearch, setSearch } from "../../store/reducers/SearchSlice";
import { getAuth } from "../../store/reducers/AuthSlice";
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const  ToggleNavbar = ({handleBookState, handleGoogleBooksState,handleAddBookState}) => {
    

      //const search=useSelector(getSearch);
      const dispatch =useDispatch();
      const auth =useSelector(getAuth)
      let styler ={
      }
      if (auth.roles=='USER'){
        styler ={
          display :"none"
        }
      }

    return(

    <nav className='navbar navbar-expand-lg navbar-dark main-color bg-dark py-3'>

      <div className='container-fluid'>


        <button className='navbar-toggler' type='button'

          data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown'

          aria-controls='navbarNavDropdown' aria-expanded='false'

          aria-label='Toggle Navigation'

        >

          <span className='navbar-toggler-icon'></span>

        </button>

        <div className='collapse navbar-collapse' id='navbarNavDropdown'>

          <ul className='navbar-nav'>

            <li className='nav-item'>

              <div className='nav-link' onClick={handleBookState}>Books</div>

            </li>

            <li className='nav-item'>

            <div className='nav-link' onClick={handleGoogleBooksState}>Google Books</div>

            </li>

            <li style={styler} className='nav-item'>
            <div className='nav-link' onClick={handleAddBookState}>AddBook</div>

            </li>

          </ul>


        </div>

      </div>

    </nav>

    )

}

export default ToggleNavbar