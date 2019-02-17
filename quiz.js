var questionNum = 0;
var score = 0;

function generateQuestion () {


    if (questionNum < questionArray.length) {
      return `<div class="question-${questionNum}">
      <h2>${questionArray[questionNum].question}</h2>
      <form>
      <fieldset>
      <label class="answerOption">
      <input type="radio" value="${questionArray[questionNum].answers[0]}" name="answer" required>
      <span>${questionArray[questionNum].answers[0]}</span>
      </label>
      <label class="answerOption">
      <input type="radio" value="${questionArray[questionNum].answers[1]}" name="answer" required>
      <span>${questionArray[questionNum].answers[1]}</span>
      </label>
      <label class="answerOption">
      <input type="radio" value="${questionArray[questionNum].answers[2]}" name="answer" required>
      <span>${questionArray[questionNum].answers[2]}</span>
      </label>
      
      </fieldset>
      </form>
      </div>`;
  } else {
      restartQuiz();
      $('.questionNum').text(10)
    }
  }

  function generateQuestionNew (lclQuestionIndex) {

    var lclQuestionIndex
    
    
    
    
        if (questionNum < questionArray.length) {
          return `<div class="question-${questionNum}">
          <h2>${questionArray[lclQuestionIndex].question}</h2>
          <form>
          <fieldset>
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
          <div style="text-align: center;">
          
          </div>
          </fieldset>
          </form>
          </div>`;
      } else {
          restartQuiz();
          $('.questionNum').text(10)
        }
      }
    


function startQuiz () {
    //create event listener on startButton

questionNum = 0;
score = 0;

        $('.quizStart').on('click', '.startButton', function (event) {
          //$('.quizStart').remove();
          $('.questionAnswerForm').css('display', 'block');
          
      });

}

function submitQuizAnswer() {
  // submit selected answer, disable radio buttons
  $('#submit-answer').click(function(event) {
    event.preventDefault();
    evaluateAnswers();
    $('#submit-answer').addClass('hidden');
    $('#next-question').removeClass('hidden');
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
  } else {
    userScore.incorrect++;
    getCorrectAnswer();
    $('#feedbackincorrect').removeClass('hidden');
    $('.sad-coffee').removeClass('hidden');
  }
  $('.results-counter').html(`<p>Correct: ${userScore.correct} | Incorrect: ${userScore.incorrect}</p>`);
}  


let userScore = {
  correct: 0,
  incorrect: 0,
};


/*// Checks answer from the array to see if the one chosen is the one that is correct
function checkAnswer(answer){
  var listQuestion = questionArray[current];
  if(listQuestion.correct == answer){
    score++;
    
  } else {
    $('li.selected').remove('hidden');
    $('listQuestion.correct').remove('hidden');
  }
  $('.score').text('Current Score: '+score);
  current++;
}*/

function renderQuestion () {
    //render question in DOM
        $('.questionAnswerForm').html(generateQuestionNew(questionNum));
      }


function changeQuestion () {
    //increment question
    //if (questionNum < questionArray.length) {
        questionNum ++; 
    //} 
        //$('.questionNum').text(questionNum+1);
}

function renderNextQuestion () {
    
    $('questionAnswerForm').on('click', '.nextQuestion', function (event) {
       alert ("test"); 
      changeQuestion();
      renderQuestion();
      userSelectAnswer();
        }
    )};

  

function displayScore () {
    //increment score
        score ++;
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
    renderQuestion();
    changeQuestion();
    renderNextQuestion();
    displayScore();
    restartQuiz();
  }

  // main function handler

  $(document).ready(function(){
  
    /*$("p").click(function(){
      $(this).hide();
    });*/
  
  
     $("#startButton").click(function(){
      makeQuiz();
    });

  

      $('#submit-answer').click(function(event) {
        event.preventDefault();
        evaluateAnswers();
        $('#submit-answer').addClass('hidden');
        $('#next-question').removeClass('hidden');
        $('input[type=radio]').attr('disabled', true);
      });
    
      
        
       $("#nextQuestion").click(function(){
      //alert(questionNum)
      questionNum++;
       

  
  $('.questionAnswerForm').html(generateQuestionNew(questionNum));
    });

  
  $(".retake-button").click(function(){
    //alert ('restarted quiz');
      location.reload();
  });

  
    /*$('form').on('submit', function (event) {
      event.preventDefault();
      let selected = $('input:checked');
      let answer = selected.val();
      let correctAnswer = `${questionArray[lclQuestionIndex].correct}`;
  
});*/

  })