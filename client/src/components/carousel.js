import React from "react";

import "../assets/styles/image-gallery.css";
import ImageGallery from 'react-image-gallery';

import example1 from "../assets/images/example1.jpg";
import example2 from "../assets/images/example2.jpg";
import example3 from "../assets/images/example3.jpg";
import example4 from "../assets/images/example4.jpg";
import example5 from "../assets/images/example5.jpg";
import example6 from "../assets/images/example6.jpg";

class Carousel extends React.Component {

  render() {

    const images = [
      {
        original: example1
      },
      {
        original: example2
      },
      {
        original: example3
      },
      {
        original: example4
      },
      {
        original: example5
      },
      {
        original: example6
      }
    ]

    return (
      <ImageGallery items={images} showThumbnails={false} autoPlay={true} slideInterval={4000} slideDuration={500}/>
    );
  }

}

export default Carousel;