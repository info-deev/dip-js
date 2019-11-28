import Unsplash, { toJson } from 'unsplash-js';

import { 
  SET_DRAWER,
  FETCH_IMAGES,
  FETCH_IMAGE,
  DETAIL_IMAGES,
  LIKE_IMAGE,
  UNLIKE_IMAGE,
  SET_BEARER_TOKEN,
  LOGOUT
} from "../types";

const unsplash = new Unsplash({ 
  accessKey: "4016fef1131dc07a1eeb6b05fce481efd4e453909a5908084d269c63806b2568",
  secret: "273cc8ab3dba02a16bc9de1ab9ebaee43e6b5a09745b5875b89ccb74f347ad95",
  // callbackUrl: 'urn:ietf:wg:oauth:2.0:oob',
  callbackUrl: 'http://js-diplom.000webhostapp.com/authorization',
  // bearerToken: '424895d2e00e0ad65f4d9504618d9080839bdce7d8cd8b8a1b38e22a741f7160'
});

export const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  "public",
  "write_likes"
]);


export const toggleDrawer = () => ({
  type: SET_DRAWER
});

export const fetchImages = (props) => async dispatch => {
  const response = await unsplash.photos.listPhotos(props, 10, "latest")
    .then(toJson)
    .then(json => ({
        type: FETCH_IMAGES,
        photos: json
      })
    );

  return dispatch(response);
};

export const fetchImage = (id) => async dispatch => {
  const response = await unsplash.photos.getPhoto(id)
    .then(toJson)
    .then(json => ({
        type: FETCH_IMAGE,
        detail: json
      })
    );

  return dispatch(response);
};

export const getDetail = (id) => ({
  type: DETAIL_IMAGES,
  id
});

export const likeImage = (id) => async dispatch => {
  const response = await unsplash.photos.likePhoto(id)
    .then(toJson)
    .then(json => ({
        type: LIKE_IMAGE,
        like: json
      })
    );

  return dispatch(response);
};

export const unlikeImage = (id) => async dispatch => {
  const response = await unsplash.photos.unlikePhoto(id)
    .then(toJson)
    .then(json => ({
        type: UNLIKE_IMAGE,
        unlike: json
      })
    );

  return dispatch(response);
};

export const userAuthentication = (code) => async dispatch => {
  const response = await unsplash.auth.userAuthentication(code)
    .then(toJson)
    .then(json => {
      unsplash.auth.setBearerToken(json.access_token);
      console.log(json);
      return ({
        type: SET_BEARER_TOKEN,
        bearerToken: json,
        isAuthenticated: json.access_token ? true : false
      })
    });
  
  return dispatch(response);
};

export const logout = () => {  
  unsplash.auth.setBearerToken('');
  return ({
    type: LOGOUT,
    bearerToken: '',
    isAuthenticated: false
  });
}