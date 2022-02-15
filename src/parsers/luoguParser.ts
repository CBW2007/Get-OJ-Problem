import { ProblemData } from "../types"

export default (data: string): ProblemData => {
  const res = data.match("window._feInjection \\= JSON.parse\\(decodeURIComponent\\(\".+\"\\)\\);")
  if (!res) throw new Error("Cannot parse page content")
  const parsed = JSON.parse(decodeURIComponent(res[0].substring(53,res[0].length-4))).currentData.problem
  const samples: { in: string, out: string }[] = []
  parsed.samples.map((value: any) => {
    samples.push({
      in: value[0],
      out: value[1]
    })
  })
  return {
    title: parsed.title,
    description: parsed.description,
    background: parsed.background,
    inputFormat: parsed.inputFormat,
    outputFormat: parsed.outputFormat,
    samples: samples,
    hint: parsed.hint
  }
}