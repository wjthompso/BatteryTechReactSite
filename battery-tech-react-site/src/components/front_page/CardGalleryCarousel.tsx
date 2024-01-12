import React, { useEffect, useRef, createRef } from "react";
import "./CardGalleryCarousel.css";
import { getElementMargins } from "../../utils/utilities";

const CardGalleryCarousel: React.FC = () => {
  const leftShiftCounterInCardStackWidths = useRef<number>(0);
  const cardStackRefs = Array.from({ length: 8 }, () =>
    createRef<HTMLDivElement>()
  );
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

  /**
   * Calculates and updates the widths of various elements in the carousel.
   *
   * This function computes the width of the carousel viewport, each individual card stack,
   * and the entire carousel track. It also calculates the number of card stack widths that
   * fit within the carousel viewport and the total carousel track. These calculations are
   * used to determine the maximum possible left shift (in terms of card stack widths) that
   * the carousel can undergo.
   *
   * It is typically called on component mount (to initialize the widths) and on window resize
   * events (to update the widths based on the new size of the carousel's container).
   *
   * @returns void
   * @listens window.resize
   */
  const calculateWidths = (): void => {
    carouselViewportWidth.current = carouselViewport.current!.offsetWidth;

    if (cardStackRefs[0].current && cardStackRefs[0].current!) {
      cardStackWidth.current =
        cardStackRefs[0].current!.offsetWidth +
        getElementMargins(cardStackRefs[0].current).marginLeft +
        getElementMargins(cardStackRefs[0].current).marginRight;
    }

    carouselTrackWidth.current = carouselTrack.current!.offsetWidth;
    carouselViewportInCardStackWidths.current =
      carouselViewportWidth.current / cardStackWidth.current;
    carouselTrackInCardStackWidths.current =
      carouselTrackWidth.current / cardStackWidth.current;
    maxLeftShiftInCardStackWidths.current =
      carouselTrackInCardStackWidths.current -
      carouselViewportInCardStackWidths.current;
  };

  useEffect(() => {
    // Equivalent to componentDidMount

    calculateWidths();
    window.addEventListener("resize", calculateWidths);

    // Equivalent to componentWillUnmount
    return () => {
      window.removeEventListener("resize", calculateWidths);
    };
  });

  /**
   * Handles the click event on the next button.
   *
   * This function is called when the user clicks on the next button. It calculates the
   * current left shift of the carousel in terms of card stack widths. It then increments
   * the left shift counter and scrolls the carousel to the new position, unless the new
   * position would be past the maximum left shift.
   *
   * @returns void
   * @handles nextButton.onClick - Attached as an event handler to the `onClick` property of the `nextButton`.
   */
  const handleNextButtonClick = () => {
    leftShiftCounterInCardStackWidths.current =
      scrollableCarouselViewport.current!.scrollLeft / cardStackWidth.current;

    if (
      leftShiftCounterInCardStackWidths.current + 1 <
      maxLeftShiftInCardStackWidths.current
    ) {
      leftShiftCounterInCardStackWidths.current += 1;
      scrollableCarouselViewport.current!.scrollLeft =
        leftShiftCounterInCardStackWidths.current * cardStackWidth.current;
    } else {
      leftShiftCounterInCardStackWidths.current =
        maxLeftShiftInCardStackWidths.current;
      scrollableCarouselViewport.current!.scrollLeft =
        maxLeftShiftInCardStackWidths.current * cardStackWidth.current;
    }
  };

  /**
   * Handles the click event on the previous button.
   *
   * This function is called when the user clicks on the previous button. It calculates the
   * current left shift of the carousel in terms of card stack widths. It then decrements
   * the left shift counter and scrolls the carousel to the new position, unless the new
   * position would be less than 0, the minimum left shift.
   *
   * @returns void
   * @handles prevButton.onClick - Attached as an event handler to the `onClick` property of the `prevButton`.
   */
  const handlePrevButtonClick = () => {
    leftShiftCounterInCardStackWidths.current =
      scrollableCarouselViewport.current!.scrollLeft / cardStackWidth.current;

    if (leftShiftCounterInCardStackWidths.current - 1 > 0) {
      leftShiftCounterInCardStackWidths.current -= 1;
      scrollableCarouselViewport.current!.scrollLeft =
        leftShiftCounterInCardStackWidths.current * cardStackWidth.current;
    } else {
      leftShiftCounterInCardStackWidths.current = 0;
      scrollableCarouselViewport.current!.scrollLeft = 0;
    }
  };

  return (
    <div
      id="carousel-container"
      className="relative flex h-5/6 w-full flex-col"
      ref={carouselViewport}
      data-testid="carousel-container"
    >
      {/* This prevButtonHoverBox is here to create a wider target for the mouse on a hover*/}
      <div
        id="prevButtonHoverBox"
        className="group absolute left-0 top-0 flex h-[80%] w-[45%] pt-80"
        ref={prevButtonContainerRef}
      >
        <button
          id="prevButton"
          onClick={handlePrevButtonClick}
          className="sticky left-[3vw] top-96 z-20 flex h-[3rem] w-[3rem] justify-center rounded-full bg-gray-300 p-3 pl-2.5 align-middle transition-opacity duration-300 ease-in-out"
          ref={prevButtonRef}
          data-testid="carousel-prev-button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z"
              fill="#000000"
            />
          </svg>
        </button>
      </div>
      <div
        id="nextButtonHoverBox"
        className="group absolute right-0 top-0 flex h-[100%] w-[45%]"
        ref={nextButtonContainerRef}
      >
        <div
          id="nextBoxPositioner"
          className="absolute right-[3vw] top-0 h-[80%] w-auto pt-80"
        >
          <button
            id="nextButton"
            onClick={handleNextButtonClick}
            className="sticky top-96 z-20 flex h-[3rem] w-[3rem] justify-center rounded-full bg-gray-300 p-3 pl-2.5 align-middle transition-opacity duration-300 ease-in-out"
            ref={nextButtonRef}
            data-testid="carousel-next-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071C7.90237 19.3166 7.90237 18.6834 8.29289 18.2929L14.5858 12L8.29289 5.70711C7.90237 5.31658 7.90237 4.68342 8.29289 4.29289Z"
                fill="#000000"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        id="carousel-scrollable-viewport"
        className="relative z-10 flex w-[100%] flex-col overflow-x-scroll scroll-smooth"
        ref={scrollableCarouselViewport}
        data-testid="carousel-scrollable-viewport"
      >
        <div
          id="carousel-track"
          className="flex w-auto min-w-max flex-row flex-nowrap pt-10 max-sm:pt-5"
          ref={carouselTrack}
        >
          {cardStackRefs.map((ref, index) => (
            <div
              key={index}
              ref={ref}
              className="ion-category-card-stack bg-darkgray mx-5 flex h-[400vh] min-w-[300px] rounded-xl sm:min-w-[322px] md:min-w-[340px] lg:min-w-[355px] xl:min-w-[386px]"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGalleryCarousel;
