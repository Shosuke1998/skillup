window.addEventListener('load', function(){
  const testNum = document.getElementById("testNum");
  const choices = document.getElementById("choices");
  const question = document.getElementById("question");
  const btn = document.getElementById("btn");
  const form = document.getElementById("form");
  const scoreArea = document.getElementById("score-area");
  const scoreInput = document.getElementById("score-input")
  const testSet = [
    {q:'byproduct',c:['副産物','b','c','d']},
    {q:'imprudent',c:['軽率な','bf','g','dh']},
    {q:'multipurpose',c:['多目的な','bs','cs','ds']},
    {q:'nonprofit',c:['非営利の','ssb','ssc','dss']},
    {q:'precede',c:['先行する,優先する','ssb','ssc','dss']},
    {q:'precedent',c:['前例','ssb','ssc','dss']},
    {q:'prefect',c:['知事','ssb','ssc','dss']},
    {q:'prefectural',c:['県の','ssb','ssc','dss']},
    {q:'preferable',c:['好ましい、望ましい','ssb','ssc','dss']},
    {q:'prefix',c:['接頭辞','ssb','ssc','dss']},
    {q:'pregnancy',c:['妊娠','ssb','ssc','dss']},
    {q:'premise',c:['前提','ssb','ssc','dss']},
    {q:'pretend',c:['ふりをする','ssb','ssc','dss']},
    {q:'prevail',c:['普及する','ssb','ssc','dss']},
    {q:'prevalent',c:['普及している、一般的な','ssb','ssc','dss']},
    {q:'previous',c:['以前の、前に','ssb','ssc','dss']},
    {q:'proceed',c:['前進する、進行する','ssb','ssc','dss']},
    {q:'process',c:['手順、プロセス','ssb','ssc','dss']},
  ];
  let count = 0;
  let isAnswered;
  let score = 0;

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
    console.log(testSet[count].c)
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
      // scoreInput.innerHTML = score;
      form.classList.remove("hidden");
    } else {
      count++;
      setTest();
    }
    
  });

})