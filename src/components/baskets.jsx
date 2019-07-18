
import React from 'react';
import AddItem from './addItem';
import StorePage from "./storePage";


const baskets = () => {

    return <React.Fragment>
        <div className="form-group" style={{marginTop: '10px'}}>
            <AddItem />
        </div>
        
        <StorePage />
    </React.Fragment>

}

export default baskets;
      