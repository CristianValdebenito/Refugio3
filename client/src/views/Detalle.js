import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
export default props => {
    const navigate = useNavigate()
    const {id} = useParams()
    console.log(id,"id en detalle")
    const [mascota, setMascota] = useState({})

    const deleteMascot = (Id) => {
        axios.delete('http://localhost:8080/api/mascotas/delete/' + Id)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
       navigate("/")
    }
    useEffect(() => {
        axios.get(`http://localhost:8080/api/mascotas/${id}`)
        .then(res=>setMascota(res.data.detalle))
        .catch(err=>console.log(err))
            
    }, [id])
    console.log(mascota,"mascota del id")
    return (
        <div className='Detalle'>
            <div className='Detalle_1'>
                <div><h1>Centro de Mascotas</h1></div>
                <div><Link to={"/"}> <p>VOLVER AL HOME</p></Link></div>
            </div>
            <div className='Detalle_3'>
            <h3>Detalles sobre: {mascota.nombre}</h3>
            <button onClick={(e)=>{deleteMascot(mascota._id)}} >ADOPTAR A {mascota.nombre}</button>
            </div>
            <div className='Detalle_2'>
            <p className='p1'><h3>Tipo: {mascota.tipo}</h3></p>
            <p className='p2'><h3>Descripcion: {mascota.descripcion}</h3></p>
            <div className='Hab'>
            <p className='p3'><h3>Habilidades:</h3> </p>
            <p className='p4'> <h3>{mascota.habilidad1}, {mascota.habilidad2}, {mascota.habilidad3}</h3></p>
            </div>
            </div>
            
           
        </div>
    )
}
