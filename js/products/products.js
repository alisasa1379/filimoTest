async function products (){
    let products = ''
    let data = await fetch("https://alisasa1379.github.io/dbJson/db.json")
    let res = await data.json()
    products = res.products.map((elem)=>{
        return ` <div class="product">
                <h2>${elem.title}</h2>
                <img src=${elem.img} alt="products">
                <div class="description">
                ${elem.description}
                </div>
                <div class="category"> ${elem.category}</div>
                <div class="price">${elem.price}</div>
                <div class="rating">
                    <div class="rate">امتیاز : ${elem.rating.rate}</div>
                    <div class="count">تعداد : ${elem.rating.count}</div>
                </div>
                <button class="buyBtn ${elem.rating.count === 0 ?  'disabled':''}" >همین الان بخر</button>
            </div>`
    })

    document.querySelector("#products").insertAdjacentHTML("afterbegin",products.join(" "))
}

export default products;