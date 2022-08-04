import React from 'react'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Item = ({ id, name, cat, img, price }) => {

  return (
    <Grid item key={id} xs={12} sm={6} md={4}>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardMedia
          component="img"
          sx={{
            // 16:9
            pt: '5%',
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
        </CardContent>
        <CardActions>
          <Button href={`/itemdetail/${id}`} size="small">View detail</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Item;
