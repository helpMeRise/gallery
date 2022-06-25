import React, { useEffect } from 'react';
// import { Card } from './Card/Card';
import { usePhotos } from '../../../hooks/usePhotos';
import { useDispatch } from 'react-redux';
import { photosSlice } from '../../../store/photos/photosSlice';
// import { Masonry } from '@mui/lab';
// import style from './List.module.css';
import { ImageList } from '@mui/material';
import ImageListItem from '@mui/material/ImageListItem';

export const List = props => {
  const photos = usePhotos();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(photosSlice.actions.photosRequest);
  });

  return (
    <ImageList variant='masonry' cols={5} gap={10}>
      {photos[0].length > 0 ? (
        photos[0].map((item) => (
          <ImageListItem key={item.id}>
            <img src={item.urls.thumb}/>
          </ImageListItem>
        ))
        ) : (
          <p>Загрузочка</p>
        )}
    </ImageList>
  );
};
