// ================= Ambient background effects =================
(function(){
  var starsC = document.getElementById('stars');
  if (starsC){
    var starCount = window.innerWidth < 600 ? 40 : 80;
    for (var i = 0; i < starCount; i++){
      var s = document.createElement('div');
      s.className = 'star';
      var size = 1 + Math.random() * 2;
      s.style.width = size + 'px';
      s.style.height = size + 'px';
      s.style.left = (Math.random() * 100) + 'vw';
      s.style.top = (Math.random() * 100) + 'vh';
      s.style.animationDelay = (-Math.random() * 4) + 's';
      s.style.animationDuration = (2.5 + Math.random() * 3) + 's';
      starsC.appendChild(s);
    }
  }

  var fliesC = document.getElementById('fireflies');
  if (fliesC){
    var flyCount = window.innerWidth < 600 ? 8 : 16;
    for (var j = 0; j < flyCount; j++){
      var f = document.createElement('div');
      f.className = 'firefly';
      f.style.left = (Math.random() * 100) + 'vw';
      f.style.top = (60 + Math.random() * 40) + 'vh';
      f.style.animationDuration = (10 + Math.random() * 8) + 's, ' + (2 + Math.random() * 2) + 's';
      f.style.animationDelay = (-Math.random() * 10) + 's, ' + (-Math.random() * 2) + 's';
      fliesC.appendChild(f);
    }
  }

  var petalsC = document.getElementById('petals');
  if (petalsC){
    var petalCount = window.innerWidth < 600 ? 10 : 18;
    for (var k = 0; k < petalCount; k++){
      var p = document.createElement('div');
      p.className = 'petal';
      var left = Math.random() * 100;
      var duration = 10 + Math.random() * 10;
      var delay = Math.random() * 14;
      var swayDur = 3 + Math.random() * 3;
      var size2 = 8 + Math.random() * 9;
      p.style.left = left + 'vw';
      p.style.width = size2 + 'px';
      p.style.height = size2 + 'px';
      p.style.animationDuration = duration + 's, ' + swayDur + 's';
      p.style.animationDelay = '-' + delay + 's, -' + (Math.random()*swayDur) + 's';
      petalsC.appendChild(p);
    }
  }
})();

// ================= Nav active link highlighting =================
(function(){
  var links = document.querySelectorAll('.nav a');
  var current = (window.location.pathname.split('/').pop() || 'index.html');
  links.forEach(function(a){
    var href = a.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')){
      a.classList.add('active');
    }
  });
})();

// ================= Music toggle (shared logic) =================
(function(){
  var btn = document.getElementById('musicBtn');
  var audio = document.getElementById('bgAudio');
  if (!btn || !audio) return;
  var bars = document.getElementById('musicBars');
  var iconOff = document.getElementById('musicIconOff');
  var playing = false;

  btn.addEventListener('click', function(){
    if (!playing){
      audio.play().then(function(){
        playing = true;
        btn.classList.add('playing');
        btn.setAttribute('aria-pressed', 'true');
        iconOff.style.display = 'none';
        bars.style.display = 'flex';
      }).catch(function(){});
    } else {
      audio.pause();
      playing = false;
      btn.classList.remove('playing');
      btn.setAttribute('aria-pressed', 'false');
      iconOff.style.display = 'block';
      bars.style.display = 'none';
    }
  });
})();

// ================= Confetti helper (used on countdown page) =================
function fireConfetti(container){
  var colors = ['#D4AF7A','#E39AA8','#C46F82','#F0DCB0','#FBF3EC'];
  for (var i = 0; i < 60; i++){
    (function(i){
      setTimeout(function(){
        var c = document.createElement('div');
        c.className = 'confetti-piece';
        c.style.left = (Math.random() * 100) + '%';
        c.style.background = colors[Math.floor(Math.random()*colors.length)];
        c.style.animationDuration = (2.6 + Math.random() * 2) + 's';
        c.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        container.appendChild(c);
        setTimeout(function(){ c.remove(); }, 5200);
      }, i * 55);
    })(i);
  }
}
