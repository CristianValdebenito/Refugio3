
    const validationMascota = id =>{
        if(id.name==="valNombre"){
            if(id.value.length<3 && id.value.length>0)
            {
                const arrNameError = ["name"]
                arrNameError.push("debe ingresar un nombre mayor o igual a 3 caracteres")
                arrNameError.push(0)
                return arrNameError
                     
            }
            else{
                const arrr = ["name",""]
                return arrr      
            }  
        }
    
        if(id.name==="valTipo"){
            if(id.value.length<3 && id.value.length>0)
            {
                const arrTipoError = ["tipo"]
                arrTipoError.push("El tipo debe ser mayor o igual a 3 caracteres")
                arrTipoError.push(0)
                return arrTipoError
                     
            }
            else{
                const arrr = ["tipo",""]
                return arrr      
            }  
        }

        if(id.name==="valDescripcion"){
            if(id.value.length<3 && id.value.length>0)
            {
                const arrDescripcionError = ["decsripcion"]
                arrDescripcionError.push("La descripcion debe ser mayor o igual a 3 caracteres")
                arrDescripcionError.push(0)
                return arrDescripcionError
                     
            }
            else{
                return ""       
            }  
        }
 }


module.exports = {
    
    validationMascota  
}
 

/* if(state.nombre1.length>2 && state.tipo1.length>2 && state.descripcion1.length>2)
{
    return{
        ...state,
        hasBeenSubmitted: true
    }
}else{
    return{
        ...state,
        hasBeenSubmitted: false
    }
    

 */