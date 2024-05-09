import type { FeatureCollection } from 'geojson';
import { useMemo, useState } from 'react';
import { Map, NavigationControl } from 'react-map-gl';
import { Grid } from '@mui/material';
import MuseumsPoints, { countDistrictsMuseums, useGetMuseumsPointsQuery } from '@/entities/museum';
import DistrictsPolygons, { useGetDistrictsQuery } from '@/entities/district';
import SelectChoropleth from '@/features/select-choropleth';

import 'mapbox-gl/dist/mapbox-gl.css';

const mapboxAccessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const MuseumsMap = () => {
  const [choropleth, setChoropleth] = useState<string>('population');

  const { data: districts } = useGetDistrictsQuery();
  const { data: museumsPoints } = useGetMuseumsPointsQuery();

  const districtsMuseumsCount = useMemo(
    () => countDistrictsMuseums(museumsPoints),
    [museumsPoints],
  );

  const mappedDistricts: FeatureCollection = useMemo(
    () => ({
      type: 'FeatureCollection',
      features:
        districts?.map((district) => ({
          type: 'Feature',
          geometry: district.geometry,
          properties: {
            population: district.population,
            museumsCount: districtsMuseumsCount.get(district.name),
          },
        })) || [],
    }),
    [districts, districtsMuseumsCount],
  );

  return (
    <Grid container gap={2} justifyContent="flex-end">
      <Grid item xs={12} md={4}>
        <SelectChoropleth value={choropleth} setChoropleth={setChoropleth} />
      </Grid>
      <Grid item xs={12}>
        <Map
          mapboxAccessToken={mapboxAccessToken}
          initialViewState={{
            latitude: 59.942,
            longitude: 30.315,
            zoom: 12,
          }}
          style={{ width: '100%', height: '70vh' }}
          mapStyle="mapbox://styles/mapbox/streets-v12"
        >
          <NavigationControl />
          <DistrictsPolygons data={mappedDistricts} choropleth={choropleth} />
          <MuseumsPoints data={museumsPoints} />
        </Map>
      </Grid>
    </Grid>
  );
};

export default MuseumsMap;
