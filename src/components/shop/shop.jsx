import React, { Component } from 'react';
import SHOP_DATA from './shopData'
import PreviewCollection from '../preview-collection/preview-collection';

class ShopPage extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         collection:SHOP_DATA
      };
    };

    render(){
        const {collection} = this.state;

        return (
            <div>
                {collection.map(({id, ...otherColletionProps}) => (

                    <PreviewCollection key={id} {...otherColletionProps} />
                    
                    // <div key={item.id}>
                    //     <h1>{item.title}</h1>
                    //     <div>{item.items.map(element => (
                    //         <p key={element.id}>{element.name}</p>
                    //     ))}</div>
                    // </div>
                ))}
            </div>
        )

    }
    
}

export default ShopPage;