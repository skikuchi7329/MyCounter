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
  let reset_btn = document.getElementById("Btn_reset");
  let count_value1 = 0;
  let count_value2 = 0;
  let count_value3 = 0;
  let count_value4 = 0;
  let count_value5 = 0;

  count_up_btn1.onclick = function() {
    count_value1 += 1;
    count_disp1.innerHTML = count_value1;
  }
  count_up_btn1.onmousedown = function() {
    count_up_btn1.style.backgroundColor = "#00FF00";
  }
  count_up_btn1.onmouseup = function() {
    count_up_btn1.style.backgroundColor = "";
  }

  count_up_btn2.onclick = function() {
    count_value2 += 1;
    count_disp2.innerHTML = count_value2;
  }
  count_up_btn2.onmousedown = function() {
    count_up_btn2.style.backgroundColor = "#00FF00";
  }
  count_up_btn2.onmouseup = function() {
    count_up_btn2.style.backgroundColor = "";
  }

  count_up_btn3.onclick = function() {
    count_value3 += 1;
    count_disp3.innerHTML = count_value3;
  }
  count_up_btn3.onmousedown = function() {
    count_up_btn3.style.backgroundColor = "#00FF00";
  }
  count_up_btn3.onmouseup = function() {
    count_up_btn3.style.backgroundColor = "";
  }

  count_up_btn4.onclick = function() {
    count_value4 += 1;
    count_disp4.innerHTML = count_value4;
  }
  count_up_btn4.onmousedown = function() {
    count_up_btn4.style.backgroundColor = "#00FF00";
  }
  count_up_btn4.onmouseup = function() {
    count_up_btn4.style.backgroundColor = "";
  }

  count_up_btn5.onclick = function() {
    count_value5 += 1;
    count_disp5.innerHTML = count_value5;
  }
  count_up_btn5.onmousedown = function() {
    count_up_btn5.style.backgroundColor = "#00FF00";
  }
  count_up_btn5.onmouseup = function() {
    count_up_btn5.style.backgroundColor = "";
  }



  reset_btn.onclick = function() {
    count_value1 = 0; count_disp1.innerHTML = count_value1;
    count_value2 = 0; count_disp2.innerHTML = count_value2;
    count_value3 = 0; count_disp3.innerHTML = count_value3;
    count_value4 = 0; count_disp4.innerHTML = count_value4;
    count_value5 = 0; count_disp5.innerHTML = count_value5;
  }
  reset_btn.onmousedown = function() {
    reset_btn.style.backgroundColor = "#00FF00";
  }
  reset_btn.onmouseup = function() {
    reset_btn.style.backgroundColor = "";
  }

};


