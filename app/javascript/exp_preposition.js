window.addEventListener('load', function(){
  const prevPreposition = document.getElementById("prev-preposition")
  const nextPreposition = document.getElementById("next-preposition")
  const insertPrepositionArea = document.getElementById("insert-preposition-area")
  const expPreposition = document.getElementById("exp-preposition")
  const changeBtn = document.getElementById("change-btn")
  const prepositionSet =[
    {p:'on',a:'b'},
    {p:'c',a:'d'},
    {p:'e',a:'f'},
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
    insertPrepositionArea.innerHTML = prepositionSet[currentPre].p
    expPreposition.innerHTML = prepositionSet[currentPre].a
  })
})