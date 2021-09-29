window.addEventListener('load', function(){
  const words = [
    ['勉強する','study'],
    ['走る','run'],
    ['運動する','practice'],
    ['成功する','success'],
    ['失敗する','fail'],
    ['影響する','influence'],
  ];
  const askWord = document.getElementById("ask-word");
  const word = document.getElementById("word");
  const button = document.getElementById("button");
  const wordAnswer = document.getElementById("word-answer");
  const answerModal = document.getElementById("answer-modal");
  const explain = document.getElementById("explain");
  const correctNumberArea = document.getElementById("correct-number-area");
  let wordIndex = 0;
  let correct = 0;
  console.log("a");
  button.addEventListener('click',() => {
    console.log("A")
    let ans = word.value.toLowerCase();
    let message;
    if(ans === words[wordIndex][1]){
      correct++;
      message = '正解'
    } else {
      message = `不正解!「${words[wordIndex][0]}」の英単語は「${words[wordIndex][1]}」です`
      
    }
    if(wordIndex === words.length - 1){
      console.log(correct);
      correctNumberArea.innerHTML = `正解数:${correct} / ${words.length}`
      form.classList.remove("hidden");
    }
    wordAnswer.innerHTML = message;
    answerModal.classList.remove("hidden");
    setTimeout(function() {
      answerModal.classList.add("hidden");
    },1500);
    wordIndex++;
    setWord();
    word.focus();
  })

  function setWord() {
    word.value = "";
    askWord.innerHTML = words[wordIndex][0];
  }
  setWord();
})