/* eslint no-undef: "off" */
const { Restaurant, Hotel, Attraction } = require('../../models/models.js');

describe('Restaurants table', () => {
  it('should have 200+ entries', async () => {
    let count = await Restaurant.count();
    expect(count >= 200).toBe(true);
  });
});

describe('Hotels table', () => {
  it('should have 200+ entries', async () => {
    let count = await Hotel.count();
    expect(count >= 200).toBe(true);
  });
});

describe('Attractions table', () => {
  it('should have 200+ entries', async () => {
    let count = await Attraction.count();
    expect(count >= 200).toBe(true);
  });
});

