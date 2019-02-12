import React, { Component} from 'react';
import Product from "./Product";
import Title from './Title';
/**
 * ProductList
 */
export class ProductList extends Component {

  state={
    products:[]
  }
  render() {
    return (
      //<Product/>

      <React.Fragment>
        <div className="py-5">
          <div className="container">
             <Title name="our" title="products"/>
            <div className="row">

            </div>
          </div>
        </div>

      </React.Fragment>
    );
  }
}



export default ProductList;
