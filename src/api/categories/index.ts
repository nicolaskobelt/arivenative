export const getCategoriesMock = () => {
  return {
    name: 'PERSONAL CARE',
    image:
      'https://images.unsplash.com/photo-1614806687394-7e093b514611?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    subcategories: [
      {
        name: 'Shampoo',
        id: 'shampo--o',
        productsIds: [1, 2],
      },
      {
        name: 'Hand Wash',
        id: 'hand-wash',
        productsIds: [3, 4],
      },
      {
        name: 'Skin Care',
        id: 'skin-care',
        productsIds: [5, 6],
      },
      {
        name: 'Fragances',
        id: 'fragances',
        productsIds: [7, 8],
      },
    ],
  };
};
