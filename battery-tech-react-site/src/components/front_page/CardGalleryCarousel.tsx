import React, { useEffect, useRef, createRef } from 'react';
import "./CardGalleryCarousel.css";

function getElementMargins(element: HTMLElement) {
  const computedStyles = window.getComputedStyle(element);
  return {
    marginLeft: parseInt(computedStyles.getPropertyValue("margin-left"), 10),
    marginRight: parseInt(computedStyles.getPropertyValue("margin-right"), 10),
    marginTop: parseInt(computedStyles.getPropertyValue("margin-top"), 10),
    marginBottom: parseInt(computedStyles.getPropertyValue("margin-bottom"), 10),
  };
}

const CardGalleryCarousel: React.FC = () => {
  const leftShiftCounterInCardStackWidths = useRef<number>(0);
  const cardStackRefs = Array.from({ length: 8 }, () => createRef<HTMLDivElement>());
  const nextButtonContainerRef = useRef<HTMLDivElement>(null);
  const prevButtonContainerRef = useRef<HTMLDivElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const carouselViewport = useRef<HTMLDivElement>(null);
  const scrollableCarouselViewport = useRef<HTMLDivElement>(null);
  const carouselTrack = useRef<HTMLDivElement>(null);
  const carouselViewportWidth = useRef<number>(0);
  const cardStackWidth = useRef<number>(0);
  const carouselTrackWidth = useRef<number>(0);
  const carouselViewportInCardStackWidths = useRef<number>(0);
  const carouselTrackInCardStackWidths = useRef<number>(0);
  const maxLeftShiftInCardStackWidths = useRef<number>(0);

  const calculateWidths = (): void => {
    carouselViewportWidth.current = carouselViewport.current!.offsetWidth;

    if (cardStackRefs[0].current && cardStackRefs[0].current!) {
      cardStackWidth.current = cardStackRefs[0].current!.offsetWidth +
        getElementMargins(cardStackRefs[0].current).marginLeft +
        getElementMargins(cardStackRefs[0].current).marginRight;
    }

    carouselTrackWidth.current = carouselTrack.current!.offsetWidth;
    carouselViewportInCardStackWidths.current = carouselViewportWidth.current / cardStackWidth.current;
    carouselTrackInCardStackWidths.current = carouselTrackWidth.current / cardStackWidth.current;
    maxLeftShiftInCardStackWidths.current = carouselTrackInCardStackWidths.current - carouselViewportInCardStackWidths.current;
  };

  useEffect(() => {
    // Equivalent to componentDidMount

    calculateWidths();
    window.addEventListener('resize', calculateWidths);

    // Equivalent to componentWillUnmount
    return () => {
      window.removeEventListener('resize', calculateWidths);
    };
  });

  const handleNextButtonClick = () => {
    leftShiftCounterInCardStackWidths.current = scrollableCarouselViewport.current!.scrollLeft / cardStackWidth.current;

    if (leftShiftCounterInCardStackWidths.current + 1 < maxLeftShiftInCardStackWidths.current) {
      leftShiftCounterInCardStackWidths.current += 1;
      scrollableCarouselViewport.current!.scrollLeft = (leftShiftCounterInCardStackWidths.current * cardStackWidth.current);
    } else {
      leftShiftCounterInCardStackWidths.current = maxLeftShiftInCardStackWidths.current;
      scrollableCarouselViewport.current!.scrollLeft = maxLeftShiftInCardStackWidths.current * cardStackWidth.current;
    }
  };

  const handlePrevButtonClick = () => {
    leftShiftCounterInCardStackWidths.current = scrollableCarouselViewport.current!.scrollLeft / cardStackWidth.current;

    if (leftShiftCounterInCardStackWidths.current - 1 > 0) {
      leftShiftCounterInCardStackWidths.current -= 1;
      scrollableCarouselViewport.current!.scrollLeft = leftShiftCounterInCardStackWidths.current * cardStackWidth.current;
    } else {
      leftShiftCounterInCardStackWidths.current = 0;
      scrollableCarouselViewport.current!.scrollLeft = 0;
    }
  };

  return (
    <div id="carousel-container" className="relative flex flex-col w-full h-5/6" ref={carouselViewport}>
      {/* This prevButtonHoverBox is here to create a wider target for the mouse on a hover*/}
      <div id="prevButtonHoverBox" className="absolute top-0 left-0 flex w-[45%] h-[80%] group pt-80" ref={prevButtonContainerRef}>
        <button
          id="prevButton"
          onClick={handlePrevButtonClick}
          className="sticky flex transition-opacity duration-300 ease-in-out justify-center p-3 pl-2.5 align-middle bg-gray-300 rounded-full w-[3rem] h-[3rem] top-96 left-[3vw] z-20"
          ref={prevButtonRef}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z" fill="#000000" />
          </svg>
        </button>
      </div>
      <div id="nextButtonHoverBox" className="absolute top-0 right-0 flex w-[45%] h-[100%] group" ref={nextButtonContainerRef}>
        <div id="nextBoxPositioner" className="absolute top-0 right-[3vw] w-auto h-[80%] pt-80">
          <button
            id="nextButton"
            onClick={handleNextButtonClick}
            className="sticky flex transition-opacity duration-300 ease-in-out justify-center p-3 pl-2.5 align-middle bg-gray-300 rounded-full w-[3rem] h-[3rem] top-96 z-20"
            ref={nextButtonRef}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071C7.90237 19.3166 7.90237 18.6834 8.29289 18.2929L14.5858 12L8.29289 5.70711C7.90237 5.31658 7.90237 4.68342 8.29289 4.29289Z" fill="#000000" />
            </svg>
          </button>
        </div>
      </div>
      <div id="carousel-scrollable-viewport" className="relative flex flex-col w-[100%] scroll-smooth overflow-x-scroll z-10" ref={scrollableCarouselViewport}>
        <div id="carousel-track" className="flex flex-row w-auto pt-10 max-sm:pt-5 flex-nowrap min-w-max" ref={carouselTrack}>
          {cardStackRefs.map((ref, index) => (
            <div key={index} ref={ref} className="ion-category-card-stack flex h-[400vh] bg-darkgray rounded-xl min-w-[300px] sm:min-w-[322px] md:min-w-[340px] lg:min-w-[355px] xl:min-w-[386px] mx-5"></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardGalleryCarousel;