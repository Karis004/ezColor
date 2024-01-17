chrome.storage.sync.get(['username', 'colorList'], function (items) {

  let username = items.username;
  let colerSet = "";
  
  var str = items.colorList.join(",");
  colerSet = `background: linear-gradient(135deg, ${str});`;

  if (username == "lyzDef") {
    colerSet = "background: linear-gradient(135deg, #ff9a8b, #ffce78, #ffe56b, #9dff7a, #7adfff, #d284ff);";
    username = "lyz";
  } else if (username == "dbdDef") {
    colerSet = "background: linear-gradient(135deg, #00a3ff, #00c6ff, #00e8ff, #00fdff, #00fffb);";
    username = "dbd";
  } else if (username == "egg"){
    colerSet = "background-image: url('https://i.boatonland.com/HKU/post/T486fHEHhRPXbp66ywS4RkhTyD8iGzwS.png'); background-size: cover;";
    username = "lyz";
  } else if (username == "cccDef"){
    colerSet = "background: linear-gradient(135deg, #ed76b0, #e999d0, #4d82c5, #1b458c);";
    username = "ccc";
  }


  // 创建并添加 CSS 样式
  var style = document.createElement('style');
  style.textContent = `.${username}Color { ${colerSet} text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);font-weight: bold;`;
  document.head.appendChild(style);

  function lyzColorFunc(mutations) {
    var divElements = document.querySelectorAll('div.accent-orange-gradient');
    for (var i = 0; i < divElements.length; i++) {
      if (divElements[i].textContent.includes(username)) {
        // 将类名修改为 "lyzColor"
        divElements[i].className = `${username}Color`;
      }
    }
  }

  lyzColorFunc();


  // 目标元素的选择器
  var targetSelector = 'body';

  // 创建 MutationObserver 实例
  var observer = new MutationObserver(lyzColorFunc);

  // 配置 MutationObserver
  var observerConfig = {
    childList: true, // 监测子元素的添加或删除
    subtree: true // 监测所有后代元素的更改
  };

  // 选择目标元素
  var targetElement = document.querySelector(targetSelector);

  // 开始监测 HTML 改动
  observer.observe(targetElement, observerConfig);


});

