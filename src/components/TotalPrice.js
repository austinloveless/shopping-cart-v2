import React from "react";
import ReactDOM from "react-dom";

class TotalPrice extends React.Component {
  Total = () => {
    const { cartItemsList } = this.props;
    console.log(cartItemsList);
    return cartItemsList.reduce((sum, i) => {
      console.log(i.quantity)
      console.log(i.product.priceInCents)
      return  sum + i.quantity * i.product.priceInCents;
    }, 0);
  };

  render() {
    return <div>Total Price: ${this.Total() / 100} </div>;
  }
}

export default TotalPrice;
