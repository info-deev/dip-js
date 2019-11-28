import { 
  FETCH_IMAGES,
  FETCH_IMAGE,
  DETAIL_IMAGES,
  LIKE_IMAGE,
  UNLIKE_IMAGE
} from "../types";
import { isEmpty } from '../../utils'

const initialState = {
  photos: [],
  detail: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES:
      return {
        photos: [
          ...state.photos,
          ...action.photos
        ]
      }

    case FETCH_IMAGE:
      return {
        photos: state.photos,
        detail: action.detail
      }

    case DETAIL_IMAGES:
      let detail = '';
      for (const key in state.photos) {
        if (state.photos.hasOwnProperty(key)) {
          const element = state.photos[key];
          if (element.id === action.id) {
            detail = element;
            break;
          }
        }
      }
      return {
        photos: state.photos,
        detail
      }
    
    case LIKE_IMAGE:
      const like = action.like;
      let detailLikeImage = Object.assign({}, state.detail);

      if (!isEmpty(detailLikeImage)) {
        detailLikeImage.liked_by_user = true;
        detailLikeImage.likes = like.photo.likes;
      }

      return {
        photos: state.photos.map((item) => {
          if (item.id === like.photo.id) {
            item.liked_by_user = true;
            item.likes = like.photo.likes;
          }
          return item
        }),
        detail: detailLikeImage
      }

    case UNLIKE_IMAGE:
      const unlike = action.unlike;
      let detailUnlikeImage = Object.assign({}, state.detail);

      if (!isEmpty(detailUnlikeImage)) {
        detailUnlikeImage.liked_by_user = false;
        detailUnlikeImage.likes = unlike.photo.likes;
      }

      return {
        photos: state.photos.map((item) => {
          if (item.id === unlike.photo.id) {
            item.liked_by_user = false;
            item.likes = unlike.photo.likes;
          }
          return item
        }),
        detail: detailUnlikeImage
      }

    default:
      return state
  }
}
