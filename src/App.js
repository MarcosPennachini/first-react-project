import Header from "./components/Header";
import Form from "./components/Form";
import {useState} from 'react';

function App() {

  const [cant, setCant] = useState(0);

  return (
    <div className="App">
      <Header text="Hola mundo"/>
      <div className="container">
        <Form
          cant={cant}
          setCant={setCant}  
        />
      </div>
    </div>
  );
}

export default App;
