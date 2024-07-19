# Projects related to DOM

## project link 
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code 

## project 6 Keyboard Check

```javascript

const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class = color>
  <table>
  <tr>
    <th>Key</th>
    <th>Key code</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  </div>
  `;
});


```