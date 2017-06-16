function saveData(){
	var name= document.getElementById("name").value;
	var clave= document.getElementById("clave").value;
	sessionStorage.SetItem(name,clave);
}

function recoverData(){
	for(var i=0;i<sessionStorage.length; i++){
		var name= sessionStorage.key(i);
		var clave= sessionStorage.getItem(name);
		document.getElementById("data").innerHTML = '<div>' + 'Nombre : '+name+'<br/> Clave: '+clave+'</div>';
	}


}

function cleanData(){
	document.getElementById("data").innerhtml = 'limpiado visto.Los datos permanecen.';
}
function borrarTodo() {sessionStorage.clear(); recoverData(); }
