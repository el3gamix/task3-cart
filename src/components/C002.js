import React, { useState, useEffect } from 'react'
import './cStyling.css';

export default function C002() {
    var itemPrice = 100;
    const [itemTotalPrice, setItemTotalPrice] = useState(1 * itemPrice);

    return (
        <div className='cStyle' style={{ display: 'flex', width: '70%', justifyContent: 'space-between' }}>
            <div>Product name</div>
            <div>
                Price = {itemPrice}
            </div>
            <div>
                Quantity &nbsp;
                <input
                    style={{ fontSize: '25px', width: '150px' }}
                    type="number"
                    min="1"
                    placeholder="1"
                    /* value="1" */
                    onChange={(element) => setItemTotalPrice(element.target.value * itemPrice)}
                />
            </div>
            <div>
                Total Price = {itemTotalPrice}
            </div>
        </div>
    )
}
