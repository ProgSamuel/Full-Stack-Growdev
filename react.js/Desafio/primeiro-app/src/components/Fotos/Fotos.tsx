import React from 'react';
import { GalleryContainer, PhotoContainer } from './Fotos';

export const Gallery = ({ photos }) => {
  return (
    <GalleryContainer>
      {photos.map((photo, index) => (
        <Photo key={index} src={photo} alt={`Photo ${index + 1}`} />
      ))}
    </GalleryContainer>
  );
};

export const Photo = ({ src, alt }) => {
  return <PhotoContainer src={src} alt={alt} />;
};

export const photos = [
  'https://i.pinimg.com/originals/ee/28/af/ee28afd23855bfd3b5b15961585e6db1.png',
  'https://a.mktgcdn.com/p/2igBnBaFz4-tW2nwKSKJt1TyP0JxA5WA5suMFwYp26U/2000x1333.jpg',
  'https://images.catchnews.com/upload/2018/04/19/5_108815.jpg',
  'https://www.the-bahamas-restaurants.com/wp-content/uploads/2021/10/Underwater-Restaurants.jpg',
  'https://www.orangesmile.com/extreme/img/main/seafiresaltsky-restaurant_1.jpg',
  'https://highworthcitizen.com/wp-content/uploads/2019/11/underwater-restaurants.jpg'
];

const MinhaGaleriaDeFotos = () => {
  return (
    <div className='galeria'>
      <h1>Minha Galeria de Fotos</h1>
      <Gallery photos={photos} />
    </div>
  );
};

export default MinhaGaleriaDeFotos;
