import React from 'react';
import Header from '../components/HeaderProduct';
import ProductTable from '../components/ProductTable';

const Products = () => {
  return (
    <div className='padding px-30 py-10 bg-gray-100 min-h-screen '>
      

      <Header />
      <ProductTable/>
      
     
    </div>
  );
};

export default Products;
