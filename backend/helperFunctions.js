
// function testing(){
// 	console.log('testing')
// }

// const fs = require('fs');
// const parse = require('csv-parse');
// const parser = parse({columns: true}, function(err,records){
// 	console.log(records);
// })

// fs.createReadStream('resume_count_dataset.csv').pipe(parser);

//TODO: read in the CSV
function findResumes(title, city){
	let test = [100, 1000, 1000000]
	let random = Math.floor(Math.random()*3)
	return test[random];
}

function findPages(text){
	//TODO: make this more accurate
	let textSplit = text.split(' ');
	let pages = textSplit[textSplit.length - 2];
	let result= ''
	for (let i = 0; i < pages.length; i++){
		if (+pages[i]) result += pages[i]
	}
	return result
}

//TODO: make this relevant to other cities (i.e. total job count)
function calculateRatio(jobs, resumes){
	const ratio = resumes/jobs;
	if (ratio < 0.5) return 'hard';
	else if (ratio > 1.5) return 'easy';
	else return 'medium';
}

module.exports = {findResumes, findPages, calculateRatio};