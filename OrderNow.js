import React from 'react';
import ProductTableRow from '../components/ProductTableRow.js';

function OrderNow({ products }) {
    return(
        <div>
            <h2>Order Now</h2>
            <article>
                <h3>Take your pick!</h3>
                <p>Below is table that can be used to place an order for the listed products. Maximum quantity of 10 per item.</p>
                <table id="orderTable">
                    <caption>Treats for your furry friend</caption>
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Select quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((productToOrder, i) =>
                        <ProductTableRow
                            product={productToOrder}
                            key={i}
                        />
                    )}
                    </tbody>
                    <tfoot>

                    </tfoot>
                </table>
            </article>
        </div>
    )
}

export default OrderNow;