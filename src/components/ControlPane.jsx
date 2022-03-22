import {
  Autocomplete,
  Button,
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField
} from '@mui/material';
import { useContext } from 'react';
import { MyContext } from 'contexts/DataProvider';
import { useStyles } from "styles";


export const ControlPane = () => {
  const classes = useStyles();
  const data = useContext(MyContext);
  const { setCountry, setPeriod, chartType, setChartType, statisticsType, setStatisticsType, options } = data;

  const handleRadioChange = (event) => {
    setChartType(event.target.value);
  };

  const cases = [
    { value: 'new', label: 'New cases vs Death cases' },
    { value: 'total', label: 'Total cases and deaths' }
  ]

  const addRemoveData = request => {
    if (request === "add") {
      setPeriod(prev => prev + 7)
    } else {
      setPeriod(prev => prev <= 7 ? 7 : prev - 7)
    }
  }

  return (
    <Card className={classes.controlCard} >
      <Grid container spacing={2}>

        <Grid item xs={12}>
          <FormControl>
            <FormLabel id="radio-buttons-group">Graphic type</FormLabel>
            <RadioGroup
              aria-labelledby="radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={statisticsType === 'total' ? 'Bar' : chartType}
              onChange={handleRadioChange}
            >
              {statisticsType === 'new' && <FormControlLabel value="Line" control={<Radio />} label="Line Chart" />}
              <FormControlLabel value="Bar" control={<Radio />} label="Bar Chart" />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Autocomplete
            filterSelectedOptions
            options={options}
            getOptionLabel={option => option.label}
            defaultValue={{ value: "AZE", label: "Azerbaijan" }}
            isOptionEqualToValue={(option, value) => option.value === value.value}
            onChange={(event, selected) => setCountry(selected.value)}
            renderInput={params => <TextField {...params} label="Countries" />}
            sx={{ width: '100%' }}
          />
        </Grid>

        <Grid item xs={12}>
          <Autocomplete
            filterSelectedOptions
            options={cases}
            getOptionLabel={option => option.label}
            defaultValue={{ value: "new", label: "New cases vs Death cases" }}
            isOptionEqualToValue={(option, value) => option.value === value.value}
            onChange={(event, selected) => setStatisticsType(selected.value)}
            renderInput={params => <TextField {...params} label="Statistics" />}
            sx={{ width: '100%' }}
          />
        </Grid>

        {statisticsType === 'new' && <Grid item xs={12}>
          <Button onClick={() => addRemoveData("add")}>
            Add data
          </Button>
          <Button onClick={() => addRemoveData("remove")}>
            Remove data
          </Button>
        </Grid>}
      </Grid>

    </Card>
  );
};