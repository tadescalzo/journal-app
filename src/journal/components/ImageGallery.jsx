import { Grid, Typography, ImageList, ImageListItem } from "@mui/material"



export const ImageGallery = ({images}) => {
  return (
    <Grid 
        container
        direction='column'
    >
    <Typography variant="h4">Imagenes</Typography>
    

        <ImageList sx={{ width: '100%', height: 450 }} cols={4} rowHeight={200}>
      {(images.length >= 0)  ?
        images.map((image) => (
        <ImageListItem key={image}>
          <img
            src={`${image}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt='Imagen de la nota'
            loading="lazy"
          />
        </ImageListItem>
        ))
        :
        <ImageListItem key={images[0]}>
          <img
            src={`${images[0]}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${images[0]}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt='Imagen de la nota'
            loading="lazy"
          />
        </ImageListItem>
    }
    </ImageList>
      
    
    

    </Grid>
  )
}
