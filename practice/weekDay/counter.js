let button = document.getElementById('btn');

button.addEventListener('click', function(){
    let word = document.getElementById('string').value;
    let count = word.length;
    let output = document.getElementById('result');
    output.innerHTML = `<h3>The length is:${count}</h3>`
});