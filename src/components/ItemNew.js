import React from 'react'
import { getItemsByCategory } from './getItems'
import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Grid from '@mui/material/Grid';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const data = [
  {
    id: 1,
    name: "CARD Nro 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec massa nunc. Mauris quis neque.",
    price: 1.99,
    cat: "category1",
    img: "https://via.placeholder.com/500/000000/FFFFFF/?text=CARD_Nro_1"
  },
  {
    id: 2,
    name: "CARD Nro 2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec massa nunc. Mauris quis neque.",
    price: 1.99,
    cat: "category1",
    img: "https://via.placeholder.com/500/000000/FFFFFF/?text=CARD_Nro_2"
  },
  {
    id: 3,
    name: "CARD Nro 3",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec massa nunc. Mauris quis neque.",
    price: 1.99,
    cat: "category1",
    img: "https://via.placeholder.com/500/000000/FFFFFF/?text=CARD_Nro_3"
  },
  {
    id: 4,
    name: "CARD Nro 4",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec massa nunc. Mauris quis neque.",
    price: 2.99,
    cat: "category2",
    img: "https://via.placeholder.com/500/000000/FFFFFF/?text=CARD_Nro_4"
  },
  {
    id: 5,
    name: "CARD Nro 5",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec massa nunc. Mauris quis neque.",
    price: 2.99,
    cat: "category2",
    img: "https://via.placeholder.com/500/000000/FFFFFF/?text=CARD_Nro_5"
  },
  {
    id: 6,
    name: "CARD Nro 6",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec massa nunc. Mauris quis neque.",
    price: 2.99,
    cat: "category2",
    img: "https://via.placeholder.com/500/000000/FFFFFF/?text=CARD_Nro_6"
  },
  {
    id: 7,
    name: "CARD Nro 7",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec massa nunc. Mauris quis neque.",
    price: 3.99,
    cat: "category3",
    img: "https://via.placeholder.com/500/000000/FFFFFF/?text=CARD_Nro_7"
  },
  {
    id: 8,
    name: "CARD Nro 8",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec massa nunc. Mauris quis neque.",
    price: 3.99,
    cat: "category3",
    img: "https://via.placeholder.com/500/000000/FFFFFF/?text=CARD_Nro_8"
  },
  {
    id: 9,
    name: "CARD Nro 9",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec massa nunc. Mauris quis neque.",
    price: 3.99,
    cat: "category3",
    img: "https://via.placeholder.com/500/000000/FFFFFF/?text=CARD_Nro_9"
  }
]

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const ItemNew = () => {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
    {/* End hero unit */}
    <Grid container spacing={4}>
      {cards.map((card) => (
        <Grid item key={card} xs={12} sm={6} md={4}>
          <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <CardMedia
              component="img"
              sx={{
                // 16:9
                pt: '56.25%',
              }}
              image="https://source.unsplash.com/random"
              alt="random"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                Heading
              </Typography>
              <Typography>
                This is a media card. You can use this section to describe the
                content.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">View</Button>
              <Button size="small">Edit</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
  )
}

