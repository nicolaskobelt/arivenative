export const categoriesUrlGetter = (cat: string) =>
  `https://api.getarive.com/categories/${cat}`;

export const productsUrlGetter = (cat: string) =>
  `https://api.getarive.com/products/${cat}`;

export const mockGetterCategories = () => '1';

export const mockGetterProducts = () => '2';
