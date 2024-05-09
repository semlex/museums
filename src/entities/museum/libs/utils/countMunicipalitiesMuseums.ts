import { FeatureCollection } from 'geojson';

export const countMunicipalitiesMuseums = (
  museumsPoints?: FeatureCollection,
): Map<string, number> => {
  const result = new Map<string, number>();

  museumsPoints?.features.forEach((museumPoint) => {
    const municipality = museumPoint.properties?.municipality as string;

    if (municipality) {
      if (result.has(municipality)) {
        result.set(municipality, Number(result.get(municipality)) + 1);
      } else {
        result.set(municipality, 1);
      }
    }
  });

  return result;
};
