import React, {useState} from 'react';


const Form = ( {cant, setCant, term, setTerm} ) => {

    const [error, setError] = useState(false);
    
    const handleCant = (e) => {
        setCant(parseInt(e.target.value));
    };

    const handleSelect = (e) => {
        setTerm(e.target.value);
    }

    const handleForm = (e) => {
        e.preventDefault();

        //Validation
        if( cant === 0 || term === '' ){
            setError(true);
            console.log('Los campos no pueden estar vacíos');
        } else setError(false);
    }

    return ( 
        
        <form onSubmit={handleForm}>
            {cant}
            <br/>
            {term}
          <div className="row">
              <div>
                  <label>Cantidad Prestamo</label>
                  <input 
                    className="u-full-width" 
                    type="number" 
                    placeholder="Ejemplo: 3000" 
                    onChange={handleCant}
                  />
              </div>
              <div>
                  <label>Plazo para Pagar</label>
                  <select 
                    className="u-full-width"
                    onChange={handleSelect}
                  >
                    <option value="">Seleccionar</option>
                    <option value="3">3 meses</option>
                    <option value="6">6 meses</option>
                    <option value="12">12 meses</option>
                    <option value="24">24 meses</option>
                  </select>
              </div>
              <div>
                <input 
                type="submit" 
                value="Calcular" 
                className="button-primary u-full-width" 
                />
              </div>
          </div>
            {(error) ? <div className="error">Los campos no pueden estar vacíos</div> : null}
            

        </form>
    );
}
 
export default Form;
