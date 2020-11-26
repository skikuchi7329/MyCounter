window.onload = function() {
  let count_disp1 = document.getElementById("Disp_count1");
  let count_disp2 = document.getElementById("Disp_count2");
  let count_disp3 = document.getElementById("Disp_count3");
  let count_disp4 = document.getElementById("Disp_count4");
  let count_disp5 = document.getElementById("Disp_count5");
  let count_up_btn1 = document.getElementById("Btn_countUp1");
  let count_up_btn2 = document.getElementById("Btn_countUp2");
  let count_up_btn3 = document.getElementById("Btn_countUp3");
  let count_up_btn4 = document.getElementById("Btn_countUp4");
  let count_up_btn5 = document.getElementById("Btn_countUp5");
  let count_value = 0;

  for(let i = 1; i <= 5; i++) {
  count_up_btn.onclick = function() {
    count_value += 1;
    count_disp.innerHTML = count_value;
  }
  count_up_btn.onmousedown = function() {
    count_up_btn.style.backgroundColor = "#00FF00";
  }
  count_up_btn.onmouseup = function() {
    count_up_btn.style.backgroundColor = "";
  }
};

  let reset_btn = document.getElementById("Btn_reset");

  reset_btn.onclick = function() {
    count_value = 0; count_disp.innerHTML = count_value;
  }
  reset_btn.onmousedown = function() {
    reset_btn.style.backgroundColor = "#00FF00";
  }
  reset_btn.onmouseup = function() {
    reset_btn.style.backgroundColor = "";
  }

};


