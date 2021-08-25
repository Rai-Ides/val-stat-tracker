# What is this and it's purpose?

This is an valorant statistic tracker, powered by tracker.gg (not affliated tho).

# Thats cool!, but how do i install and use it?

Good question, you just need to do `npm i val-stat-tracker --save'. 

After that,
`const { getStats } = require("val-stat-tracker");

console.log(getStats({username: "yourUserName#tagline"}));
//or
const check = getStats({username: "yourUserName#tagline"});
console.log(check)
`
