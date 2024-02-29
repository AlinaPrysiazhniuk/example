/* eslint-disable react/prop-types */

const ImageModal = ({ large, alt }) => {
  return (
    <div>
      <img src={large} alt={alt} />
      <p>{alt}</p>
    </div>
  );
};

export default ImageModal;
