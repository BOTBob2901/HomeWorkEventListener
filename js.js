"use strict";
const toggleButton = document.getElementById('toggle-button')
const serviceButton = document.getElementById('more-services');
toggleButton.addEventListener('click', function () {
  if (serviceButton.style.display === 'none') {
    serviceButton.style.display = 'block';
    toggleButton.textContent = "Show Less";
  }
  else {
    serviceButton.style.display = 'none';
    toggleButton.textContent = "Show More";
  }
});

const modalContent = document.getElementById('modal-content')
const articleModalPopUp = document.getElementById('articleModal')
const aboutBtn = document.getElementById('aboutBtn')
aboutBtn.addEventListener('click', function () {
  articleModalPopUp.style.display = 'block';
})
const closeModal = document.getElementById('closeModal')
closeModal.addEventListener('click', function () {
  articleModalPopUp.style.display = 'none';
})

articleModalPopUp.addEventListener('click', function (event) {
  if (event.target === articleModalPopUp)
    articleModalPopUp.style.display = 'none';
})

const sendFB = document.getElementById('sendFB');
const disableFB = document.getElementById('disableFB');
const FBAnswer = document.getElementById('FBAnswer');

const sendForm = () => {
  console.log("Data was send")
  FBAnswer.textContent = "Thank you for your feedback!"
  sendFB.removeEventListener('click', sendForm)
}
const disableForm = () => {
  console.log("Feedback disable")
  FBAnswer.textContent = "Feedback disable"
  sendFB.classList.add('noactive')
  disableFB.classList.add('noactive')
  sendFB.removeEventListener('click', disableForm)
  disableFB.removeEventListener('click', disableForm)
}

sendFB.addEventListener('click', sendForm)
disableFB.addEventListener('click', disableForm)

const aboutIMG = document.getElementById('aboutIMG')
aboutIMG.addEventListener('mouseover', function () {
  aboutIMG.src = 'https://picsum.photos/id/237/400/300?grayscale'
})
aboutIMG.addEventListener('mouseout', function () {
  aboutIMG.src = 'https://picsum.photos/400/300?grayscale'
})


const widthInput = document.getElementById('widthInput')
const heightInput = document.getElementById('heightInput')
const applySize = document.querySelector('#sizeForm button')
const boxSize = document.getElementById('box-size')
applySize.addEventListener('click', function (event) {
  event.preventDefault();
  document.getElementById('customBox').style.height = (heightInput.value) + 'px'
  document.getElementById('customBox').style.width = (widthInput.value) + 'px'
})


//WH
const fullText = `"This company exceeded my expectations in every way. Their team was professional, responsive, and incredibly skilled. I couldn't have asked for a better experience and result!"`;

const reviewText = document.getElementById('review-text');
const toggleReview = document.getElementById('toggle-review');

let isShort = true;
const shortLength = 51;

toggleReview.addEventListener('click', () => {
  isShort = !isShort;
  reviewText.textContent = isShort ? fullText.slice(0, shortLength) + '...' : fullText;
  toggleReview.textContent = isShort ? 'Read full review' : 'Show Less';
});

//Igor Nikonov, Saher Haddad