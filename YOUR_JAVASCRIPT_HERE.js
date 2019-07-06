
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
        displayStats(hero)
    }
    else {
        obj.health = 10;
    }
    return obj;
}

const inn = document.getElementById('inn');
inn.onclick = function (){
    rest(hero)
}

function pickUpItem(hero, weapon){
    hero.inventory.push(weapon);
    displayStats(hero)

}

const dagger = document.getElementById('dagger');
const daggerObj = {type : 'dagger', damage: 2 }
dagger.onclick = function(){
    pickUpItem(hero, daggerObj)
}

function equipWeapon(hero){
    if (hero.inventory.length != 0){
        hero.weapon = hero.inventory[0];
        displayStats(hero)
    }
    else {
        return null
    }
}

const bag = document.getElementById('bag');
bag.onclick = function(){
    equipWeapon(hero);
}

function displayStats (hero) {
    const myCurrentStat = document.getElementById("my-current-stat");
    const name = document.createElement('h3');
    name.innerHTML = "My hero name : "+ hero.name;
    const health = document.createElement('h4');
    health.innerHTML = "Health : " + hero.health;
    const weapon = document.createElement('h4');
    weapon.innerHTML = "My weapon : " + hero.weapon.type;
    const weaponDamage = document.createElement('h4')
    weaponDamage.innerHTML = "My weapon damage : " + hero.weapon.damage;
    myCurrentStat.innerHTML = null;
    
    myCurrentStat.appendChild(name)
    myCurrentStat.appendChild(health)
    myCurrentStat.appendChild(weapon)
    myCurrentStat.appendChild(weaponDamage)
    name.onclick = function(){
        displayForm(name)
    }
}
let formDisplayed = false;

function displayForm(name){
    if (formDisplayed === true){
        return
    }
    const form = document.createElement('form');
    const inputField = document.createElement('input');
    inputField.name = 'changeName';
    form.appendChild(inputField)
    const parent = name.parentNode;
    parent.insertBefore(form,name);
    formDisplayed = true;
    form.onsubmit = function(){
        hero.name = this.changeName.value ;
        displayStats(hero)
        formDisplayed = false;
        return false
    }
}
displayStats(hero)