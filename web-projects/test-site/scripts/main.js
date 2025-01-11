// 设置页面标题
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

// 图片点击切换功能
const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

// 设置用户名功能
let myButton = document.querySelector("button");
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    // 如果用户点击取消或输入为空，则重新提示
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hello, ${myName}`;
  }
}

// 检查 localStorage 中是否有存储的用户名
if (!localStorage.getItem("name")) {
  setUserName(); // 如果没有，则提示用户输入
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Hello, ${storedName}`; // 如果有，则显示存储的用户名
}

// 为按钮添加点击事件监听器
myButton.onclick = setUserName; // 可以直接传递函数名，无需使用匿名函数