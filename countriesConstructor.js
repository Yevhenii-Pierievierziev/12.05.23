'use strict';

/* 
1. Напишите глобальную функцию getObj(), которая возвращает this.
2. Напишите конструктор для создания объекта Country(title - название страны, capital - столица, population - население, area - площадь).
3. В этом конструкторе создайте метод getCountry(), который ссылается на глобальную функцию getObj().
4. Создайте при помощи конструктора две страны (на ваше усмотрение) со всеми необходимыми свойствами. Можно использовать параметры по умолчанию.
4. Напишите функцию, которая будет в цикле выводить все свойства объекта, кроме методов в консоль в формате key: value. Для вывода свойств должен использоваться метод getCountry().
5. Объект должен передаваться в функцию в параметрах.
*/

const getObj = () => {
    return this;
}

function Country(title, capital, population, area) {
    this.title = title;
    this.capital = capital;
    this.population = population;
    this.area = area;
    this.getCountry = function getObj(){
    }
}

const country1 = new Country('USA', 'Los Angeles', '3e6', '10e4');
const country2 = new Country('Ukraine', 'Kiev', '3e6', '65e3');

function getProperties() {

}
