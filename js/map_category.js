function categoryChange(e) {
	var selectLocation_a = ["서울역점", "신림점", "강남점"];
	var selectLocation_b = ["부천점", "의왕점", "고양점", "파주점"];
	var selectLocation_c = ["천안점", "충주점", "청주점"];
	var selectLocation_d = ["강릉점", "원주점", "평창점"];
	var selectLocation_e = ["전주점", "나주점", "여수점"];
	var selectLocation_f = ["경주점", "상주점", "창원점"];
	var selectLocation_g = ["인천점", "광주점","대전점", "부산점"];
	var selectLocation_h = ["세종점", "제주점"];
	var target = document.getElementById("selectLocation");

	if(e.value == "a") var i = selectLocation_a;
	else if(e.value == "b") var i = selectLocation_b;
	else if(e.value == "c") var i = selectLocation_c;
	else if(e.value == "d") var i = selectLocation_d;
	else if(e.value == "e") var i = selectLocation_e;
	else if(e.value == "f") var i = selectLocation_f;
	else if(e.value == "g") var i = selectLocation_g;
	else if(e.value == "h") var i = selectLocation_h;

	target.options.length = 0;

	for (x in i) {
		var opt = document.createElement("option");
		opt.value = i[x];
		opt.innerHTML = i[x];
		target.appendChild(opt);
	}	
}

function categoryChange2(e) {
	var selectLocation_a = ["서울역점", "신림점", "강남점"];
	var selectLocation_b = ["부천점", "의왕점", "고양점", "파주점"];
	var selectLocation_c = ["천안점", "충주점", "청주점"];
	var selectLocation_d = ["강릉점", "원주점", "평창점"];
	var selectLocation_e = ["전주점", "나주점", "여수점"];
	var selectLocation_f = ["경주점", "상주점", "창원점"];
	var selectLocation_g = ["인천점", "광주점","대전점", "부산점"];
	var selectLocation_h = ["세종점", "제주점"];
	var target = document.getElementById("selectLocation2");

	if(e.value == "a") var i = selectLocation_a;
	else if(e.value == "b") var i = selectLocation_b;
	else if(e.value == "c") var i = selectLocation_c;
	else if(e.value == "d") var i = selectLocation_d;
	else if(e.value == "e") var i = selectLocation_e;
	else if(e.value == "f") var i = selectLocation_f;
	else if(e.value == "g") var i = selectLocation_g;
	else if(e.value == "h") var i = selectLocation_h;

	target.options.length = 0;

	for (x in i) {
		var opt = document.createElement("option");
		opt.value = i[x];
		opt.innerHTML = i[x];
		target.appendChild(opt);
	}	
}

function categoryChange3(e) {
	var selectLocation_a = ["서울역점", "신림점", "강남점"];
	var selectLocation_b = ["부천점", "의왕점", "고양점", "파주점"];
	var selectLocation_c = ["천안점", "충주점", "청주점"];
	var selectLocation_d = ["강릉점", "원주점", "평창점"];
	var selectLocation_e = ["전주점", "나주점", "여수점"];
	var selectLocation_f = ["경주점", "상주점", "창원점"];
	var selectLocation_g = ["인천점", "광주점","대전점", "부산점"];
	var selectLocation_h = ["세종점", "제주점"];
	var target = document.getElementById("selectLocation3");

	if(e.value == "a") var i = selectLocation_a;
	else if(e.value == "b") var i = selectLocation_b;
	else if(e.value == "c") var i = selectLocation_c;
	else if(e.value == "d") var i = selectLocation_d;
	else if(e.value == "e") var i = selectLocation_e;
	else if(e.value == "f") var i = selectLocation_f;
	else if(e.value == "g") var i = selectLocation_g;
	else if(e.value == "h") var i = selectLocation_h;

	target.options.length = 0;

	for (x in i) {
		var opt = document.createElement("option");
		opt.value = i[x];
		opt.innerHTML = i[x];
		target.appendChild(opt);
	}	
}