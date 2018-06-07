function fileChecker(name) {
	var temp_pre = "";
	var temp_post = "";
	for (int i = 0; i < 4; i++) {
		temp_pre = temp_pre + name[i];
	}
	for (int j = 0; j < 3; j++) {
		temp_post = name[name.length - 1 - j] + temp_post;
	}
	if (temp_pre == "2018") {
		return 0;
	}
	else if (temp_post == "png") {
		return 0;
	}
	else if (temp_pre == "1515") {
		return 2;
	}
	else if (temp_post == "jpg") {
		return 1;
	}
	else {
		return 0;
	}
}