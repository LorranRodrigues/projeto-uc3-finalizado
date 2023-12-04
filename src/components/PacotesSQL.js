import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slide3 from "../images/slide3.png"

function PacotesSQL() {
  const [viagens, setViagens] = useState([]);

  useEffect(() => {
    // Fazer solicitação para obter dados do PHP
    axios.get('http://localhost/lorran/APIphp/script.php')
      .then(response => {
        // Filtrar viagens com preço inferior a R$ 1000
        const viagensAte1000 = response.data.filter(viagem => viagem.preco < 1000);
        setViagens(viagensAte1000);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="row d-flex flex-md-row flex-column">
      {viagens.map((viagem, index) => (
        <div key={index} className="col-md-3 col-12 mb-4 d-flex justify-content-center">
          <div className="card" style={{ width: "19rem" }}>
            <img src={Slide3} className="card-img-top" alt="..." height={180} />
            <div className="card-body">
                <p className='m-0 p-0 fw-bold' style={{color:"rgba(0, 0, 0, 0.363)",fontSize: "12px"}}>PACOTE</p>
              <h5 className="fs-3 fw-bold">{viagem.destino}</h5>
              <p className='m-0 p-0 fw-bold' style={{color:"rgba(0, 0, 0, 0.363)",fontSize: "14px"}}>{viagem.origem}</p>
              <p className='m-0 p-0 fw-bold' style={{color:"rgba(0, 0, 0, 0.363)",fontSize: "14px"}}>Hotel + Aéreo</p>
              <hr />
              <p className='m-0 p-0 fw-bold' style={{color:"rgba(0, 0, 0, 0.663)",fontSize: "14px"}}>Preço final por pessoa</p>
              <p className="m-0 p-0"> R$<span className='fw-bold fs-3' style={{color:"rgba(0, 0, 0, 0.863)"}}> {viagem.preco}</span></p>
              <p className='m-0 p-0 fw-bold' style={{color:"rgba(0, 0, 0, 0.663)",fontSize: "14px"}}>Taxas e impostos incluso</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PacotesSQL;
