const inputText = document.querySelector(
  ".html-entities-converter .input-text"
);
const convertBtn = document.querySelector(
  ".html-entities-converter .convert-btn"
);
const result = document.querySelector(".html-entities-converter .result");
const copyCodeBtn = document.querySelector(
  ".html-entities-converter .copy-code-btn"
);
const notification = document.querySelector(
  ".html-entities-converter .notification"
);

const characters = {
  "<": "&lt;",
  ">": "&gt;",
  "&": "&amp;",
  '"': "&quot;",
};

const convertEntities = (str) => {
  return str.replace(/[<>&"]/g, function (c) {
    return characters[c];
  });
};

convertBtn.addEventListener("click", () => {
  let input = inputText.value;
  let resultText = convertEntities(input);
  result.innerText = resultText;
});

const displayNotification = () => {
  notification.classList.add("active");
  setTimeout(() => {
    notification.classList.remove("active");
  }, 3000);
};

copyCodeBtn.addEventListener("click", () => {
  let toCopy = result.innerText;
  navigator.clipboard.writeText(toCopy).then(() => {
    displayNotification();
  });
});
