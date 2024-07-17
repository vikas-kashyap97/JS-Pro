# Projects related to DOM

## project link 
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code 

## project 2 BMI Calculator

```javascript
const form = document.querySelector('form');
// this usecase will give the empty value
//  const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid height!';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a valid weight!';
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    let status = '';

    if (BMI < 18.5) {
      status = 'Underweight';
    } else if (BMI >= 18.5 && BMI <= 24.9) {
      status = 'Normal weight';
    } else if (BMI >= 25 && BMI <= 29.9) {
      status = 'Overweight';
    } else {
      status = 'Obesity';
    }

    // show the result
    results.innerHTML = `<span>${BMI}</span><br><span>Status: ${status}</span>`;
  }
});
```