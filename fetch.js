// "use strict";

// // const getBtn = document.getElementById("getDog");

// // const onImgLiked = () => {};

// // const getDogImages = () => {
// // 	getBtn.textContent = "Loading...";
// // 	fetch("https://dog.ceo/api/breeds/image/random")
// // 		.then((res) => res.json())
// // 		.then((data) => {
// // 			const imgBox = document.getElementById("image-box");
// // 			let dogImage = document.createElement("img");
// // 			dogImage.src = data.message;
// // 			dogImage.style.width = "200px";
// // 			dogImage.style.height = "150px";
// // 			dogImage.style.padding = "10px";

// // 			dogImage.onclick = onImgLiked;
// // 			imgBox.append(dogImage);
// // 			getBtn.textContent = "Get image...";
// // 		});
// // };

// //CLASSWORK 19.12.2023 FETCH

// const getBtn = document.getElementById("getDog");
// const onImgLiked = () => {};

// let dogImageFromLocalStorage = localStorage.getItem("dogImage");

// const getDogImages = async () => {
// 	try {
// 		getBtn.textContent = "Loading...";
// 		const response = await fetch("https://dog.ceo/api/breeds/image/random");
// 		const data = await response.json();

// 		const imgBox = document.getElementById("image-box");

// 		let dogImage = document.createElement("img");
// 		dogImage.src = data.message;
// 		dogImage.style.width = "200px";
// 		dogImage.style.height = "150px";
// 		dogImage.style.padding = "10px";

// 		dogImage.onclick = onImgLiked;
// 		imgBox.append(dogImage);
// 		getBtn.textContent = "Get image...";
// 	} catch (err) {
// 		console.log("error:", err);
// 	}
// };

// const arr = [1, 2, 210, 40, 120, -170];
// const totalNum = (arr) => {
// 	let sum = 0;
// 	for (const item of arr) {
// 		sum += item;
// 	}
// 	return sum;
// };
// console.log(totalNum(arr));

// const getSumReduce = arr.reduce((prevSum, el) => prevSum + el, 0);
// console.log(getSumReduce);
let countryName;

const onCountryChange = (e) => {
	countryName = e.target.value;
};

const fetchCountry = async (countryName) => {
	const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
	const data = await res.json();

	return data;
};

// fetchCountry("kyrgyzstan");
const onSearchClick = async () => {
	const data = await fetchCountry(countryName);

	//select dom elements
	const continent = document.getElementById("continent");
	const name = document.getElementById("name");
	const capital = document.getElementById("capital");
	const population = document.getElementById("population");
	const language = document.getElementById("language");
	const currency = document.getElementById("currency");
	const flagImage = document.getElementById("flag");

	continent.textContent = `Continent: ${data[0].region}`;
	name.textContent = `Name: ${data[0].name.official}`;
	capital.textContent = `Capital: ${data[0].capital}`;
	population.textContent = `Population: ${data[0].population.toLocaleString()}`;
	flagImage.src = data[0].flags.png;
	console.log(`flag src: ${data[0].flags.png}`);
	flagImage.alt = data[0].flags.alt;
	console.log(`flag alt: ${data[0].flags.alt}`);

	const languages = Object.values(data[0].languages).join(", ");
	language.textContent = `Language(s): ${languages}`;

	let currencyKey = Object.keys(data[0].currencies);
	currency.textContent = `Currency: ${data[0].currencies[currencyKey[0]].name}`;

	// const countryCode = data[0].flags.png;
	// flagImage.src = `https://flagcdn.com/w320/${countryCode}.png`;
	// flagImage.alt = `Flag of ${data[0].name.official}`;
};
