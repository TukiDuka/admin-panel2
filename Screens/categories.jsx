import React from 'react';
import Header from '../components/HeaderProduct';
import CategoryTable from '../components/CategoryTable';

const categories = () => {
  return (
    <div className='padding px-30 py-10 bg-gray-100 min-h-screen '>
      

      <Header />
      <CategoryTable/>
      
     
    </div>
  );
};

export default categories;