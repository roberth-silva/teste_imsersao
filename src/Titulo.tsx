import React from 'react';

interface TituloProps{
    titulo?: string;
}

const Titulo: React.FC<TituloProps> = (props) => {
    return <h1>{props.titulo}</h1>
}

export default Titulo;