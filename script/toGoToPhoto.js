// console.log('toGoToPhotoGallery');
document.querySelector('#photos').style.cssText=`
 transition: all 2s ease-out;

`;
//clickButtonDirection
if(innerWidth>700){
  let left=document.createElement('span');
  // left.style.cssText=``;
  left.setAttribute('id','left');
  left.innerHTML='<';
  document.querySelector("#photos").prepend(left);

  let right=document.createElement('span');
  // right.style.cssText=``;
  right.setAttribute('id','right');
  right.innerHTML='>';
  document.querySelector("#photos").append(right);
}
document.querySelector('#left').addEventListener('click',()=>{
  // console.log('oK left');
  oKi++;
  if(oKi>=lineImage.length){
    oKi=0;
  }
  // console.log(oKi);
  oK++;
  if(oK>=lineImage.length){
    oK=0;
  }
  // console.log(oK);

  oKy++;
  if(oKy>=lineImage.length){
    oKy=0;
  }
  // console.log(oKy);

  oKu++;
  if(oKu>=lineImage.length){
    oKu=0;
  }
  // console.log(oKu);

  oKk++;
  if(oKk>=lineImage.length){
    oKk=0;
  }
  oKfour++;
  if(oKfour>=lineImage.length){
    oKfour=0;
  }
  oKend++;
  if(oKend>=lineImage.length){
    oKend=0;
  }
  photoOnThisPage();
});
document.querySelector('#right').addEventListener('click',()=>{
  // console.log('oK - right;');
  oKi--;
  if(oKi<0){
    oKi=11;
  }
  // console.log(oKi);
  oK--;
  if(oK<0){
    oK=11;
  }
  // console.log(oK);

  oKy--;
  if(oKy<0){
    oKy=11;
  }
  // console.log(oKy);

  oKu--;
  if(oKu<0){
    oKu=11;
  }
  // console.log(oKu);

  oKk--;
  if(oKk<0){
    oKk=11;
  }
  oKfour--;
  if(oKfour<0){
    oKfour=11;
  }
  oKend--;
  if(oKend<0){
    oKend=11;
  }
  photoOnThisPage();
});
//----------------------------------------------------
let oKi=0;
let oK=1;
let oKy=2;
let oKu=3;
let oKk=4;
let oKfour=5;
let oKend=6;
let lineImage=['image/gallery/yr2.jpg','image/gallery/yr3.jpg','image/gallery/yr4.jpg','image/gallery/yr5.jpg','image/gallery/yr6.jpg','image/gallery/aprl.jpg','image/gallery/aprl2.jpg','image/gallery/aprl3.jpg','image/gallery/one_14.jpg','image/gallery/one_15.jpg','image/gallery/one_16.jpg','image/gallery/one_9.jpg'];
function photoOnThisPage(){
  document.querySelector('#photos > div:nth-child(2) > img:nth-child(1)').setAttribute('src',`${lineImage[oKi]}`);

  // document.querySelector('#photos > div:nth-child(2) > img:nth-child(1)').style.cssText=`
  //   transition: all 2s ease-out;
  //   left:10px;
  //   position:absolute;
  // `;

  document.querySelector('#photos > div:nth-child(2) > img:nth-child(1)').setAttribute('src',`${lineImage[oK]}`);
  // setInterval(()=>{
  //   document.querySelector('#photos > div:nth-child(2) > img:nth-child(1)').style.cssText=`
  //     transition: all 2s ease-out;
  //     left:-100px;
  //     position:relative;
  //   `;
  // },2500);
  // setInterval(()=>{
  //   document.querySelector('#photos > div:nth-child(2) > img:nth-child(1)').style.cssText=`
  //     transition: all 2s ease-out;
  //     right:100px;
  //     position:relative;
  //   `;
  // },3000);
  // document.querySelector('#photos > div:nth-child(2) > img:nth-child(1)').style.cssText=`
  //   transition: all 2s ease-out;
  //   left:10px;
  //   position:absolute;
  // `;

  document.querySelector('#photos > div:nth-child(3) > img:nth-child(1)').setAttribute('src',`${lineImage[oKy]}`);
  // document.querySelector('#photos > div:nth-child(2) > img:nth-child(1)').style.cssText=`
  //   transition: all 2s ease-out;
  //   left:10px;
  //   position:relative;
  // `;

  document.querySelector('div.imge:nth-child(4) > img:nth-child(1)').setAttribute('src',`${lineImage[oKu]}`);
  // document.querySelector('div.imge:nth-child(4) > img:nth-child(1)').style.cssText=`
  //   transition: all 2s ease-out;
  //   left:1px;
  //   position:relative;
  // `;

  document.querySelector('div.imge:nth-child(5) > img:nth-child(1)').setAttribute('src',`${lineImage[oKk]}`);
  // document.querySelector('div.imge:nth-child(5) > img:nth-child(1)').style.cssText=`
  //   transition: all 2s ease-out;
  //   left:1px;
  //   position:relative;
  // `;

  document.querySelector('div.imge:nth-child(6) > img:nth-child(1)').setAttribute('src',`${lineImage[oKfour]}`);
  // document.querySelector('div.imge:nth-child(6) > img:nth-child(1)').style.cssText=`
  //   transition: all 2s ease-out;
  //   left:1px;
  //   position:relative;
  // `;

  document.querySelector('div.imge:nth-child(7) > img:nth-child(1)').setAttribute('src',`${lineImage[oKend]}`);
  // document.querySelector('div.imge:nth-child(7) > img:nth-child(1)').style.cssText=`
  //   transition: all 2s ease-out;
  //   left:0px;
  //   position:relative;
  // `;
}
function toListLine(){
  // console.log(oKi);
  setInterval(()=>{
    oKi++;
    if(oKi>=lineImage.length){
      oKi=0;
    }
    // console.log(oKi);
    oK++;
    if(oK>=lineImage.length){
      oK=0;
    }
    // console.log(oK);

    oKy++;
    if(oKy>=lineImage.length){
      oKy=0;
    }
    // console.log(oKy);

    oKu++;
    if(oKu>=lineImage.length){
      oKu=0;
    }
    // console.log(oKu);

    oKk++;
    if(oKk>=lineImage.length){
      oKk=0;
    }
    oKfour++;
    if(oKfour>=lineImage.length){
      oKfour=0;
    }
    oKend++;
    if(oKend>=lineImage.length){
      oKend=0;
    }
    // console.log(oKk);
    setInterval(()=>{
      document.querySelector('#twoImg').setAttribute('src',`${lineImage[oKi]}`);

    },3010);

    photoOnThisPage();

  },3000);
}
if(window.innerWidth>700){

  toListLine();
}
