(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var login = {
  $tip: $(".valid-tip"),
  checkUserName: function checkUserName() {
    var value = $("#username").val();
    if (value == '' || value.length == 0) {
      this.$tip.text("请输入手机号");
      return false;
    } else {
      this.$tip.text("");
      return true;
    }
  },
  checkPassword: function checkPassword() {
    var value = $("#password").val();
    if (value == '' || value.length == 0) {
      this.$tip.text("请输入密码");
      return false;
    } else {
      this.$tip.text("");
      return true;
    }
  },
  submit: function submit() {
    var self = this;
    $("#login").click(function (e) {
      e.preventDefault();
      if (self.checkUserName() && self.checkPassword()) {
        //登录成功
        location.href = "user-center.html";
      }
    });
  },
  init: function init() {
    this.submit();
  }
};
login.init();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9idWlsZC9sb2dpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBSSxLQUFLLEdBQUc7RUFDWCxJQUFJLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQztFQUVyQixhQUFhLEVBQUUsU0FBQSxjQUFBLEVBQVc7SUFDekIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRWhDLElBQUksS0FBSyxJQUFJLEVBQUUsSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtNQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7TUFDeEIsT0FBTyxLQUFLO0lBQ2IsQ0FBQyxNQUFNO01BQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO01BQ2xCLE9BQU8sSUFBSTtJQUNaO0VBQ0QsQ0FBQztFQUVELGFBQWEsRUFBRSxTQUFBLGNBQUEsRUFBVztJQUN6QixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFaEMsSUFBSSxLQUFLLElBQUksRUFBRSxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO01BQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztNQUN2QixPQUFPLEtBQUs7SUFDYixDQUFDLE1BQU07TUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7TUFDbEIsT0FBTyxJQUFJO0lBQ1o7RUFDRCxDQUFDO0VBRUQsTUFBTSxFQUFFLFNBQUEsT0FBQSxFQUFXO0lBQ2xCLElBQUksSUFBSSxHQUFHLElBQUk7SUFDZixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVMsQ0FBQyxFQUFFO01BQzdCLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQztNQUNsQixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFO1FBQ2pEO1FBQ0EsUUFBUSxDQUFDLElBQUksR0FBRyxrQkFBa0I7TUFDbkM7SUFDRCxDQUFDLENBQUM7RUFDSCxDQUFDO0VBRUQsSUFBSSxFQUFFLFNBQUEsS0FBQSxFQUFXO0lBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztFQUNkO0FBQ0QsQ0FBQztBQUVELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsInZhciBsb2dpbiA9IHtcblx0JHRpcDogJChcIi52YWxpZC10aXBcIiksXG5cblx0Y2hlY2tVc2VyTmFtZTogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHZhbHVlID0gJChcIiN1c2VybmFtZVwiKS52YWwoKTtcblxuXHRcdGlmICh2YWx1ZSA9PSAnJyB8fCB2YWx1ZS5sZW5ndGggPT0gMCkge1xuXHRcdFx0dGhpcy4kdGlwLnRleHQoXCLor7fovpPlhaXmiYvmnLrlj7dcIik7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuJHRpcC50ZXh0KFwiXCIpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9LFxuXG5cdGNoZWNrUGFzc3dvcmQ6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciB2YWx1ZSA9ICQoXCIjcGFzc3dvcmRcIikudmFsKCk7XG5cblx0XHRpZiAodmFsdWUgPT0gJycgfHwgdmFsdWUubGVuZ3RoID09IDApIHtcblx0XHRcdHRoaXMuJHRpcC50ZXh0KFwi6K+36L6T5YWl5a+G56CBXCIpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLiR0aXAudGV4dChcIlwiKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fSwgXG5cdFxuXHRzdWJtaXQ6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHQkKFwiI2xvZ2luXCIpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGlmIChzZWxmLmNoZWNrVXNlck5hbWUoKSAmJiBzZWxmLmNoZWNrUGFzc3dvcmQoKSkge1xuXHRcdFx0XHQvL+eZu+W9leaIkOWKn1xuXHRcdFx0XHRsb2NhdGlvbi5ocmVmID0gXCJ1c2VyLWNlbnRlci5odG1sXCI7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sXG5cblx0aW5pdDogZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5zdWJtaXQoKTtcblx0fVxufVxuXG5sb2dpbi5pbml0KCk7Il19
