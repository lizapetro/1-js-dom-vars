var persons=new Array();
var men=new Object();
var names=["Иван","Екатерина","Егор","Мария","Юлия"];
var female_names=["Екатерина","Мария","Юлия"];
var jobs=["учитель","слесарь","врач","директор","механик"];
function rand(min,max){
  return(min+Math.floor(Math.random()*(max-min+1)));
}
var i;
for (i=0;i<10;i++)
{
  persons[i]=
  {
  name:names[rand(0,names.length-1)],
  age:rand(20,35),
  job:jobs[rand(0,jobs.length-1)],
  money:rand(20,120)
  }
}
for (i=0;i<10;i++)
{
  var li=document.createElement('li');
  li.innerHTML='Имя: '+persons[i].name+'; Возраст: '+persons[i].age+'; Профессия: '+persons[i].job+'; Зарплата '+persons[i].money;
  list.appendChild(li);
  if (persons[i].money<50) {li.style.background="red";}
  else if (persons[i].money<81){li.style.background="yellow";}
       else {li.style.background="green";}
  if (persons[i].age<28){li.innerHTML='Имя: <strong>'+persons[i].name+'</strong>; Возраст: '+persons[i].age+'; Профессия: '+persons[i].job+'; Зарплата '+persons[i].money;
  }
  if (persons[i].job==="врач"){li.style.textDecoration="underline";}
  if (female_names.indexOf(persons[i].name,0)>-1){li.style.fontSize="1.5em";}
}
