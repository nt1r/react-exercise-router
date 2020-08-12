import React from 'react'

class ProductDetail extends React.Component {
  state = {}

  render() {
    return (
      <div className={'product_detail_div'}>
        <p>Product Details:</p>
        {Object.keys(this.state).map((propKey) => {
          return (
            <p key={propKey}>{propKey}: {this.state[propKey]}</p>
          );
        })}
        <p>URL: {this.props.match.url}</p>
      </div>
    )
  }

  componentDidMount() {
    // console.log(this.props.match.params.id);
    let product = this.getProductDetail(this.props.match.params.id);
    this.setState(product);
  }

  getProductDetail(id) {
    switch (id) {
      case '1':
        return {
          "id": 1,
          "name": "Bicycle",
          "price": 30,
          "quantity": 15,
          "desc": "Bicycle is Good"
        }
      case '2':
        return {
          "id": 2,
          "name": "TV",
          "price": 40,
          "quantity": 16,
          "desc": "TV is good"
        }
      case '3':
        return {
          "id": 3,
          "name": "Pencil",
          "price": 50,
          "quantity": 17,
          "desc": "Pencil is good"
        }
    }
  }
}

export default ProductDetail;