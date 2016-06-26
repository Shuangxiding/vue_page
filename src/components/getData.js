// let data = {
// 	avatar: '',  头像
// 	name: '',  用户名
// 	context: '', 评论内容
// }
let dataArr = [];

function randomStr (len) {
	return Math.random().toString(36).substr(len);
}

function initData () {
	for (var i = 0; i<45 ; ++i) {
		let _avator = "./resources/" + i%7 + ".jpg";
		let _name = randomStr(20);
		let _context = randomStr(2);
		dataArr.push({
			avatar: _avator,
			name: _name,
			context: _context
		});
	}
}

if (!dataArr.length) {
	initData();
}

export function getCommentData (url = '', params = null, isSync = true, curPageIndex = 1, eachPageSize = 7) {
	/* ajax */
	let st = (curPageIndex - 1) * eachPageSize;
	let end = st + eachPageSize;

	return dataArr.slice(st, end);
}

export function getTotalCommentCount(url = '', params = null, isSync = true) {
	/* ajax */
	return dataArr.length;
}

export function getTotalPageCount(url = '', params = null, isSync = true, eachPageSize = 7) {
	/* ajax */
	return Math.floor((dataArr.length + eachPageSize -1 ) / eachPageSize);
}