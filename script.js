const elementBall = document.getElementById("ball");
elementBall.style.cssText = ` border-radius: 50%;
width: 200px;
height: 200px;
background-image: radial-gradient(black, yellow, green);
border: solid black 5px`;
console.log(elementBall);

const myInfo = document.getElementById("info");
myInfo.innerHTML = `<ul>
<li>ben evri</li>
<li>21</li>
<li>holon</li>
<li>huckerU</li>
</ul>`;
console.log(info);

const vehicle = {
    title: " Mercedes",
    price: 200_000,
    hand: 2,
    km: 100_403,
    year: 2014,
};
console.log(vehicle);

const mercedesCar = window.document.getElementById("car");
mercedesCar.innerHTML = ` 
<div class="card" style="width: 18rem;">
    <div class="card-body">
    <img src="c40a5b8e6e2e8b3745c9792da0d2a4b3.jpg" class="card-img-top" alt="...">
      <h5 class="card-title">mercedes</h5>
      <p class="card-text"><ul class="list">
        <li class="list-item">price:200,00</li>
        <li class="list-item">hand:2</li>
        <li class="list-item">km:100,403</li>
        <li class="list-item">year:2014</li>
      </ul></p>
      <a href="" class="btn btn-primary">buy</a>

    </div>
</div>`;

const redColor = window.document.getElementById("color");
redColor.className = "bg-danger";