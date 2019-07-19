import React, { Component } from 'react';
import { fetchItems, AddItem, UpdateItem, DeleteItem, UpdateItems } from "../actions/basketActions";
import { connect } from "react-redux";

import Basket from "./basket";


class StorePage extends Component{

    componentWillMount() {
        this.props.fetchItems()
    }
    
    onDelete = (item) => (e) => {
        this.props.DeleteItem(item)
    }
    UpdateItem = item => e => {
        item.isActive = !item.isActive;
        this.props.UpdateItem(item);
    }

    updateItems = flag => e => this.props.UpdateItems(flag)

    render(){
        return <React.Fragment>
            <div className="row form-group">
                <div className="col-6">
                    <Basket type="STORE" items={this.props.items} onDelete={this.onDelete} UpdateItem={this.UpdateItem} />
                </div>
                <div className="col-6">
                    <Basket type="CART" items={this.props.items} onDelete={this.onDelete} UpdateItem={this.UpdateItem} />
                </div>
            </div>
            <div className="row form-group">
                <div className="col-4 offset-2">
                    <button className="btn btn-primary form-control" onClick={this.updateItems(false)}> Add All to Store </button>
                </div>
                <div className="col-4">
                    <button className="btn btn-success form-control" onClick={this.updateItems(true)}> Add All to Cart </button>
                </div>

            </div>
            
            <div className="row form-group">
            <p>
                <label>
                    *Please note that default items cannot be removed from the list (just for the sake of presentation).
                    Newly added items can be removed though.
                </label>
            </p>
            </div>
        </React.Fragment>
    }

}

const mapStateToProps = state => {
    return {
    items: state.basket.items
}}
export default connect(mapStateToProps, { fetchItems, AddItem, UpdateItem, DeleteItem, UpdateItems })(StorePage);