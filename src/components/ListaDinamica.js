import { useState } from "react";
import { Button, Container, Form, Card } from "react-bootstrap"
import './ListaDinamica.css'

export const ListaDinamica = () => {
    const [list, setList] = useState([null])

    // agrega un nuevo input 
    const agrega = () => {
        setList([...list, null]) // agrega un nuevo input vacio
    };

    // elimina el ultimo input nque ingrese
    const elimina = () => {
        if (list.length > 1) {
            setList(list.slice(null, -1)) // remueve el ultimo input
        }
    };

    // gestionaa el cambio de los valores de los inpus
    const cambioValor = (i, index) => {
        const newList = [...list] //crea una copia del array list
        newList[index] = parseFloat(i.target.value) || 0 // actualiza el valor, si no hay valor es 0
        setList(newList)
    };

    // calcula el total de las cantidades que ingresa
    const total = list.reduce((acumulador, valor) => acumulador + valor, 0)



    return (
        <Container>
            <Card>
                <h1>Semana 6 - Creación de lista dinámica</h1>
                <h2>Total: {total}</h2>
            </Card>
            <Card>
                {
                    list.map((value, index) => ( // Mapea sobre el array list ,transforma en lsita de componentes 
                        <div key={index}>{/* asigna una clave unica a cada div */}
                            <h4>Valor {index + 1}</h4> {/* muestra el valor en la lista del input */}
                            <Form.Control
                                type="number"
                                className="mb-3"
                                value={value}
                                onChange={(e) => cambioValor(e, index)}
                            />
                        </div>
                    ))
                }


                <Button className="butt" id="buttonREST" onClick={elimina}>Eliminar</Button>
                <Button className="butt" id="buttonADD" onClick={agrega}>Agregar</Button>
            </Card>
        </Container>
    )
}
