document.querySelector('.summary').innerHTML += '<a class="right folders" style="color: #bbb; padding-right: 10px;">add to folder</a>';
document.querySelector('.summary > a.right.folders').addEventListener('click', function() {
  var $comments = document.querySelector('.summary').previousElementSibling
  $comments.innerText = 'folder[]';
  $comments.setSelectionRange(7,7);
  $comments.focus();
  document.querySelector('#submit-comment').disabled = false;
});
