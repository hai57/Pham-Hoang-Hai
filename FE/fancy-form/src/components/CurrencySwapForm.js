import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TokenSelect from './TokenSelect';
import '../styles/index.scss';

const CurrencySwapForm = () => {
  const [tokens, setTokens] = useState([]);
  const [prices, setPrices] = useState({});
  const [fromToken, setFromToken] = useState(null);
  const [toToken, setToToken] = useState(null);
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://interview.switcheo.com/prices.json')
      .then(response => {
        const uniqueTokens = {};
        response.data.forEach(entry => {
          uniqueTokens[entry.currency] = entry.price;
        });
        const tokenData = Object.keys(uniqueTokens).map(token => ({
          label: token,
          value: token
        }));
        setTokens(tokenData);
        setPrices(uniqueTokens);
      })
      .catch(error => setError('Failed to fetch token data'));
  }, []);

  const handleFromTokenChange = selectedOption => setFromToken(selectedOption);
  const handleToTokenChange = selectedOption => setToToken(selectedOption);

  const handleSwap = () => {
    if (!fromToken || !toToken || !amount) {
      setError('Please fill out all fields');
      return;
    }
    if (!prices[fromToken.value] || !prices[toToken.value]) {
      setError('Invalid token selected');
      return;
    }
    const priceFrom = prices[fromToken.value];
    const priceTo = prices[toToken.value];
    const exchangedAmount = (amount * priceFrom) / priceTo;
    setResult(exchangedAmount);
    setError('');
  };

  return (
    <div className="form-container">
      <h2>Currency Swap</h2>
      <TokenSelect options={tokens} onChange={handleFromTokenChange} value={fromToken} />
      <TokenSelect options={tokens} onChange={handleToTokenChange} value={toToken} />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <button onClick={handleSwap}>Swap</button>
      {error && <p className="error-message">{error}</p>}
      {result && <p className="exchange-result">Exchanged Amount: {result.toFixed(6)}</p>}
    </div>
  );
};

export default CurrencySwapForm;
