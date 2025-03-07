fetch('phrases.json')
  .then(response => response.json())
  .then(data => {
    const marquee = document.getElementById('marquee');
    data.forEach(item => {
      const phrase = document.createElement('span');
      phrase.innerHTML = `<img class="tw" src="${item.image}"/> ${item.text} <span class="spacer"></span>`;
      marquee.appendChild(phrase);
    });
  })
  .catch(error => console.error('Error loading phrases:', error));