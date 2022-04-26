import React,{useState} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate, useParams} from 'react-router-dom';
export default props => {
    console.log(props,"propssssssssssssssssss ql")
    const i = 1;
    const navigate = useNavigate()
   
   
 

    return (
        <div>
            <div className='tituloPrincipal'>
            <h1>Refugio para Mascotas</h1>
            <Link to={"/agregar"}> <p>AGREGAR MASCOTA</p></Link>
            </div>
            <h2>Estas mascotas buscan un buen hogar</h2>
            <div className='cuerpo'>
            
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th width="170">Nombre Mascota</th>
                        <th width="170">Tipo de Mascota</th>
                        <th width="170">Accion Ver Detalle</th>
                        <th width="170">Accion Editar</th>
                    </tr>
                </thead>
                <tbody>
            {props.mascotas.mascota && props.mascotas.mascota.map((mascota, idx)=>
                
                 (
                   /*  <div className='listaMascotas'> */
                   <tr>
                    <td><p className='masc' key={idx}>{mascota.nombre}</p></td>
                    <td><p className='masc' key={idx}>{mascota.tipo}</p></td>
                    <td><Link to={`/detalle/${mascota._id}`}><p className='botonn'>Detalle</p></Link></td>
                    <td><Link to={`/edit/${mascota._id}`}><p className='botonn'>Editar</p></Link></td>
                    </tr>
                  /*   </div> */
                )
            )}
            </tbody>
            </Table>
        </div>
        </div>
    )
}

