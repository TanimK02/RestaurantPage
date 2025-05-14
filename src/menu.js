
export default function (doc) {
    let document = doc;
    if (!document) {
        return false
    }

    let loadInMenu = () => {
        let content = document.getElementById("content");
        content.innerText = null;
        content.innerHTML = `
<div class="menuContainer">
            <h1>Menu</h1>
            <div class="menu">
                <div class="subMenu milkshakes">
                    <h2>Milkshakes</h2>
                    <div class="item">
                        <p>Chocolate Milkshake - </p>
                        <p>$3.99</p>
                    </div>
                    <div class="item">
                        <p>Strawberry Milkshake - </p>
                        <p>$5.99</p>
                    </div>
                    <div class="item">
                        <p>Oreo Milkshake - </p>
                        <p>$4.99</p>
                    </div>
                    <div class="item">
                        <p>Banana Peanut Butter Shake - </p>
                        <p>$6.99</p>
                    </div>

                </div>
                <div class="subMenu milkshakes">
                    <h2>Slices of Cake</h2>
                    <div class="item">
                        <p>Chocolate Fudge Cake - </p>
                        <p>$3.99</p>
                    </div>
                    <div class="item">
                        <p>Red Velvet Cake - </p>
                        <p>$5.99</p>
                    </div>
                    <div class="item">
                        <p>Carrot Cake - </p>
                        <p>$4.99</p>
                    </div>
                    <div class="item">
                        <p>Cheesecake - </p>
                        <p>$6.99</p>
                    </div>

                </div>
                <div class="subMenu milkshakes">
                    <h2>Coffee</h2>
                    <div class="item">
                        <p>Espresso - </p>
                        <p>$3.99</p>
                    </div>
                    <div class="item">
                        <p>Capuccino - </p>
                        <p>$5.99</p>
                    </div>
                    <div class="item">
                        <p>Latte - </p>
                        <p>$4.99</p>
                    </div>
                    <div class="item">
                        <p>Cold Brew - </p>
                        <p>$6.99</p>
                    </div>

                </div>
                <div class="subMenu milkshakes">
                    <h2>Desserts</h2>
                    <div class="item">
                        <p>Brownies - </p>
                        <p>$3.99</p>
                    </div>
                    <div class="item">
                        <p>Tiramisu - </p>
                        <p>$5.99</p>
                    </div>
                    <div class="item">
                        <p>Creme Brûlée - </p>
                        <p>$4.99</p>
                    </div>
                    <div class="item">
                        <p>Apple Pie - </p>
                        <p>$6.99</p>
                    </div>

                </div>
            </div>
        </div>`

    }
    return loadInMenu
}

