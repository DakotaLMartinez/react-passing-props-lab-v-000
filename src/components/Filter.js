import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({filters, handleChange}) => {
  return (
    <select onChange={handleChange} defaultValue="all">
      <option value="all">All</option>  
      {filters.map((filter) =>
        <option key={filter} value={filter}>{filter}</option>
      )}
    </select>
  );
}

Filter.defaultProps = {
  filters: [],
  handleChange: () => {}
}

Filter.propTypes = {
  filters: PropTypes.array,
  handleChange: PropTypes.func
}

export default Filter;