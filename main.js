function dropdown() {
  const drop = document.querySelector('#dropdown');
  if (drop.style.display == 'none') {
    drop.style.display = 'block';
  } else if (drop.style.display == 'block') {
    drop.style.display = 'none'
  }
}