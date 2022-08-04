import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState, useEffect } from 'react';
import { getItemsByCategory } from './getItems';
import { useParams} from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = () => {

  const  [ items, setItems ]  = useState([]);

  const { categoryId } = useParams(); 

  useEffect(() => {
    getItemsByCategory(categoryId)
      .then(items => {
        setItems(items)
      }).catch(error => {
        console.log(error)
      })
  }, [categoryId])

  return (
    <Container>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            List of Items
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so folks
            don&apos;t simply skip over it entirely.
          </Typography>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Typography
          component="h3"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom>
          {`CATEGORY: ${categoryId ? categoryId : 'ALL'} `}
        </Typography>
        <ItemList items={items} />
      </Container>
    </Container>
  )
}

export default ItemListContainer;