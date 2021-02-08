const express = require("express");
const app = express();
const axios = require('axios');
const cors = require('cors');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
app.use(cors());


const baseURL = 'https://www.indeed.com/';

const { findResumes, findPages, calculateRatio } = require('./helperFunctions');

// process JSON body -> req.body
app.use(express.json());

//process traditional form data => req.body
app.use(express.urlencoded({ extended: true }));

//url needs to look like 'https://www.indeed.com/q-software-engineer-l-San-Francisco,-CA-jobs.html'
app.get('/' , async function(req, res){
 
	let { job, city, state } = req.query;

	const result = await axios(`${baseURL}q-${job}-l-${city},-${state}-jobs.html`);
	const dom = await new JSDOM(result.data);
	const text = dom.window.document.querySelector('#searchCountPages').textContent;

	const pages = findPages(text);
	const resumes = findResumes(job, city);

	const ratio =  calculateRatio(pages, resumes)

	res.json({"ratio": ratio})
})  

module.exports = app;