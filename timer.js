    const startButton = document.querySelector("#root"); //操作ボタン
    const duration = 30000; //計測する時間

    let intervalID = null;

    function doCount() {
      if (intervalID !== null) {
        return;
      }

      const startTime = Date.now(); //開始時の時間

      intervalID = setInterval(() =>{
        const now = Date.now();
        const elapsedTime = now - startTime;
        const progress = Math.min(1, elapsedTime / duration);
        const remainingTime = Math.max(0, duration -elapsedTime);
        let isRunning = true;

        if(progress >= 1){
          clearInterval(intervalID);
          intervalID = null;
          isRunning = false;
        }
        const state = {
          progress,
          isRunning,
          elapsedTime,
          remainingTime
        }

        displayProgress(state);
      },100);
    }

    startButton.addEventListener("click", doCount);