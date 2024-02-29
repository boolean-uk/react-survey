import "./App.css";
import Form from "./components/Form";
import { useState } from "react";
import Header from "./components/Header";
import Survey from "./components/Survey";

export default function App() {
  const [userData, setUserData] = useState({
    firstLine: [],
    secondLine: [],
    thirdLine: 0,
    fourthLine: 0,
    fifthLine: 0,
    sixthLine: [],
    seventhLine: "",
    eighthLine: "",
    ninthLine: "",
  });
  const [listUserData, setListUserData] = useState({});
  return (
    // <> </> <- These are called React Fragments, and they allow us to return more than one top component
    <>
      <Header />
      <Survey />
      <Form
        userData={userData}
        setUserData={setUserData}
        listUserData={listUserData}
        setListUserData={setListUserData}
      />
    </>
  );
}
