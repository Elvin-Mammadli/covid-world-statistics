import Main from 'pages/Main';
import { Box, CircularProgress, Typography } from '@mui/material';
import { MyContext } from 'contexts/DataProvider';
import { useContext, useEffect, useState } from 'react';
import { useStyles } from 'styles';


const App = () => {
  const classes = useStyles();
  const data = useContext(MyContext);
  const [delay, setDelay] = useState('')

  useEffect(() => {
    setTimeout(() => {
      setDelay('This might take from 20 seconds up to 1 minute according to your internet speed, please wait...')
    }, 5000);
  }, [])

  return (
    <>
      {data.data ? <Main /> :
        <Box className={classes.loading}>
          <CircularProgress />
          <Typography>Loading...{delay}</Typography>
        </Box>
      }
    </>
  );
}

export default App;
