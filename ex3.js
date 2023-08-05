{
    var personName = "AnWar";
    var lower = personName.toLowerCase();
    var upper = personName.toUpperCase();
    var titleCase = "".concat(upper.slice(0, 1) + lower.slice(1, 5));
    console.log(lower);
    console.log(upper);
    console.log(titleCase);
}
