import coffee from './assets/coffee-cup-coffee-svgrepo-com.svg'
import milkshake from './assets/milkshake-svgrepo-com.svg'
import cake from './assets/cake-svgrepo-com.svg'
export default function (doc) {
    let document = doc;
    if (!document) {
        return false
    }

    let loadInHome = () => {
        let content = document.getElementById("content");
        content.innerText = null;
        let homeContainer = document.createElement('div');
        homeContainer.classList.add("homeContainer");
        let hero = document.createElement('div');
        hero.classList.add("hero");
        let h1 = document.createElement("h1");
        h1.innerText = 'Milkshake Diner';
        let p = document.createElement("p");
        p.innerText = 'We have more flavors of milkshakes, sweets, candies than you can find anywhere else in the world.'
        homeContainer.appendChild(hero);
        hero.appendChild(h1);
        hero.appendChild(p);
        let picCollection = document.createElement('div');
        picCollection.classList.add('picCollection');
        let pic1 = document.createElement('img');
        let pic2 = document.createElement('img');
        let pic3 = document.createElement('img');
        pic1.src = coffee;
        pic2.src = milkshake;
        pic3.src = cake;
        picCollection.appendChild(pic1);
        picCollection.appendChild(pic2);
        picCollection.appendChild(pic3);
        homeContainer.appendChild(picCollection);
        content.appendChild(homeContainer);

    }

    return loadInHome

}

