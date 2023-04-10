import React, { useState, useEffect } from "react";
import "./css/ImageModal.css";

const ImageModal = ({ showModal, images, imageOrder, currentImageIndex, handleClose, handleNextImage, handlePreviousImage }) => {
    const [backgroundOpacity, setBackgroundOpacity] = useState(0.7);
    const [easeOut, setEaseOut] = useState(false);

    useEffect(() => {
        if (showModal) {
          setBackgroundOpacity(0.7);
        }
      }, [showModal]);


    if (!showModal) {
        return null;
    }

    const closeModal = (e) => {
        if (e.target.className === "image-modal") {
            setEaseOut(true);
            setBackgroundOpacity(0);
            setTimeout(() => {
                setEaseOut(false);
                handleClose();
            }, 300);
        }
    };


    const onClickPrevious = (e) => {
        e.stopPropagation();
        handlePreviousImage();
    };

    const onClickNext = (e) => {
        e.stopPropagation();
        handleNextImage();
    };

    return (
        <div className="image-modal" onClick={closeModal} style={{ backgroundColor: `rgba(0, 0, 0, ${backgroundOpacity})` }}>
            <div className="image-modal-content">
                <span className="image-modal-close" onClick={handleClose}>&times;</span>
                {imageOrder.map((imageKey, index) => (
                    <img
                        key={imageKey}
                        src={images[imageKey]}
                        alt=""
                        className={`image-modal-image${index === currentImageIndex ? ' active' : ''}${easeOut ? ' ease-out' : ''}`}
                    />
                ))}
                <button className="image-modal-button image-modal-button-left" onClick={onClickPrevious}>&lt;</button>
                <button className="image-modal-button image-modal-button-right" onClick={onClickNext}>&gt;</button>
            </div>
        </div>
    );
};

export default ImageModal;
