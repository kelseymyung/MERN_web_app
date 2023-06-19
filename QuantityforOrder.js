import React, { useState } from 'react';
import { VscFoldDown, VscFoldUp } from 'react-icons/vsc';

function QuantityforOrder() {
    const [quant, setQuant] = useState(0);

    const increaseByOne = () => setQuant(quant === 10 ? quant : quant + 1);
    const decreaseByOne = () => setQuant(quant === 0 ? 0 : quant - 1);

    return(
        <div class="">
            <VscFoldDown onClick={decreaseByOne} class="less" />
            <span class="quantity">{quant}</span>
            <VscFoldUp onClick={increaseByOne} class="more" />
        </div>
    );
}

export default QuantityforOrder;