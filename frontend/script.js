
const url = 'http://localhost:3000/'

function filterInputs(str){
	let result = '';

	for (let ltr of str){
		if (ltr === ' ') result += '-';
		else result += ltr;
	}
	return result
}

async function startSearch(evt){
	evt.preventDefault();
	const job = $('#job').val();
	const city = $('#city').val();
	const state = $('#state').val();

	const sanitizedJob = filterInputs(job);
	const sanitizedCity = filterInputs(city);
	const sanitizedState = state.toUpperCase();

	const params = {
		job: sanitizedJob,
		city: sanitizedCity,
		state: sanitizedState
	}
	const result = await axios({
		url,
		params
	})
	$('#result').html(result.data.ratio)
}

$('#job-form').submit(startSearch)