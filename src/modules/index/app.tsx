import { Outlet } from 'react-router-dom';
import './app.scss';

const App = () => (
  <div styleName="main">
    Welcome to ESBoot!

    <Outlet />
  </div>
);

export default App;
