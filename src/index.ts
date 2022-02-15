import { Parser, ProblemData, SupportedOj } from "./types"
import * as parsers from './parsers'
import axios from 'axios'

const ojInfoList: {
  [oj: string]: {
    parser: Parser,
    src: string,
    method: "get"
  }
} = {
  luogu: {
    parser: parsers.luoguParser,
    src: "https://www.luogu.com.cn/problem/$pid",
    method: "get"
  }
}

export async function getProblem(oj: SupportedOj, pid: string): Promise<ProblemData>{
  if (!(oj in ojInfoList)) throw new Error("Unsupported OJ")
  const ojInfo = ojInfoList[oj]
  return ojInfo.parser((await axios[ojInfo.method](ojInfo.src.replace("$pid",pid))).data)
}
