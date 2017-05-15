// $.get("http://pokeapi.co/api/v1/pokemon/1/", function(res){
// 	$('#info').html("<h2>" + res.abilities[0].name + "</h2>");
// },'json');



$('document').ready(function(){

	function addHandlers(){
	$('img').click(function(){
		//make the call to get the information
		var poke_id = $(this).attr("id")
		var imgStr="http://pokeapi.co/media/img/" + poke_id +".png"
		//console.log(`thisPoke: ${poke_id}`)
		var getStr="http://pokeapi.co/api/v1/pokemon/"+poke_id+"/"
		//console.log('getStr: ' + getStr)
		$.get(getStr, function(data){
			$('#side_div').append(`<h1 class="name">${data.name}</h1>`)
			$('#side_div').append(`<img src=${imgStr} alt="pokemon">`)
			$('#side_div').append(`<h5>Types</h5>`)
			for(var x=0; x<data.types.length; x++){
				$('#side_div').append(`<p>${data.types[x].name}</p>`)
			}
			$('#side_div').append(`<h5>Height</h5>`)
			$('#side_div').append(`<p>${data.height}</p>`)
			$('#side_div').append(`<h5>Weight</h5>`)
			$('#side_div').append(`<p>${data.weight}</p>`)
		},'json')

		// var poke_name = $.get("http://pokeapi.co/api/v1/pokemon/1/", function(data){
		// 	console.log(data.name)
		// },'json');

		//$('#side_div').append(`<p>${poke_name}</p>`)
	});
}

		
			
		for(var x=1; x<=151; x++){
			var str = "http://pokeapi.co/media/img/" + x + ".png";
			$('#poke_win').append(`<img src="${str}" alt="pokemon" id="${x}">`)
			//console.log(`<img src="${str}" alt="pokemon">`)
			//console.log(`string: ${str}`)
		}
		addHandlers()

	});

