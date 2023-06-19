import React from 'react';
import QuantityforOrder from './QuantityforOrder';

function ProductTableRow({ product }) {
    return (
        <tr>
            <td>{product.company}</td>
            <td>{product.product}</td>
            <td>{product.price.toLocaleString('en-US', {style: 'currency', currency: 'USD' })}</td>
            <td><QuantityforOrder /></td>
        </tr>
    );
}

export default ProductTableRow;