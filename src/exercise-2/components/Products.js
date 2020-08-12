import React from 'react'
import '../styles/App.css'
import {setUnderline} from "../../exercise-1/components/App";
import {Link} from "react-router-dom";

class Products extends React.Component {
  state = {
    productList: {
      bicycle: {
        "id": 1,
        "name": "Bicycle",
        "price": 30,
        "quantity": 15,
        "desc": "Bicycle is Good"
      },
      TV: {
        "id": 2,
        "name": "TV",
        "price": 40,
        "quantity": 16,
        "desc": "TV is good"
      },
      pencil: {
        "id": 3,
        "name": "Pencil",
        "price": 50,
        "quantity": 17,
        "desc": "Pencil is good"
      }
    }
  }

  render() {
    return (
      <div className={'products_div'}>
        <p>All Products:</p>
        {Object.keys(this.state.productList).map(product => {
          let id = this.state.productList[product].id;
          return (
            <Link to={`/products/${id}`} key={product} className={'single_product_link'}>
              <p>{product}</p>
            </Link>
          )
        })}
      </div>
    )
  }

  componentDidMount() {
    setUnderline('link_products');
  }
}

export default Products;