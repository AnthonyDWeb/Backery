//------------------------Library------------------------------------
import React from 'react'
import Button from './Button';

class Add extends React.Component {
    render() {
        const value = this.props.price;
        return (
            <div className='addContainer'>
                <input className="inputAppText" type="text" onChange={this.props.updateProductName} placeholder="Enter something . . ." />
                <div className='addInputContainer'>
                    <input className="inputAppRange" type="range" onChange={this.props.updatePrice} min="1" max="10" value={value} />
                    <p>{value} €</p>
                </div>
                <Button label={"Add"} onClick={this.props.addItem} active={true}/>
            </div>
        )
    }
}


export default Add;