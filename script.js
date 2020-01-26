console.log("all ok")
punkt2_3()

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

function punkt2_2_3() {
	let array = [1,2,3,4,5]
	let b = array.map(function(x){
		return 2 * x;
	})
	console.log(b)

	let copy = [];
	array.forEach(function(x){
		copy.unshift(x);
	});
	console.log(copy)

	let c = array.filter(function(x){
		return x% 2 == 1;
	})
	console.log(c)
}

function punkt2_2_4(){
	//сортировка
	let a = [1,3,4555,5565,56,56,5,]
	let b = a.sort();
	console.log(b)
	let c = a.sort(key)
	console.log(c)
}


function key(fst, snd){
	if (fst < snd){
		return -1;
    }else{
    	if (fst === snd)
    		return 0
    	else
    		return 1

    }
}

function punkt2_3(){
	 let a = 3, b = 5;
	 let c;
	 if (a > b){
	 	c = a
	 }else{
	 	c = b
	 }	
	 console.log(c)
	 c = a > b ? a : b;
	 console.log(c)
}