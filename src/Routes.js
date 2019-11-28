import Home from './pages/home';
import About from './pages/about';
import Detail from './pages/detail';
import Authorization from './pages/authorization';
import NotFound from './pages/notFound';

const Routes = [
  {
    component: Home,
    path: '/',
    exact: true
  },
  {
    component: About,
    path: '/about'
  },
  {
    component: Detail,
    path: '/detail'
  },
  {
    component: Authorization,
    path: '/authorization'
  },
  {
    component: NotFound
  }
];

export default Routes