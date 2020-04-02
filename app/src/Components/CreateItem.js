import React, { Component } from 'react';
import RollButton from './RollButton';
import RolledItemDescription from './RolledItemDescription';

class CreateItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item_categories: [],
            roll: 0,
        };

        this.roll_count = {
            weapon: 0,
            armour: 0,
            companion: 0
        }

        this.rolled_item = {}

        this.roll_items = {}
    }

    componentDidMount() {
        fetch('https://refaerds.github.io/roll_items.json')
        .then(response => response.json())
        .then(roll_items => {
            this.setState({ item_categories: roll_items.item_categories });
            this.roll_items = roll_items;
        })
        .catch(err => alert("The data failed to load")) 
    }

    updateItemCategories = (category) => {
        if (this.roll_count[category] === 3) {
            const i = this.roll_items.item_categories.indexOf(category);
            this.roll_items.item_categories.splice(i, 1);
            delete this.roll_count[category];
        }
    }

    handleCategoryClick = (event, roll, item, category) => {
        this.roll_count[category] += 1;
        this.updateItemCategories(category);
        this.rolled_item = item;
        this.setState({ 
            item_categories: [event.target.innerHTML],
            roll: roll,
        });
    }

    handleDiscardClick = () => {
        this.rolled_item = {};
        this.setState({
            item_categories: this.roll_items.item_categories,
            roll: 0
        })
    }

    handleSaveClick = () => {
        const category = this.state.item_categories[0].toLowerCase();
        if (this.roll_count[category]) {
            this.roll_count[category] = 3;
            this.updateItemCategories(category);
        }
        this.props.handleSaveClick(this.rolled_item);
        this.rolled_item = {};
        this.setState({
            item_categories: this.roll_items.item_categories,
            roll: 0
        })
    }

    render() {
        return (
            <div>
                <div className="jumbotron bg-medium-grey w-80 mx-auto pt-2 pb-2 mb-1">
                    <h4 className="text-main">Create an item</h4>
                </div>

                <div className="jumbotron bg-medium-grey w-80 mx-auto pt-4 pb-4">
                    {this.state.item_categories.map((category) => {
                        return <RollButton
                            key = {category}
                            category = {category}
                            handleCategoryClick = {this.handleCategoryClick}
                            disabled = {Object.keys(this.rolled_item).length ? true : false}
                            roll_items = {this.roll_items}
                        />
                    })}

                    <RolledItemDescription 
                        item = {this.rolled_item}
                        roll = {this.state.roll}
                        handleSaveClick = {this.handleSaveClick}
                        handleDiscardClick = {this.handleDiscardClick}/>
                    
                    <div className="font-weight-light text-white-50 note">
                        <p className="p-0 m-1">You have 3 rolls per each category</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateItem;