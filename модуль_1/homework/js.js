'use strict';
const adminPassword = 'm4ngo1zh4ackz0r';
const adminLogin = 'admin';
const userName = prompt('Введите ваше имя');
const userPassword = prompt('Введите ваш пароль');
console.log(userPassword);
if 	(userName === adminLogin){
  console.log(userName);
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