import { Outlet } from 'react-router-dom';

const App = () => (
  <div className="text-[red]">
    Welcome to ESBoot!
    <Outlet />
  </div>
);

export default App;
