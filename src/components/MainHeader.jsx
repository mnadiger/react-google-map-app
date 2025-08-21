import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

export default function MainHeader({ tab, setTab }) {
  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Tabs value={tab} onChange={(e, v) => setTab(v)} textColor="inherit" indicatorColor="secondary">
            <Tab label="Google Map" />
            <Tab label="Leaflet Map" />
            <Tab label="OpenStreet Map" />
          </Tabs>
        </Toolbar>
      </AppBar>
      <Typography variant="h6" align="center" sx={{ mt: 3, mb: 2 }}>
        Map Examples
      </Typography>
    </>
  );
}
