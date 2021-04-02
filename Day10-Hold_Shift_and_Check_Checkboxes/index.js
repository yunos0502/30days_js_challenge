const items = [
  {
    id: 1,
    description: 'This is an inbox layout.',
  },
  {
    id: 2,
    description: 'Check one item',
  },
  {
    id: 3,
    description: 'Hold down your Shift key',
  },
  {
    id: 4,
    description: 'Check a lower item',
  },
  {
    id: 5,
    description: 'Everything in between should also be set to checked',
  },
  {
    id: 6,
    description: 'Try to do it without any libraries',
  },
  {
    id: 7,
    description: 'Just regular JavaScript',
  },
  {
    id: 8,
    description: 'Good Luck!',
  },
  {
    id: 9,
    description: 'Don\'t forget to tweet your result!',
  },
];

const inbox = document.querySelector('.inbox');
inbox.innerHTML = items.map(item => (
  `
    <div class="item">
      <input type="checkbox">
      <p>${item.description}</p>
    </div>
  `
)).join('');

const checkboxs = inbox.querySelectorAll('.item input[type="checkbox"]');
let lastChecked;

function handleCheck(e) {
  let inBetween = false;

  if (e.shiftKey && this.checked) {
      checkboxs.forEach(checkbox => {
        if (lastChecked === checkbox || checkbox === this) inBetween = !inBetween;

        if (inBetween) checkbox.checked = true;
      });
  }

  lastChecked = this;
}

checkboxs.forEach(checkbox => checkbox.addEventListener('click', handleCheck));