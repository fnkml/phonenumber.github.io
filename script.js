// JavaScript Document
document.addEventListener("DOMContentLoaded", () => {
  const phoneNumberDisplay = document.getElementById("phone-number-display");
  const enterButton = document.getElementById("keypad-enter");
  let phoneNumber = "";

  // 数字キーのクリックイベントを設定
  for (let i = 0; i <= 9; i++) {
    const key = document.getElementById(`keypad-${i}`);
    key.addEventListener("click", () => {
      if (phoneNumber.length < 11) {
        phoneNumber += i;
        updateDisplay();
      }
    });
  }

  // Deleteキーのクリックイベントを設定
  document.getElementById("keypad-delete").addEventListener("click", () => {
    if (phoneNumber.length > 0) {
      phoneNumber = phoneNumber.slice(0, -1);
      updateDisplay();
    }
  });

  // 入力した番号を表示する関数
  function updateDisplay() {
  const phoneNumberDisplay = document.getElementById("phone-number-display");
  phoneNumberDisplay.innerHTML = ""; // 既存の内容をクリア
  for (const digit of phoneNumber) {
    const span = document.createElement("span");
    span.textContent = digit;
    phoneNumberDisplay.appendChild(span);
  }
  validatePhoneNumber();
}

  // 電話番号が正しいかを検証し、Enterボタンの状態を更新
  function validatePhoneNumber() {
    const isValidPhoneNumber =
      (phoneNumber.length === 11 && phoneNumber.startsWith("0")) ||
      (phoneNumber.length === 10 && phoneNumber.startsWith("0"));

    if (isValidPhoneNumber) {
      enterButton.removeAttribute("disabled");
    } else {
      enterButton.setAttribute("disabled", "true");
    }
  }
});
