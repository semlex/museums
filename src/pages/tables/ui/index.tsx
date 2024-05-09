import { useMemo } from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import { DistrictsMuseumsTable } from '@/widgets/districts-museums-table';
import { MunicipalitiesMuseumsTable } from '@/widgets/municipalities-museums-table';
import {
  countDistrictsMuseums,
  countMunicipalitiesMuseums,
  useGetMuseumsPointsQuery,
} from '@/entities/museum';

const TablesPage = () => {
  const { data: museumsPoints } = useGetMuseumsPointsQuery();

  const districtsMuseums = useMemo(() => countDistrictsMuseums(museumsPoints), [museumsPoints]);
  const municipalitiesMuseums = useMemo(
    () => countMunicipalitiesMuseums(museumsPoints),
    [museumsPoints],
  );

  return (
    <Stack gap={2}>
      <Typography variant="h4">Музеи Санкт-Петербурга</Typography>
      <Grid container spacing={2} alignItems="flex-start">
        <Grid item xs={12} md={6}>
          <DistrictsMuseumsTable data={districtsMuseums} />
        </Grid>
        <Grid item xs={12} md={6}>
          <MunicipalitiesMuseumsTable data={municipalitiesMuseums} />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default TablesPage;
