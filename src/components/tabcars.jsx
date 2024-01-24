import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { useRef } from "react";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];
const Carousel = (props) => {
  const imageGalleryRef = useRef(null);

  const onClickHandler = () => {
    imageGalleryRef.current.fullscreen();
  };

  return (
    <ImageGallery
      items={images}
      showThumbnails={true}
      showFullscreenButton={true}
      showPlayButton={false}
      showBullets={true}
      ref={imageGalleryRef}
      onClick={onClickHandler}
    />
  );
};

export default Carousel;