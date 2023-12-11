const names=["JoJo", "Golden Wind", "Jotaro Kujo", "Dio", "Jonathan Joestar", "Joseph Joestar", "Josuke Higashikata", "Giorno Giovanni"];
console.log(names, typeof(names))
for(let name of names){
    console.log(name)
}
person={
    id:101,
    name:"person",
    age:25,
};
console.log(person, typeof(person))
for(let key in person)
{
    console.log(person[key]);
}
