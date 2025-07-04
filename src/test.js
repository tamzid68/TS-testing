var asm = [
    { name: "Tamzid", age: 30, isActive: true },
    { name: "sabit", age: 25, isActive: false },
    { name: "Hira", age: 22, isActive: true },
    { name: "Sakib", age: 28, isActive: false },
];
for (var i = 0; i < asm.length; i++) {
    if (asm[i].name === "Sakib")
        asm[i].name = 'sayma';
    console.log(asm[i]);
}
;
