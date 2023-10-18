//------------------------Library------------------------------------
import React from 'react';
//------------------------Components------------------------------------
import Button from './components/Button';
import Add from './components/Add'
import List from './components/List'
import Pay from './components/Pay'
//------------------------Style------------------------------------
import './App.css';
//------------------------------------------------------------------------


class App extends React.Component {

    constructor() {
        super();

        this.state = {
            activeTab: "Add",
            items: [],
            productName: "",
            price: 1,
            total: 0
        }
    }
    dialog = document.querySelector("dialog");

    isSelected = (n) => { this.setState(prevState => { return { ...prevState, activeTab: n } }) };
    updateProductName = (e) => { this.setState(prevState => { return { ...prevState, productName: e.target.value } }) };
    updatePrice = (e) => { this.setState(prevState => { return { ...prevState, price: parseInt(e.target.value) } }) }

    addItem = () => {
        this.setState(prevState => {
            const index = this.state.items.findIndex(e => (e.name === prevState.productName && e.price === prevState.price));
            const exist = index !== -1;
            if (exist) {
                const newItems = JSON.parse(JSON.stringify(prevState.items)); newItems[index].quantity++;
                return { ...prevState, items: newItems, total: prevState.total + 1 };
            } else {
                return {
                    ...prevState,
                    items: [...prevState.items, {
                        name: prevState.productName,
                        price: prevState.price,
                        quantity: 1,
                    }].sort((a, b) => b.name - a.name ? 1 : -1),
                    total: prevState.total + 1
                }
            }
        })
        document.querySelector("dialog").showModal();
    };

    //------------------------------------------------------------------------

    renderActiveTab() {
        if (this.state.activeTab === "Pay") {
            return <Pay items={this.state.items} />
        } else if (this.state.activeTab === "List") {   
            return <List items={this.state.items} />
        } else { return <Add addItem={this.addItem} price={this.state.price} updateProductName={this.updateProductName} updatePrice={this.updatePrice} /> }
    }


    render() {
        return (
            <div className="main-div">
                <h1 className="main-title">Backery</h1>
                <div className="div-btn">
                    <Button onClick={() => this.isSelected("Add")} active={this.state.activeTab === "Add"} label={"Add"} />
                    <Button onClick={() => this.isSelected("List")} active={this.state.activeTab === "List"} label={`List (${this.state.total})`} />
                    <Button onClick={() => this.isSelected("Pay")} active={this.state.activeTab === "Pay"} label={"Pay"} />
                </div>
                <div className="container">{this.renderActiveTab()}</div>
                <dialog>
                    <p>{this.state.productName} ({this.state.price}€) à bien été ajouter à la liste</p>
                    <button onClick={() => document.querySelector("dialog").close()}>OK</button>
                </dialog>
            </div >
        )
    }


}


export default App;
