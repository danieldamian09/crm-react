import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const VerCliente = () => {

  const [cliente, setCliente] = useState({})

  const {id} = useParams()

  const obtenerClienteAPI = async() => {    
    try {
      const url = `http://localhost:4000/clientes/${id}`;
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      setCliente(resultado)     
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    obtenerClienteAPI()
  }, [])
  

  return (
    <div>
      <p className=" text-2xl text-gray-600 mt-4">
        <span className="  text-gray-800 uppercase font-bold">Cliente:</span>
        {cliente.nombre}
      </p>
      <p className=" text-2xl text-gray-600 mt-4">
        <span className="  text-gray-800 uppercase font-bold">Email:</span>
        {cliente.email}
      </p>
      <p className=" text-2xl text-gray-600 mt-4">
        <span className="  text-gray-800 uppercase font-bold">Teléfono:</span>
        {cliente.telefono}
      </p>
      <p className=" text-2xl text-gray-600 mt-4">
        <span className="  text-gray-800 uppercase font-bold">Empresa:</span>
        {cliente.empresa}
      </p>
      <p className=" text-2xl text-gray-600 mt-4">
        <span className="  text-gray-800 uppercase font-bold">Notas:</span>
        {cliente.notas}
      </p>
    </div>
  )
}

export default VerCliente