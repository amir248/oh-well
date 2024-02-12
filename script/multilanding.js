// console.log('multilanding oK');
if(window.location.search=='?oK'){

  document.querySelector('#hi').innerHTML=`oK`
}else if(window.location.search=='?kitchen'){
  document.querySelector('#hi').innerHTML=`Заказать шикарную кухню под заказ, по своему проекту!`;
  document.title='Заказать кухню';
  document.querySelector('meta[name="description"]').setAttribute('content','Заказать кухню по индивидуальному проекту. В Новосибирске или области.');
}else if(window.location.search=='?kitchen-as-dream'){
  document.querySelector('#hi').innerHTML=`Заказать кухню как в мечте.`;
  document.title='Кухня как в мечте';
  document.querySelector('meta[name="description"]').setAttribute('content','Заказать чудесную кухню, по индивидуальному проекту.');
}else{
  document.querySelector('#hi').innerHTML=`Профессиональное проектирование<br>
и производство мебели в Новосибирске и Новосибирской области`;
}

// console.log(window.location.search);
