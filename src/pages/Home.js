import React, { useEffect, useState } from 'react';

const SeuComponente = () => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Adicione a classe 'show' para o conteúdo após um atraso de 2 segundos (2000 milissegundos) quando o componente é montado
        const timeoutId = setTimeout(() => {
            setShowContent(true);
        }, 800);

        // Limpe o timeout ao desmontar o componente para evitar vazamentos de memória
        return () => clearTimeout(timeoutId);
    }, []); 

    return (
        <div>
            <div id="back" className='d-flex align-items-center'>
                <div className="col-12 d-flex align-items-center flex-column">
                    <div className="col-md-6 col-12 text-md-start text-center d-flex text-white ">
                        <div className={` ${showContent ? 'show ' : ''}`} id="back-content">
                            <h1 className="display-1 text-white" style={{ textShadow: "1px 1px 1px",fontFamily: 'Roboto Condensed, sans-serif'}}>
                                <span className="fw-bold" style={{color: "#FFDC2C", textShadow: "1px 1px 1px  rgba(0, 0, 0, 0.568)"}}>VIAGENS</span> <br /> QUE <span className="fw-bold" style={{color: "#FFDC2C", textShadow: "1px 1px 1px  rgba(0, 0, 0, 0.568)"}}>CONECTAM</span>
                            </h1>
                            <p className="fs-5 fw-bold">
                                Somos uma das primeiras agências de viagens do Brasil especializadas em turismo de natureza. Estamos há mais de
                                26 anos promovendo diferentes vivências pelo mundo e proporcionando aos nossos clientes momentos de verdadeira
                                conexão com a natureza e cultura local.
                            </p>
                            <div className="col-12  d-md-flex">
                                <div className="col-md-6 col-12 d-flex justify-content-center">
                                <button type="button" class="btn btn-outline-warning w-50 fw-bold">Pacotes</button>

                                </div>
                                <div className="col-md-6 col-12  d-flex justify-md-content-start mt-md-0 mt-2 justify-content-center">
                                <button type="button" class="btn btn-outline-warning w-50 fw-bold">Destino</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

function Home() {
    return <SeuComponente />;
}

export default Home;
