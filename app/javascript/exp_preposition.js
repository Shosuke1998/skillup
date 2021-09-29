window.addEventListener('load', function(){
  const prevPreposition = document.getElementById("prev-preposition")
  const nextPreposition = document.getElementById("next-preposition")
  const insertPrepositionArea = document.getElementById("insert-preposition-area")
  const expPreposition = document.getElementById("exp-preposition")
  const changeBtn = document.getElementById("change-btn")
  const prepositionSet =[
    {p:'on',a:'b'},
    {p:'for',a:'d'},
    {p:'from',a:'f'},
    {p:'up',a:'f'},
    {p:'down',a:'f'},
    {p:'in',a:'f'},
    {p:'on',a:'f'},
    {p:'at',a:'f'},
    {p:'off',a:'f'},
    {p:'into',a:'f'},
    {p:'around',a:'f'},
    {p:'among',a:'f'},
    {p:'between',a:'f'},
    {p:'of',a:'f'},
    {p:'over',a:'f'},
    {p:'above',a:'f'},
    {p:'below',a:'f'},
    {p:'under',a:'f'},
    {p:'through',a:'f'},
    {p:'across',a:'f'},
    {p:'along',a:'f'},
    {p:'near',a:'f'},
    {p:'by',a:'f'},
    {p:'beside',a:'f'},
  ];
  let currentPre = 0;
  if(currentPre === 0){
    prevPreposition.classList.add("hidden")
  }
  insertPrepositionArea.innerHTML = `${prepositionSet[currentPre].p}で思い浮かぶこと`
  expPreposition.innerHTML = prepositionSet[currentPre].a

  nextPreposition.addEventListener('click',() => {
    currentPre++;
    prevPreposition.classList.remove("hidden")
    if(currentPre === prepositionSet.length - 1){
      nextPreposition.classList.add("hidden")
    }
    if(expPreposition.classList.contains("hidden") === false){
      expPreposition.classList.add("hidden")
    }
    insertPrepositionArea.innerHTML = `${prepositionSet[currentPre].p}で思い浮かぶこと`
    expPreposition.innerHTML = prepositionSet[currentPre].a
  })

  prevPreposition.addEventListener('click',() => {
    currentPre--;
    nextPreposition.classList.remove("hidden")
    if(currentPre === 0){
      prevPreposition.classList.add("hidden")
    }
    if(expPreposition.classList.contains("hidden") === false){
      expPreposition.classList.add("hidden")
    }
    insertPrepositionArea.innerHTML = `${prepositionSet[currentPre].p}で思い浮かぶこと`
    expPreposition.innerHTML = prepositionSet[currentPre].a
  })
})