import './scss/App.scss';
import Info from './components/Info/Info';
import Container from '@mui/material/Container';

import Logics from './components/Convertor/Logics';

function App() {
  return (
    <div className='wrapper'>
      <Container>
        <Info />
        <Logics />
      </Container>
    </div>
  );
}

export default App;
