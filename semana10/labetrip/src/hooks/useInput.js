import { useState } from 'react'

const useInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInput = (event) => {
    setInputValue(event.target.value)
  }

  return [inputValue, handleInput];
}

export default useInput;