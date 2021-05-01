import Header from "./components/Header";
import Form from "./components/Form";
import Message from "./components/Message";
import Cotization from "./components/Cotization";
import Spinner from "./components/Spinner";
import {useState} from 'react';

function App() {

  const [cant, setCant] = useState(0);
  const [term, setTerm] = useState('');
  const [cotization, setCotization] = useState(0);
  const [loading, setLoading] = useState(false);

  let component;
  
  if (loading){
    component = <Spinner />
  } else if (cotization === 0){
    component = <Message />
  } else {
    component = <Cotization 
      cant={cant}
      term={term}
      cotization={cotization}
    />
  }    
  return (
    <div className="App">
      <Header text="Cotizador"/>
      <div className="container">
        <Form
          cant={cant}
          setCant={setCant}  
          term={term}
          setTerm={setTerm}
          cotization={cotization}
          setCotization={setCotization}
          setLoading={setLoading}
        />
        
        <div className="mensajes">
          {component}
        </div>
        
         
      </div>
      
    </div>
  );
}

export default App;
