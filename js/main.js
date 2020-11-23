window.onload = function() {
  let count_disp = document.getElementById("Disp_count");
  let count_up_btn = document.getElementById("Btn_countUp");
  let reset_btn = document.getElementById("Btn_reset");
  let count_value = 0;

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
