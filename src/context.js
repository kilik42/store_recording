import React, { Component} from 'react';

const ProductContext = React.createContext();
//provider

//consumer

 class ProductProvider extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ProductContext.Provider value="hello from context">
        {this.props.children}

      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export{ProductProvider, ProductConsumer}

// export default ProductProvider;
