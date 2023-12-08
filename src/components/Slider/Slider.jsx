import './Slider.css';

export default function Slider({ children }) {
    const el = document.getElementById('horizontal-scroller');
    el.addEventListener('wheel', function(event) {
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

  return (
    <div id='horizontal-scroller' className="section__slider">
      {children}
    </div>
  );
};