window.addEventListener('load', function(){
  const testNum = document.getElementById("testNum");
  const choices = document.getElementById("choices");
  const question = document.getElementById("question");
  const btn = document.getElementById("btn");
  const form = document.getElementById("form");
  const scoreArea = document.getElementById("score-area")
  const testSet = [
    {q:'study',c:['a','b','c','d']},
    {q:'go',c:['e','bf','g','dh']},
    {q:'once',c:['as','bs','cs','ds']},
    {q:'concentrate',c:['ssa','ssb','ssc','dss']}
  ];
  let count = 0;
  let isAnswered;
  let score = 0;

  function shuffle(array) {
    for(let i = testSet.length - 1;i > 0;i--){
      const j = Math.floor(Math.random() * (i + 1));
      [array[i],array[j]] = [array[j],array[i]];
    }
    return array;
  }

  function checkAnswer(li){
    if(isAnswered){
      return;
    }
    isAnswered = true;
    li.classList.add("selected")
    if(li.textContent === testSet[count].c[0]){
      score++;
      console.log("a");
    } else{
      console.log("s");
    }
  }

  
  function setTest(){
    isAnswered = false;
    testNum.innerHTML = count + 1;
    question.innerHTML = testSet[count].q;
    while(choices.firstChild){
      choices.removeChild(choices.firstChild)
    }
    const shuffledChoices = shuffle([...testSet[count].c])
    shuffledChoices.forEach((choice) => {
    const li = document.createElement("li");
    li.innerHTML = choice
    li.classList.add("choice");
    li.addEventListener('click',() => {
      checkAnswer(li);
    })
    choices.appendChild(li);
  });

  if(count === testSet.length - 1){
    btn.innerHTML = "結果を見る";
  }

  }
  setTest();

  btn.addEventListener('click',() => {
    if(isAnswered === false){
      return
    }
    if(count === testSet.length - 1){
      scoreArea.innerHTML = `Score:${score} / ${testSet.length}`
      form.classList.remove("hidden");
    } else {
      count++;
      setTest();
    }
    
  });

})