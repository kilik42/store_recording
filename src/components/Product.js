import React, { Component } from 'react';
import styled from 'styed-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';

/**
 * Product
 */
export class Product extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const{id, title, img, price, inCart} = this.props.product;

    return (
      <div>
        <ProductWrapper>
          <h3>hello from product</h3>

        </ProductWrapper>

    </div>
    );
  }
}


const ProductWrapper = styled.div`



`
