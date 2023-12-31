import React, { useContext, useState } from 'react';
import { resultadosLugaresContext } from '../grids/inicio/Apilugares';
import Modal from 'react-bootstrap/Modal';


export default function Travel() {

  //recupero la info de resultadosLugaresContext
  const lugares = useContext(resultadosLugaresContext);

  const imgStyle = {
    height: '200px',
    objectFit: 'cover'
  }


  //controla el corazon
  const [showCorazonRojo, setShowCorazonRojo] = useState(false); //variable para cambiar la clase del corazon
  const [favoritePlace, setFavoritePlace] = useState(''); // variable para obtener el nombre del lugar favorito


  const handleClick = () => {
    setShowCorazonRojo(!showCorazonRojo);
    setFavoritePlace(lugares.name);
  }
  // console.log({ favoritePlace });

  //controla el modal
  const [show, setShow] = useState(false);
  const handleModal = () => {
    setShow(!show);
  }

  return (

    <div className="card h-100" style={{ maxWidth: "20rem" }}>
      <div>
        <img className="card-img-top" src={lugares.image.secure_url} alt={lugares.name} style={imgStyle} />
        <div style={{ position: "absolute", top: "0px", right: "0px" }}>
          <div className="stage">
            <div
              className={showCorazonRojo ? "heart is-active" : "heart"}
              onClick={handleClick}
            >
            </div>
          </div>
        </div>
      </div>
      <div className="card-body mb-2">
        <h5 className="card-title">{lugares.name}</h5>
        <p className="card-text text-truncate">{lugares.description}</p>
        <button onClick={handleModal} className="btn" id='navBtnInicioSesion'>+ Info</button>
      </div>

      <Modal show={show} onHide={handleModal}>
        <Modal.Header closeButton>
          <Modal.Title>{lugares.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="card-img-top" src={lugares.image.secure_url} alt={lugares.name} style={imgStyle} />
          <p style={{marginTop:"1rem"}}>{lugares.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn" id='btnCerrarModal' onClick={handleModal}>
            Cerrar
          </button>
          <button className="btn" id='btnFavoritosModal' onClick={handleModal}>
            Agregar a Favoritos
          </button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}