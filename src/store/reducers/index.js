import { combineReducers } from 'redux';

import drawer from './drawer';
import images from './images';
import unsplash from './unsplash';

export default combineReducers({
  drawer,
  images,
  unsplash
});