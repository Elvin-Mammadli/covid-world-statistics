import { Divider, Grid } from '@mui/material';
import { useContext } from 'react';
import { ControlPane, DailyChart, Header, TotalCasesChart } from 'components';
import { MyContext } from 'contexts/DataProvider';


const Main = () => {
  const data = useContext(MyContext);
  const { statisticsType } = data;

  return (
    <Grid container spacing={4} padding='3%'>
      <Grid item xs={12}>
        <Header />
        <Divider />
      </Grid>

      <Grid item xs={12} md={8}>
        {statisticsType === 'new' ? <DailyChart /> : <TotalCasesChart />}
      </Grid>

      <Grid item xs={12} md={4}>
        <ControlPane />
      </Grid >
    </Grid >
  );
}

export default Main;