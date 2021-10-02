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
    {q:'customer',c:['client','book','score','science']},
    {q:'answer',c:['reply','material','space','war']},
    {q:'chance',c:['opportunity','organization','city','town']},
    {q:'exhibition',c:['fair','rain','fan','children']},
    {q:'odor',c:['smell','preposition','matter','month']},
    {q:'belongings',c:['possessions','order','room','math']},
    {q:'convention',c:['congress','case','grade','train']},
    {q:'invoice',c:['bill','voice','retail','cause']},
    {q:'reservation',c:['booking','string','integer','text']},
    {q:'evidence',c:['proof','interest','music','demand']},
    {q:'position',c:['post','season','birthday','sunset']},
    {q:'progress',c:['advance','road','sea','programming']},
    {q:'draft',c:['manuscript','looks','creditor','科学']},
    {q:'help',c:['aid','future','position','everybody']},
    {q:'cuisine',c:['cooking','people','mind','life']},
    {q:'excerpt',c:['extract','consumption','part','income']},
    {q:'promptness',c:['speed','duty','employment','technology']},
    {q:'effort',c:['endeavor','mean','marriage','understanding']},
    {q:'achievement',c:['success','society','misunderstanding','mislead']},
    {q:'correspondence',c:['communication','substance','violence','reputation']},
    {q:'disorder',c:['confusion','importance','impotence','regard']},
    {q:'hallway',c:['corridor','environment','spirit','realization']},
    {q:'pastime',c:['hobby','difference','indifference','example']},
    {q:'area',c:['region','food','identity','clothing']},
    {q:'incentive',c:['motivation','facts','country','discussion']},
    {q:'constrain',c:['restriction','desire','idea','opportunity']},
    {q:'appraisal',c:['assessment','disease','nation','document']},
    {q:'intermission',c:['pause','element','proof','influence']},
    {q:'accuracy',c:['precision','quality','area','computer']},
    {q:'reward',c:['remuneration','telephone','effect','invention']},
    {q:'authorization',c:['permission','human','machine','chemical']},
    {q:'exemption',c:['reduction','message','information','instance']},
    {q:'fitness',c:['health','wisdom','network','advantage']},
    {q:'revelation',c:['disclosure','disadvantage','discord','disability']},
    {q:'liability',c:['responsibility','disability','inability','capability']},
    {q:'takeover',c:['buyout','subject','system','life']},
    {q:'acclaim',c:['praise','knowledge','person','selection']},
    {q:'enterprise',c:['company','result','definition','development']},
    {q:'merchandise',c:['goods','country','technology','city']},
    {q:'brochure',c:['pamphlet','style','past','attitude']},
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