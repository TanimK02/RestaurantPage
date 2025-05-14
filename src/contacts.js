import instaPic from './assets/instagram-svgrepo-com.svg'
import xPic from './assets/twitter-x.svg'
import phonePic from './assets/phone-fill.svg'

export default function (doc) {
    let document = doc;
    if (!document) {
        return false
    }

    let loadInContacts = () => {
        let content = document.getElementById("content");
        content.innerText = null;
        content.innerHTML = `<div class="contactsContainer">
            <h1>Contacts</h1>
            <div class="contacts">
                <div class="subContact">
                    <img style="width: 2rem;" id="instaHandle">
                    <p>@TheMilkshakeDiner</p>
                </div>
                <div class="subContact">
                    <img style="width: 2rem;" id="xHandle">
                    <p>@MilkshakeDiner</p>
                </div>
                <div class="subContact">
                    <img style="width: 2rem;" id="phoneNum">
                    <p>(333)-333-3333</p>
                </div>
            </div>

        </div>`
        let insta = document.getElementById("instaHandle");
        let x = document.getElementById("xHandle");
        let phone = document.getElementById("phoneNum")
        insta.src = instaPic;
        x.src = xPic;
        phone.src = phonePic;

    }
    return loadInContacts
}

