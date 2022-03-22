import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  loading: {
    width: '100%',
    height: '95vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
    border: '1px solid black',
    padding: '0 5%',
    textAlign: 'center'
  },
  text: {
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  btn: {
    width: '150px',
  },
  controlCard: {
    padding: '5%',
    justifyContent: "space-around",
    alignItems: "center",
  },
  graphics: {
    borderColor: 'rgba(255, 0, 0, 0.8)',
    backgroundColor: 'rgba(255, 0, 0, 0.5)'
  }
})