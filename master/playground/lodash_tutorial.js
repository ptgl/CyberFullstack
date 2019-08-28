const _ = require("lodash");
console.log(_.isEmpty([]));


const user = {
    prop1:{
        value1: 1,
        value2: 2
    },
    prop2:{
        value1: 3,
        value2: 4
    }
}
console.log(_.get(user, "prop1.value1"));
console.log(_.get(user, "abc", "prop not exist"))


// _.set();

const user2 = {...user, profile:{
    address:{
        province:"ha noi"
    }
}}
console.log(user2)