import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CardGalleryCarousel from "./CardGalleryCarousel";

describe("CardGalleryCarousel", () => {
  it("should render without crashing", () => {
    render(<CardGalleryCarousel />);
    // eslint-disable-next-line testing-library/no-container
    const carouselContainer = screen.getByTestId("carousel-container");
    expect(carouselContainer).toBeTruthy();
  });

  it("should have a scrollLeft of 0 for carousel-scrollable-viewport", () => {
    render(<CardGalleryCarousel />);
    const scrollableViewport = screen.getByTestId(
      "carousel-scrollable-viewport"
    );
    expect(scrollableViewport.scrollLeft).toBe(0);
  });

  it("increases scrollLeft on next button click", async () => {
    render(<CardGalleryCarousel />);
    const nextButton = screen.getByTestId("carousel-next-button"); // Replace with your actual test ID or query
    const scrollableViewport = screen.getByTestId(
      "carousel-scrollable-viewport"
    );

    const initialScrollLeft = scrollableViewport.scrollLeft;
    fireEvent.click(nextButton);

    // Add a wait
    await new Promise((r) => setTimeout(r, 500));

    // You may need to use waitFor if the update is async
    expect(scrollableViewport.scrollLeft).not.toBe(initialScrollLeft);

    // Expect the scrollLeft to be greater than 0
    expect(scrollableViewport.scrollLeft).toBeGreaterThan(0);
  });
});
