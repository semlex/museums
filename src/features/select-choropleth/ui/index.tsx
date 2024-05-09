import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

interface SelectChoroplethProps {
  value: string;
  setChoropleth: React.Dispatch<React.SetStateAction<string>>;
}

const SelectChoropleth = ({ value, setChoropleth }: SelectChoroplethProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    setChoropleth(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="сhoropleth-select-label">Картограмма</InputLabel>
      <Select
        labelId="сhoropleth-select-label"
        id="сhoropleth-select"
        label="Картограмма"
        value={value}
        onChange={handleChange}
        size="small"
      >
        <MenuItem value={'population'}>по численности населения</MenuItem>
        <MenuItem value={'museumsCount'}>по количеству музеев</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectChoropleth;
