import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Survey from "./components/Survey";

export default function App() {

  const [userData, setUserData] = useState({
    
  })

  return (
    // <> </> <- These are called React Fragments, and they allow us to return more than one top component
    <>
      <Header />
      <Survey />
    </>
  );
}
