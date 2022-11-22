import React from 'react';
import ReactDOM from 'react-dom';
import axe from '@axe-core/react';

export const runAxeReact = (): void => {
  axe(React, ReactDOM, 1000);
}