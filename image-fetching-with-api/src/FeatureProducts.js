import React, { useState, useEffect } from "react"
import axios from "axios"
const FeatureProducts = () => {
  const [product, setProducts] = useState([])
  useEffect(() => {
    fetchProducts()
  }, [])
  const fetchProducts = async () => {
    const { data } = await axios.get("http://shoppingapiacme.herokuapp.com/shopping")
    console.log(data)
    setProducts(data)
  }

  return (
    <div>
      <h1>Feature Products</h1>
      <div className="item-container">
        {product.map(product => (
          <div className="card" key={product.id}>
            <img src={product.image} alt="" />
            <h3>{product.brand}</h3>
            <p>{product.item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeatureProducts
