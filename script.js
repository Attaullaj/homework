

let input = document.querySelector('#inpBox');
let btnnn = document.querySelector('button')
let flag = document.querySelector('#flag');
let nname=document.querySelector('.nname');
let lang =document.querySelector('.language');
let popu=document.querySelector('.popu');

btnnn.addEventListener('click',()=>{
    axios.get(`https://restcountries.com/v3.1/name/${input.value.toLowerCase()}`)
  .then(function (response) {
flag.src=response.data[0].flags.png;
nname.innerText=response.data[0].name.official;
lang.innerText=response.data[0].languages.eng;
popu.innerText=response.data[0].population;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

})

