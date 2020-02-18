export const safeFocusClass = 'safe-focus';
const cutsTheMustard = () => !!document.documentElement.classList;
let htmlEl;

/**
 *  Assign the HTML element after the init function has run.
 *  @return {undefined}
 */
const assignHtml = () => {
  htmlEl = document.documentElement;
};

/**
 *  Add class to key off of for showing focus outlines
 *  @return {undefined}
 */
const activateSafeFocus = () => {
  htmlEl.classList.add(safeFocusClass);
};

/**
 *  Remove class to key off of for showing focus outlines
 *  @return {undefined}
 */
const deactivateSafeFocus = () => {
  htmlEl.classList.remove(safeFocusClass);
};

/**
 *  Bind events for adding & removing class to key off of for showing focus outlines
 *  @return {undefined}
 */
export const safeFocusInit = () => {
  assignHtml();
  if (cutsTheMustard()) {
    htmlEl.classList.remove(safeFocusClass);

    document.addEventListener('mousedown', deactivateSafeFocus);
    document.addEventListener('keydown', activateSafeFocus);
  }
};
