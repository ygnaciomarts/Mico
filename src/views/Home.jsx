import React from 'react';
import ProductCard from '../components/ProductCard';
import { Container, Grid, Typography, Box } from '@mui/material';
import Slider from 'react-slick';
import QuickOffersSlider from '../components/QuickOfferSlider';

const Home = () => {
  const products = [
    {
      id: 1,
      name: 'Producto 1',
      description: 'Descripción del producto 1',
      price: 100,
      imageUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/c3/f7/6a/c3f76a82-5bc5-e291-e88e-56672a2b23f6/22UMGIM60461.rgb.jpg/500x500.png',
    },
    {
      id: 2,
      name: 'Producto 2',
      description: 'Descripción del producto 2',
      price: 200,
      imageUrl: 'https://ygnaciomarts.com/bandupshop/img/slider/Slider-PP_Reinaissance.png',
    },
    {
      id: 3,
      name: 'Producto 3',
      description: 'Descripción del producto 3',
      price: 150,
      imageUrl: 'https://images.unsplash.com/photo-1586190840529-fb6f14fa26e0',
    },
    {
      id: 4,
      name: 'Producto 4',
      description: 'Descripción del producto 4',
      price: 250,
      imageUrl: 'https://images.unsplash.com/photo-1593703327495-00397ecde96b',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <Grid container>
        <QuickOffersSlider />
      </Grid>
      <Box sx={{ width: '100%', textAlign: 'center', paddingTop: '40px' }}>
        <img
          src={`${import.meta.env.BASE_URL}mico-letras.png`} alt="MICO"
          style={{ width: '150px', marginBottom: '20px' }}
        />
      </Box>

      <Container sx={{ marginTop: '50px' }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#fff', marginBottom: '30px' }}>
          Productos destacados
        </Typography>

        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item sm={6} md={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#222', color: '#fff' }}>
        <Typography variant="body2" color="inherit">
          &copy; 2025 Mico. Todos los derechos reservados.
        </Typography>
      </footer>
    </div>
  );
};

export default Home;