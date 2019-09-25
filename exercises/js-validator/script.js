function calculatePrice(subtotal) {
  // Zero
  if (subtotal === 0) {
    return 'Price cant be zero';
  }

  // Negative number
  if (subtotal < 0) {
    return 'Price cant be negative';
  }

  // No price
  if (!subtotal) {
    return 'Price is missing';
  }

  if (typeof subtotal === 'number') {
    return subtotal;
  } else {
    return 'Price was invalid';
  }
};

console.log('true', calculatePrice(true));
console.log('0', calculatePrice(0));
console.log('-10', calculatePrice(-10));
console.log('Hi mom', calculatePrice('Hi mom'));
console.log('10.8', calculatePrice(10.8));
console.log('null', calculatePrice(null));
console.log('', calculatePrice());
console.log('undefined', calculatePrice(undefined));
console.log('false', calculatePrice(false));
