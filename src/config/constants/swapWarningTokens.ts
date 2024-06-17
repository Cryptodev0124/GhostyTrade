import { Token } from '@pancakeswap/sdk'
import { ethTokens } from 'config/constants/tokens'
import { bscWarningTokens } from 'config/constants/warningTokens'

const { tribe, vgx, paxg, ach } = ethTokens
const { pokemoney, free, safemoon } = bscWarningTokens

interface WarningTokenList {
  [key: string]: Token
}

const SwapWarningTokens = <WarningTokenList>{
  safemoon,
  tribe,
  vgx,
  paxg,
  ach,
  pokemoney,
  free,
}

export default SwapWarningTokens
