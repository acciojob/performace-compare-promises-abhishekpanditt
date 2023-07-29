// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];

// You can write your code here
async function callAllPromise(){
	const startTime=performance.now();
	let response=await apiUrls.map((url)=>{
		fetch(url);
	})
	let x=Promise.all(response);
	x.then(()=>{
		const endTime=performance.now();
		const elasped=endTime-startTime;
		document.querySelector("#output-all").textContent = elasped;
	})
}


async function callAnyPromise(){
	const startTime=performance.now();
	let response=await apiUrls.map((url)=>{
		fetch(url);
	})
	let x=Promise.all(response);
	x.then(()=>{
		const endTime=performance.now();
		const elasped=endTime-startTime;
		document.querySelector("#output-any").textContent = elasped;
	})
}