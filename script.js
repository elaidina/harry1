const quizData = [
    {
        question: "Petunia is ...",
        a: "... Harry´s sister.",
        b: "... Harry´s aunt.",
        c: "... Harry´s daughter.",
        
        correct: "b",
    },
    {
      question: "Dudley is ...",
      a: "... Harry´s cousin.",
      b: "... Harry´s pet.",
      c: "... Harry´s brother.",
      correct: "a",
  },
  {
    question: "You-Know-Who´s name is...",
    a: "... Voldemort.",
    b: "... Fluffy.",
    c: "... Hagrid.",
    correct: "a",
},
{
  question: "The Dursley family lives ...",
  a: "... in the Zoo.",
  b: "... in Hogwarts.",
  c: "... at Privet Drive.",
  correct: "c",
},{
  question: "The headmaster of Hogwarts is ...",
  a: "... Professor McGonagall.",
  b: "... Albus Dumbledore.",
  c: "... Ron Weasley.",
  correct: "b",
},
{
question: "Hagrid brought baby Harry on the motorcycle borrowed from ...  ",
a: "... Mrs. Figg.",
b: "... Sirius Black.",
c: "... Lucius Malfoy.",
correct: "b",
},{
  question: "A muggle is ... ",
  a: "... someone extraordinary smart.",
  b: "... a big mushroom.",
  c: "... a person who does not have any magical powers.",
  correct: "c",
},
{
question: "Harry´s scar on his forehead was made by...",
a: "... Lord Voldemort.",
b: "... baby Dudley.",
c: "... the snake at the Zoo.",
correct: "a",
},{
  question: "Uncle Vernon ...",
  a: "... had 10 children.",
  b: "... didn´t want Harry to get his letter from Hogwarts.",
  c: "... was a big fan of magic.",
  correct: "b",
},
{
question: "Harry was able to ...",
a: "... talk to snakes and understand their language.",
b: "... fly without a broom.",
c: "... grow faster than everybody else.",
correct: "a",
},{
  question: "Hagrid brought a cake for Harry´s ...",
  a: "... 10th birthday.",
  b: "... 11th birthday.",
  c: "... wedding.",
  correct: "b",
},
{
question: "Harry bought his school things and his wand ...",
a: "... in the platform 9 and 3/4.",
b: "... in the Gringotts bank.",
c: "... in the Diagon Alley.",
correct: "c",
},{
  question: "Griphook was ...",
  a: "... an owl.",
  b: "... a goblin.",
  c: "... a rat.", 
  correct: "b",
},
{
question: "Mr. Ollivander was selling ...",
a: "...wizarding books.",
b: "... cauldrons.",
c: "... wands.",
correct: "c",
},{
  question: "Harry got Hedwig from ...",
  a: "... Hagrid.",
  b: "... Azkaban.",
  c: "... Dudley.",
  correct: "a",
},
{
question: "The twinn of George Weasley was ...",
a: "...Ron.",
b: "...Percy.",
c: "... Fred.",
correct: "c",
},{
  question: "Nicolas Flamel...",
  a: "... was Dumbledore´s friend.",
  b: "... was the Professor of Potions.",
  c: "... was the real name of Lord Voldemort.",
  correct: "a",
},
{
question: "Crabbe and Goyle were friends of ...",
a: "... Hermione Granger.",
b: "... Draco Malfoy.",
c: "... Neville Longbottom.",


correct: "b",
},{
  question: "The sorting hat put Harry to ...",
  a: "... Gryffindor.",
  b: "... Hufflepuff.",
  c: "... Rawenclaw.",
  correct: "a",
},
{
question: "The cat of Mr. Filch was called...",
a: "... Fat Lady.",
b: "... Peaves.",
c: "... Mrs. Norris.",
correct: "c",
},
/* {
  question: "21. Zpěvák",
  a: "zpívá písničky na koncertech.",
  b: "opravuje pokazené elektrické přístroje.",
  c: "... Harry´s daughter.",
  correct: "a",
},
{
question: "22. Statistik",
a: "provádí turisty v pralese.",
b: "používá matematické modely k vyhodnocování informací.",
c: "... Harry´s daughter.",
correct: "b",
},
{
question: "23. Otorinolaryngolog",
a: "je doktor, který léčí nemoci nosu, uší a krku.",
b: "píše články do novin a časopisů.",
c: "... Harry´s daughter.",
correct: "a",
},
{
question: "24. Soudce",
a: "rozhoduje právní spory.",
b: "kontroluje jízdenky ve vlaku.",
c: "... Harry´s daughter.",
correct: "a",
},{
question: "25. Editor",
a: "zodpovídá za obsah a formu článků v médiích.",
b: "řídí letadlo.",
c: "... Harry´s daughter.",
correct: "a",
},
{
question: "26. Radiolog",
a: "slouží mše v kostele.",
b: "vyhodnocuje rentgeny a ultrazvuky pacientů.",
c: "... Harry´s daughter.",
correct: "b",
},{
question: "27. Tlumočník",
a: "dělá překlady z jedné řeči do druhé.",
b: "natáčí videa na Youtube.",
c: "... Harry´s daughter.",
correct: "a",
},
{
question: "28. Archeolog",
a: "zkoumá vykopávky a nálezy z minulosti.",
b: "pracuje v bance u pokladny.",
c: "... Harry´s daughter.",
correct: "a",
},{
question: "29. Detektiv",
a: "je specialista na výživu.",
b: "pátrá po stopách zločinců.",
c: "... Harry´s daughter.",
correct: "b",
},
{
question: "30. Recepční",
a: "pracuje v hoteli na recepci.",
b: "vymýšlí a navrhuje reklamy. ",
c: "... Harry´s daughter.",
correct: "a",
} */
    
  ];
  
  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const result = document.getElementById('resultquestion')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  const c_text = document.getElementById('c_text')
  const q = document.getElementById('q')
  
  const submitBtn = document.getElementById('submit')
  
  let currentQuiz = 0
  let score = 0
  
  loadQuiz()
  
  function loadQuiz() {
    deselectAnswers()
  
    const currentQuizData = quizData[currentQuiz]


    q.innerText = [currentQuiz+1] + "/20"
  
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
   
  }
  
  function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
  }
  
  function getSelected() {
    let answer
  
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
  
    return answer
  }
  let answers= []; 
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) { answers.push(answer);
            console.log(answers);}
  
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
            
            
        }
        
        currentQuiz++;
        
  
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            
            
  /* 
  */
           let results= quizData.map ((question,i) => 
           
           
           ` 
                <div class="${quizData[i].correct===answers[i]?
                    "correct": "false" } quiz-header ">
                <h2 id="question">${question.question}</h2>
                <ul id="resultquestion"  >
                  <li >
                    <input type="radio" name="answer" id="a" class="answer">
                    <label for="a" id="a_text">${question.a}</label>
                  </li>
        
                  <li>
                    <input type="radio" name="answer" id="b" class="answer">
                    <label for="b" id="b_text">${question.b}</label>
                  </li>

                  <li>
                    <input type="radio" name="answer" id="c" class="answer">
                    <label for="c" id="c_text">${question.c}</label>
                  </li>
        
                  
                  <li>
                  <h4>Correct answer: ${question[quizData[i].correct]}</h4>
                <h4>You chose: ${question[answers[i]]}</h4>
  
                
                  </li>
                  
                </ul>
              </div>`
                
                )
  
  //                 result.classList.add("correct")
  // /* 
                
  
                /* quizData.forEach ((question,i) =>
                 quizData[i].correct===answers[i]?
                  result.classList.add("correct")  : result.classList.add("false") 
                 ) */
            
         
  
  
            quiz.innerHTML = `
                <h2>You got ${score} points out of ${quizData.length}.</h2>
               
  
                
                
               
    
                ${results}
  
  
                
  
                <button onclick="location.reload()">Try again.</button>
            `
        
        
        }
    }
  })