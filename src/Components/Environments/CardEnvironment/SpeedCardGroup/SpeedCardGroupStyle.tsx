import styled from 'styled-components'

export const SwiperContainer = styled.div`
  margin: 1rem 0 0rem 0;
  width: 95dvw;

  .swiper {
    padding: 2em 0 0 0;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: #111827;
    background: #00460f;
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    z-index: 10;
    border: 2px solid #00460f;
    opacity: 0.7;
    @media (max-width: 720px) {
      opacity: 0.8;
    }
    transition: opacity 0.3s ease-in-out;
    user-select: none;

    &:after {
      font-size: 20px;
      font-weight: bold;
      color: white;
      user-select: none;
    }

    /* Small Mobile */
    @media (max-width: 425px) {
      width: 25px;
      height: 25px;
      translate: 0 32px;
      &:after {
        font-size: 14px;
      }
    }

    &:hover {
      background: #00460fbc;
      /* background: #f9fafb; */
    }
  }

  .swiper-button-prev {
    translate-x: -10%;
  }

  .swiper-button-next {
    translate-x: 10%;
  }

  .swiper-button-disabled {
    opacity: 0.35;
    &:after {
      color: #11182780;
    }
    /* pointer-events: none; */
  }

  .swiper-slide {
    width: fit-content;
  }
`
