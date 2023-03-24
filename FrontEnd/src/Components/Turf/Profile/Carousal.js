const Carousel = ({ images }) => {
    if (!images || !Array.isArray(images)) {
      return null;
    }
  
    return (
      <div className="w-80 carousel rounded-box ">
        {images.map((img, index) => (
          <div className="carousel-item w-full" key={index}>
            <img
              src={img?.location}
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
            <img
              src={img?.location}
              className="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          
        ))}
      </div>
    );
  };
  
  export default Carousel;