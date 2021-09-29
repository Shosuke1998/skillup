window.addEventListener('load', function(){
  const words = [
    ['〜するために（3語）','in order to'],
    ['言い換えれば、すなわち（3語）','in other words'],
    ['言い換えると、いい改める（5語）','To put it another way'],
    ['ということは、すなわち（4語）','That is to say'],
    ['そのためにも（3語）','To that end'],
    ['しかしながら（1語）','However'],
    ['その一方で（4語）','On the other hand'],
    ['そう入っても、かといって（3語）','Having said that'],
    ['対照的に（2語）','By contrast'],
    ['したがって（2語）','That said'],
    ['それにもかかわらず（1語）','Yet'],
    ['その上、さらに（1語）','Moreover'],
    ['なお、その上、さらに（1語）','Furthermore'],
    ['同様に（1語）（Lから）','Likewise'],
    ['同様に（1語）（Sから）','Similarly'],
    ['〜と同様に（3語）','As well as'],
    ['考慮において、...を心に置いて（3語）','with in mind'],
    ['...を考慮して（3語）','in view of'],
    ['結論として、要するに（3語）','In conclusion'],
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
    let ans = word.value
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