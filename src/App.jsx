import { useState } from 'react';
import Box from '@mui/material/Box';
import GoogleMapTab from './components/GoogleMapTab';
import LeafletMapTab from './components/LeafletMapTab';
import OpenStreetMapTab from './components/OpenStreetMapTab';
import MainHeader from './components/MainHeader';
import './App.css';

function App() {
  const [tab, setTab] = useState(0);

  return (
    <>
      <MainHeader tab={tab} setTab={setTab} />
      <Box className="w-full max-w-2xl mx-auto mt-8 p-4 bg-white rounded shadow">
        <Box className="mt-6">
          {tab === 0 && <GoogleMapTab />}
          {tab === 1 && <LeafletMapTab />}
          {tab === 2 && <OpenStreetMapTab />}
        </Box>
      </Box>
    </>
  );
}

export default App
