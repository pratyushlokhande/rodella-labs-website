import React from "react";
import styled from "styled-components";
import Masony from "react-masonry-component";

const GalleryPage = () => {
  const masonryOptions = {};

  const PHOTOS = [1, 2, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <GalleryPageContainer>
      <GalleryPageTitle>
        <h1>Gallery</h1>
        <h3>lorem ipsum dolor</h3>
      </GalleryPageTitle>

      <GalleryContainer>
        <Masony
          className={"photo-list"}
          elementType={"ul"}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
        >
          {PHOTOS.map((photo) => (
            <li className={`photo-item`}>
              <img src={`//unsplash.it/360?${photo}`} alt="" />
            </li>
          ))}
        </Masony>
      </GalleryContainer>
    </GalleryPageContainer>
  );
};

const GalleryPageContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

const GalleryPageTitle = styled.div`
  position: relative;
  margin: 10rem 0;
  text-align: center;

  h1 {
    font-size: 4rem;
    font-weight: 600;
    justify-content: center;
  }

  h3 {
    margin-top: 1rem;
    font-size: 1.5rem;
    color: grey;
  }
`;

const GalleryContainer = styled.div`
  position: relative;
  width: 100%;
  .photo-list {
    width: 100%;
    list-style: none;
  }

  .photo-item {
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    width: calc(100% / 4);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
  }

  .photo-item img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: 4px double rgba(0, 0, 0, 0.12);
  }
`;

export default GalleryPage;
