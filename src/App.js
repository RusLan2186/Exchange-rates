import './scss/App.scss';
import Info from './components/Info/Info';
import Container from '@mui/material/Container';
import Convertor from './components/Convertor/Convertor';
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const currencyList = useSelector((store) => store.currency.currencyList);
  const [fromCurrency, setFromCurrency] = useState('UA');
  const [toCurrency, setToCurrency] = useState('USD');
  const [fromPrice, setFromPrice] = useState(1);
  const [toPrice, setToPrice] = useState(0);
  const defaultCorrency = ['UA', 'USD', 'EUR', 'PLN'];
  // const ratesRef = useRef({});

  const filterCurrencyList = currencyList
    .filter((item) => {
      return defaultCorrency.includes(item.cc);
    })
    .map((item) => {
      return [item.cc, item.rate];
    });

  // const rate = Object.fromEntries(filterCurrencyList);
  const rate = Object.fromEntries(filterCurrencyList);

  const onChangeFromPrice = (value) => {
    let res;

    const price = value * rate[fromCurrency];
    res = (price / rate[toCurrency]).toFixed(2);
    if (fromCurrency === 'UA') {
      res = (value / rate[toCurrency]).toFixed(2);
    }
    if (fromCurrency === 'UA' && toCurrency === 'UA') {
      value = res;
      console.log('dvdvdvdvdvdv');
    }
    if (toCurrency === 'UA') {
      res = (value * rate[fromCurrency]).toFixed(2);
    }

    setToPrice(res);
    setFromPrice(value);
  };

  const onChangeToPrice = (value) => {
    let result;
    result = ((value * rate[toCurrency]) / rate[fromCurrency]).toFixed(2);
    if (fromCurrency === 'UA') {
      result = (value * rate[toCurrency]).toFixed(2);
    }
    if (toCurrency === 'UA') {
      result = (value / rate[fromCurrency]).toFixed(2);
    }
    setFromPrice(result);
    setToPrice(value);
  };

  useEffect(() => {
    onChangeFromPrice(fromPrice);
  }, [fromCurrency]);

  useEffect(() => {
    onChangeToPrice(toPrice);
  }, [toCurrency]);

  useEffect(() => {
    onChangeToPrice(1);
  }, []);

  return (
    <div className='wrapper'>
      <Container>
        <Info />
        <div className='convert'>
          <Convertor
            value={fromPrice}
            onChangeValue={onChangeFromPrice}
            currency={fromCurrency}
            onChangeCurrency={setFromCurrency}
            defaultCorrency={defaultCorrency}
          />
          <Convertor
            value={toPrice}
            onChangeValue={onChangeToPrice}
            currency={toCurrency}
            onChangeCurrency={setToCurrency}
            defaultCorrency={defaultCorrency}
          />
        </div>
      </Container>
    </div>
  );
}

export default App;
