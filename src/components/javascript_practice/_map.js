const instructors = [
    {name: 'Quincy', specialty: "Quantum Mechanics"},
    {name:'Kenn', specialty: 'Norse Mythology'},
    {name:'Carolyn', specialty: 'Kung Fu'},
    {name:'Paul', specialty: 'Entomology'},
];

let instructor_names = [];

instructors.forEach(instructors => {
    instructor_names.push(instructors.name)
});

console.log(instructor_names);

const instructorNames = instructors.map(instructor => instructor.name);
console.log(instructorNames);

const instructorNamesTwo = instructors.map(i => i.name);
console.log(instructorNamesTwo);

// const instructorInfo = `${instructors.map(i => i.name : i.specialty)}`;
// console.log(instructorInfo);

let kvArray =[
    {key: 1, value: 10},
    {key: 2, value: 20},
    {key: 3, value: 30}
];
console.log(kvArray);

let reformedArray = kvArray.map(obj =>{
    let rObj = {};
    rObj[obj.key] = obj.value;
    console.log(rObj);
});