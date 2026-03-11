document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.slider');
  
  if (slider) {
    function handleWheelScroll(e) {
      // Solo aplicar si la pantalla es mayor a 768px
      if (window.innerWidth > 768 && e.deltaY !== 0) {
        e.preventDefault();
        slider.scrollLeft += e.deltaY * 0.8;
      }
    }
    
    slider.addEventListener('wheel', handleWheelScroll);
  }
});