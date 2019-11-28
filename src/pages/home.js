import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { 
  fetchImages,
  getDetail,
  likeImage,
  unlikeImage
} from '../store/actions'

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

import InfiniteScroll from 'react-infinite-scroller'
import { dateParse } from '../utils'


const Home = ({
  fetchImages,
  getDetail, 
  images,
  likeImage,
  unlikeImage,
  unsplash
}) => {

  return (
    <div
      style={{marginTop: '67px'}}
    >
      <InfiniteScroll
        pageStart={0}
        loadMore={() => {fetchImages(images.length + 1)}}
        hasMore={true || false}
      >
        <GridList 
          cellHeight={'auto'}
          cols={4}
          style={{margin: 0}}
        >
          {images.map((item, index) => (
            <GridListTile
              key={item.id+'.'+index} 
              cols={((index % 5) === 0) ? 2 : 1}
            >
              <Link 
                to={'/detail/'+item.id}
                onClick={() => {
                  getDetail(item.id);
                }}
              >
                <img 
                  src={item.urls.regular} 
                  alt={item.alt_description} 
                  style={{objectFit: 'cover', height: '100%', width: '100%'}}
                />
              </Link>
              <GridListTileBar
                title={
                  <a 
                    href={item.user.links.html}
                    target={'_blank'}
                    style={{
                      color: 'white',
                      textDecoration: 'none'
                    }}
                  >
                    {item.user.name}</a>
                }
                subtitle={<span>{dateParse(item.created_at)}</span>}
                actionIcon={
                  <div 
                    style={{color: 'white'}}
                  >
                  {item.likes}
                  <IconButton 
                    disabled={unsplash.isAuthenticated ? false : true}
                    style={item.liked_by_user ? {color: 'red'} : {color: 'white'}}
                    onClick={() => item.liked_by_user ? unlikeImage(item.id) : likeImage(item.id)}
                  >
                    <FavoriteIcon/>
                  </IconButton>
                  </div>
                }                
              />
            </GridListTile>
          ))}
        </GridList>    
      </InfiniteScroll>
    </div>
  )
}

const mapStateToProps = state => ({
  images: state.images.photos,
  unsplash: state.unsplash
});

const mapDispatchToProps = {
  fetchImages,
  getDetail,
  likeImage,
  unlikeImage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Home);