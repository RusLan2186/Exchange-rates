import './scss/App.scss';
import Info from './components/Info/Info';
import Container from '@mui/material/Container';

import Logics from './components/Convertor/Logics';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Container sx={{ padding: 0 }}>
        <Routes>
          <Route path='/home' element={<Main />}></Route>
          <Route path='/contacts' element={<Contacts />}></Route>
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
