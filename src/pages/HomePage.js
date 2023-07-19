import React from 'react'
import { useGetAllProductsQuery } from '../features/product/productApi'

const HomePage = () => {

  const { data, isLoading, isError, error } = useGetAllProductsQuery();

  console.log(isError);
  if (isLoading) {


  }
  console.log(data);

  return (
    <div>

    </div>
  )
}

export default HomePage