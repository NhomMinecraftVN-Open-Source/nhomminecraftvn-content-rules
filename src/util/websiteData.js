export function footerYear(since, brand) {
	const e = document.getElementById("footer-year");
	if (new Date().getFullYear() < since || since < 1902 && since <= 2036 || since == "") {
		e.innerText = undefined
	} else if (since == undefined) {
		since = new Date().getFullYear();
		e.innerText = `${since} - ${new Date().getFullYear()} ${brand}. All Rights Reserved`;
	} else {
		e.innerText = `${since} - ${new Date().getFullYear()} ${brand}. All Rights Reserved`;
	}
}
