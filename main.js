const btns = document.querySelectorAll(".question-btn");
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement.parentElement;
    // console.log(question);
    question.classList.toggle("show-text")
  });
});

// console.log(btns);

// const questions = document.querySelectorAll(".question");

// questions.forEach(function (question) {
//   const btn = question.querySelector(".question-btn");
//   // console.log(btn);
//   btn.addEventListener("click", function () {

//     questions.forEach(function (item) {
//       // console.log(item);
//       if (item !== question) {
//         item.classList.remove("show-text");
//       }
//     });

//     question.classList.toggle("show-text");
//   });
// });


// btn.addEventListener("click", function () {
//   questions.forEach(function (item) {
//     if(item !==question){
//       item.classList.remove("show-text");
//     }
//     question
//   })
// })