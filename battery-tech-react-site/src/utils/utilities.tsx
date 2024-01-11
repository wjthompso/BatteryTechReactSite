type ElementMargins = {
    marginLeft: number;
    marginRight: number;
    marginTop: number;
    marginBottom: number;
}

/**
 * Retrieves and returns the computed margins (in pixels) of a given HTML element.
 * 
 * This function computes and extracts the margins of the specified HTML element,
 * including its left, right, top, and bottom margins. The margins are computed based
 * on the element's computed styles using `window.getComputedStyle`.
 * 
 * @param {HTMLElement} element - The HTML element for which margins are to be determined.
 * @returns {ElementMargins} An object containing margin values in pixels for each side:
 * - `marginLeft`: The left margin in pixels.
 * - `marginRight`: The right margin in pixels.
 * - `marginTop`: The top margin in pixels.
 * - `marginBottom`: The bottom margin in pixels.
 * 
 * @example
 * // Usage example:
 * const element = document.getElementById('myElement');
 * const margins = getElementMargins(element);
 * console.log('Left Margin:', margins.marginLeft);
 * console.log('Right Margin:', margins.marginRight);
 * console.log('Top Margin:', margins.marginTop);
 * console.log('Bottom Margin:', margins.marginBottom);
 */
function getElementMargins(element: HTMLElement): ElementMargins {
    const computedStyles = window.getComputedStyle(element);
    return {
        marginLeft: parseFloat(computedStyles.getPropertyValue("margin-left")),
        marginRight: parseFloat(computedStyles.getPropertyValue("margin-right")),
        marginTop: parseFloat(computedStyles.getPropertyValue("margin-top")),
        marginBottom: parseFloat(computedStyles.getPropertyValue("margin-bottom")),
    };
}

export { getElementMargins };