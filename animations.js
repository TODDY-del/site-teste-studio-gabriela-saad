(function(){
  var targets = document.querySelectorAll('.nav-in, .reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-mask, .stagger, .mask-up');

  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold:0.12, rootMargin:'0px 0px -8% 0px' });

    targets.forEach(function(el){ io.observe(el); });
  } else {
    targets.forEach(function(el){ el.classList.add('is-visible'); });
  }

  var fab = document.querySelector('.fab-in');
  if(fab){
    window.setTimeout(function(){ fab.classList.add('is-visible'); }, 900);
  }
})();
