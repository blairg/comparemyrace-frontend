import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from '../../src/components/App';

describe('When the App component is initialized', () => {
  it('it should contain an AthleteSearch component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('AthleteSearch').length === 1).to.equal(true);
  });
});
