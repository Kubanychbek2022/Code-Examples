window.addEventListener("load", loadCodes);

function loadCodes () {
  const xhr = new XMLHttpRequest;
  xhr.open("GET", "codes.txt", true);

  xhr.onload = function () {
    if (this.status === 200) {
     const data = this.responseText;
      const pre = document.querySelector(".pre");
      const codes = document.createElement("code");
      codes.classList.add("code");
      codes.innerHTML = `${data};`
      pre.appendChild(codes);
    }
  }
  xhr.send();
};

setTimeout(() => {
  document.querySelector(".window").remove();
}, 3000);