# projects related to DOM

## project 1 - change color

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    /*  if (e.target.id == 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id == 'yellow') {
      body.style.backgroundColor = e.target.id;
    } */
    const color = e.target.id;
    switch (color) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;

      default:
        console.log('color not found');
        break;
    }
  });
});
````
## project 2 - BMI checking

````javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'please insert valid number ';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'please insert valid number ';
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${BMI}</span>`;

    if (BMI < 18.6) {
      results.innerHTML = 'Under Weight';
    }
    if (BMI >= 18.6 && BMI <= 24.9) {
      results.innerHTML = 'Normal Weight';
    }
    if (BMI > 24.9) {
      results.innerHTML = ' OverWeight';
    }
  }
});
````