window.addEventListener('load', function() {
  const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
  let randomNumber = Math.floor(Math.random() * colors.length);
  let randomColor = colors[randomNumber];
  let body = document.querySelector('body');
  // body.style.backgroundColor = randomColor;

  // lowerCount.addEventListener('click', randomColor);
  // addCount.addEventListener('click', randomColor);
  const counter = document.querySelector('#counter');
  const lowerCount = document.querySelector('#lower');
  const addCount = document.querySelector('#add');

  let count = 0;
  
  lowerCount.addEventListener('click', function() {
    count--;
    body.style.backgroundColor = randomColor;
    counter.innerHTML = count;
  });

  addCount.addEventListener('click', function() {
    count++;
    body.style.backgroundColor = randomColor;
    counter.innerHTML = count;
  });
  
});
