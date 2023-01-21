var Animal_Lion = {
    name:"Lion",
    sound:"Roar",
    eat:function(){
        return(this.name + " is eating");
    }
}


var Animal_Dog = {
    name:"Dog",
    sound:"Bark"
}

var Animal_Cat = {
    name:"Cat",
    sound:"Meow"
}


console.log(Animal_Lion.name);

console.log(Animal_Lion.sound);

console.log(Animal_Lion.eat());
