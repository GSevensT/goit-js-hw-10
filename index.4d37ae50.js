function e(e){return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}`,{headers:{"x-api-key":"live_Mun86OJyVolyhej5prwmi14eFf9mkJLC73BHCBq0ywaj7gx6278yISeKZigHHd83"}}).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}const t=document.querySelector(".breed-select"),n=document.querySelector(".cat-info"),r=document.querySelector(".loader");document.querySelector(".error");fetch("https://api.thecatapi.com/v1/breeds",{headers:{api_key:"live_Mun86OJyVolyhej5prwmi14eFf9mkJLC73BHCBq0ywaj7gx6278yISeKZigHHd83"}}).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>{r.classList.replace("loader","is-hidden");let n=e.map((({id:e,name:t})=>`<option value=${e}>${t}</option>`)).join("");console.log(n),t.insertAdjacentHTML("beforeend",n),t.classList.remove("is-hidden")})),t.addEventListener("change",(t=>{r.classList.replace("is-hidden","loader"),n.classList.add("is-hidden"),e(t.target.value).then((e=>{const{url:t,breeds:i}=e[0],{name:s,description:a,temperament:d}=i[0];n.innerHTML=`\n    <img src=${t} alt=${s} width="400"/>\n    <div>\n    <h2>${s}</h2>\n    <p>${a}</p>\n    <p>${d}</p>\n    </div>\n    `,n.classList.remove("is-hidden"),r.classList.add("is-hidden")}))}));
//# sourceMappingURL=index.4d37ae50.js.map
