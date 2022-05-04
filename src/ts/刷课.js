(function() {
  // 定义url map从，map映射对应的页面状态
  var urlMap = {
    '/study/html/content/studying/': 'playing', // 播放中
    '/study/html/content/process/': 'courseList', // 课程目录
  }

  // 获取当前页面url
  var url = window.location.pathname;
  var currentScript = urlMap[url] || 'noScript'
  // 播放中直接的脚本
  function playing() {

  }


  // 当前页面没有可执行的脚本
  function noScript() {
    window.alert('当前页面没有可执行脚本！！！')
  }
  new Function(currentScript)()
})()