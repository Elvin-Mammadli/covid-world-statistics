import { Box, Typography } from "@mui/material";
import { useStyles } from "styles";

export const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.header}>
      <Typography variant='h3' className={classes.text} sx={{
        fontWeight: 'bold'
      }}>
        Covid monthly statistics
      </Typography>
    </Box>
  );
};