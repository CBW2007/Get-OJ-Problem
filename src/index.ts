import { Parser, Spider, ProblemData, SupportedOj } from "./types"
import * as parsers from './parsers'
import * as spiders from './spiders'

const tools: {
  [oj: string]: {
    parser: Parser,
    spider: Spider
  }
} = {
  luogu: {
    parser: parsers.luogu,
    spider: spiders.luogu
  }
}

export async function getProblem(oj: string, pid: string): Promise<ProblemData> {
  if (!(oj in tools)) throw new Error("Unsupported OJ")
  return tools[oj].parser(await(tools[oj].spider(pid)))
}
