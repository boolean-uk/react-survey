import "./App.css";

import Header from "./components/Header";
import Survey from "./components/Survey";

const initialFormData = {
  firstName: "",
  lastName: "",
  gender: "other",
  terms: false,
  password: "",
};

export default function App() {
  const [userData, setUserData] = useState(initialFormData);
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify(userData),
    });
    setUserData(initialFormData);
  };
  return (
    // <> </> <- These are called React Fragments, and they allow us to return more than one top component
    <>
      <Header />
      <Survey />
    </>
  );
}
