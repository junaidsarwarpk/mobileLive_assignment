import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";

import { AddItem as DoAddItem } from "../actions/basketActions";

const AddItem = ({ onSubmit, initialVal, DoAddItem }) => {
    
    const [ item, setitem ] = useState("");

    const updateValue = (e) => setitem(e.target.value);

    const onAddItem = (e) => {

        e.preventDefault();
        if(!item || void 0 === item) return;
        let obj = { id: Math.ceil( Math.random() * 1000000 ), text: item, isActive: false };
        DoAddItem(obj);
        setitem("");
        onSubmit && onSubmit(item)
    };

    useEffect(() => {
        initialVal && setitem(initialVal); // in case you want to use this component to edit an item
    }, [initialVal])

   return <React.Fragment>
        
        <form onSubmit={onAddItem} className="row">
            <div className="col-4 offset-4">
                <input type="search" placeholder="Press Enter to add item" value={item} onChange={updateValue} className="form-control" />
            </div>
        </form>
        
    </React.Fragment>
}

// export default SearchBar;
export default connect(null, { DoAddItem })(AddItem)
