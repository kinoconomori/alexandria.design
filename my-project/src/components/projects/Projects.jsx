// Project.js
import React, { useEffect, useState } from 'react';
import ImageContext from '../../ImageContext';
import ImageModal from '../ImageModal';
import { loadImageMap } from '../../imageLoader';

const Project = ({ folder, imageOrder, renderBoxes }) => {
  const [compressedImages, setCompressedImages] = useState({});
  const [uncompressedImages, setUncompressedImages] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      const compressedImageMap = await loadImageMap(folder, true);
      const uncompressedImageMap = await loadImageMap(folder, false);
      setCompressedImages(compressedImageMap);
      setUncompressedImages(uncompressedImageMap);
    };
    fetchImages();
  }, [folder]);

  const handleImageClick = (imageIndex) => {
    setCurrentImageIndex(imageIndex);
    setShowModal(true);
  };

  return (
    <ImageContext.Provider value={{ images: compressedImages, imageOrder }}>
      <div className="invisible">
        <div className="boxes">
          {renderBoxes({ images: compressedImages, handleImageClick })}
        </div>
        <ImageContext.Provider value={{ images: uncompressedImages, imageOrder }}>
          <ImageModal
            showModal={showModal}
            images={uncompressedImages}
            imageOrder={imageOrder}
            currentImageIndex={currentImageIndex}
            handleClose={() => setShowModal(false)}
            handleNextImage={() => setCurrentImageIndex((currentImageIndex + 1) % imageOrder.length)}
            handlePreviousImage={() => setCurrentImageIndex((currentImageIndex - 1 + imageOrder.length) % imageOrder.length)}
          />
        </ImageContext.Provider>
      </div>
    </ImageContext.Provider>
  );
};

export default Project;
