import type { GeoJSON } from 'geojson';
import { Source, Layer, SymbolLayer } from 'react-map-gl';

const museumsLayer: SymbolLayer = {
  id: 'museums',
  type: 'symbol',
  layout: {
    'icon-image': 'museum',
    'icon-size': 0.7,
    'icon-allow-overlap': true,
  },
};

interface MuseumsPointsProps {
  data?: GeoJSON;
}

const MuseumsPoints = ({ data }: MuseumsPointsProps) => {
  return (
    <Source type="geojson" data={data}>
      <Layer {...museumsLayer} />
    </Source>
  );
};

export default MuseumsPoints;
