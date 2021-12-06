import { useEffect, useState } from 'react';
import { getCategoriesMock } from '../api/categories';
import axios from 'axios';
import {
  categoriesUrlGetter,
  mockGetterCategories,
  mockGetterProducts,
  productsUrlGetter,
} from '../constants/apiUrl';
import { getProductsMock } from '../api/products';

export const useData = (
  uri: string,
  refecth?: boolean,
  develop?: boolean,
  body?: object,
) => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(uri, body);
        setData(response?.data);
      } catch ({ message }) {
        setError(message);
      }
      setLoading(false);
    };

    if (develop) {
      setLoading(false);
      if (uri === '1') {
        setData(getCategoriesMock());
      } else {
        setData(getProductsMock(body));
      }
    } else {
      fetchData();
    }
  }, [body, develop, uri, refecth]);

  if (loading) return { loading };
  if (error) return { error };
  return { data };
};

export const useCategoriesData = (
  refetch: boolean,
  catId: string,
  develop: boolean,
) => {
  return useData(
    develop ? mockGetterCategories() : categoriesUrlGetter(catId),
    refetch,
    develop,
  );
};

export const useProductsData = (
  refetch: boolean,
  catId: string,
  productsId: [] | undefined,
  develop: boolean,
) => {
  return useData(
    develop ? mockGetterProducts() : productsUrlGetter(catId),
    refetch,
    develop,
    productsId,
  );
};
