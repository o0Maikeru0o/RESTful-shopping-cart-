import Cart from '../cart.js';

const testSession = 123;

describe('Cart', () => {
  it('should yeild a total for added items', () => {
    const expected = 7.25;
    const cart = new Cart(testSession);

    cart.addToCart('C', 1);
    cart.addToCart('C', 1);
    cart.addToCart('C', 1);
    cart.addToCart('C', 1);
    cart.addToCart('C', 1);
    cart.addToCart('C', 1);
    cart.addToCart('C', 1);

    expect(cart.total).toEqual(expected);
  });

  it('should yeild a total for an item added with a quantity', () => {
    const expected = 32.40;
    const cart = new Cart(testSession);

    cart.addToCart('A', 1);
    cart.addToCart('B', 1);
    cart.addToCart('C', 1);
    cart.addToCart('D', 1);
    cart.addToCart('A', 1);
    cart.addToCart('B', 1);
    cart.addToCart('A', 1);
    cart.addToCart('A', 1);

    expect(cart.total).toEqual(expected);
  });

  it('should yeild a total for many items added with quantities', () => {
    const expected = 15.40;
    const cart = new Cart(testSession);

    cart.addToCart('A', 1);
    cart.addToCart('B', 1);
    cart.addToCart('C', 1);
    cart.addToCart('D', 1);

    expect(cart.total).toEqual(expected);
  });

  it('should persist empty cart if item added quantity is negative', () => {
    const expected = 0;
    const cart = new Cart(testSession);

    cart.addToCart('A', -1);

    expect(cart.total).toEqual(expected);
  });

  it('should persist empty cart if item added quantity is negative', () => {
    const expected = 0;
    const cart = new Cart(testSession);

    cart.addToCart('A', 2);
    cart.addToCart('A', -3);

    expect(cart.total).toEqual(expected);
  });
});
