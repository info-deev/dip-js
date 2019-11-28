import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { 
  fetchImage,
  likeImage,
  unlikeImage
} from '../store/actions';
import { dateParse, isEmpty } from '../utils'


const Detail = ({
  detail,
  fetchImage,
  likeImage,
  unlikeImage,
  unsplash
}) => {

  const [locState, setState] = React.useState({
    imageSize: false
  });

  const toggleImage = () => {
    setState({ ...locState, imageSize: !locState.imageSize });
  };

  if ( isEmpty(detail) ) {
    fetchImage(
      window.location.pathname.substr(
        window.location.pathname.lastIndexOf('/') + 1
      )
    );
  }

  return (
    <div
      style={{marginTop: '100px'}}
    > 
      <Grid container>
        <Grid xs={12} item={true}>
          <h3>
            <a
              href={ isEmpty(detail) ? '/' : detail.user.links.html }
              target={'_blank'}
              style={{textDecoration: 'none', color: 'black'}}
            >
              { isEmpty(detail) ? ' ' : detail.user.first_name} { isEmpty(detail) ? ' ' : detail.user.last_name}
            </a>
          </h3>
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{marginBottom: '6px'}}
        >
          <Grid xs={2} item={true}>
            <IconButton
              component={Link}
              to={'/'}
            >
              <ChevronLeftIcon />
            </IconButton>
          </Grid> 
          <Grid xs={4} item={true}>
            { isEmpty(detail) ? '00.00.0000' : dateParse(detail.created_at) }
          </Grid>
          <Grid xs={2} item={true}>
            { isEmpty(detail) ? '' : detail.likes }
            <IconButton
              disabled={unsplash.isAuthenticated ? false : true}
              style={ detail.liked_by_user ? {color: 'red'} : {color: 'gray'} }
              onClick={() => {detail.liked_by_user ? unlikeImage(detail.id) : likeImage(detail.id)}}
            >
              <FavoriteIcon/>
            </IconButton>
          </Grid>
        </Grid>
        <Grid xs={12} item={true}>
          <img 
            src={ isEmpty(detail) ? '' : detail.urls.regular} 
            alt={ isEmpty(detail) ? '' : detail.alt_description}
            style={locState.imageSize ? {width: '100%', height: 'auto', cursor: 'zoom-out'} : {width: 'auto', height: '75vh', cursor: 'zoom-in'}}
            onClick={() => toggleImage()}        
          />
        </Grid>
      </Grid>
    </div>
  )
}

const mapStateToProps = state => ({
  detail: state.images.detail,
  unsplash: state.unsplash
});

const mapDispatchToProps = { 
  fetchImage,
  likeImage,
  unlikeImage
};


export default connect(mapStateToProps, mapDispatchToProps)(Detail);