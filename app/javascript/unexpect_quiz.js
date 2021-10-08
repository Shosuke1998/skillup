
  window.addEventListener('load',function(){
    const prev = document.getElementById("prev")
    const next = document.getElementById("next")
    const uneProblem = document.getElementById("unexpected-problem-text");
    const uneAnswer = document.getElementById("unexpected-answer");
    const answerBtn = document.getElementById("answer-btn")
    const uneQuizSet =[
      {p:'body',a:'死体、機関'},
      {p:'case',a:'真実、事件'},
      {p:'landscape',a:'情勢'},
      {p:'screen',a:'遮蔽物'},
      {p:'slip',a:'うっかりした間違い'},
      {p:'produce',a:'取り出す'},
      {p:'commit A to B',a:'AをBにゆだねる'},
      {p:'contain',a:'感情を抑える'},
      {p:'coin',a:'新語を作り出す'},
      {p:'speak',a:'表現を使う'},
      {p:'somebody',a:'大物'},
      {p:'cost',a:'犠牲'},
      {p:'fancy',a:'高級な'},
      {p:'delivery',a:'述べる、成し遂げる'},
      {p:'wear well',a:'長持ちする'},
      {p:'betray',a:'感情をうっかり漏らす'},
      {p:'not a grain of',a:'少しの〜もない'},
      {p:'substance',a:'本質'},
      {p:'speech',a:'言語'},
      {p:'harbor',a:'悪意を心に抱く'},
      {p:'mark',a:'特徴付ける'},
      {p:'classic',a:'古典的な'},
      {p:'late',a:'最近死んだ'},
      {p:'product',a:'結果'},
      {p:'entertain',a:'考えや感情を抱く'},
      {p:'haunt',a:'不幸な考えがつきまとう'},
      {p:'carry',a:'属性を持っている'},
      {p:'invent',a:'でっち上げる'},
      {p:'shade',a:'ちょっとした違い'},
      {p:'trick',a:'コツ'},
      {p:'reserve',a:'遠慮'},
      {p:'alarm',a:'〜を不安にさせる'},
      {p:'help',a:'避ける'},
      {p:'compose',a:'落ち着かせる'},
      {p:'say',a:'発言権'},
      {p:'game',a:'獲物'},
      {p:'start',a:'ハッとすること'},
      {p:'leave',a:'許可'},
      {p:'school',a:'学派'},
      {p:'but',a:'ほんの'},
      {p:'height',a:'絶頂'},
      {p:'enjoy',a:'特権や良い物を持っている'},
      {p:'head',a:'率いる'},
      {p:'platform',a:'綱領'},
      {p:'a touch of',a:'少しの'},
      {p:'comfort',a:'慰め'},
  
    ]
    let uneCurrentNum = 0;
    if(uneCurrentNum === 0){
      prev.classList.add("hidden")
    }
    uneProblem.innerHTML = uneQuizSet[uneCurrentNum].p
    uneAnswer.innerHTML = uneQuizSet[uneCurrentNum].a
    
    next.addEventListener('click',() => {
      uneCurrentNum++;
      prev.classList.remove("hidden")
      if(uneCurrentNum === uneQuizSet.length - 1){
        next.classList.add("hidden")
      }
      if(uneAnswer.classList.contains("hidden") === false){
        uneAnswer.classList.add("hidden")
        answerBtn.innerHTML = "答えを見る"
      }
      uneProblem.innerHTML = uneQuizSet[uneCurrentNum].p
      uneAnswer.innerHTML = uneQuizSet[uneCurrentNum].a
    })
  
    prev.addEventListener('click',() => {
      uneCurrentNum--;
      next.classList.remove("hidden")
      if(uneCurrentNum === 0){
        prev.classList.add("hidden")
      }
      if(uneAnswer.classList.contains("hidden") === false){
        uneAnswer.classList.add("hidden")
        answerBtn.innerHTML = "答えを見る"
      }
      uneProblem.innerHTML = uneQuizSet[uneCurrentNum].p
      uneAnswer.innerHTML = uneQuizSet[uneCurrentNum].a
    })
  
  })
