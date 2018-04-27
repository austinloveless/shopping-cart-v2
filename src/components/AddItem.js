import React from 'react';


class AddItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      priceInCents: 0,
      quantity: 1
    }
  }

onSubmit = (e) => {
  e.preventDefault()
    const { id, name, priceInCents, quantity } = this.state

    const newProduct = {
      product: {
        id,
        name,
        priceInCents
      },
      quantity
    }
    console.log('log', newProduct)
  this.props.addItems(newProduct)
}

onSelectChange = (e) => {
  const index = e.nativeEvent.target.selectedIndex
  const select = e.nativeEvent.target
  const name = select[index].text
  const priceInCents = e.target.value

  this.setState({ name, priceInCents })
}

renderProductOption = () => {
  const { products } = this.props
  return products.map((product) => (
    <option key={product.id} value={product.priceInCents}>
      {product.name}
    </option>
  ))
}

render() {
  return(
  <form onSubmit={this.onSubmit}>
    <p>
      <label>
      Quantity:
       <input
       type ="text"
       onChange={ (e) => this.setState({quantity: e.target.value}) }
       name="quantity"/>
      </label>
    </p>
    <p>
      <label> Items:
        <select onChange={this.onSelectChange}>
          <option>Select an item... </option>
          { this.renderProductOption() }
        </select>
      </label>
    </p>
    <p>
    <button type="submit">Submit</button>
    </p>
  </form>
  )
}

}



export default AddItem
