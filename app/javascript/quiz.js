window.addEventListener('load', function(){
  const prev = document.getElementById("prev")
  const next = document.getElementById("next")
  const problem = document.getElementById("problem-text");
  const answer = document.getElementById("answer")
  const quizSet =[
    {p:'study',a:'勉強する'},
    {p:'play',a:'遊ぶ'},
    {p:'go',a:'いく'},
    {p:'d',a:'D'},
    {p:'e',a:'E'},
    {p:'f',a:'F'}
  ]
  let currentNum = 0;
  if(currentNum === 0){
    prev.classList.add("hidden")
  }
  problem.innerHTML = quizSet[currentNum].p
  answer.innerHTML = quizSet[currentNum].a
  
  next.addEventListener('click',() => {
    currentNum++;
    prev.classList.remove("hidden")
    if(currentNum === quizSet.length - 1){
      next.classList.add("hidden")
    }
    if(answer.classList.contains("hidden") === false){
      answer.classList.add("hidden")
    }
    problem.innerHTML = quizSet[currentNum].p
    answer.innerHTML = quizSet[currentNum].a
  })

  prev.addEventListener('click',() => {
    currentNum--;
    next.classList.remove("hidden")
    if(currentNum === 0){
      prev.classList.add("hidden")
    }
    if(answer.classList.contains("hidden") === false){
      answer.classList.add("hidden")
    }
    problem.innerHTML = quizSet[currentNum].p
    answer.innerHTML = quizSet[currentNum].a
  })

})