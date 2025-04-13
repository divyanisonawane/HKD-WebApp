
  let beadCount = 0;
  let roundCount = 0;

  function incrementBead() {
    beadCount++;
    if (beadCount >= 108) {
      beadCount = 0;
      incrementRound();
    }
    document.getElementById('beadCount').innerText = beadCount;
  }

  function incrementRound() {
    if (roundCount < 16) {
      roundCount++;
      document.getElementById('roundCount').innerText = roundCount;
    }
  }

  function resetBeads() {
    beadCount = 0;
    document.getElementById('beadCount').innerText = beadCount;
  }

  function resetRounds() {
    roundCount = 0;
    document.getElementById('roundCount').innerText = roundCount;
  }

  // Hide spinner when page is ready
  window.addEventListener('load', function () {
    const spinner = document.getElementById('spinner');
    if (spinner) {
      spinner.style.display = 'none';
    }
  });
