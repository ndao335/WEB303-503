import { ListGroup, ListGroupItem } from 'reactstrap';
import { faMinusCircle, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
import { Modal } from 'react-bootstrap';

function Shopcontent(props){
    const [show, setShow] = useState(false);
    const [showImage, setShowImage] = useState({});

    const handleClose = () => setShow (false);
    const handleShow = (item) => {
        setShow(true);
        setShowImage(item);
    }

    return(
      <ListGroup>
        {props.shopitems.map((shopitem) => (
          <ListGroupItem key={shopitem.id} className="GroupItem">
            <h2>{shopitem.desc}</h2>
            <div className="itemcontent">
              <img src={shopitem.image} alt="Shopping" height={150} width={150} onClick={() => handleShow(shopitem)}/>
              <button onClick={() => props.increase(shopitem)}>
                <FontAwesomeIcon icon={faPlusCircle}/>
              </button>
              <button onClick={() => props.decrease(shopitem)}>
                <FontAwesomeIcon icon={faMinusCircle}/>
              </button>
              <div className="quantityDisplay">
                <input type="text" placeholder={shopitem.value} className="inputValue"></input>
                <p className="quantity">quantity</p>
              </div>
            </div>
          </ListGroupItem>
        ))}
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{showImage.desc}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={showImage.image} width="350" alt={showImage.desc} classNAme="mx-5"/>
            </Modal.Body>
            <Modal.Footer>
                <p><span className="text-dark">Ratings:</span> {showImage.ratings}/5</p>
            </Modal.Footer>
        </Modal>
      </ListGroup>
    );
}

export default Shopcontent;