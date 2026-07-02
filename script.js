function login(){

let email = document.getElementById("email").value;
let password = document.getElementById("password").value;

if(email === "" || password === ""){

alert("Please Enter Email & Password");
return;

}

document.querySelector(".container").style.display = "none";

document.getElementById("dashboard").style.display = "block";

show("home");

}

function signup(){

alert("Signup System Coming Soon");

}

function logout(){

document.querySelector(".container").style.display = "flex";

document.getElementById("dashboard").style.display = "none";

document.getElementById("email").value = "";

document.getElementById("password").value = "";

}

function show(type){

let area = document.getElementById("content-area");

document.querySelectorAll("nav button").forEach(btn=>{

btn.classList.remove("active");

});

if(type==="home"){

document.querySelectorAll("nav button")[0].classList.add("active");

area.innerHTML = `

<h2>Welcome To Elite Signals</h2>

<p>
Professional Forex & Crypto Trading Community
</p>

<hr>

<div class="stats-container">

<div class="stat-box">
<h3>320+</h3>
<p>Total Signals</p>
</div>

<div class="stat-box">
<h3>250+</h3>
<p>Members</p>
</div>

<div class="stat-box">
<h3>95%</h3>
<p>Accuracy</p>
</div>

<div class="stat-box">
<h3>80+</h3>
<p>VIP Traders</p>
</div>

</div>

<hr>

<h3>📡 Live Market Status</h3>

<div class="market-box">

<p>🟢 Forex Market : OPEN</p>

<p>₿ Crypto Market : Active 24/7</p>

<p>🥇 Gold Market : OPEN</p>

<p>🌍 Session : London Session</p>

</div>

<hr>

<h3>📈 Weekly Trading Plan</h3>

<p>Monday</p>
<p>Tuesday</p>
<p>Wednesday</p>
<p>Thursday</p>
<p>Friday</p>

<hr>

<h3>🎯 Signal Accuracy</h3>

<div class="progress">

<div class="fill">

95%

</div>

</div>

<hr>

<h3>⭐ Trader Reviews</h3>

<div class="review-card">

<div class="stars">

★★★★★

</div>

<p>

Excellent Trading Community

</p>

<b>

Ali Khan

</b>

</div>

<div class="review-card">

<div class="stars">

★★★★★

</div>

<p>

Very Accurate Signals

</p>

<b>

Ahmed

</b>

</div>

<div class="review-card">

<div class="stars">

★★★★★

</div>

<p>

VIP Service Is Amazing

</p>

<b>

Usman

</b>

</div>

<hr>

<h3>

⚠ Trading Disclaimer

</h3>

<p>

Trading involves risk.

Always manage your capital wisely.

</p>

`;

}

else if(type==="free"){

document.querySelectorAll("nav button")[1].classList.add("active");

area.innerHTML = `

<h2>

📈 Free Signals

</h2>

<hr>

<div class="signal-card">

<h3>

EUR/USD BUY

</h3>

<p>

Entry : 1.1600

</p>

<p>

TP : 1.1650

</p>

<p>

SL : 1.1550

</p>

<p class="status">

🟢 Active Signal

</p>

</div>

<div class="signal-card">

<h3>

BTC BUY

</h3>

<p>

Entry : 109000

</p>

<p>

TP : 110000

</p>

<p>

SL : 108500

</p>

<p class="status">

🟢 Active Signal

</p>

</div>

<div class="signal-card">

<h3>

GOLD BUY

</h3>

<p>

Entry : 3360

</p>

<p>

TP : 3380

</p>

<p>

SL : 3345

</p>

<p class="status">

🟢 Active Signal

</p>

</div>

`;

}

else if(type==="vip"){

document.querySelectorAll("nav button")[2].classList.add("active");

area.innerHTML = `

<div class="vip-card">

<h2 class="vip">

💎 VIP Elite Membership

</h2>

<p>

📈 Accuracy Rate : 95%

</p>

<p>

👥 Members : 250+

</p>

<p>

💰 Price : 2500 PKR

</p>

<hr>

<h3>

VIP Features

</h3>

<p>✅ Forex Signals</p>

<p>✅ Crypto Signals</p>

<p>✅ Gold Signals</p>

<p>✅ Premium Analysis</p>

<p>✅ Entry Strategy</p>

<p>✅ Stop Loss</p>

<p>✅ Take Profit</p>

<p>✅ 24/7 Support</p>

<hr>

<a href="https://wa.me/923211723963">

<button class="whatsapp">

📱 Join VIP Now

</button>

</a>

</div>

`;

}

else if(type==="content"){

document.querySelectorAll("nav button")[3].classList.add("active");

area.innerHTML = `

<h2>

📚 Trading Education

</h2>

<hr>

<p>📌 Risk Management</p>

<p>📌 Trading Psychology</p>

<p>📌 Price Action</p>

<p>📌 Market Structure</p>

<p>📌 Support & Resistance</p>

<p>📌 Trend Analysis</p>

<p>📌 Smart Money Concepts</p>

<p>📌 Candlestick Patterns</p>

`;

}

else if(type==="contact"){

document.querySelectorAll("nav button")[4].classList.add("active");

area.innerHTML = `

<h2>

📞 Contact Us

</h2>

<hr>

<a href="https://wa.me/923211723963">

<button class="whatsapp">

📱 WhatsApp Support

</button>

</a>

<br><br>

<a href="https://t.me/FarhanTrader">

<button class="telegram">

✈ Telegram Support

</button>

</a>

<br><br>

<a href="mailto:clixvero@gmail.com">

<button class="email">

📧 Email Support

</button>

</a>

<hr>

<p>

Available 24/7 For VIP Members

</p>

<p>

Average Response Time : 5–30 Minutes

</p>

`;

}

}
