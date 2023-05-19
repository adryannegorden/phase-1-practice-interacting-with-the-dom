let counter = 0;

function incrementTimer() {
  counter++;
  document.getElementById('counter').textContent = counter;
}

setInterval(incrementTimer, 1000);

document.getElementById('plus').addEventListener('click', function () {
    counter++;
    document.getElementById('counter').textContent = counter;
  });
  
  document.getElementById('minus').addEventListener('click', function () {
    counter--;
    document.getElementById('counter').textContent = counter;
  });

  const likes = {};

  document.getElementById('heart').addEventListener('click', function () {
    if (!likes[counter]) {
      likes[counter] = 1;
    } else {
      likes[counter]++;
    }
  
    const likesList = document.getElementById('likes');
    const newLike = document.createElement('li');
    newLike.textContent = `Number ${counter} has ${likes[counter]} likes.`;
    likesList.appendChild(newLike);
  });

  
let intervalId;

  document.getElementById('pause').addEventListener('click', function () {
    clearInterval(intervalId);
  
    document.getElementById('plus').disabled = true;
    document.getElementById('minus').disabled = true;
    document.getElementById('heart').disabled = true;
    document.getElementById('submit').disabled = true;
  
    this.textContent = 'resume';
  });

  
let intervalId;

  document.getElementById('pause').addEventListener('click', function () {
    clearInterval(intervalId);
  
    document.getElementById('plus').disabled = true;
    document.getElementById('minus').disabled = true;
    document.getElementById('heart').disabled = true;
    document.getElementById('submit').disabled = true;
  
    this.textContent = 'resume';
  });

  document.getElementById('restart').addEventListener('click', function () {
    counter = 0;
    document.getElementById('counter').textContent = counter;
  
    document.getElementById('plus').disabled = false;
    document.getElementById('minus').disabled = false;
    document.getElementById('heart').disabled = false;
    document.getElementById('submit').disabled = false;
  
    document.getElementById('pause').textContent = 'pause';
  });
  