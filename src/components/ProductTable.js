import React from 'react';
import ProductRow from './ProductRow';

const ProductTable = ({ children }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>

        {children.map((product) => (
          <ProductRow
            name={product.name}
            price={product.price}
            id={product.id}
          />
        ))}
      </table>
    </div>
  );
};

export default ProductTable;
