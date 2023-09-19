import './scss/App.scss';
import Info from './components/Info/Info';
import Container from '@mui/material/Container';
import Convert from './components/Convert/Convert';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const currencyList = useSelector((store) => store.currency.currencyList);
  const [fromCurrency, setFromCurrency] = useState(0);
  const [toCurrency, setToCurrency] = useState(1);
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);

  const onChangeFromPrice = (value) => {
    let res;

    currencyList.filter((item) => {
      if (item.cc === 'USD' && toCurrency === 1) {
        res = value / item.rate;
      }
      if (item.cc === 'EUR' && toCurrency === 2) {
        res = value / item.rate;
      }
      if (item.cc === 'PLN' && toCurrency === 3) {
        res = value / item.rate;
      }
      if (toCurrency === 0) {
        res = value;
      }

      setToPrice(res);
      setFromPrice(value);
    });
  };

  useEffect(() => {
    onChangeFromPrice(fromPrice);
  }, [toCurrency]);

  const onChangeToPrice = (value) => {
    setToPrice(value);
  };

  return (
    <div>
      <Container>
        <Info />
        <div className='convert'>
          <Convert
            value={fromPrice}
            onChangeValue={onChangeFromPrice}
            currency={fromCurrency}
            onChangeCurrency={setFromCurrency}
          />
          <Convert
            value={toPrice}
            onChangeValue={onChangeToPrice}
            currency={toCurrency}
            onChangeCurrency={setToCurrency}
          />
        </div>
      </Container>
    </div>
  );
}

export default App;
