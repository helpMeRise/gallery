import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { photosSlice } from '../store/photos/photosSlice';


export const usePhotos = () => {
  const photos = useSelector(state => state.photosReducer.data);
  const token = useSelector(state => state.tokenReducer.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(photosSlice.actions.photosRequest());
  }, [token]);

  return [photos];
};

