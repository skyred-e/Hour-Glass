const up = document.querySelector(".up"); //表示するセレクター
const middle = document.querySelector(".middle");
const down = document.querySelector(".down");

function displayProgress(state){
  const elapsedTime = Math.floor(state.elapsedTime / 1000);
  const remainingTime = Math.floor(state.remainingTime / 1000);
  up.style.width = `${(1 - state.progress) * 100}%`;
  down.style.width = `${state.progress * 100}%`;
  if(state.isRunning){
    middle.innerHTML = `<p>計測中 ${elapsedTime}秒経過：残り${remainingTime}秒</p>`;
  }else{
    middle.innerHTML = "<p>停止</p>";
  }
}
