export const getProductsMock = (body: any) => {
  const products = [
    {
      id: 1,
      name: 'Marvis Whitening Mint Toothpaste',
      brand: {
        name: 'Marvis',
      },
      imageUrl:
        'https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/1/4/14-11-2019_marvis_whiteningminttoothpaste_85ml_mrvs-wmtp-85_jb_1.jpg',
      price: 9.99,
    },
    {
      id: 2,
      name: 'Resurection Handwash',
      brand: {
        name: 'Aesop',
      },
      imageUrl:
        'https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/1/4/14-11-2019_marvis_whiteningminttoothpaste_85ml_mrvs-wmtp-85_jb_1.jpg',
      price: 24.99,
    },
    {
      id: 3,
      name: 'Gloss, 100ml, versch.',
      brand: {
        name: 'SHYNE',
      },
      imageUrl:
        'https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/1/4/14-11-2019_marvis_whiteningminttoothpaste_85ml_mrvs-wmtp-85_jb_1.jpg',
      price: 17.95,
    },
    {
      id: 4,
      name: 'Gleithrl - 100ml',
      brand: {
        name: 'Nevernot',
      },
      imageUrl:
        'https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/1/4/14-11-2019_marvis_whiteningminttoothpaste_85ml_mrvs-wmtp-85_jb_1.jpg',
      price: 6.93,
    },
    {
      id: 5,
      name: 'U+V&ME - 50ml',
      brand: {
        name: 'salted.',
      },
      imageUrl:
        'https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/1/4/14-11-2019_marvis_whiteningminttoothpaste_85ml_mrvs-wmtp-85_jb_1.jpg',
      price: 19.99,
    },
    {
      id: 6,
      name: 'Clear Tagescreme LSF',
      brand: {
        name: "Paula's Choice",
      },
      imageUrl:
        'https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/1/4/14-11-2019_marvis_whiteningminttoothpaste_85ml_mrvs-wmtp-85_jb_1.jpg',
      price: 39.0,
    },
    {
      id: 7,
      name: 'Lorem Ipsum',
      brand: {
        name: 'salted.',
      },
      imageUrl:
        'https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/1/4/14-11-2019_marvis_whiteningminttoothpaste_85ml_mrvs-wmtp-85_jb_1.jpg',
      price: 19.99,
    },
    {
      id: 8,
      name: 'Lorem Ipsum 2',
      brand: {
        name: "Paula's Choice",
      },
      imageUrl:
        'https://media.endclothing.com/media/f_auto,q_auto:eco/prodmedia/media/catalog/product/1/4/14-11-2019_marvis_whiteningminttoothpaste_85ml_mrvs-wmtp-85_jb_1.jpg',
      price: 39.0,
    },
  ];
  let filterProducts = [];
  if (body) {
    for (let item of body) {
      const prod = products.filter(product => product.id === item);
      if (prod[0]) filterProducts.push(prod[0]);
    }
  } else {
    filterProducts = products;
  }
  return filterProducts;
};
