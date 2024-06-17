import { ChainId, Token, WBNB, WETH9 } from '@pancakeswap/sdk'

const CAKE_MAINNET = new Token(
  ChainId.ETHEREUM,
  '0x8452c14f610DaBd23C3da8A810aBB55E71F137d3',
  18,
  'GHOSTTY',
  'GhostyTrade Token',
  'https://tether.to/',
)

const CAKE_TESTNET = new Token(
  ChainId.BSC_TESTNET,
  '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
  18,
  'CAKE',
  'PancakeSwap Token',
  'https://pancakeswap.finance/',
)

const USDC_BSC = new Token(
  ChainId.BSC,
  '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
  18,
  'USDC',
  'Binance-Peg USD Coin',
  'https://www.centre.io/usdc',
)

const USDC_TESTNET = new Token(
  ChainId.BSC_TESTNET,
  '0x64544969ed7EBf5f083679233325356EbE738930',
  18,
  'USDC',
  'Binance-Peg USD Coin',
  'https://www.centre.io/usdc',
)

const USDC_ETH = new Token(ChainId.ETHEREUM, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, 'USDC', 'USD Coin')

const USDC_RINKEBY = new Token(
  ChainId.RINKEBY,
  '0x4DBCdF9B62e891a7cec5A2568C3F4FAF9E8Abe2b',
  6,
  'tUSDC',
  'test USD Coin',
)

const USDC_GOERLI = new Token(ChainId.GOERLI, '0x07865c6E87B9F70255377e024ace6630C1Eaa37F', 6, 'tUSDC', 'test USD Coin')

const USDT_BSC = new Token(
  ChainId.BSC,
  '0x55d398326f99059fF775485246999027B3197955',
  18,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

const USDT_ETH = new Token(
  ChainId.ETHEREUM,
  '0xdAC17F958D2ee523a2206206994597C13D831ec7',
  6,
  'USDT',
  'Tether USD',
  'https://tether.to/',
)

export const USDT = {
  [ChainId.BSC]: USDT_BSC,
  [ChainId.ETHEREUM]: USDT_ETH,
}

export const USDC = {
  [ChainId.BSC]: USDC_BSC,
  [ChainId.BSC_TESTNET]: USDC_TESTNET,
  [ChainId.ETHEREUM]: USDC_ETH,
  [ChainId.RINKEBY]: USDC_RINKEBY,
  [ChainId.GOERLI]: USDC_GOERLI,
}

export const CAKE = {
  [ChainId.ETHEREUM]: CAKE_MAINNET,
  [ChainId.BSC_TESTNET]: CAKE_TESTNET,
}

const BUSD_MAINNET = new Token(
  ChainId.BSC,
  '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

const BUSD_TESTNET = new Token(
  ChainId.BSC_TESTNET,
  '0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

const BUSD_ETH = new Token(
  ChainId.ETHEREUM,
  '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

const BUSD_RINKEBY = new Token(
  ChainId.RINKEBY,
  '0x4e2442A6f7AeCE64Ca33d31756B5390860BF973E',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

const BUSD_GOERLI = new Token(
  ChainId.GOERLI,
  '0xb809b9B2dc5e93CB863176Ea2D565425B03c0540',
  18,
  'BUSD',
  'Binance USD',
  'https://www.paxos.com/busd/',
)

export const BUSD: Record<ChainId, Token> = {
  [ChainId.ETHEREUM]: BUSD_ETH,
  [ChainId.RINKEBY]: BUSD_RINKEBY,
  [ChainId.GOERLI]: BUSD_GOERLI,
  [ChainId.BSC]: BUSD_MAINNET,
  [ChainId.BSC_TESTNET]: BUSD_TESTNET,
}

export const ethTokens = {
  wbnb: WETH9[ChainId.ETHEREUM],
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  bnb: new Token(
    ChainId.ETHEREUM,
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    18,
    'ETH',
    'ETH',
    'https://www.binance.com/',
  ),
  cake: CAKE_MAINNET,
  usdt: new Token(
    ChainId.ETHEREUM,
    '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    6,
    'USDT',
    'Tether USD',
    'https://tether.to/'
  ),
  usdc: new Token(
    ChainId.ETHEREUM,
    '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    6,
    'USDC',
    'USD Coin',
    'https://www.centre.io/usdc'
  ),
  tribe: new Token(
    ChainId.ETHEREUM,
    '0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B',
    18,
    'TRIBE',
    'Tribe',
    'https://assets.coingecko.com/coins/images/14575/thumb/tribe.PNG?1617487954'
  ),
  vgx: new Token(
    ChainId.ETHEREUM,
    '0x3C4B6E6e1eA3D4863700D7F76b36B7f3D3f13E3d',
    18,
    'VGX',
    'Voyager Token',
    'https://assets.coingecko.com/coins/images/794/thumb/Voyager-vgx.png?1575693595'
  ),
  paxg: new Token(
    ChainId.ETHEREUM,
    '0x45804880De22913dAFE09f4980848ECE6EcbAf78',
    18,
    'PAXG',
    'PAX Gold',
    'https://assets.coingecko.com/coins/images/9519/thumb/paxg.PNG?1568542565'
  ),
  ach: new Token(
    ChainId.ETHEREUM,
    '0xEd04915c23f00A313a544955524EB7DBD823143d',
    18,
    'ACH',
    'Alchemy Pay',
    'https://assets.coingecko.com/coins/images/12390/thumb/ACH_%281%29.png?1599691266'
  )
}

export const bscTestnetTokens = {
  wbnb: WBNB[ChainId.BSC_TESTNET],
  cake: CAKE_TESTNET,
  busd: BUSD_TESTNET,
  syrup: new Token(
    ChainId.BSC_TESTNET,
    '0xfE1e507CeB712BDe086f3579d2c03248b2dB77f9',
    18,
    'SYRUP',
    'SyrupBar Token',
    'https://pancakeswap.finance/',
  ),
  bake: new Token(
    ChainId.BSC_TESTNET,
    '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    18,
    'BAKE',
    'Bakeryswap Token',
    'https://www.bakeryswap.org/',
  ),
}
