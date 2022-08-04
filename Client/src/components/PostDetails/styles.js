import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '600px',

  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
      width: '100%',
    },
  },
  section: {
    borderRadius: '20px',
    padding: '1rem',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
  },
  imageSection: {
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      padding: '1rem',
      width: '95%',
    },
  },
  recommendedPosts: {
    display: 'flex-wrap wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: '1rem',
      width: '90%',
    },
  },
  loadingPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    height: '39vh',
  },
  commentsOuterContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '40rem',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: '80%',
    },
  },
  commentsInnerContainer: {
    height: '300px',
    width: '40rem',
    overflowY: 'auto',
    marginRight: '30px',
  },
}));