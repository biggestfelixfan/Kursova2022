$(document).ready(function () {
	$('.slider').slick({
		centerMode: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000,
		speed: 800,
		slidesToShow: 3,
		variableWidth: true,
	});
});


let dpMin, dpMax;

var uk = {
	days: ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П’ятниця', 'Субота'],
	daysShort: ['Нед', 'Пнд', 'Вів', 'Срд', 'Чтв', 'Птн', 'Сбт'],
	daysMin: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
	months: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
	monthsShort: ['Січ', 'Лют', 'Бер', 'Кві', 'Тра', 'Чер', 'Лип', 'Сер', 'Вер', 'Жов', 'Лис', 'Гру'],
	today: 'Сьогодні',
	clear: 'Очистити',
	dateFormat: 'dd.MM.yyyy',
	timeFormat: 'HH:mm',
	firstDay: 1
};

dpMin = new AirDatepicker('#el1', {
	buttons: ['today', 'clear'],
	locale: uk,
	onSelect({ date }) {
		dpMax.update({
			minDate: date
		})
	}
})

dpMax = new AirDatepicker('#el2', {
	buttons: ['today', 'clear'],
	locale: uk,
	onSelect({ date }) {
		dpMin.update({
			maxDate: date
		})
	}
})

$('select#room').on('change', function () {
	$('input[name="room"]').val(this.value);
});


