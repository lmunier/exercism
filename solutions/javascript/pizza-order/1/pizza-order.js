/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
const pizzaTypePrice = {
  Margherita: 7,
  Caprese: 9,
  Formaggio: 10
};

const extraPrice = {
  ExtraSauce: 1,
  ExtraToppings: 2
}

export function pizzaPrice(pizza, ...extras) {
  let price = pizzaTypePrice[pizza];

  for (const extra of extras) {
    price += extraPrice[extra];
  }

  return price;
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let orderPrice = 0;

  for (const order of pizzaOrders) {
    orderPrice += pizzaPrice(order['pizza'], ...order['extras']);
  }

  return orderPrice;
}
