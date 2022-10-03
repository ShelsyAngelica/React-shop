//es extension .js porque aca solo va a haber codigo js
//aca vamos a separar la logica del componente

import { useEffect, useState} from 'react';
import axios from 'axios';


const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);

    //esta es la peticion
    //usamos async para esperar la peticion
    useEffect( async () => {  
        //usamos await para esperar que suceda
        const response = await axios(API); //llamamos a nuestra API  
        setProducts(response.data); // para actualizar con la informacion que nos trae
    },[])

    //products es lo que esta funcion va a retornar
    return products
};

export default useGetProducts;