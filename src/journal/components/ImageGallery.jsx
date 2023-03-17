import { Grid, Typography, ImageList, ImageListItem } from "@mui/material"
import itemData from '../data/imgData'


export const ImageGallery = () => {
  return (
    <Grid 
        container
        direction='column'
    >
    <Typography variant="h4">Imagenes</Typography>
    <ImageList sx={{ width: '100%', height: 450 }} cols={4} rowHeight={200}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>

    </Grid>
  )
}
