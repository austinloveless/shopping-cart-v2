import React, { Component } from 'react';
import CartHeader from './components/CartHeader'
import CartFooter from './components/CartFooter'
import CartItems from './components/CartItems'
import AddItem from './components/AddItem'
import TotalPrice from './components/TotalPrice'






class App extends Component {


constructor(props) {
  super(props)
  this.state = {
    products: [],
cartItemsList: [
{ id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
{ id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
{ id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
]
  }
}

async componentDidMount() {
  const productsResponse = await fetch(`/api/products`)
  const productsJSON = await productsResponse.json()
  this.setState({products: productsJSON})

}

async createItem(item) {
   const response = await fetch('http://localhost:8082/api/people', {
     method: 'POST',
     body: JSON.stringify(item),
     headers: {
       'Content-Type': 'application/json',
       'Accept': 'application/json',
     }
   })
   const moreItems = await response.json()
   this.setState({products: [...this.state.products, moreItems]})
 }

addItems = (item) => {
  const { cartItemsList } = this.state
  this.setState({
      cartItemsList: [...cartItemsList, item]
    })
}


  render() {
    return (
      <div>
        <CartHeader />
        <CartItems items={this.state.cartItemsList}/>
        <TotalPrice cartItemsList={this.state.cartItemsList}/>
        <AddItem
          products={this.state.products}
          addItems={this.addItems}/>
        <CartFooter copyright="2016" />
      </div>
    );
  }
}

export default App;
