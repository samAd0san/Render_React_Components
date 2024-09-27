import { useState, useEffect } from "react";

export default function App() {
  // First create a state where we can temp store the data
  const [name, setName] = useState([]);

  /* The main purpose of adding names() inside the useEffect() is to trigger the API 
  call when the component is rendered (mounted) for the first time.*/
  useEffect(() => {
    response()
  }, [])

  // Then create an async function to fetch the data
  const response = async () => {
    const names = await fetch(`https://jsonplaceholder.typicode.com/albums/`)
    setName(await names.json())
  }

  return (
    <div>
      <h1>Albums: </h1>
      <ol className="list-decimal">
        {
          name.map((data) => {
            return (
              <li className="" key={data.id}>
                <p className="">Title: {data.title}</p>
                <p className="">UserId: {data.userId}</p>
              </li>
            )
          })
        }
      </ol>
    </div>
  )
}