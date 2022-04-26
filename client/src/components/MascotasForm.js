import React, { useState, useEffect, useReducer } from 'react'
import { useNavigate, Link} from 'react-router-dom';
/* import { validationMascota } from "../services/validationService"; */
//import Main from '../views/Main';
//import axios from 'axios';
export default props => {
    const { initialNombre, initialTipo, initialDescripcion, initialHabilidad1, initialHabilidad2, initialHabilidad3, onSubmitProp, errores,
         validateProp, valNombre, valTipo, valDescripcion, valErrorNombre, valErrorTipo, valErrorDescripcion, errNameProp, errTipoProp, errDescripcionProp} = props;
    const navigate = useNavigate()
    
    const [errors, setErrors] = useState([]);
    const [mascot, setMascot] = useState({})
    const [nombre, setNombre] = useState(initialNombre); 
    const [tipo, setTipo] = useState(initialTipo);
    const [descripcion, setDescripcion] = useState(initialDescripcion);
    const [habilidad1, setHabilidad1] = useState(initialHabilidad1);
    const [habilidad2, setHabilidad2] = useState(initialHabilidad2);
    const [habilidad3, setHabilidad3] = useState(initialHabilidad3)
    //const [crea, setCrea] = useState(creaMascota);
    console.log(errores,"errores en form")
    //VARIABLE INICIAL DEL REDUCER PARA VALIDACIONES FRONT END------ABAJO
    console.log(props,"props que llegan a form")

    //USE EFFECT PARA LOS ERRORES DEL BACKEND
    useEffect(() => {
        setErrors(errores)
        console.log(errors,"errores en estado errors")
    }, [errores])
    
    const onSubmitHandler = e => {
        e.preventDefault();
        if(errNameProp[2]!==0 && errTipoProp[2]!==0 && errDescripcionProp[2]!==0){
        onSubmitProp({nombre, tipo, descripcion, habilidad1, habilidad2, habilidad3});
        }
        else{
            console.log("no hay manoooooooooooooo")
        }
    }
    
    useEffect(() => {
        console.log(mascot,"produccccccccc")
    }, [mascot])

    const handleonchange = (e)=> {
        console.log(e.target, "que me llega en change")
        if(e.target.name==="valNombre"){
            setNombre(e.target.value)
            validateProp(e.target)
        }
        else if(e.target.name==="valTipo"){
            setTipo(e.target.value)
            validateProp(e.target)
        }else{
            setDescripcion(e.target.value)
            validateProp(e.target)
        }
    }
    useEffect(() => {
        console.log(nombre,"nombre ")
    }, [nombre])
    
    return (
        <div className='IngresoF'>
            <div className='titulo'>
                <h1>Centro de Mascotas</h1>
                <Link to={"/"}> <p>VOLVER AL HOME</p></Link>
            </div>
            <h4 className='Subt'>¿Conoces una Mascota que necesite un Hogar?</h4>
            <div className='Form0'>
                <form className='Form' onSubmit={onSubmitHandler}>
                    <div className='Datos'>
                         {errores && errores.map((err, index) => <p className='color' key={index}>{err}</p>)}
                        <p>
                            <label> Nombre Mascota</label><br/>
                            <input type="text" name='valNombre' onChange = {(e)=>{handleonchange(e) }} value={nombre}/>
                            <p className='color'>{errNameProp[1]}</p>
                        </p>
                        <p>
                            <label>Tipo</label><br/>
                            <input type="text"  name='valTipo' onChange = {(e)=>{handleonchange(e)}} value={tipo}/>
                            <p className='color'>{errTipoProp[1]}</p>
                        </p>
                        <p>
                            <label>Descripcion</label><br/>
                            <input type="text" name='valDescripcion' onChange = {(e)=>{handleonchange(e)}} value={descripcion}/>
                            <p className='color'>{errDescripcionProp[1]}</p>
                        </p>
                        <div className='Ingresar'>
                            <input value={"Ingresar Mascota"}  type="submit"/>
                        </div>  
                    </div>
                    <div className='Habil'>
                        <p>
                            <label>Habilidad 1</label><br/>
                            <input type="text" name='habilidad1' onChange = {(e)=>{handleonchange(setHabilidad1(e.target.value))}} value={habilidad1}/>
                            {/* <p className='color'>{state.error_descripcion}</p> */}
                        </p>
                        <p>
                            <label>Habilidad 2</label><br/>
                            <input type="text" name='habilidad2' onChange = {(e)=>{handleonchange(setHabilidad2(e.target.value))}} value={habilidad2}/>
                            {/* <p className='color'>{state.error_descripcion}</p> */}
                        </p>
                        <p>
                            <label>Habilidad 3</label><br/>
                            <input type="text" name='habilidad3' onChange = {(e)=>{handleonchange(setHabilidad3(e.target.value))}} value={habilidad3}/>
                            {/* <p className='color'>{state.error_descripcion}</p> */}
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
    //}
}


