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

//tags
const nextTag = document.querySelector('footer img.next');
const previousTag = document.querySelector('footer img.previous');
const randomTag = document.querySelector('footer img.random');
const outputTag = document.querySelector('h2');
const circleTag = document.querySelector('section div.circle');
const bodyTag = document.querySelector('body');

//functions
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

const random = () => {
  pageNumber = Math.floor(Math.random() * pages.length);

  updateSection();
};

//update the section's content and style
const updateSection = () => {
  outputTag.innerHTML = pages[pageNumber].copy;
  circleTag.style.backgroundColor = pages[pageNumber].circle;
  bodyTag.style.backgroundColor = pages[pageNumber].background;
};

//'click' event listeners
nextTag.addEventListener('click', () => {
  next();
});
previousTag.addEventListener('click', () => {
  previous();
});
randomTag.addEventListener('click', () => {
  random();
});

//'keyup' event listener
document.addEventListener('keyup', event => {
  console.log(event);

  //if ArrowRight pressed run next()
  if (event.key == 'ArrowRight') {
    next();
  }
  //if ArrowLeft pressed run previous()
  if (event.key == 'ArrowLeft') {
    previous();
  }
});
