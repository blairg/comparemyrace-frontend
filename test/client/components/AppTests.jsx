import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from '../../src/components/App';

describe('When the App component is initialized', () => {
  it('it should contain a Search component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Search').length === 1).to.equal(true);
  });
});
