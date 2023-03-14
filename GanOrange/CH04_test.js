function test(id) {
	return document.getElementById(id);
}
window.onload = function () {
	//获取所有div
	var div_ls = document.getElementsByTagName('div')
	//定义一个数组
	var ones = [1, 2, 3, 4];
	//数组下标
	var count = 0;
	for (var i = 0; i < div_ls.length; i++) {
		// 遍历所有的div并根据id做判断
		if (div_ls[i].getAttribute('id') == 'one') {
			// 对满足条件的标签设置属性即可
			ones[count] = div_ls[i];
			count++;
		}
	}
	ones[1].addEventListener('mouseover', function () {
		test('top').style.background = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(img/bg-homelist-7.jpg)";
	})
	ones[1].addEventListener('mouseout', function () {
		test('top').style.background = "url(img/bg-homelist-7.jpg)";
	})
	ones[2].addEventListener('mouseover', function () {
		test('top').style.background = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(img/bg-homelist-7.jpg)";
	})
	ones[2].addEventListener('mouseout', function () {
		test('top').style.background = "url(img/bg-homelist-7.jpg)";
	})
	ones[3].addEventListener('mouseover', function () {
		test('top').style.background = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(img/bg-homelist-7.jpg)";
	})
	ones[3].addEventListener('mouseout', function () {
		test('top').style.background = "url(img/bg-homelist-7.jpg)";
	})
}
