import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  centeredText: {
    textAlign: 'center'
  },
  centered: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  formHeader: {
    margin: '.5em 0'
  },
  dialogText: {
    padding: '1em',
    paddingTop: 0
  }
});

export default useStyles;
