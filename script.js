console.log("all ok")
punkt2_2_2()

function punkt2_1() {
	//разница в сравнении
	let d = {key: "value"};
	let e = {key: "value"} == d; //нестрогое сравение
	let a = {key: "value"} === d; //строгое
	console.log(a);
	let b = d;
	let c = b ===d;   //ссылаются на один и тот же объект
	console.log(c);
}

function punkt2_2() {
	//экранирование
	console.log("кино \"avatar\" \n \\n-perevod stroki");
	//функции строк
	let s = " The Quick bRown FOX quickly jumps over The lazy dog.  "
    console.log(s[1] + s[3])
    console.log(s.indexOf("e"))    //первое вхождение
    console.log(s.lastIndexOf("e"))//последнее вхождение
    console.log(s.indexOf("ф"))    //есди не такого символа
    console.log(s.replace("o", "OOO")) //замена
    let mas = s.split(" ");
    console.log(mas);
    console.log("192.168.1.1".split("."))
    console.log(mas.join("-^-"))
    console.log(s.substr(5, 10)) //вырезание 10 симв
    console.log(s.toLowerCase())
    console.log(s.toUpperCase())
    console.log(s.trim()) //обрезает пробельные символы в начале и в конце

}

function punkt2_2_2(){
   //матем функции
   console.log(Math.pow(2, 4)) //возведение в степень
   console.log(Math.sqrt(9))
   console.log(Math.ceil(1.25))
   console.log(Math.floor(1.25))
   console.log(Math.round(1.25))
   console.log(Math.max(1,2,3,4,5,6))
   console.log(Math.min(1,2,3,4))
   console.log(Math.sign(0))
   console.log(Math.sign(34))
}