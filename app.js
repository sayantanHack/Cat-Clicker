
$button = document.querySelector('img');
$span = document.querySelector('span');
$refresh = document.querySelector('button');

function counting(){
  $span.innerHTML++;
}
$button.addEventListener('click', counting)
