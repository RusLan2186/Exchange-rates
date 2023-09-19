import './scss/App.scss';
import Info from './components/Info/Info';
import Container from '@mui/material/Container';
import Convert from './components/Convert/Convert';

function App() {
  return (
    <div>
      <Container>
        <Info />
        <Convert />
      </Container>
    </div>
  );
}

export default App;
