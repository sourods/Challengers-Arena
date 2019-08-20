export const arrayRandomItem = (items) => items[Math.floor(Math.random() * items.length)];
export const random = (min, max) => Math.floor(Math.random() * (+max - +min)) + +min;