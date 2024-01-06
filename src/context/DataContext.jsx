// src/context/DataContext.js
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Provider } from 'react-redux';
import store from '../redux/store';

const DataContext = React.createContext();

export const useDataContext = () => React.useContext(DataContext);

// Add PropTypes validation for the 'children' prop
export const DataProvider = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

// Add PropTypes validation for the 'children' prop
DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
