import React from "react";
import { Carousel, Container } from "react-bootstrap";
import Reveal from "./Reveal";

const bannerSrc = `${import.meta.env.BASE_URL}chapter/omega-banner.png`;
const gallerySrc = `${import.meta.env.BASE_URL}chapter/chapter-photos.png`;

export default function OmegaChapterCarousel() {
  return (
    <Container fluid className="page-section chapter-section">
      <Reveal>
        <h2 className="section-title">Epsilon Theta · Omega Psi Phi</h2>
      </Reveal>
      <Reveal delay={80}>
        <Carousel
          className="chapter-carousel"
          fade
          indicators
          controls
          interval={7000}
          pause="hover"
          variant="dark"
        >
          <Carousel.Item className="chapter-carousel-item">
            <div className="chapter-slide chapter-slide-banner">
              <div className="chapter-slide-banner-inner">
                <img
                  src={bannerSrc}
                  alt="Omega Psi Phi Fraternity, Inc. — Epsilon Theta chapter crest and name"
                  className="chapter-banner-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <Carousel.Caption className="chapter-caption d-none d-md-block">
                <span>Chapter identity</span>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item className="chapter-carousel-item">
            <div className="chapter-slide chapter-slide-gallery">
              <div className="chapter-slide-gallery-inner">
                <img
                  src={gallerySrc}
                  alt="Epsilon Theta brothers — chapter moments"
                  className="chapter-gallery-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <Carousel.Caption className="chapter-caption d-none d-md-block">
                <span>Brotherhood</span>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel>
      </Reveal>
    </Container>
  );
}
