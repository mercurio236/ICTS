import { BrowserRouter } from 'react-router-dom';
import Routers from './routers';

import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routers />
    </BrowserRouter>
  );
}


