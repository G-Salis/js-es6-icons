const container = document.querySelector('.container');
let selectMode = document.getElementById("select_mode");
console.log(selectMode);

const icons =[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];
	
	createIcon(icons);


	selectMode.addEventListener('change', (event) => {
		let val = event.target.value;
		typeIcon(val);
	
	});


	function typeIcon(val) {

		if(val === "Animals"){
			const animal = icons.filter((element) => element.type === 'animal');
			createIcon(animal);
			console.log(animal);

    } else if(val == "Vegetables"){
			const veg = icons.filter((element) => element.type === 'vegetable');
			createIcon(veg);
			console.log(veg);

		}else if(val == "Works"){
			const work = icons.filter((element) => element.type === 'user');
			createIcon(work);
			console.log(work);

		}else{
			createIcon(icons);
			console.log(createIcon(icons));
		}
		
	}

	function createIcon(arrayIcon){
    
		container.innerHTML = '';
		arrayIcon.forEach(box => {
			const name = box.name.toUpperCase();
			
			container.innerHTML += `
			<div class="box ">
				<i class="${box.family} ${box.prefix}${box.name} ${box.color}"></i>
				<span>${name}</span> 
			</div>
			`; 
		});
	
		console.log(icons);
	
		}

		
	
		
