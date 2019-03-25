let pageNumber = 0;

//content
const pages = [
  {
    copy: 'a Brooklyn-based graphic designer',
    background: '#edc7a9',
    circle: '#3e78ed'
  },
  {
    copy: "Kanye West's biggest fan",
    background: '#a1fffe',
    circle: '#e34a47'
  },
  {
    copy: 'looking for a job at the start of October',
    background: '#d3c7f3',
    circle: '#f7fe00'
  },
  {
    copy: 'letting you <a href="pdf.pdf">download her PDF</a>',
    background: '#faffb8',
    circle: '#b472e6'
  }
];

const nextTag = document.querySelector('footer img.next');
const previousTag = document.querySelector('footer img.previous');
const randomTag = document.querySelector('footer img.random');
const outputTag = document.querySelector('h2');
const circleTag = document.querySelector('section div.circle');
const bodyTag = document.querySelector('body');

const next = () => {
  pageNumber = pageNumber + 1;

  if (pageNumber > pages.length - 1) {
    pageNumber = 0;
  }
  updateSection();
};

const previous = () => {
  pageNumber = pageNumber - 1;

  if (pageNumber < 1) {
    pageNumber = pages.length - 1;
  }
  updateSection();
};

//update the section's content and style
const updateSection = () => {
  outputTag.innerHTML = pages[pageNumber].copy;
  circleTag.style.backgroundColor = pages[pageNumber].circle;
  bodyTag.style.backgroundColor = pages[pageNumber].background;
};

//event listeners
nextTag.addEventListener('click', () => {
  next();
});
previousTag.addEventListener('click', () => {
  previous();
});
