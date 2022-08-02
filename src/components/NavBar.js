import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
import { getCategories } from './getItems';

export default function NavBar() {

  const [ categories, setCategories ] = useState([]);

  useEffect(() => {
    getCategories()
      .then(categories => { 
        setCategories(categories); 
      })
      .catch(error => {
        console.log(error);
      })
  },[]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            App search category
          </Typography>
        
          <Button href="/" color="inherit">all Category</Button>
          {categories.map(e => <Button key={e.id} href={`/category/${e.id}`} color="inherit">{e.name}</Button> )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}