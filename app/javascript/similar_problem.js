window.addEventListener('load', function(){
  const testNum = document.getElementById("testNum");
  const simChoices = document.getElementById("sim-choices");
  const simQuestion = document.getElementById("sim-question");
  const btn = document.getElementById("btn");
  const form = document.getElementById("form");
  const scoreArea = document.getElementById("score-area");
  const scoreInput = document.getElementById("score-input")
  const preScore = document.getElementById("pre-score")
  const scoreBtn = document.getElementsByClassName("score-btn");
  const timer = document.getElementById("timer");
  const timeRecord = document.getElementById("time-record");
  const simTestSet = [
    {q:'body',c:['死体、機関','書籍','物質','科学']},
    {q:'body',c:['死体、機関','書籍','物質','科学']},
    {q:'body',c:['死体、機関','書籍','物質','科学']},
    {q:'body',c:['死体、機関','書籍','物質','科学']},
  ];
  let count = 0;
  let simIsAnswered;
  let score = 0;
  let simStartTime;
  let simTimeoutId;
  simStartTime = Date.now();

  function shuffle(array) {
    for(let i = array.length - 1;i > 0;i--){
      const j = Math.floor(Math.random() * (i + 1));
      [array[i],array[j]] = [array[j],array[i]];
    }
    return array;
  }

  function simCheckAnswer(li){
    if(simIsAnswered){
      console.log(simIsAnswered)
      return;
    }
    simIsAnswered = true;
    li.classList.add("selected")
    if(li.textContent === simTestSet[count].c[0]){
      score++;
      // console.log("a");
    } else{
      // console.log("s");
    }
  }

  function countUp() {
    // console.log(Date.now() - uneStartTime)
    const d = new Date(Date.now() - simStartTime);
    const minutes = String(d.getMinutes()).padStart(2,'0');
    const seconds = String(d.getSeconds()).padStart(2,'0');
    const milliseconds = String(d.getMilliseconds()).padStart(2,'0');
    timer.innerHTML = `${minutes}:${seconds}:${milliseconds}`;
    simTimeoutId = setTimeout(() => {
      countUp();
    },10);
  }
  countUp();

  function setTest(){
    simIsAnswered = false;
    testNum.innerHTML = count + 1;
    simQuestion.innerHTML = simTestSet[count].q;
    while(simChoices.firstChild){
      simChoices.removeChild(simChoices.firstChild)
    }
    const shuffledChoices = shuffle([...simTestSet[count].c])
    shuffledChoices.forEach((choice) => {
      const li = document.createElement("li");
      li.innerHTML = choice
      li.classList.add("choice");
      li.addEventListener('click',() => {
        simCheckAnswer(li);
    })
    simChoices.appendChild(li);
  });

  if(count === simTestSet.length - 1){
    btn.innerHTML = "結果を見る";
  }

  }
  setTest();

  btn.addEventListener('click',() => {
    if(simIsAnswered === false){
      return
    }
    if(count === simTestSet.length - 1){
      scoreArea.innerHTML = `Score:${score} / ${simTestSet.length}`
      clearTimeout(simTimeoutId)
      console.log(simTimeoutId)
      console.log(Date.now() - simStartTime)
      const d = new Date(Date.now() - simStartTime);
      const m = String(d.getMinutes()).padStart(2,'0');
      const s = String(d.getSeconds()).padStart(2,'0');
      const ms = String(d.getMilliseconds()).padStart(2,'0');
      timeRecord.innerHTML = `${m}:${s}:${ms}`;
      // scoreInput.innerHTML = score;
      form.classList.remove("hidden");
    } else {
      count++;
      setTest();
    }
    
  });
}) 