import { FeatureCollection } from 'geojson';

export const countDistrictsMuseums = (museumsPoints?: FeatureCollection): Map<string, number> => {
  const result = new Map<string, number>();

  museumsPoints?.features.forEach((museumPoint) => {
    const administrativeUnit = museumPoint.properties?.administrative_unit as string;

    if (administrativeUnit) {
      if (result.has(administrativeUnit)) {
        result.set(administrativeUnit, Number(result.get(administrativeUnit)) + 1);
      } else {
        result.set(administrativeUnit, 1);
      }
    }
  });

  return result;
};
