// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt.Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.Обязательно используй switch.Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// 	Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

const input3 = prompt('Введите Страну доставки:');
let destination: string;
let cost: number;

switch (input3.toLowerCase()) {
  case 'китай':
    destination = 'в Китай';
    cost = 100;
    alert(`Доставка ${destination} будет стоить ${cost} кредитов`);
    break;
  case 'чили':
    destination = 'в Чили';
    cost = 250;
    alert(`Доставка ${destination} будет стоить ${cost} кредитов`);
    break;
  case 'австралия':
    destination = 'в Австралию';
    cost = 170;
    alert(`Доставка ${destination} будет стоить ${cost} кредитов`);
    break;
  case 'индия':
    destination = 'в Индию';
    cost = 80;
    alert(`Доставка ${destination} будет стоить ${cost} кредитов`);
    break;
  case 'ямайка':
    destination = 'на Ямайку';
    cost = 120;
    alert(`Доставка ${destination} будет стоить ${cost} кредитов`);
    break;
  default:
    alert('В вашей стране доставка не доступна');
}
