import React, { useState } from 'react'

const Home = () => {
    const [name, setName] = useState("John Doe");
  return (
    <div>
        <p>Home</p>
        <p>Welcome, {name}</p>
        <button onClick={() => setName("Jane Doe")}>Cambiar Nombre</button>
    </div>
  )
}

export default Home