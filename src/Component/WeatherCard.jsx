import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Unit from './Unit';

function ChangeTemp({type, temp}){
  return(
    <>
      {type === 'imperial' && <Typography variant="body2" color="text.secondary">
          {temp + '°F'}
      </Typography>}
      {type === 'metric' && <Typography variant="body2" color="text.secondary">
          {temp + '°C'}
      </Typography>}
      {type === 'standard' && <Typography variant="body2" color="text.secondary">
          {temp}
      </Typography>}
    </>
  )
}


export default function WeatherCard({img, temp, cityName, weather, description, unit}) {
  const [newUnit, setNewUnit] = useState('metric')

  return (
    <Card>
      <CardMedia
        component="img"
        height="10%"
        image={img}
        alt={description}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cityName}
        </Typography>
        <ChangeTemp type={newUnit} temp={temp}></ChangeTemp>
        <Typography variant="body2" color="text.secondary">
          {weather}
        </Typography>
      </CardContent>
      <CardActions>
        <Unit unit={(e) => {
          unit(e);
          setNewUnit(e);
        }}></Unit>
      </CardActions>
    </Card>
  );
}
