import "./styles/styles.css";
import { useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";

const initialFormState = {
  bestFeatures: '',
  worstFeaturs: '',
  consistency: '',
  colour: '',
  logo: '',
  spedTime: 'Swiming',
  additional: '',
  name: '',
  email: ''
}

export default function App() {

  // TODO: Add your state fields here

  const [formState, setFormState] = useState(initialFormState)

  
  return (
    // <> </> <- These are called React Fragments, and they allow us to return more than one top component
    <>
      <Header />
    <Main initialFormState = {initialFormState} formState = {formState} setFormState = {setFormState} />
    </>
  );
}
