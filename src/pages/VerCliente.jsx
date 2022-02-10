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
      <h1>Ver Cliente</h1>
    </div>
  )
}

export default VerCliente