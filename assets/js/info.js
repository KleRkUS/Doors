const extraData = {
	  "windows": {
	  	"title": "Окна",
	  	"text": "Мы не производим, мы качественно монтируем! <br> Наш магазин сотрудничает с фирмой «Исток» уже 10 лет, за долгий период тесной работы мы подняли свое качество на достойный уровень. Если вы ищете дешевые изделия, низкого качества, то это не к нам, мы ответственны за свою работу.<br> Наша фирма работает с профилем таких фирм: Reachmont, фурнитура , Axor, Maco MM.<br> За подробной информацией, предварительным просчетом и консультацией специалиста, обращайтесь по телефону или оставьте заявку на сайте. Мы с радостью поможем вам выбрать самый экономичный вариант.<br> <a href='http://okna-istok.ru/directory/'>Перейти</a>"
	  },
	  "rollete": {
	  	"title": "Роллеты",
	  	"text": "По всем вопросам, связанным с роллетами просим обащаться к менеджеру производителя<br> <a href='https://doorhan.ru/products/'>Перейти</a>"
	  },
	  "jalouze": {
	  	"title": "Жалюзи",
	  	"text": "По всем вопросам, связанным с жалюзи просим обащаться к менеджеру производителя<br> <a href='https://doorhan.ru/products/'>Перейти</a>"
	  }
	};

console.log(extraData);

for (let e of document.getElementsByName('info-extra')) {
	e.addEventListener("click", function(event) {
		extraWindowOpen(this);
		event.preventDefault();
	}, false)

} 

function extraWindowOpen(e) {

	const index = e.getAttribute('data-index'),
		  info = document.createElement('article'),
		  layout = document.createElement('div'),
		  h2 = document.createElement("h2"),
		  p = document.createElement("p"),
		  close = document.createElement("span");

	layout.setAttribute("class", "layout");
	layout.setAttribute("id", "layout");

	close.setAttribute("class", "extra-info-close");

	info.setAttribute("class", "extra-info-container");

	document.body.appendChild(layout);
	layout.appendChild(info);

	h2.innerHTML = extraData[index].title;
	p.innerHTML = extraData[index].text;
	close.innerHTML = "&#10060;";

	close.onclick = function() {
		extraWindowClose(layout);
	}

	info.appendChild(h2);
	info.appendChild(p);
	info.appendChild(close);

}

function extraWindowClose(l) {

	document.body.removeChild(l);

}