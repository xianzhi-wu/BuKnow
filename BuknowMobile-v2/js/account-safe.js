/*帐号安全*/
var pregMobile = /^(1(([3578][0-9])|(47)))\d{8}$/;  //读取php配置的正则
var pregEmail = /^[a-z|A-Z|0-9]+([\.|\-|_][a-z|A-Z|0-9]+)*@[a-z|A-Z|0-9]+([\.|\-][a-z|A-Z|0-9]+)*(\.[a-z|A-Z]+)+$/i;  //读取php配置的正则
var account = $("#account").text();

if(pregMobile.test(account) == true){
	var str1 = account.substring(0, 3), str2 = account.substring(7, 11);
	str = str1 + "****" + str2;
	$("#account").text(str);
} else if(pregEmail.test(account) == true) {
	var len = account.lastIndexOf("@");
	var str1 = account.substring(0, len), str2 = account.substring(len);
	var temp = "";
	for (var i = 0; i < (len - 2); i++) {
		temp += "*";
	}
	str = str1.replace(/(\w)[\s\S]*(\w)/g, "$1" + temp + "$2") + str2;
	$("#account").text(str);
}