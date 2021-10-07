window.addEventListener('load', function(){
  const testNum = document.getElementById("testNum");
  const choices = document.getElementById("choices");
  const question = document.getElementById("question");
  const btn = document.getElementById("btn");
  const form = document.getElementById("form");
  const scoreArea = document.getElementById("score-area");
  const scoreInput = document.getElementById("score-input")
  const preScore = document.getElementById("pre-score")
  const scoreBtn = document.getElementsByClassName("score-btn");
  const timer = document.getElementById("timer");
  const timeRecord = document.getElementById("time-record");
  const timerArea = document.getElementById("timer-area")
  const testSet = [
    {q:'byproduct',c:['副産物','主産物','製品','不良品']},
    {q:'imprudent',c:['軽率な','自身のある','自覚のある','無意識な']},
    {q:'multipurpose',c:['多目的な','たくさんの','~できない','神経質な']},
    {q:'nonprofit',c:['非営利の','営利の','問題な','軽率な']},
    {q:'precede',c:['先行する,優先する','走る','転ぶ','倒れる']},
    {q:'precedent',c:['前例','実体験','研究','成果']},
    {q:'prefect',c:['知事','政治家','秘書','大臣']},
    {q:'prefectural',c:['県の','市の','役所の','町の']},
    {q:'preferable',c:['好ましい、望ましい','悍しい','しんどい','頑張っている']},
    {q:'prefix',c:['接頭辞','接尾辞','真ん中の','名詞']},
    {q:'pregnancy',c:['妊娠','誕生','診察','前提']},
    {q:'premise',c:['前提','考察','事例','正論']},
    {q:'pretend',c:['ふりをする','過ちを犯す','叩く','触る']},
    {q:'prevail',c:['普及する','ふりをする','先行する','支持する']},
    {q:'prevalent',c:['普及している、一般的な','県の','以前の','営利の']},
    {q:'previous',c:['以前の、前に','普及している','望ましい','妊娠した']},
    {q:'proceed',c:['前進する、進行する','ふりをする','前に手を置く','交代する']},
    {q:'process',c:['手順、プロセス','研究','事件','犯罪']},
  ];
  let count = 0;
  let isAnswered;
  let score = 0;
  let startTime;
  let timeoutId;
  startTime = Date.now();


  function shuffle(array) {
    for(let i = array.length - 1;i > 0;i--){
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
      // console.log("a");
    } else{
      // console.log("s");
    }
  }

  
  function countUp() {
    // console.log(Date.now() - startTime)
    const d = new Date(Date.now() - startTime);
    const minutes = String(d.getMinutes()).padStart(2,'0');
    const seconds = String(d.getSeconds()).padStart(2,'0');
    const milliseconds = String(d.getMilliseconds()).padStart(3,'0');
    timer.innerHTML = `${minutes}:${seconds}:${milliseconds}`;
    timeoutId = setTimeout(() => {
      countUp();
    },10);
  }
  countUp();
    
  
  
  
  
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
      clearTimeout(timeoutId);
      console.log("a")
      scoreArea.innerHTML = `Score:${score} / ${testSet.length}`
      console.log("a")
      console.log(Date.now() - startTime)
      const d = new Date(Date.now() - startTime);
      const m = String(d.getMinutes()).padStart(2,'0');
      const s = String(d.getSeconds()).padStart(2,'0');
      const ms = String(d.getMilliseconds()).padStart(2,'0');
      timeRecord.innerHTML = `${m}:${s}:${ms}`;
      // timer.innerHTML = "0";
      form.classList.remove("hidden");
      timerArea.classList.add("hidden")
    } else {
      count++;
      setTest();
    }
    
  });

  
  


})