import React from 'react';
import { PropTypes } from 'prop-types';
import formatDate from '../../../../../utils/formatDate';


export const Date = ({ date }) => (
  <time dateTime={date}>{formatDate(date)}</time>
);

Date.propTypes = {
  date: PropTypes.string,
};
