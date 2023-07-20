const listItem=document.getElementById("list");

let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

touristSpots.sort();

touristSpots.forEach((item)=>{
	const list=document.createElement("li");
	list.innerText=item;

	listItem.appendChild(list);
})