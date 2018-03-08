/* eslint no-undef: "off" */
const { getItem, getNearest, getData } = require('../../client/dataHelpers');

describe('getItem', () => {
  it('should get an item from the server', async () => {
    let item = await getItem('attractions', 0);
    expect(item).toHaveProperty('attraction_id');
  });
});

describe('getNearest', () => {
  it('should get four items from the server', async () => {
    let items = await getNearest('attractions', 0);

    expect(items).toHaveLength(4);

    items.forEach((item) => {
      expect(item).toHaveProperty('attraction_id');
    });
  });

  it('should get items when id is 199', async () => {
    let items = await getNearest('attractions', 199);

    expect(items).toHaveLength(4);

    items.forEach((item) => {
      expect(item).toHaveProperty('attraction_id');
    });
  });
});

describe('getData', () => {
  it('should get attraction and items from all tables, ', async () => {
    let items = await getData(0);

    expect(items).toHaveLength(4);

    expect(items[0]).toHaveProperty('attraction_id');

    items[1].forEach((item) => {
      expect(item).toHaveProperty('hotel_id');
    });

    items[2].forEach((item) => {
      expect(item).toHaveProperty('restaurant_id');
    });

    items[3].forEach((item) => {
      expect(item).toHaveProperty('attraction_id');
    });
  });
});
