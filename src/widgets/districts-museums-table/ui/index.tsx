import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'districtName', headerName: 'Район', flex: 1, sortable: false },
  {
    field: 'museumCount',
    headerName: 'Кол-во музеев',
    flex: 1,
  },
];

interface DistrictsMuseumsTableProps {
  data: Map<string, number>;
}

const DistrictsMuseumsTable = ({ data }: DistrictsMuseumsTableProps) => (
  <DataGrid
    hideFooter
    disableColumnMenu
    columns={columns}
    rows={Array.from(data).map(([key, value], index) => ({
      id: index,
      districtName: key,
      museumCount: value,
    }))}
  />
);

export default DistrictsMuseumsTable;
