/* 
  The Promise.all() static method takes an iterable of 
  promises as input and returns a single Promise. 
  This returned promise fulfills when all of the input's promises 
  fulfill (including when an empty iterable is passed),
  with an array of the fulfillment values. 
  It rejects when any of the input's promises rejects, with this first rejection reason. 
  Promises states: pending, fulfilled and rejected.
*/

const waterPokemon = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, [{ id: 3, name: "Squirtle" }, { id: 4, name: "Psyduck" }]);
});
const firePokemon = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, [{ id: 1, name: "Charmander" }, { id: 2, name: "Vulpix" }]);
});
const electricPokemon = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, [{ id: 5, name: "Pikachu" }, { id: 6, name: "Magnemite" }]);
});

// const failedPromise = new Promise((resolve, reject) => {
//   setTimeout(reject, 100, "Failed to fetch data");
// });

Promise.all([waterPokemon, firePokemon, electricPokemon]).then((values) => {
  console.log(values);
}).catch((error) => {
  console.error("One of the promises failed:", error);
});


/*

  The Promise.race() static method takes an iterable of promises as input and returns a single Promise. 
  This returned promise settles with the eventual state of the first promise that settles.

*/

const mirror1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "Data of mirror 1");
});

// const mirror1 = new Promise((resolve, reject) => {
//   setTimeout(reject, 500, "Error in mirror 1");
// });

const mirror2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Data of mirror 2");
});

// const mirror2 = new Promise((resolve, reject) => {
//   setTimeout(reject, 100, "Error of mirror 2");
// });

Promise.race([mirror1, mirror2]).then((value) => {
  console.log(value);
}).catch((error) => {
  console.error("One of the promises failed:", error);
});

/* 
  The Promise.any() static method takes an iterable of promises as input 
  and returns a single Promise. This returned promise fulfills when any 
  of the input's promises fulfills, with this first fulfillment value. 
  It rejects when all of the input's promises reject 
  (including when an empty iterable is passed), with an AggregateError 
  containing an array of rejection reasons.
*/

const name = "Laptop";
const price = 1000;

const amazon = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "Amazon product not found: " + name + " at price: " + price);
});

const ebay = new Promise((resolve, reject) => {
  setTimeout(reject, 200, "eBay product not found: " + name + " at price: " + price);
});

const mercadolibre = new Promise((resolve, reject) => {
  setTimeout(reject, 300, "MercadoLibre product not found: " + name + " at price: " + price);
});

const aliexpress = new Promise((resolve, reject) => {
  setTimeout(resolve, 400, "AliExpress product found: " + name + " at price: " + price);
});


Promise.any([amazon, ebay, mercadolibre, aliexpress]).then((value) => {
  console.log("Product found:", value);
}).catch((error) => {
  console.error("No products found:", error);
})