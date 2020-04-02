import React, { Component } from 'react';
import InventorySection from './InventorySection';
import CreateItem from './CreateItem';
import Tooltip from './Tooltip';

class Inventory extends Component {
    constructor() {
        super();
        this.state = {
            inventory_items: []
        };
    }
    
    componentDidMount() {
        fetch('https://refaerds.github.io/char_data.json')
        .then(response => response.json())
        .then(char_data => {
            this.setState({inventory_items: char_data.inventory});
            for (let key in char_data) {
                sessionStorage.setItem(key, JSON.stringify(char_data[key]));
            }
        })
        .catch(err => alert("The data failed to load")) 
    }

    handleItemClick = (event) => {
        const inventory_items_copy = JSON.parse(sessionStorage.getItem("inventory"));
        const i = inventory_items_copy.findIndex((item) => {return item.id === event.target.id}); 
        
        if (event.ctrlKey) {
            inventory_items_copy.splice(i, 1);
        }
        else {
            inventory_items_copy[i].isEquipped = !inventory_items_copy[i].isEquipped;
        }

        this.setState({ inventory_items: inventory_items_copy });
        sessionStorage.setItem("inventory", JSON.stringify(inventory_items_copy));
    }

    handleSaveClick = (item) => {
        const inventory_items_copy = JSON.parse(sessionStorage.getItem("inventory"));
        inventory_items_copy.push(item);
        
        this.setState({ inventory_items: inventory_items_copy });
        sessionStorage.setItem("inventory", JSON.stringify(inventory_items_copy));
    }

    // SaveAll = () => {
    //     console.log(this.state.inventory_items); //continue here
    // }
    
    render() {
        const { inventory_items } = this.state;
        const equipped_items = inventory_items.filter((item) => {
            return item.isEquipped == 1;
        });
        const backpack_items = inventory_items.filter((item) => {
            return item.isEquipped == 0;
        });
        const weight = inventory_items.reduce((total_weight, item) => {
            return total_weight += item.weight;
        }, 0);
        const max_weight = +sessionStorage.getItem("max_weight")
        let weight_class =  "";
        let tooltip = "";
        if (weight > max_weight) {
            weight_class =  "weight_exceeded";
            tooltip = <Tooltip warning="You cannot walk!"/>;
        }
        

        return (
            <div>
                <div className="jumbotron bg-medium-grey w-80 mx-auto pt-2 pb-2 mb-1 mt-4">
                    <h4 className="text-main d-inline-block">{JSON.parse(sessionStorage.getItem("character_name"))}'s Inventory</h4>
                    <div className="text-white-50 float-right navbar-text m-0 relative">
                        Weight: <span className={weight_class}>{weight}</span> / {max_weight}
                        {tooltip}
                    </div>
                </div>
                
                <div className="row jumbotron bg-medium-grey w-80 mx-auto pt-4 pb-4">
                    <div className="row w-100">
                        <div className="col-xl-6 text-center">
                            <p className="text-main p-2">Equipped Items</p>
                            <InventorySection 
                                items = {equipped_items}
                                handleItemClick = {this.handleItemClick}
                            />
                        </div>
                        <div className="col-xl-6 text-center">
                            <p className="text-main p-2">Backpack Items</p>
                            <InventorySection 
                                items = {backpack_items}
                                handleItemClick = {this.handleItemClick}
                            />
                        </div>
                    </div> 
                    <div className="font-weight-light text-white-50 note">
                        <p className="p-0 m-1">Left-click to move an item</p>
                        <p className="p-0 m-1">Ctrl + left-click to discard an item</p>
                    </div>
                    
                </div>

                <CreateItem handleSaveClick = {this.handleSaveClick}/>

                {/* <button onClick={this.SaveAllShit}>Save all</button> */}

            </div>
        )
    }
}

export default Inventory;