'use strict';

// Elements
const body = document.body;
const display = document.querySelector('.section-output');
const btnReset = document.querySelector('.btn--reset');
const btnDel = document.querySelector('#del');
const btnPlus = document.querySelector('#plus');
const btnEqual = document.querySelector('.btn--equal');
const num = document.querySelectorAll('.btn--small');
const btns = document.querySelectorAll('.btn');
const sectionInputs = document.querySelector('.section-inputs');
const btnSecondary = document.querySelectorAll('.btn--secondary');
const btnTertiary = document.querySelector('.btn--tertiary');
const theme = document.querySelector('.theme');
const logo = document.querySelector('.logo');
const toggle = document.querySelector('.tri-state-toggle');
const toggleInput = document.querySelectorAll('input');

// IMPLEMENTING LOGIC <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// Reseting
btnReset.addEventListener('click', function () {
  display.textContent = '';
});

// Deleting numbers
btnDel.addEventListener('click', function () {
  display.textContent = display.textContent.slice(0, -1);
});

// Adding numbers
num.forEach((n) =>
  n.addEventListener('click', function (e) {
    // console.log(e.target.dataset);
    // console.log(n.dataset.num);
    if (n.dataset.num) display.textContent += n.dataset.num;
  })
);

// Evaluating
btnEqual.addEventListener('click', function () {
  try {
    display.textContent = eval(display.textContent);
  } catch {
    display.textContent = 'Error!';
  }
});

// SWITCHING THEMES <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// Theme 2

const theme2 = document.getElementById('two');
theme2.addEventListener('click', function () {
  //Header & display
  body.style.backgroundColor = 'hsl(0, 0%, 90%)';
  if (
    logo.classList.contains('theme3-text') &&
    theme.classList.contains('theme3-text')
  ) {
    logo.classList.replace('theme3-text', 'theme2-text');
    theme.classList.replace('theme3-text', 'theme2-text');
  } else {
    logo.classList.add('theme2-text');
    theme.classList.add('theme2-text');
  }
  toggle.style.backgroundColor = 'hsl(0, 5%, 81%)';
  toggleInput.forEach((input) => (input.style.opacity = 0.2));
  document.getElementById('two').style.opacity = '1';
  display.style.backgroundColor = 'hsl(0, 0%, 93%)';
  display.style.color = 'hsl(60, 10%, 19%)';

  //Section inputs
  sectionInputs.style.backgroundColor = 'hsl(0, 5%, 81%)';
  btns.forEach((btn) => {
    if (btn.classList.contains('btn-theme3')) {
      btn.classList.replace('btn-theme3', 'btn-theme2');
    } else if (btn.classList.contains('btn')) {
      btn.classList.replace('btn', 'btn-theme2');
    }
  });
  btnSecondary.forEach((btn) => {
    if (btn.classList.contains('btn--secondary--theme3')) {
      btn.classList.replace('btn--secondary--theme3', 'btn--secondary--theme2');
    } else if (btn.classList.contains('btn--secondary')) {
      btn.classList.replace('btn--secondary', 'btn--secondary--theme2');
    }
  });
  if (btnTertiary.classList.contains('btn--tertiary--theme3')) {
    btnTertiary.classList.replace(
      'btn--tertiary--theme3',
      'btn--tertiary--theme2'
    );
  } else if (btnTertiary.classList.contains('btn--tertiary')) {
    btnTertiary.classList.replace('btn--tertiary', 'btn--tertiary--theme2');
  }
});

// Theme 3

const theme3 = document.getElementById('three');
theme3.addEventListener('click', function () {
  //Header & display
  body.style.backgroundColor = 'hsl(268, 75%, 9%)';
  logo.classList.add('theme3-text');
  theme.classList.add('theme3-text');
  toggle.style.backgroundColor = 'hsl(268, 71%, 12%)';
  toggleInput.forEach((input) => (input.style.opacity = 0.2));
  document.getElementById('three').style.opacity = '1';
  display.style.backgroundColor = 'hsl(268, 71%, 12%)';
  display.style.color = 'hsl(52, 100%, 62%)';

  //Section inputs
  sectionInputs.style.backgroundColor = 'hsl(268, 47%, 21%)';
  btns.forEach((btn) => {
    if (btn.classList.contains('btn-theme2')) {
      btn.classList.replace('btn-theme2', 'btn-theme3');
    } else if (btn.classList.contains('btn')) {
      btn.classList.replace('btn', 'btn-theme3');
    }
  });
  btnSecondary.forEach((btn) => {
    if (btn.classList.contains('btn--secondary--theme2')) {
      btn.classList.replace('btn--secondary--theme2', 'btn--secondary--theme3');
    } else if (btn.classList.contains('btn--secondary')) {
      btn.classList.replace('btn--secondary', 'btn--secondary--theme3');
    }
  });
  if (btnTertiary.classList.contains('btn--tertiary--theme2')) {
    btnTertiary.classList.replace(
      'btn--tertiary--theme2',
      'btn--tertiary--theme3'
    );
  } else if (btnTertiary.classList.contains('btn--tertiary')) {
    btnTertiary.classList.replace('btn--tertiary', 'btn--tertiary--theme3');
  }
});

// Theme 1 (starter)

const theme1 = document.getElementById('one');
theme1.addEventListener('click', function () {
  //Header & display
  body.style.backgroundColor = 'hsl(222, 26%, 31%)';
  if (
    logo.classList.contains('theme2-text') ||
    logo.classList.contains('theme3-text')
  ) {
    logo.classList.remove('theme3-text');
    logo.classList.remove('theme2-text');
    theme.classList.remove('theme3-text');
    theme.classList.remove('theme2-text');
  }
  toggle.style.backgroundColor = 'hsl(228, 28%, 21%)';
  toggleInput.forEach((input) => (input.style.opacity = 0.2));
  document.getElementById('one').style.opacity = '1';
  display.style.backgroundColor = 'hsl(224, 36%, 15%)';
  display.style.color = 'white';

  //Section inputs
  sectionInputs.style.backgroundColor = 'hsl(223, 31%, 20%)';
  btns.forEach((btn) => {
    if (btn.classList.contains('btn-theme2')) {
      btn.classList.replace('btn-theme2', 'btn');
    } else if (btn.classList.contains('btn-theme3')) {
      btn.classList.replace('btn-theme3', 'btn');
    }
  });
  btnSecondary.forEach((btn) => {
    if (btn.classList.contains('btn--secondary--theme2')) {
      btn.classList.replace('btn--secondary--theme2', 'btn--secondary');
    } else if (btn.classList.contains('btn--secondary--theme3')) {
      btn.classList.replace('btn--secondary--theme3', 'btn--secondary');
    }
  });
  if (btnTertiary.classList.contains('btn--tertiary--theme2')) {
    btnTertiary.classList.replace('btn--tertiary--theme2', 'btn--tertiary');
  } else if (btnTertiary.classList.contains('btn--tertiary--theme3')) {
    btnTertiary.classList.replace('btn--tertiary--theme3', 'btn--tertiary');
  }
});
