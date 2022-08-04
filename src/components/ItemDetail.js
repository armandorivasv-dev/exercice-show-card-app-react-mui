import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const ItemDetail = ({ id, img, name, desc, price }) => {

  return (
    <Grid item key={id} xs={12} sm={12} md={12} >
      <Card
        sx={{ aling: 'center', mt: 4, height: '100%', display: 'flex', flexDirection: 'row', width: '100%' }}
      >
        <CardMedia
          component="img"
          sx={{
            // 16:9
            m: '1%',
          }}
          image={img}
          alt="random"
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography>
            PRICE: {price}
          </Typography>
          <Typography sx={{ mt: 2 }}>
            DESCRIPTION: {desc}
          </Typography>
          <CardActions sx={{ mt: 4 }}>
            <Button variant="contained">Buy</Button>
          </CardActions>
        </CardContent>

      </Card>
    </Grid>
  )
}
export default ItemDetail;
