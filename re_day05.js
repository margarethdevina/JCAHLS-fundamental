let instructor = {
    name: `Devina`,
    class: `Purwa-01`,
    age: 30,
    materi: [`fundamental`, `front-end`, `back-end`]
};

console.log(Object.keys(instructor));

for (let property in instructor) {
    console.log(property);
};

for (let property in instructor) {
    console.log(instructor[property]);
};