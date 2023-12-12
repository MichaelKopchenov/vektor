import React from 'react';
import './Slide.css';

export default function Slide({ children }) {

function scrolling () {
  const slider = document.getElementById("horizontal-scroller");
  slider.addEventListener('wheel', function(event) {
    if (event.deltaMode === event.DOM_DELTA_PIXEL) {
      var modifier = 1;
    } else if (event.deltaMode === event.DOM_DELTA_LINE) {
      modifier = parseInt(getComputedStyle(this).lineHeight);
    } else if (event.deltaMode === event.DOM_DELTA_PAGE) {
      modifier = this.clientHeight;
    }
    if (event.deltaY !== 0) {
      this.scrollLeft += modifier * event.deltaY;
      event.preventDefault();
    }
  });
}

  return (
    <div id='horizontal-scroller' className="section__slider" onWheel={scrolling}>
      {children}
    </div>
  );
};