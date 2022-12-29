import axios from 'axios'
import { Spider } from './types'

export const luogu: Spider = async (pid) => {
  const url = "https://www.luogu.com.cn/problem/$pid".replace("$pid", pid)
  return (await axios.get(url)).data
}