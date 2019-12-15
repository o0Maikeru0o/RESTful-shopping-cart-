import inventory from './inventory';

class Cart {
  constructor() {
    this.sId = '';
    this.items = {};
    this.total = 0;
  }

  addItem(id) {
    const item = inventory.find((item) => item.id === id);
    if (this.items[id]) {
      this.items[id].quantity += 1;
      this.items[id].subtotal = this.calcSubTotal(item, this.quantity);
    } else {
      this.items[id] = {
        description: item.description,
        quantity: 1,
        subtotal: this.calcSubTotal(item, this.quantity),
      };
    }
  }

  static calcSubTotal(item, quantity) {
    let subtotal = 0;
    const { volume_discounts } = item;
    if (volume_discounts.length > 0) {
      subtotal += Math.floor(quantity / volume_discounts[0].number) * volume_discounts[0].price;
      quantity -= Math.floor(quantity / volume_discounts[0].number) * volume_discounts[0].number;
    }
    subtotal += quantity * item.unit_price;
    return subtotal;
  }
}
module.exports = Cart;
