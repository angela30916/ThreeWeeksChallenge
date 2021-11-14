import request from './request';

//   $top: num,
//   $skip: skip,
//   $select: select,
//   $filter: filter,
//   $spatialFilter: spatial,
//   $format: 'JSON',

function baseFunc(cityName, ...args) {
  const apiName = [this.category, this.type, cityName].join('/');
  const query = new URLSearchParams(...args).toString();
  return request('GET', apiName, query);
}

const API = {
  tourism: {
    category: 'Tourism',
    fetchScenicSpotByCity(cityName, ...args) {
      this.type = 'ScenicSpot';
      return baseFunc.call(this, cityName, ...args);
    },

    fetchRestaurantByCity(cityName, ...args) {
      this.type = 'Restaurant';
      return baseFunc.call(this, cityName, ...args);
    },
    // hotel, activity...
  },
  bike: {
    category: 'Bike',
    fetchStationByCity(cityName, ...args) {
      this.type = 'Station';
      return baseFunc.call(this, cityName, ...args);
    },
  },
  // bus: {
  //   category: 'Bus',
  // },
};

export default API;
