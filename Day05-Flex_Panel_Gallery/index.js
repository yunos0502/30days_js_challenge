const panels = [
  {
    id: 1,
    description: "Hey,Let's,Dance"
  },
  {
    id: 2,
    description: "Give,Take,Receive"
  },
  {
    id: 3,
    description: "Experience,It,Today"
  },
  {
    id: 4,
    description: "Give,All,You can"
  },
  {
    id: 5,
    description: "Life,In,Motion"
  },
];

const panelChild = panels.map(panel => {
  const desc = panel.description.split(',');
  const contents = desc.map(item => `<p>${item}</p>`).join('');
  let panelContent = '';

  panelContent += `<div class="panel panel${panel.id}">${contents}</div>`;
  
  return panelContent;
});

document.querySelector('.panels').innerHTML = panelChild.join('');

function handleClick() {
  if (this.classList.value.includes('open')) {
    this.classList.remove('open');
  } else {
    panel.forEach(el => el.classList.remove('open'));
    this.classList.toggle('open');
  }
}

const panel = document.querySelectorAll('.panel');
panel.forEach(item => item.addEventListener('click', handleClick));
