import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'municipalityName', headerName: 'МО', flex: 1, sortable: false },
  {
    field: 'museumCount',
    headerName: 'Кол-во музеев',
    flex: 1,
  },
];

interface MunicipalitiesMuseumsTableProps {
  data: Map<string, number>;
}

const MunicipalitiesMuseumsTable = ({ data }: MunicipalitiesMuseumsTableProps) => (
  <DataGrid
    hideFooter
    disableColumnMenu
    columns={columns}
    rows={Array.from(data).map(([key, value], index) => ({
      id: index,
      municipalityName: key,
      museumCount: value,
    }))}
  />
);

export default MunicipalitiesMuseumsTable;
