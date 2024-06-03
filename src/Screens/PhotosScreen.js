import React, { useState } from "react";
import { Container, Content } from "../Layout";
import MainHeader from "../MainHeader";
import BottomTabMenu from "../BottomTabMenu";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    width: 320,
    height: 174,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    width: 320,
    height: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" },
    ],
    alt: "Boats (Jeshu John - designerspics.com)",
  },
  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    width: 320,
    height: 212,
  },
];

const LeaderboardScreen = () => {
  const [index, setIndex] = useState(-1);

  const handleClick = (index, item) => setIndex(index);
  return (
    <>
      <Container>
        <MainHeader title="Photos" />
        <Content>
          <Gallery
            images={images}
            onClick={handleClick}
            enableImageSelection={false}
          />
          <Lightbox
            slides={images}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
          />
        </Content>
      </Container>
      <BottomTabMenu />
    </>
  );
};

export default LeaderboardScreen;
