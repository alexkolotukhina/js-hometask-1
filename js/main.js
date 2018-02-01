var login         = prompt('Login: ', '');
var loginName     = 'Админ';
var passwordValue = 'Чёрный Властелин';
var cancelEnter   = 'Вход отменён';

if (login == loginName) {
	var password = prompt('Password: ', '');

		if (password == passwordValue) {
			alert('Добро пожаловать!')
		} else if (password == null) {
			alert(cancelEnter);
		} else {
			alert('Пароль неверен');
		}

} else if (login == null) {
	alert(cancelEnter);
} else {
	alert('Я вас не знаю');
}