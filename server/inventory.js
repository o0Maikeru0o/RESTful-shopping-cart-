
const inventory = [{
  id: 'A',
  image: 'https://mnickandros-coding-projects.s3.amazonaws.com/RedApple__23344.1570489422.jpeg',
  description: 'Apple',
  unit_price: 2.0,
  volume_discounts: [{
    number: 4,
    price: 7.0,
  }],
}, {
  id: 'B',
  image: 'https://mnickandros-coding-projects.s3.amazonaws.com/banana.jpeg',
  description: 'Banana',
  unit_price: 12.0,
  volume_discounts: [],
}, {
  id: 'C',
  image: 'https://mnickandros-coding-projects.s3.amazonaws.com/cranberry.jpeg',
  description: 'Cranberry',
  unit_price: 1.25,
  volume_discounts: [{
    number: 6,
    price: 6.0,
  }],
}, {
  id: 'D',
  image: 'https://mnickandros-coding-projects.s3.amazonaws.com/banana.jpeg',
  description: 'Durian',
  unit_price: 0.15,
  volume_discounts: [],
}];

module.exports = (function () { return inventory; }());
