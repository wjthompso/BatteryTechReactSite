import React, { Component } from 'react';
import "./CardGalleryCarousel.css";

/*

We'll have three main elements in this carousel:



  1. The carousel viewport, which will be the full width of the viewport. We'll
     probably want the overflow of this viewport to be set to scroll, so that
     people can swipe with their fingers.
  2. The carousel track, which will be large enough to acommodate all of the ion
     category card stack, plus left and right padding both equal to the left
     margin of the card stack.
  3. The ion category stacks themselves, with equal-sized left and right
     margins.

To make the left and right buttons of our carousel appropriately responsive,
we'll need to calculate the following variables:

  1. carouselViewportWidth: The width of the carousel viewport.
  2. cardStackWidth: The width of the ion category stacks plus their left and
     right margins (which should be equivalent).
  3. carouselTrackWidth: The width of the carousel track, which should be #2
     times the number of ion category stacks plus left and right padding equal
     to the ion category margins.
  4. carouselViewportInCardStackWidths: The width of the carousel viewport as a
     function of #2.
  5. carouselTrackInCardStackWidths: The width of the carousel track as a
     function of #2.
  6. leftShiftCounterInCardStackWidths: The amount the track has been shifted
     to the left, in terms of the number of stack widths it's been shifted.
     (e.g., 4.3 stack widths shifted)
  7. maxLeftShiftInCardStackWidths: The maximum amount to shift the track to the
     left in terms of the number of stack widths it's been shifted.
  8. minLeftShiftInCardStackWidths (optional): The minimum amount to shift the
     track to the left in terms of number of stack widths it's been shifted.
     This will be 0. It's not really necessary.

leftShiftCounterInCardStackWidths is the variable whose state we need to keep
track of in our component. It gets recalculated whenever we click previous or
next.

Variables #1-#7 will need to be calculated when the screen is loaded, and
whenever the screen is resized.    

#6 will need to be appropriately incremented by a nextButton and decremented by
a prevButton function which will re-calculate #6.

*/

type CardGalleryCarouselState = {
  count: number;
}

class CardGalleryCarousel extends Component<{}, CardGalleryCarouselState> {
  carouselViewportWidth: number = 0;
  cardStackWidth: number = 0;
  carouselTrackWidth: number = 0;
  carouselViewportInCardStackWidths: number = 0;
  carouselTrackInCardStackWidths: number = 0;
  leftShiftCounterInCardStackWidths: number = 0;
  maxLeftShiftInCardStackWidths: number = 0;

  // calculateWidths = () => {
  //   this.carouselViewportWidth = document.getElementById("carousel-viewport")!.offsetWidth;
  //   // Calculate the margin, padding, and width of an individual ion category card stack element using document.getElementsByClassName("ion-category-card-stack")[0].offsetWidth
  //   const allCardStacks = document.getElementsByClassName("ion-category-card-stack");

  //   if (allCardStacks.length >= 0) {
  //     const cardStackWidth = allCardStacks[0].offsetWidth;
  //   }

  //   // Find the total number
  //   this.carouselTrackWidth = this.cardStackWidth * 8;
  //   this.carouselViewportInCardStackWidths = this.carouselViewportWidth / this.cardStackWidth;
  //   this.carouselTrackInCardStackWidths = this.carouselTrackWidth / this.cardStackWidth;
  //   this.maxLeftShiftInCardStackWidths = this.carouselTrackInCardStackWidths - this.carouselViewportInCardStackWidths;
  // }

  nextButtonContainerRef = React.createRef<HTMLDivElement>();
  prevButtonContainerRef = React.createRef<HTMLDivElement>();
  nextButtonRef = React.createRef<HTMLButtonElement>();
  prevButtonRef = React.createRef<HTMLButtonElement>();

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove);
  }

  handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    this.checkHover(this.nextButtonContainerRef.current, clientX, clientY);
    this.checkHover(this.prevButtonContainerRef.current, clientX, clientY);
  };

  // This function checks if the mouse is hovering over the hover box for the
  // next or previous button
  checkHover = (element: HTMLDivElement | null, mouseX: number, mouseY: number) => {
    if (element) {
      const { top, right, bottom, left } = element.getBoundingClientRect();
      const isHover = mouseX >= left && mouseX <= right && mouseY >= top && mouseY <= bottom;

      // 

      if (isHover) {
        // Apply hover state
        if (element.id === "nextButtonHoverBox") {
          this.nextButtonRef.current!.classList.remove('opacity-0');
        }
        else {
          this.prevButtonRef.current!.classList.remove('opacity-0');
        }
      } else {
        // Remove hover state
        if (element.id === "nextButtonHoverBox") {
          this.nextButtonRef.current!.classList.add('opacity-0');
        }
        else {
          this.prevButtonRef.current!.classList.add('opacity-0');
        }
      }
    }
  };

  // You can access and update state using this.state
  render() {
    return (
      <div id="carousel-viewport" className="relative flex flex-col w-full h-5/6">
        {/* This prevButtonHoverBox is here to create a wider target for the mouse on a hover
        However, since it receives the scroll left and right commands
        */}
        <div id="prevButtonHoverBox" className="absolute top-0 left-0 flex w-[45%] h-[80%] group pt-80" ref={this.prevButtonContainerRef}>
          <button
            id="prevButton"
            className="sticky flex transition-opacity duration-300 ease-in-out justify-center p-3 opacity-0 group-hover:opacity-100 pl-2.5 align-middle bg-gray-300 rounded-full w-[3rem] h-[3rem] top-96 left-[3vw] z-20"
            ref={this.prevButtonRef}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L9.41421 12L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L7.29289 12.7071C7.10536 12.5196 7 12.2652 7 12C7 11.7348 7.10536 11.4804 7.29289 11.2929L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289Z" fill="#000000" />
            </svg>
          </button>
        </div>
        <div id="nextButtonHoverBox" className="absolute top-0 right-0 flex w-[45%] h-[100%] group" ref={this.nextButtonContainerRef}>
          <div id="nextBoxPositioner" className="absolute top-0 right-[3vw] w-auto h-[80%] pt-80">
            <button
              id="nextButton"
              className="sticky flex transition-opacity duration-300 ease-in-out justify-center p-3 opacity-0 group-hover:opacity-100 pl-2.5 align-middle bg-gray-300 rounded-full w-[3rem] h-[3rem] top-96 z-20"
              ref={this.nextButtonRef}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071C7.90237 19.3166 7.90237 18.6834 8.29289 18.2929L14.5858 12L8.29289 5.70711C7.90237 5.31658 7.90237 4.68342 8.29289 4.29289Z" fill="#000000" />
              </svg>
            </button>
          </div>
        </div>
        <div id="carousel-sub-viewport" className="relative flex flex-col w-[100%] overflow-x-scroll h-[100%] z-10">
          <div id="carousel-track" className="flex flex-row w-auto pt-10 max-sm:pt-5 flex-nowrap min-w-max">
            <div className="ion-category-card-stack flex h-[400vh] bg-darkgray rounded-xl min-w-[300px] sm:min-w-[322px] md:min-w-[340px] lg:min-w-[355px] xl:min-w-[386px] mx-5"></div>
            <div className="ion-category-card-stack flex h-[400vh] bg-darkgray rounded-xl min-w-[300px] sm:min-w-[322px] md:min-w-[340px] lg:min-w-[355px] xl:min-w-[386px] mx-5"></div>
            <div className="ion-category-card-stack flex h-[400vh] bg-darkgray rounded-xl min-w-[300px] sm:min-w-[322px] md:min-w-[340px] lg:min-w-[355px] xl:min-w-[386px] mx-5"></div>
            <div className="ion-category-card-stack flex h-[400vh] bg-darkgray rounded-xl min-w-[300px] sm:min-w-[322px] md:min-w-[340px] lg:min-w-[355px] xl:min-w-[386px] mx-5"></div>
            <div className="ion-category-card-stack flex h-[400vh] bg-darkgray rounded-xl min-w-[300px] sm:min-w-[322px] md:min-w-[340px] lg:min-w-[355px] xl:min-w-[386px] mx-5"></div>
            <div className="ion-category-card-stack flex h-[400vh] bg-darkgray rounded-xl min-w-[300px] sm:min-w-[322px] md:min-w-[340px] lg:min-w-[355px] xl:min-w-[386px] mx-5"></div>
            <div className="ion-category-card-stack flex h-[400vh] bg-darkgray rounded-xl min-w-[300px] sm:min-w-[322px] md:min-w-[340px] lg:min-w-[355px] xl:min-w-[386px] mx-5"></div>
            <div className="ion-category-card-stack flex h-[400vh] bg-darkgray rounded-xl min-w-[300px] sm:min-w-[322px] md:min-w-[340px] lg:min-w-[355px] xl:min-w-[386px] mx-5"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardGalleryCarousel;