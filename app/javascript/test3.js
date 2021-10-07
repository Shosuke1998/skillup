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
  const timerArea = document.getElementById("timer-area")
  const uneTestSet = [
    {q:'body',c:['死体、機関','書籍','物質','科学']},
    {q:'case',c:['真実、事件','問題','机','文房具']},
    {q:'landscape',c:['情勢','公園','写真','飲み物']},
    {q:'screen',c:['遮蔽物','光','炎','メガネ']},
    {q:'slip',c:['うっかりした間違い','タイヤ','ぺん','真実']},
    {q:'produce',c:['取り出す','先行する','叫ぶ','ふりをする']},
    {q:'commit A to B',c:['AをBにゆだねる','AとBを離す','AとBをくっける','AとBを投げる']},
    {q:'contain',c:['感情を抑える','感情を爆発させる','どんな感情かわかろうとする','感情をなくす']},
    {q:'coin',c:['新語を作り出す','新語をきく','新語を当てる','受賞する']},
    {q:'speak',c:['表現を使う','ある表現を嫌う','表現を使わずに伝える','話しかけられる']},
    {q:'somebody',c:['大物','物','実体験','前提']},
    {q:'cost',c:['犠牲','正論','名詞','研究']},
    {q:'fancy',c:['高級な','早い','遅い','敏感な']},
    {q:'deliver',c:['述べる、成し遂げる','ふりをする','先行する','支持する']},
    {q:'wear well',c:['長持ちする','うまくいく','優先する','妊娠する']},
    {q:'betray',c:['感情をうっかり漏らす','叫ぶ','望む','急に走る']},
    {q:'not a grain of',c:['少しの〜もない','全く穀物がない','その代わりに','その上に']},
    {q:'substance',c:['本質','研究','事件','犯罪']},
    {q:'speech',c:['言語','書籍','物質','図書館']},
    {q:'harbor',c:['悪意を心に抱く','打つ','撃つ','怖がる']},
    {q:'mark',c:['特徴付ける','書く','直す','壊す']},
    {q:'classic',c:['古典的な','現代的な','髪の','奇妙な']},
    {q:'late',c:['最近死んだ','最も古い','早い','辛い']},
    {q:'product',c:['結果','研究','事件','犯罪']},
    {q:'entertain',c:['考えや感情を抱く','持ち上げる','爆発させる','先行する']},
    {q:'haunt',c:['不幸な考えがつきまとう','狩る','発散する','壊す']},
    {q:'carry',c:['属性を持っている','ぶつける','歩き回る','計算する']},
    {q:'invent',c:['でっち上げる','過ちを犯す','計算する','本を読む']},
    {q:'shade',c:['ちょっとした違い','動き','学校','犯罪']},
    {q:'trick',c:['コツ','治療','旅行','株式会社']},
    {q:'reserve',c:['遠慮','課題','川の流域','仲間']},
    {q:'alarm',c:['〜を不安にさせる','癒す','攻撃する','公表する']},
    {q:'help',c:['避ける','ける','洗濯物','はり']},
    {q:'compose',c:['落ち着かせる','減少する','晒す','引き起こす']},
    {q:'say',c:['発言権','脅威','結果','冒険']},
    {q:'game',c:['獲物','困難','指標','容量']},
    {q:'start',c:['ハッとすること','報道','消化不良','電子']},
    {q:'leave',c:['許可','機会','到来','赤字']},
    {q:'school',c:['学派','いじめ','悲惨','針']},
    {q:'but',c:['ほんの','かなり多くの','悲惨な','素晴らしい']},
    {q:'height',c:['絶頂','仕事','概要','職業']},
    {q:'enjoy',c:['特権や良いものを持っている','調査する','報道する','いじめる']},
    {q:'head',c:['率いる','頭を叩く','経験する','脅威となる']},
    {q:'platform',c:['綱領','地元のマーケット','板','代謝']},
    {q:'a touch of',c:['少しの','壮大な','かなり多くの','多目的な']},
    {q:'comfort',c:['慰め','海岸','株式会社','連合']},
  ];
  let count = 0;
  let uneIsAnswered;
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

  function uneCheckAnswer(li){
    if(uneIsAnswered){
      console.log(uneIsAnswered)
      return;
    }
    uneIsAnswered = true;
    li.classList.add("selected")
    if(li.textContent === uneTestSet[count].c[0]){
      score++;
      // console.log("a");
    } else{
      // console.log("s");
    }
  }

  
  function countUp() {
    // console.log(Date.now() - uneStartTime)
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
    uneIsAnswered = false;
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
        uneCheckAnswer(li);
    })
    uneChoices.appendChild(li);
  });

  if(count === uneTestSet.length - 1){
    btn.innerHTML = "結果を見る";
  }

  }
  setTest();

  


  btn.addEventListener('click',() => {
    if(uneIsAnswered === false){
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
      timerArea.classList.add("hidden")
    } else {
      count++;
      setTest();
    }
    
  });

  
  


})
