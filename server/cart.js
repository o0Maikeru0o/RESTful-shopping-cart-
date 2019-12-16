const inventory = require('./inventory.js');

class Cart {
  constructor(id) {
    this.cartId = id;
    this.items = {};
    this.total = 0;
  }

  addToCart(id, quantity) {
    const item = inventory.find((inv) => inv.id === id);

    if (this.items[id]) {
      if (this.items[id].quantity + quantity <= 0) {
        delete this.items[id];
      } else {
        this.items[id].quantity += quantity;
        this.items[id].subtotal = this.getSubtotal(item);
      }
    } else if (quantity > 0) {
      this.items[id] = {
        description: item.description,
        quantity,
      };
      this.items[id].subtotal = this.getSubtotal(item);
    }
    this.setTotal(this.items);
  }

  setTotal(items) {
    this.total = 0;
    const ids = Object.keys(items);

    ids.forEach((id) => {
      this.total += parseFloat(items[id].subtotal);
      this.total.toFixed(2);
    });
  }

  getSubtotal(item) {
    let subtotal = 0;
    let { quantity } = this.items[item.id];
    const { volume_discounts } = item;

    if (volume_discounts.length > 0) {
      // Assuming if there is more than one tier of vol discounts they will be sorted in asc order
      for (let i = volume_discounts.length - 1; i >= 0; i--) {
        const volume = Math.floor(quantity / volume_discounts[i].number);
        subtotal += volume * volume_discounts[i].price;
        quantity -= volume * volume_discounts[i].number;
      }
    }
    subtotal += quantity * item.unit_price;
    subtotal = subtotal.toFixed(2);
    return subtotal;
  }
}
module.exports = Cart;
