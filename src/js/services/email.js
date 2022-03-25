$(document).ready(function() {
	const name = document.querySelector('#name');
	const days = document.querySelector('.days');
	const p = document.querySelector('.ps');
	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			const newE = document.createElement('p');
			newE.innerHTML = `${name.value};`
			days.append(newE);
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});