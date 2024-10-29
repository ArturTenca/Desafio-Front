import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';


const Cadastro = () => {
    
    let { id } = useParams();
    const [grupos, setGrupos] = useState({
        grupos: '',
        pontos: '',
    });

    const navigate = useNavigate();

    let metodo = "post";
    if (id) {
        metodo = "put";
    }
    const handleChange = (e) => {
        setGrupos({ ...grupos, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        fetch(`http://localhost:5000/grupos/${id ? id : ''}`, {
            method: metodo,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(grupos),
        }).then(() => {
            navigate("/")
        });
    }

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:5000/grupos/${id}`)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setGrupos(data);
                });
        }
    }, [id])

    return (
        <>
            <form onSubmit={handleSubmit}>
                <br />
                <span className="titulo">Cadastre-se</span>
                <br />
                <input
                    type="text"
                    name="grupos"
                    placeholder="Nome do grupo"
                    value={grupos.grupos}
                    onChange={handleChange}
                />
                <br />
                <br />
                <input
                    type="number"
                    name="pontos"
                    placeholder="Pontos"
                    value={grupos.pontos}
                    onChange={handleChange}
                />
                <br />
                <br />
                <button type="submit">Cadastrar</button>
            </form>
        </>
    )
}
export default Cadastro
