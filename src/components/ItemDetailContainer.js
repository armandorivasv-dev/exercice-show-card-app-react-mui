import React from 'react';
import { useState, useEffect } from 'react';
import { getItemsById } from './getItems';
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const ItemDetailContainer = () => {

    const [ items, setItems ] = useState([]);

    const { itemId } = useParams();

    console.log(itemId)

    useEffect(() =>{
        getItemsById(itemId)
        .then(items => {
            setItems(items)
        }).catch(error => {
            console.log(error)
        })
    },[itemId])

  return (
  <Container>
    { items.map(e => <ItemDetail key={e.id} {...e}/>)}
  </Container>
    
  )
}
export default ItemDetailContainer;
