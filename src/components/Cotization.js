const Cotization = ( {cant, term, cotization} ) => {
    return (
        <div className="u-full-width resultado">
            <h4>Cotización</h4>
            <p>El préstamo solicitado es de: ${cant}</p>
            <p>A pagar en: {term} meses</p>
            <p>La cotización es: <strong>${cotization}</strong></p>
            <p>Pago mensual: ${(cotization / term).toFixed(2)} /mes</p>
        </div>
    )
}

export default Cotization;