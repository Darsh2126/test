import { useState } from "react"
import HomePage from "../UI"

const HomeContainer = () => {
  const [label, setLabel] = useState('item');

  const handleChange = (e) => {
    setLabel(e.target.name);
  }

  return (
    <HomePage labelValue={label} handleChange={handleChange} />
  )
}

export default HomeContainer