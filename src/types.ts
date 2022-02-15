export type SupportedOj = 'luogu'

export interface ProblemData
{
  title: string,
  description: string,
  background?: string,
  inputFormat?: string,
  outputFormat?: string,
  samples: {
    in: string,
    out: string
  }[],
  hint?: string
}

export type Parser = (data: string) => ProblemData