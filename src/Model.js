import React from 'react'
import ReactDom from 'react-dom'

// Styles for the modal container
const Model_style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000,
    height: '80%',
    width: '80%',
    backgroundColor: 'rgb(34, 34, 34)'
}

// Styles for the overlay that covers the background
const Overlay_style = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    bottom: 0,
    backgroundColor: 'rgb(0, 0, 0, -5)'
}

// Modal component using React portal
export default function Model({ children, onClose }) {
    // ReactDom.createPortal is used to create a portal to a specified DOM element
    return ReactDom.createPortal(
        <>
            {/* Overlay div to cover the background */}
            <div style={Overlay_style} />

            {/* Modal container */}
            <div style={Model_style}>
                {/* Close button */}
                <button className='btn bg-danger fs-5 m-2' style={{ float: "right" }} onClick={onClose}>X</button>
                {/* Content inside the modal */}
                {children}
            </div>

        </>,
        document.getElementById('cartpage') // Portal target element
    )
}
