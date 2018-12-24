'use strict';
const adminPassword = 'm4ngo1zh4ackz0r';
const adminLogin = 'admin';

let userName = prompt('Введите ваше имя');
if 	(userName === adminLogin){
  let userPassword = prompt('Введите ваш пароль');
  	if(userPassword === adminPassword){
  		alert('Добро пожаловать!');
  	}else{
  		if(userPassword === null){
  			alert('Отменено пользвателем!');
  		}else{
 			alert('Доступ запрещен, неверный пароль!')
  		}
  	}
}else{
	if(userName === null){
		alert('Отменено пользвателем!');
	}
	else{
		alert('Доступ запрещен, неверный логин!')
	}
}