import React from 'react';
import { useEffect, useState } from "react";

const SingleBasket = ({ type, items, onDelete, UpdateItem }) => {
    
    const BASKET_TYPES_TITLES = {
        'STORE': 'STORE',
        'CART': 'CART'
    };
    let [count, setCount] = useState(0);

    useEffect(()=> {
        setCount((() => {
            let storeItems = items.filter(_i => !_i.isActive);
        return type === BASKET_TYPES_TITLES.STORE ? storeItems.length : items.length - storeItems.length;
          })())
    }, [BASKET_TYPES_TITLES.STORE, items, type])
    const getLayout = _i => <li className="list-group-item" key={_i.id}>
    <div className="row">
        <div className="col-2">
            <input type="checkbox" checked={_i.isActive} onChange={UpdateItem(_i)} />
        </div>
        <div className="col-8">
            { _i.text }
        </div>
        {!_i.isDefault && <div className="col-2 fake_link" onClick={onDelete(_i)}>
            X
        </div>}
    </div>
</li>
    const getTitle = () => BASKET_TYPES_TITLES[type] || "Untitled"

    const getCollection = items => items.map(_i => {
        if(type === BASKET_TYPES_TITLES.STORE && !_i.isActive){
            return getLayout(_i)
        }else if(type === BASKET_TYPES_TITLES.CART && _i.isActive){
            return getLayout(_i)
        }
    })

   return <div className="card">
        <div className="card-header text-center">
            <h5 className="card-title">{ getTitle() }({ count })</h5>
        </div>
        <div className="card-body">
        <ul className="list-group list-group-flush">
            {items && getCollection(items)}
        </ul>
        </div>
    </div>
}

export default SingleBasket;
