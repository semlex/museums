import { FeatureCollection } from 'geojson';
import { Source, Layer, FillLayer } from 'react-map-gl';

const districtsPopulationLayer: FillLayer = {
  id: 'districts',
  type: 'fill',
  paint: {
    'fill-color': {
      property: 'population',
      stops: [
        [0, '#15ff00'],
        [50000, '#12db00'],
        [100000, '#10c200'],
        [200000, '#0ea800'],
        [300000, '#0b8700'],
        [400000, '#096900'],
        [500000, '#064700'],
      ],
    },
    'fill-opacity': 0.7,
    'fill-outline-color': '#000000',
  },
};

const districtsMuseumsCountLayer: FillLayer = {
  id: 'districts',
  type: 'fill',
  paint: {
    'fill-color': {
      property: 'museumsCount',
      stops: [
        [0, '#15ff00'],
        [5, '#12db00'],
        [10, '#10c200'],
        [15, '#0ea800'],
        [20, '#0b8700'],
        [30, '#096900'],
        [40, '#064700'],
      ],
    },
    'fill-opacity': 0.7,
    'fill-outline-color': '#000000',
  },
};

interface DistrictsPolygonsProps {
  data?: FeatureCollection;
  choropleth: string;
}

const DistrictsPolygons = ({ data, choropleth }: DistrictsPolygonsProps) => {
  const layer = choropleth === 'population' ? districtsPopulationLayer : districtsMuseumsCountLayer;

  return (
    <Source type="geojson" data={data}>
      <Layer {...layer} />
    </Source>
  );
};

export default DistrictsPolygons;
