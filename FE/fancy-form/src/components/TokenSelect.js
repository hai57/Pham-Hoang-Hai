import React from 'react';
import Select from 'react-select';
import '../styles/index.scss';

const TokenSelect = ({ options, onChange, value }) => {
  const formatOptionLabel = ({ label, value }) => (
    <div className="token-option">
      <img
        src={`https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${value}.svg`}
        alt={label}
        className="token-icon"
      />
      {label}
    </div>
  );

  return (
    <div className="input-group token-select">
      <Select
        options={options}
        onChange={onChange}
        value={value}
        formatOptionLabel={formatOptionLabel}
      />
    </div>
  );
};

export default TokenSelect;
