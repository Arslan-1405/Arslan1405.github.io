let a = 0;

let counter = document.getElementById('counter');

function tap()
{
    a++;
    console.log('Клик '+a);
    counter.textContent = a;
}