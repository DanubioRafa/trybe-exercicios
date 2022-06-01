const mapCoins = (obj) => obj.map((coin) => `${coin.name} (${coin.symbol}): ${coin.priceUsd}`)
.filter((coin, index) =>  index < 10);

const createLis = (array) => {
    array.forEach(element => {
        const createLi = document.createElement('li');
        createLi.innerText = element;
        const elementUl = document.getElementById('tag');
        elementUl.appendChild(createLi);
    });
}

async function fetchArray() {
    let url = `https://api.coincap.io/v2/assets`
    const obj = fetch(url, { headers: { Accept: 'application/json' } })
    const objJson = (await obj).json();
    const objMaped = mapCoins((await objJson).data);

    createLis(objMaped);
}

window.onload = () => (fetchArray());