window.addEventListener('load',function(){
  const prev = document.getElementById("prev")
  const next = document.getElementById("next")
  const problem = document.getElementById("problem-text");
  const answer = document.getElementById("answer");
  const answerBtn = document.getElementById("answer-btn")
  const quizSet =[
    {p:'byproduct',a:'by:副次的な,pro:前に→名:副産物'},
    {p:'imprudent',a:'im:否定,pro:前に,vide:見る→前を見据えないような→形:軽率な'},
    {p:'multipurpose',a:'multi:多くの,pur:前に,pose:おく→形:多目的の'},
    {p:'nonprofit',a:'non:否定,pro:前に,pose:置く,→利益を作り出さないような→形:非営利の'},
    {p:'precede',a:'pre:前に,cede:進む→動:先行する,優先する'},
    {p:'precedent',a:'pre:前に,-ent:人、物→以前に進んだものがある→名:前例'},
    {p:'prefect',a:'pre:前に,fect:する→前に立って行動すること→名:知事'},
    {p:'prefectural',a:'pre:前に,fect:する,-al:のような→知事の管轄のあるような→形:県の'},
    {p:'preferable',a:'pre:前に,fer:運ぶ,-able:できる→順序を前にできるような→形:好ましい、望ましい'},
    {p:'prefix',a:'pre:前に,fix:固定する→名:接頭辞'},
    {p:'pregnancy',a:'pre:前に,-ant:人、もの→前の状態であるような→名:妊娠'},
    {p:'premise',a:'pre:前の,mise:送る→名:前提'},
    {p:'pretend',a:'pre:前の,tend:伸ばす→動:ふりをする'},
    {p:'prevail',a:'pre:前の,val:強い→前のどんどん出る→動:普及する'},
    {p:'prevalent',a:'pre:前の,val:強い,-ent:のような→前にどんどん出るような→形:普及している、一般的な'},
    {p:'previous',a:'pre:前の,via:行く,-ous:のような→前の通ったような→形:以前の、前に'},
    {p:'proceed',a:'pre:前の,ceed:進む→動:前進する、進行する'},
    {p:'process',a:'pro:前の,cess:進む→前へ進むための段取り→名:手順、プロセス'},

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
      answerBtn.innerHTML = "答えを見る"
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
      answerBtn.innerHTML = "答えを見る"
    }
    problem.innerHTML = quizSet[currentNum].p
    answer.innerHTML = quizSet[currentNum].a
  })

})