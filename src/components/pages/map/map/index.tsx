import Map from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const TOKEN =
  'pk.eyJ1Ijoic2F0b3NoaS1saXUiLCJhIjoiY20xaGJydDA1MDEweDJqb2NuYXpjZHRmMSJ9.oifH9oKWhINpd_3lPmqXcw';

export const MapContainer = () => {
  return (
    <Map
      style={{ width: '100vw', height: '100vh' }}
      mapboxAccessToken={TOKEN}
      mapStyle="mapbox://styles/satoshi-liu/cm1hcayc0052001r7h4eb96o3"
    />
  );
};
