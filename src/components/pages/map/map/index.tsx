import Map from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import { useState } from 'react';
import clsx from 'clsx';

import styles from './index.module.scss';

const TOKEN =
  'pk.eyJ1Ijoic2F0b3NoaS1saXUiLCJhIjoiY20xaGJydDA1MDEweDJqb2NuYXpjZHRmMSJ9.oifH9oKWhINpd_3lPmqXcw';

export const MapContainer = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  const handleMapLoaded = () => setMapLoaded(true);

  return (
    <>
      <div className={clsx(styles['overlay'], mapLoaded && styles['hidden'])} />
      <Map
        style={{ width: '100vw', height: '100vh' }}
        mapboxAccessToken={TOKEN}
        onLoad={handleMapLoaded}
        mapStyle="mapbox://styles/satoshi-liu/cm1hcayc0052001r7h4eb96o3"
      />
    </>
  );
};
