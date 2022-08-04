
import Item from './Item';
import Grid from '@mui/material/Grid';

const ItemList = ({items}) => {

  return(
    
     <Grid container spacing={4}> 
        {items.map(e => <Item key={e.id} {...e}/>)} 
    </Grid> 

  );
};
export default ItemList;