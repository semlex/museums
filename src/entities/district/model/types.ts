import { Geometry, Point } from 'geojson';

export type District = {
  id: number;
  name: string;
  population: number;
  geometry: Geometry;
  center: Point;
  type: string;
};

export type GetDistrictsResponse = District[];
