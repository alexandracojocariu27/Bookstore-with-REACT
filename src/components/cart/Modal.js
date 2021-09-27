import React, {Fragment} from 'react'
import ReactDOM from 'react-dom';
import './Modal.css'

const Backdrop = () => {
    return <div id="backdrop"></div>
}

const ModalOverlay = (props) => {
    return (
        <div className="d-flex justify-content-center ">
            <div id="modal" className="d-flex justify-content-center px-3">
                <div className="p-3">
                {props.children} 
                </div>
            </div>

        </div>
    )
}

function Modal(props) {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop/>, document.getElementById('modal-backdrop'))}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById('modaloverlay'))}
        </Fragment>
    )
}

export default Modal;
