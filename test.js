const { getProblem } = require("./dist")
const fs = require("fs")

const fn = async () => fs.writeFileSync("test.json", JSON.stringify(await getProblem("luogu", "P5660")))
fn()
