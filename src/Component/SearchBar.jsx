import { useState } from "react";
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'

export default function SearchBar({search}){
    const [searchCity, setSearchCity]  = useState('London');

    return (
        <>
        <Container maxWidth="md">
        <TextField
          fullWidth
          id="search-city"
          label="Search City"
          value={searchCity}
          onChange={(e) => setSearchCity(e.target.value)}
          variant="standard"
        />
        <Button variant="text" color="primary" onClick={() => search(searchCity)}>
          Search
        </Button>
        </Container>
        </>
    )
}