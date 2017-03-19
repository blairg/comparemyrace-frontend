import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Search from '../../../src/components/athlete/Search';

describe('When the Search component is initialized', () => {
  it('it should contain a textbox with a class of .as-athleteSearchBox', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.find('.as-athleteSearchBox').length === 1).to.equal(true);
  });
});
