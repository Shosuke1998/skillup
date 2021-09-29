window.addEventListener('load', function(){
  const testNum = document.getElementById("testNum");
  const uneChoices = document.getElementById("une-choices");
  const uneQuestion = document.getElementById("une-question");
  const btn = document.getElementById("btn");
  const form = document.getElementById("form");
  const scoreArea = document.getElementById("score-area");
  const scoreInput = document.getElementById("score-input")
  const preScore = document.getElementById("pre-score")
  const scoreBtn = document.getElementsByClassName("score-btn");
  const timer = document.getElementById("timer");
  const timeRecord = document.getElementById("time-record");
  const uneTestSet = [
    {q:'body',c:['死体、機関','主産物','製品','不良品']},
    {q:'case',c:['真実、事件','自身のある','自覚のある','無意識な']},
    {q:'landscape',c:['情勢','たくさんの','~できない','神経質な']},
    // {q:'screen',c:['遮蔽物','営利の','問題な','軽率な']},
    // {q:'slip',c:['うっかりした間違い','走る','転ぶ','倒れる']},
    // {q:'produce',c:['取り出す','実体験','研究','成果']},
    // {q:'commit A to B',c:['AをBにゆだねる','政治家','秘書','大臣']},
    // {q:'contain',c:['感情を抑える','市の','役所の','町の']},
    // {q:'coin',c:['新語を作り出す','悍しい','しんどい','頑張っている']},
    // {q:'speak',c:['表現を使う','接尾辞','真ん中の','名詞']},
    // {q:'somebody',c:['大物','誕生','診察','前提']},
    // {q:'cost',c:['犠牲','考察','事例','正論']},
    // {q:'fancy',c:['高級な','過ちを犯す','叩く','触る']},
    // {q:'deliver',c:['述べる、成し遂げる','ふりをする','先行する','支持する']},
    // {q:'wear well',c:['長持ちする','県の','以前の','営利の']},
    // {q:'betray',c:['感情をうっかり漏らす','普及している','望ましい','妊娠した']},
    // {q:'not a grain of',c:['少しの〜もない','ふりをする','前に手を置く','交代する']},
    // {q:'substance',c:['本質','研究','事件','犯罪']},
    // {q:'speech',c:['言語','研究','事件','犯罪']},
    // {q:'harbor',c:['悪意を心に抱く','研究','事件','犯罪']},
    // {q:'mark',c:['特徴付ける','研究','事件','犯罪']},
    // {q:'classic',c:['古典的な','研究','事件','犯罪']},
    // {q:'late',c:['最近死んだ','研究','事件','犯罪']},
    // {q:'product',c:['結果','研究','事件','犯罪']},
    // {q:'entertain',c:['考えや感情を抱く','研究','事件','犯罪']},
    // {q:'haunt',c:['不幸な考えがつきまとう','研究','事件','犯罪']},
    // {q:'carry',c:['属性を持っている','研究','事件','犯罪']},
    // {q:'invent',c:['でっち上げる','研究','事件','犯罪']},
    // {q:'shade',c:['ちょっとした違い','研究','事件','犯罪']},
    // {q:'trick',c:['コツ','研究','事件','犯罪']},
    // {q:'reserve',c:['遠慮','研究','事件','犯罪']},
    // {q:'alarm',c:['〜を不安にさせる','研究','事件','犯罪']},
    // {q:'help',c:['避ける','研究','事件','犯罪']},
    // {q:'compose',c:['落ち着かせる','研究','事件','犯罪']},
    // {q:'do',c:['Sで結構だ','研究','事件','犯罪']},
    // {q:'say',c:['発言権','研究','事件','犯罪']},
    // {q:'game',c:['獲物','研究','事件','犯罪']},
    // {q:'start',c:['ハッとすること','研究','事件','犯罪']},
    // {q:'leave',c:['許可','研究','事件','犯罪']},
    // {q:'school',c:['学派','研究','事件','犯罪']},
    // {q:'but',c:['ほんの','研究','事件','犯罪']},
    // {q:'height',c:['絶頂','研究','事件','犯罪']},
    // {q:'enjoy',c:['特権や良いものを持っている','研究','事件','犯罪']},
    // {q:'head',c:['率いる','研究','事件','犯罪']},
    // {q:'platform',c:['綱領','研究','事件','犯罪']},
    // {q:'a touch of',c:['少しの','研究','事件','犯罪']},
    // {q:'comfort',c:['慰め','研究','事件','犯罪']},
  ];
  let count = 0;
  let isAnswered;
  let score = 0;
  let uneStartTime;
  let uneTimeoutId;
  uneStartTime = Date.now();

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
    if(li.textContent === uneTestSet[count].c[0]){
      score++;
      // console.log("a");
    } else{
      // console.log("s");
    }
  }

  
  function countUp() {
    console.log(Date.now() - uneStartTime)
    const d = new Date(Date.now() - uneStartTime);
    const minutes = String(d.getMinutes()).padStart(2,'0');
    const seconds = String(d.getSeconds()).padStart(2,'0');
    const milliseconds = String(d.getMilliseconds()).padStart(2,'0');
    timer.innerHTML = `${minutes}:${seconds}:${milliseconds}`;
    uneTimeoutId = setTimeout(() => {
      countUp();
    },10);
  }
  countUp();
    
  
  
  
  
  function setTest(){
    isAnswered = false;
    testNum.innerHTML = count + 1;
    uneQuestion.innerHTML = uneTestSet[count].q;
    while(uneChoices.firstChild){
      uneChoices.removeChild(uneChoices.firstChild)
    }
    const shuffledChoices = shuffle([...uneTestSet[count].c])
    shuffledChoices.forEach((choice) => {
      const li = document.createElement("li");
      li.innerHTML = choice
      li.classList.add("choice");
      li.addEventListener('click',() => {
        li.classList.add("selected");
      checkAnswer(li);
    })
    uneChoices.appendChild(li);
  });

  if(count === uneTestSet.length - 1){
    btn.innerHTML = "結果を見る";
  }

  }
  setTest();

  


  btn.addEventListener('click',() => {
    if(isAnswered === false){
      return
    }
    if(count === uneTestSet.length - 1){
      scoreArea.innerHTML = `Score:${score} / ${uneTestSet.length}`
      clearTimeout(uneTimeoutId)
      console.log(uneTimeoutId)
      console.log(Date.now() - uneStartTime)
      const d = new Date(Date.now() - uneStartTime);
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
