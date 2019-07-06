
// Write your JS here
const hero = {
    avatar: 'img/hero-image.png',
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
    myCurrentStat.innerHTML = null;
    const name = document.createElement('h3');
    name.innerHTML = "My hero name : "+ hero.name;
    const health = document.createElement('h4');
    health.innerHTML = "Health : " + hero.health;
    const weapon = document.createElement('h4');
    weapon.innerHTML = "My weapon : " + hero.weapon.type;
    const weaponDamage = document.createElement('h4')
    weaponDamage.innerHTML = "My weapon damage : " + hero.weapon.damage;
    const img = document.createElement('img');
    img.src = hero.avatar;
    img.classList.add('hero-image');
    
    myCurrentStat.appendChild(img)
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

const enemyObj= {
    avatar: 'img/enemy-image.png',
    name: "MYWORSTENEMY",
    heroic: false,
    inventory: [],
    health: 8,
    weapon:{
        type: "axe",
        damage: 1,
    }
}

function addEnemy (enemyObj){
    const myEnemyList = document.getElementById('my-enemy-list')
    const enemy = document.createElement('div');
    const enemyName = document.createElement('h3');
    enemyName.innerHTML = "My enemy name : " + enemyObj.name;
    const enemyHealth = document.createElement('h4');
    enemyHealth.innerHTML = "Health : " + enemyObj.health;
    const enemyWeapon = document.createElement('h4');
    enemyWeapon.innerHTML = "My weapon : " + enemyObj.weapon.type;
    const img = document.createElement('img');
    img.src = enemyObj.avatar;
    img.classList.add('enemy-image');
    enemy.appendChild(img)
    enemy.appendChild(enemyName);
    enemy.appendChild(enemyHealth);
    enemy.appendChild(enemyWeapon);
    myEnemyList.appendChild(enemy);
    enemy.onclick = function(){
        enemyObj.health = enemyObj.health - hero.weapon.damage;
        enemyHealth.innerHTML = 'Health : ' + enemyObj.health;
        if(enemyObj.health < 0){
            alert ('You won!');
            enemy.parentNode.removeChild(enemy);
        }
        
    }
    console.log(enemy)
}

addEnemy(enemyObj);




/*
1. Sozdat function dobavleniya vraga
2. vnutri ona doljna sozdavat DOM block
3. v etot blok nuzno sozdavat drugoi DOM block kotorii butet soderzat title - Enemy
i eshe odin block kotorii budet soderzat HP vraga
4. pri nazatii na block iz punkta 2 HP etogo vraga dolzno umenshatsa
5. kogda hp vraga stanovitsa 0 pokazivat alert s tekstom "you won"


*/