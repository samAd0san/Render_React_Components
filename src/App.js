import { useState, useEffect } from "react";

export default  function App() {
  /* when ever we want to render some data we have to store it in the state first to 
  retrieve it */
  const [name, setName] = useState([])

  /* The main purpose of adding names() inside the useEffect() is to trigger the API 
  call when the component is rendered (mounted) for the first time.*/
  useEffect(() => {
    names()
  }, [])

  const names = async () => {
    const getData = await fetch(`https://fakestoreapi.com/carts`)
    setName(await getData.json())
  }

  return (
    <div>
      <ol>
        {
          name.map((data) => {
            return (
              <li className="space-y-2" key={data.id} >
                <p>UserID: {data.userId}</p>
                <p>Date: {new Date(data.date).toDateString()}</p>

                <ul>
                  {
                    data.products.map((product) => {
                      return (
                        <li key={product.productId}>
                          <p>ProductID: {product.productId}</p>
                          <p>Product Quantity: {product.quantity}</p>
                        </li>
                      )
                    })
                  }
                </ul>
              </li>
            )
          })
        }
      </ol>
    </div>
  )
}