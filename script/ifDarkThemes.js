if(localStorage.themes=="black"){
  document.querySelector('body').style.cssText=`
    color:white;
    background:black;
  `;
}
// console.log('DarkThemes!');

if(window.location.pathname=='/photo'){
  // console.log('oK');
  document.querySelector('#ooK > h1:nth-child(1)').style.cssText='color:black;';
  document.querySelector('#boxOne > h1:nth-child(1)').style.cssText='color:black;';
}
