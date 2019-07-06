// Write your JS here
const hero = {
    name: "MYBESTHERO",
    heroic: true,
    inventory: [],
    health: 10,
    weapon:{
        type: "axe",
        damage: 2,
    }
};

function rest (obj){
    if (obj.health === 10) {
        alert("You don't need rest");
    }
    else {
        obj.health = 10;
    }
    return obj;
}

function pickUpItem(){

}

function equipWeapon(){

}
