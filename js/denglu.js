function dl() {

	var zh = document.getElementById("yhm").value;
	var mm = document.getElementById("pwd").value;
	if (zh == "gwc" && mm == "123456789") {
		window.location.href = "喜欢我的宝.html"
		window.alert("登录成功！");
	} else {
		if (zh == "" || mm == "") {
			window.alert("用户名或者密码不能为空!")
		} else {
			window.alert("用户名或者密码错误！")
		}

	}
}
