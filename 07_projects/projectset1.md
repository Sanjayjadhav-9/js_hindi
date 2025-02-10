# Projects related to DOM

## project link 
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-rfhlxcfo?file=2-BMICalculator%2Fchaiaurcode.js)

# Solution code

## Project 1 

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## Project 2

``` javascript
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(1);
    if (bmi <= 18.6) {
      results.innerHTML = `<span>Under Weight ${bmi}</span>`;
    } else if (bmi > 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span>Normal Weight ${bmi}</span>`;
    } else {
      results.innerHTML = `<span>Over Weight ${bmi}</span>`;
    }
  }
});

```

# Project 3

```javascript
const clock = document.querySelector('#clock')

setInterval(()=>{
  const date = new Date()
  clock.innerHTML = date.toLocaleTimeString()
}, 1000)
```