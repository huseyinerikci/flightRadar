import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
const Gallery = ({ data }) => {
  const arr = data?.large
    ? data?.large
    : data?.medium
    ? data?.medium
    : data?.thumbnails;

  return (
    <div className="gallery">
      {arr?.length > 0 ? (
        <Splide aria-label="My Favorite Images">
          {arr.map((i, key) => (
            <SplideSlide key={key}>
              <img src={i.src} alt="planes" />
            </SplideSlide>
          ))}
        </Splide>
      ) : (
        <div className="warning">
          <p>Fotoğraf içeriği bulunmuyor</p>
        </div>
      )}
    </div>
  );
};

export default Gallery;
