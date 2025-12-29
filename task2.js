const we = {are:{the:{best:"Koda"}}}
// console.log(we.are.the.best)

const {are:{the:{best}}} = we
console.log(best)

const hello = {world:"Hello World"}
// console.log(hello.world)

const {world} = hello
console.log(world)

const obj = {
    str:[1, 2, 3, [1, [1, 2, {man:{tech:{academy: "Tech Academy"}}}]]]
}
// console.log(obj.str[3][1][2].man.tech.academy)

const {str:[i0, i1, i3, [x1, [y1, y2, {man:{tech:{academy}}}]]]} = obj
console.log(academy)

const my = [
    {favourite:[1, 2, 3, {fruit:{is:"Apple"}}]}
]
// console.log(my[0].favourite[3].fruit.is)

const [{favourite:[h0, h1, h2, {fruit:{is}}]}] = my
console.log(is)