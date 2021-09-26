window.addEventListener('load', function(){
const prepositions = [
  ['目的に向かって進み、最終的に到達する','to'],
  ['目的に向かって進んではいるが、到着していない','for'],
  ['目的を起点として離れていく','from'],
  ['「上の方に向かっている」または「起点となるポイントより上の状態」','up'],
  ['「下の方に下がっている」「起点となるポイントよりも下の状態」','down'],
  ['空間的な広がりのある環境の中にいる','in'],
  ['平面的な部分に接触している','on'],
  ['ある一点','at'],
  ['もともとあった場所から離れる','off'],
  ['対象物がある空間のある一点に入る','into'],
  ['何かを取り囲んでいる状態','around'],
  ['何かに取り囲まれている状態','among'],
  ['2つのものに挟まれている状態','between'],
  ['あるものの一部に属している','of'],
  ['対象を乗り越えて反対側にたどり着く','over'],
  ['基準よりも高いところにある','above'],
  ['基準よりも低いところにある','below'],
  ['あるものの下にある','under'],
  ['空間や時間を通り抜ける','through'],
  ['平面を横切る','across'],
  ['細長いものに平行して沿っている','along'],
  ['対象とそう遠くない近い位置にある','near'],
  ['対象との間に差がある','by'],
  ['対象のかたわらに並んでいる','beside'],
];
const askPreposition = document.getElementById("ask-preposition")
const preposition = document.getElementById("preposition")
const prepositionButton = document.getElementById("preposition-button")
const prepositionAnswer = document.getElementById("preposition-answer")
const prepositionAnswerModal = document.getElementById("preposition-answer-modal")
const correctPrepositionArea = document.getElementById("correct-preposition-area")
let prepositionIndex = 0;
let correctPreposition = 0;

prepositionButton.addEventListener('click',() => {
  console.log("A")
  let prepositionAns = preposition.value.toLowerCase();
  let pre_message;
  if(prepositionAns === prepositions[prepositionIndex][1]){
    correctPreposition++;
    pre_message = '正解'
  } else {
    pre_message = `不正解!「${prepositions[prepositionIndex][0]}」の英単語は「${prepositions[prepositionIndex][1]}」です`
    
  }
  if(prepositionIndex === prepositions.length - 1){
    console.log(correctPreposition);
    correctPrepositionArea.innerHTML = `正解数:${correctPreposition} / ${prepositions.length}`
    form.classList.remove("hidden");
  }
  prepositionAnswer.innerHTML = pre_message;
  prepositionAnswerModal.classList.remove("hidden");
  setTimeout(function() {
    prepositionAnswerModal.classList.add("hidden");
  },4000);
  prepositionIndex++;
  setPreposition();
  preposition.focus();
})

function setPreposition() {
  preposition.value = "";
  askPreposition.innerHTML = prepositions[prepositionIndex][0];
}
setPreposition();
})