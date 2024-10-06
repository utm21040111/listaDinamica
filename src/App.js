import { Card, Container } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import { TecSocForm, CieMAForm, HisPoliForm, EcoFinForm, CulSocForm, CieTecForm, PsiSMForm, FilEtiForm, EduAprForm, DepSalForm, } from './components/formularios'

function App() {
  const [data, setData] = useState({});

  const onChange = (e) => {
    e.preventDefault();

    const obj = data;
    obj[e.target.name] = e.target.value;
    setData(obj);

  }

  const onClick = () => {
    console.log(data)
    alert('Se ha registrado su respuesta')
  }



  return (
    <Container>
      <h1 className="text-center mt-5">Semana 4 - Cuestionarios en React</h1>

      <Card>
        <Card.Body>
          <Card.Title>Tecnología y Sociedad</Card.Title>
          <TecSocForm className="forms" onChange={onChange} onClick={onClick}  />
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Ciencia y Medio Ambiente</Card.Title>
          <CieMAForm className="forms" onChange={onChange} onClick={onClick}  />
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Historia y Política</Card.Title>
          <HisPoliForm className="forms" onChange={onChange} onClick={onClick}  />
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Economía y Finanzas</Card.Title>
          <EcoFinForm className="forms" onChange={onChange} onClick={onClick}  />
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Cultura y Sociedad</Card.Title>
          <CulSocForm className="forms" onChange={onChange} onClick={onClick}  />
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Ciencia y Tecnología</Card.Title>
          <CieTecForm className="forms" onChange={onChange} onClick={onClick}  />
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Psicología y Salud Mental</Card.Title>
          <PsiSMForm className="forms" onChange={onChange} onClick={onClick}  />
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Filosofía y Ética</Card.Title>
          <FilEtiForm className="forms" onChange={onChange} onClick={onClick}  />
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Educación y Aprendizaje</Card.Title>
          <EduAprForm className="forms" onChange={onChange} onClick={onClick}  />
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Deportes y Salud</Card.Title>
          <DepSalForm className="forms" onChange={onChange} onClick={onClick}  />
        </Card.Body>
      </Card>


    </Container>
  );
}

export default App;