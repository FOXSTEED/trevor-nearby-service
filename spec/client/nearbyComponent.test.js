/* eslint-disable no-undef, function-paren-newline */
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { hotels, restaurants, attractions } from './fakeData';
import NearbyItems from '../../client/nearbyItems/nearbyItems';

configure({ adapter: new Adapter() });

describe('NearbyItems', () => {
  it('should render items from each table', () => {
    let hotelsWrapper = mount(
      React.createElement(NearbyItems, {
        items: hotels, getDistance: () => 3.0
      }, null));
    expect(hotelsWrapper.find('.nearbyItem').length).toBe(4);

    let restaurantsWrapper = mount(
      React.createElement(NearbyItems, {
        items: restaurants, getDistance: () => 3.0
      }, null));
    expect(restaurantsWrapper.find('.nearbyItem').length).toBe(4);

    let attractionsWrapper = mount(
      React.createElement(NearbyItems, {
        items: attractions, getDistance: () => 3.0
      }, null));
    expect(attractionsWrapper.find('.nearbyItem').length).toBe(4);
  });


  it('should render distances', () => {
    let wrapper = mount(
      React.createElement(NearbyItems, {
        items: hotels, getDistance: () => 4.3
      }, null));

    expect(wrapper.find('.nearbyItem .itemDistance').first().html()).toBe('<div class="itemDistance">4.3 miles away</div>');
  });

  it('should render ratings', () => {
    hotels[0].rating = 7;

    let wrapper = mount(
      React.createElement(NearbyItems, {
        items: hotels, getDistance: () => 4.3
      }, null));

    let reviewBubblesWrapper = wrapper.find('.nearbyItem').first().find('.itemReviews .review-bubbles');

    expect(reviewBubblesWrapper.find('.reviewBubble').length).toBe(3);
    expect(reviewBubblesWrapper.find('.reviewHalfBubble').length).toBe(1);
    expect(reviewBubblesWrapper.find('.reviewEmptyBubble').length).toBe(1);
  });
});
