import React from 'react';
import PropTypes from 'prop-types';

const FilteredFruitList = ({fruit, filter}) => {
  const results = filter ? fruit.filter(f => f.fruit_type === filter) : fruit;
  return (
    <ul className="fruit-list">
      {results.map((fruit, index) => <li key={index}>{fruit.char}</li>)}
    </ul>
  );
}

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: ''
}

FilteredFruitList.propTypes = {
  fruit: PropTypes.array.isRequired,
  filter: PropTypes.string
}

export default FilteredFruitList;