//set we can use when we want to take the uniqe element
//set is use bye the new Set()
//it take the itarrable elemnet
const unique_value = new Set()
unique_value.add(3)
unique_value.add(4)
unique_value.add(3)
unique_value.add(6)
console.log(typeof unique_value)

unique_value.add("item1")//it both give the uniqe value means it prsent is only one time in object
unique_value.add("item1")

unique_value.add(["item1"])
unique_value.add(["item1"])//both are difrent in set print both value because it use a [] bracket

console.log(unique_value)