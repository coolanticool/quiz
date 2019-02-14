let questionNum = 0;
let score = 0;

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
      <button type="submit" class="submitButton">Submit</button>
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
        $('.quizStart').on('click', '.startButton', function (event) {
          //$('.quizStart').remove();
          $('.questionAnswerForm').css('display', 'block');
          
      });

}

function renderQuestion () {
    //render question in DOM
        $('.questionAnswerForm').html(generateQuestion());
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
       //alert ("test"); 
      changeQuestion();
      renderQuestion();
      //userSelectAnswer();
        }
    )};

  

function displayScore () {
    //increment score
        score ++;
}


//function restartQuiz () {
// Create an event listener to listen for a click on the Retake button and refresh the page
$(".retake-button").click(function(){
    location.reload();
      //alert ('test');
    });
//}

  //run quiz functions
function makeQuiz () {
    startQuiz();
    renderQuestion();
    renderNextQuestion();
  }
  
  $(makeQuiz);
