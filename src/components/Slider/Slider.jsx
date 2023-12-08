import './Slider.css';

export default function Slider({ children }) {
  document.getElementById("horizontal-scroller")
  .addEventListener('wheel', function(event) {
    if (event.deltaMode === event.DOM_DELTA_PIXEL) {
      var modifier = 1;
      // иные режимы возможны в Firefox
    } else if (event.deltaMode === event.DOM_DELTA_LINE) {
      modifier = parseInt(getComputedStyle(this).lineHeight);
    } else if (event.deltaMode === event.DOM_DELTA_PAGE) {
      modifier = this.clientHeight;
    }
    if (event.deltaY !== 0) {
      // замена вертикальной прокрутки горизонтальной
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