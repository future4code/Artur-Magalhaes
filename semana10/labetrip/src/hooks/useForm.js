import { useState } from 'react'

const useForm = (initialState) => {
  const [form, setform] = useState(initialState);

  const handleForm = (name, value) => {
    const newForm = { ...form, [name]: value };
    setform(newForm)
  }

  return {form, handleForm};
}

export default useForm;