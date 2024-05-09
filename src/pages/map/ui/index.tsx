import { Stack, Typography } from '@mui/material';
import { MuseumsMap } from '@/widgets/museums-map';

const MapPage = () => (
  <Stack spacing={2}>
    <Typography variant="h4">Карта музеев Санкт-Петербурга</Typography>
    <MuseumsMap />
  </Stack>
);

export default MapPage;
