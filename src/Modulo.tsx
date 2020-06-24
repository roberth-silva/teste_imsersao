import React, { useState, ChangeEvent, FormEvent } from 'react';

interface ModuloProps{
    title?: string;
}

const Modulo: React.FC<ModuloProps> = (props) =>{

    const [text, setText] = useState('');
    const [arrayText, setArrayText] = useState<string[]>([]);

    function handleChangeText(event: ChangeEvent<HTMLInputElement>){
        setText(event.target.value);
    }

    function handleSubmit(event: FormEvent){
        event.preventDefault();
        setArrayText([ ...arrayText, text ]);
    }

    function handleDeleteElement(element: string){
        return arrayText.filter( (ele)=> {
            return ele!= element;
        });
    }

    return (
        <div>
            <h2>{props.title}</h2>
                <ul>
                    {arrayText.map(texto =>(                    
                        <li key={texto}>
                            {texto}
                            <button onClick={() => setArrayText(handleDeleteElement(texto))}>ok</button>
                        </li>
                    ))}
                </ul>
            <form onSubmit={handleSubmit}>            
                <input type="text" onChange={handleChangeText} />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Modulo;