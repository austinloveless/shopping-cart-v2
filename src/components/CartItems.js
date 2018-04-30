import React from "react";

const CartItems = props => {
  let listItems = props.items.map((items, i) => {
    return (
      <div key={i}>
        <div className="list-group">
          <div className="list-group-item">
            <div className="row">
              <div className="col-md-8">{items.product.name}</div>
              <div className="col-md-2">{items.product.priceInCents}</div>
              <div className="col-md-2">{items.quantity}</div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="container">
      <h1>Cart Items</h1>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-8">Product</div>
            <div className="col-md-2">Price</div>
            <div className="col-md-2">Quantity</div>
          </div>
        </div>
        {listItems}
      </div>
    </div>
  );
};

export default CartItems;
