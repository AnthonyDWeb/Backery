//------------------------Library------------------------------------
import React from 'react'

class List extends React.Component {
    render() {
        return (this.props.items.length === 0 ?
            <p>... Your list is empty ...</p> :
            <div className='listContainer'>
                {this.props.items.sort((a,b) => a.name > b.name ? 1 : -1).map((item, id) =>
                    <ul key={`list-${id}-${item.name}`}>
                        <li>
                            <span>{item.name} {item.price}€</span>
                            <span className='itemQuantity'>x{item.quantity}</span>
                        </li>
                    </ul>
                )}
            </div>)
    }
}

export default List;