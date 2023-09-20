import './scss/App.scss';
import Info from './components/Info/Info';
import Container from '@mui/material/Container';
import Convertor from './components/Convertor/Convertor';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const currencyList = useSelector((store) => store.currency.currencyList);
  const [fromCurrency, setFromCurrency] = useState('UA');
  const [toCurrency, setToCurrency] = useState('USD');
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);

  console.log(currencyList);
  const onChangeFromPrice = (value) => {
    let res;

    currencyList.filter((item) => {
      if (item.cc === toCurrency) {
        res = (value / item.rate).toFixed(2);
      }
      if (item.cc === fromCurrency) {
        const price = value * item.rate;
      }

      if (toCurrency === 'UA') {
        res = value;
      }

      setToPrice(res);
      setFromPrice(value);
    });
  };

  useEffect(() => {
    onChangeFromPrice(fromPrice);
  }, [toCurrency, fromCurrency]);

  // const onChangeToPrice = (value) => {
  //   let res;
  //   currencyList.filter((item) => {
  //     if (item.cc === toCurrency || item.cc === fromCurrency) {
  //       res = value * item.rate;
  //     }

  //     if (fromCurrency === 'USD') {
  //       res = value;
  //     }

  //     setToPrice(value);
  //     setFromPrice(res);
  //   });
  // };

  // useEffect(() => {
  //   onChangeToPrice(toPrice);
  // }, [fromCurrency]);

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
          />
          <Convertor
            value={toPrice}
            // onChangeValue={onChangeToPrice}
            currency={toCurrency}
            onChangeCurrency={setToCurrency}
          />
        </div>
      </Container>
    </div>
  );
}

export default App;
