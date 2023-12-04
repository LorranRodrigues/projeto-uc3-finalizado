import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Viagens = () => {
    const [viagens, setViagens] = useState([]);

    useEffect(() => {
        // Fazer solicitação para obter dados do PHP
        axios.get('http://localhost/lorran/APIphp/script.php')
            .then(response => setViagens(response.data))
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        // Fazer solicitação para obter dados do PHP
        axios.get('http://localhost/lorran/APIphp/script.php')
            .then(response => {
                console.log(response.data); // Verificar os dados recebidos
                setViagens(response.data);
            })
            .catch(error => console.error(error));
    }, []);
    
    return (
        <div>
            <h1>Viagens</h1>
            {viagens.map(viagem => (
                <div key={viagem.id}>
                    <h2>{viagem.destino}</h2>
                    <p>Preço: R$ {viagem.preco}</p>
                    <p>{viagem.descricao}</p>
                </div>
            ))}
        </div>
    );
};

export default Viagens;
