import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import AthleteSearch from '../../../src/components/athlete/AthleteSearch.jsx';

describe('When the AthleteSearch component is initialized', () => {
  it('it should contain a textbox with a class of .as-athleteSearchBox', () => {
    const wrapper = shallow(<AthleteSearch />);
    expect(wrapper.find('.as-athleteSearchBox').length === 1).to.equal(true);
  });
});
