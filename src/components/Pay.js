//------------------------Library------------------------------------
import React from 'react'
//------------------------Components------------------------------------
import Card from './Card';



class Pay extends React.Component {
    constructor() {
        super();

        this.state = {
            TVA: 0.2,
            ecoTax: 0.3,
            total: 0,
            totalTVA: 0,
            totalEcoTax: 0,
            totalTTC: 0
        }
    }


    roundNumber = (x) => Math.round(x * 100) / 100;

    loadData = () => {
        let newTotal = 0; let newTotalTVA; let newTotalEcoTax; let newTotalTTC;
        this.props.items.forEach(e => { newTotal = newTotal + e.price; });
        newTotalTVA = this.roundNumber(newTotal * this.state.TVA);
        newTotalEcoTax = this.roundNumber(this.props.items.length * this.state.ecoTax);
        newTotalTTC = this.roundNumber(newTotal + newTotalEcoTax + newTotalTVA);
        this.setState({
            total: newTotal,
            totalTVA: newTotalTVA,
            totalEcoTax: newTotalEcoTax,
            totalTTC: newTotalTTC
        })
    }

    render() {
        (this.props.items.length !== 0 && this.state.total === 0) && this.loadData();
        return (
            <div>
                <div style={{ display: "block", }}>
                    {this.props.items.sort((a,b) => a.name > b.name ? 1 : -1).map((item,id) =>
                        <Card key={`pay-${id}-${item.name}`} productName={item.name} price={item.price} quantity={item.quantity} />
                    )}
                </div>
                <p>Total = {this.state.total} €</p>
                <p>totalTVA = {this.state.totalTVA} €</p>
                <p>totalEcoTax = {this.state.totalEcoTax} €</p>
                <p>totalTTC = {this.state.totalTTC} €</p>
            </div>
        )
    }
}


export default Pay;