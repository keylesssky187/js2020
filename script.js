console.log("all ok")
punkt2_1()

function punkt2_1() {
	//разница в сравнении
	let d = {key: "value"};
	let e = {key: "value"} == d; //не строгое сравение
	let a = {key: "value"} === d; //строгое
	console.log(a);
	let b = d;
	let c = b ===d;   //ссылаются на один и тот же объект
	console.log(c);
}