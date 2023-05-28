import React, {useState} from 'react';
import { useEffect } from 'react';

const ItemCount = ({stock}) => {
    const [count, setCount] = useState(1);
    const [itemStock, setItemStock] = useState(stock);

    const sumar = () => {
        if (count < itemStock) {
            setCount(count + 1)
        }
    }

    const restar = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const onAdd = () => {
        if ( count <= itemStock) {
            setItemStock(itemStock - count)
            setCount(1)
        }
    }

    useEffect(() => {
        setItemStock(stock)
    }, [stock])


    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary" onClick={restar}>-</button>
                        <button type="button" class="btn btn-primary" aria-readonly>{count}</button>
                        <button type="button" class="btn btn-primary" onClick={sumar}>+</button>
                    </div>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <button type="button" class="btn btn-primary" onClick={onAdd}>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount;