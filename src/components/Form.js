import React, {useState} from 'react';
import { calcularTotal } from '../helpers';


const Form = ( {cant, setCant, term, setTerm, setCotization, setLoading} ) => {

    const [error, setError] = useState(false);
    
    const handleCant = (e) => {
        setCant(parseInt(e.target.value));
    };

    const handleSelect = (e) => {
        setTerm(parseInt(e.target.value));
    }

    const handleForm = (e) => {
        e.preventDefault();
        console.log(cant, term);
        //Validation
        if( (cant === 0 || NaN) || (term === '' || NaN) ){
            setError(true);
            //console.log('Los campos no pueden estar vacíos');
            return;
        } else setError(false);

        setLoading(true);
        //Calc cotization
        
        setTimeout(() => {
            const totalCotization = calcularTotal(cant, term);
            setCotization(totalCotization);
            setLoading(false);
            document.getElementById('form').reset();
        }, 3000);

    }

    return ( 
        
        <form id="form" onSubmit={handleForm}>
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
