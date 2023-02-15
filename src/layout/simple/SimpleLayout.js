import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { getAuth } from '../../store/reducers/AuthSlice';
// components
//import Logo from '../../components/logo';

// ----------------------------------------------------------------------

const StyledHeader = styled('header')(({ theme }) => ({
  top: 0,
  left: 0,
  lineHeight: 0,
  width: '100%',
  position: 'absolute',
  padding: theme.spacing(3, 3, 0),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(5, 5, 0),
  },
}));

// ----------------------------------------------------------------------

export default function SimpleLayout() {
  const auth=localStorage.getItem("auth")
  const location =useLocation();
  const navigate=useNavigate();
  if (auth){
    //navigate('/main')
  }
  else {}
  return (
    <>
    {/* {auth ? <Navigate to="/main"  />:
    <Navigate to="/login"  />
      } */}



<Outlet />
    </>
  );
}
