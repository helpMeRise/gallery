import React from 'react';
import { PropTypes } from 'prop-types';


export const Card = ({ data }) => {
  const {
    urls,
    // 'created_at': date,
    // likes,
    // user,
  } = data;
  return (
    <div style={{
      backgroundImage: `url(${urls.thumb})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
    }}>
      <img src={urls.thumb}/>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object,
};

