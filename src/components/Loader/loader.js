import React from 'react';
import { CircularProgress } from '@mui/material';
import "./styles.css"

function CircularProgressInfinite() {
  return (
    <div className='loader'>
      <CircularProgress />
    </div>
  );
}

export default CircularProgressInfinite;
