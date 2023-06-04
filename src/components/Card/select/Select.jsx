import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'all', label: 'All' },
  { value: 'follow', label: 'Follow' },
  { value: 'followings', label: 'Followings' },
];

export const Filter = ({ value, onChange }) => {
  return (
    <div
      style={{
        width: 200,
        color: '#471ca9',
        backgroundColor: '#ebd8ff',
        borderRadius: 25,
        position: 'fixed',
        zIndex: 2,
        top: 136,
        left: 214,
      }}
    >
      <Select
        onChange={onChange}
        name="options"
        options={options}
        className="basic-single"
        classNamePrefix="select"
        defaultValue={options[0]}
        value={value}
      />
    </div>
  );
};
