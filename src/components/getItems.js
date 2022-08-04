import { data, categories } from '../data';

export const getItems = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 1);
  });
};

export const getItemsByCategory = (categoryId) => {
  return new Promise(resolve => {
    setTimeout(() => {
      categoryId ? resolve(data.filter(e => e.cat === parseInt(categoryId))) : resolve(data);
    }, 1);
  });
};

export const getItemsById = (itemId) => {
  return new Promise(resolve => {
    setTimeout(() => {
      itemId ? resolve(data.filter(e => e.id === parseInt(itemId))) : resolve(data);
    }, 1);
  });
};

export const getCategories = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(categories);
    }, 1);
  });
};