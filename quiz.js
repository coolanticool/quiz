function generateQuestionNew (lclQuestionIndex) {

    var lclQuestionIndex
  
        if (questionNum < questionArray.length) {
          return `<div class="question-${questionNum}">
          <h2>${questionArray[lclQuestionIndex].question}</h2>
          <form>
          <fieldset style='border-radius: 10px;'>
          <label class="answerOption">
          <input type="radio" value="${questionArray[questionNum].answers[0]}" name="answer" required>
          <span>${questionArray[lclQuestionIndex].answers[0]}</span>
          </label></br />
          <label class="answerOption">
          <input type="radio" value="${questionArray[questionNum].answers[1]}" name="answer" required>
          <span>${questionArray[lclQuestionIndex].answers[1]}</span>
          </label></br />
          <label class="answerOption">
          <input type="radio" value="${questionArray[questionNum].answers[2]}" name="answer" required>
          <span>${questionArray[lclQuestionIndex].answers[2]}</span>
          </label></br />
          </fieldset>
          </form>
          </div>`;
      } else {
        showFinalScore();
          restartQuiz();


        }
      }
    


function startQuiz () {
    //create event listener on startButton

questionNum = 0;


        $('.quizStart').on('click', '#startButton', function (event) {
          $('.quizStart').addClass('hidden');
          $('.questionAnswerForm').css('display', 'block');
          $('#questionBlock').show();
          $('#submitButton').show();
          $('#retake-button').hide();
          
      });

}

function submitQuizAnswer() {
  // submit selected answer, disable radio buttons
  
  $('#submitButton').click(function(event) {
    event.preventDefault();
    evaluateAnswers();
    $('#submitButton').hide();
    $('#nextQuestion').show();
    $('input[type=radio]').attr('disabled', true); 
  });
}

//user selects answer on submit run user feedback
function evaluateAnswers() {
  //check for correct answer and display results and/or correct answer, also display updated score
  let radioValue = $('input:checked').val();
  if (radioValue == questionArray[questionNum].correct) {
    userScore.correct++;
    $('#feedbackcorrect').removeClass('hidden');
    $('#nextQuestion').show();
    $('#feedbackincorrect').addClass('hidden');
  } else {
    userScore.incorrect++;
    $('#feedbackincorrect').removeClass('hidden');
    $('#feedbackcorrect').addClass('hidden');
    $("#correctDisplay").html(questionArray[questionNum].correct)
    $('#nextQuestion').show();
  }
  $('.results').html(`<p>Correct: ${userScore.correct} | Incorrect: ${userScore.incorrect} | Question Total: ${userScore.correct + userScore.incorrect} </p>`);
}  


var userScore = {
  correct: 0,
  incorrect: 0,
  totalQuestion:0,
};


function renderQuestion () {
  //render question in DOM
  $('.questionAnswerForm').html(generateQuestionNew(questionNum));
}

function changeQuestion () {
    //increment question
  $('.questionNum').text(questionNum+1);
}

function renderNextQuestion () {
    //render next question in DOM, hide feeback
    $('.questionAnswerForm').on('click', '#nextQuestion', function (event) {
      changeQuestion();
      renderQuestion();
      $('#feedbackincorrect').addClass('hidden');
      $('#feedbackcorrect').addClass('hidden');
  }
)};

function showFinalScore() {
    // hide submit button and display final page with final score
          $('#submitButton').hide();
          $('#questionBlock').hide();
          $('#final-page').show();
          $('#retake-button').show();
          $('#results-counter').hide();
          let finalScoreText = `<h3>You answered ${userScore.correct} out of 10 questions correctly!</h3>`;
          $('#final-correct').append(finalScoreText);
}



function restartQuiz () {
// Create an event listener to listen for a click on the Retake button and refresh the page
$(".retake-button").click(function(){
    location.reload();
      
    });
}

  //run quiz functions
function makeQuiz () {
    startQuiz();
    submitQuizAnswer();
    renderQuestion();
    changeQuestion();
    renderNextQuestion();
    restartQuiz();
}

  // main function handler

  $(document).ready(function(){

  $("title").html(pageTitle);
  $(".header").html(pageHeader);
  $(".subHeader").html(pageSubHeader);
  $("body").css('background-image', backgroundImage);
  
  
     $("#startButton").click(function(){
      makeQuiz();
    });

    $('#submitButton').click(function(event) {
      event.preventDefault();
      $('#submitButton').hide();
      $('#nextQuestion').show();
      $('input[type=radio]').attr('disabled', true); 
    });
  
       $("#nextQuestion").click(function(){
      questionNum++;
      $('#submitButton').show();
      $('#submitButton').removeAttr('disabled', true); 
      $('#nextQuestion').hide();
      $('#feedbackincorrect').addClass('hidden');
      $('#feedbackcorrect').addClass('hidden');
      $('.questionAnswerForm').html(generateQuestionNew(questionNum));
      
    });
  
  
  $(".retake-button").click(function(){
      location.reload();
  });

})
