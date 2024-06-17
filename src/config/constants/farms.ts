import { serializeTokens } from 'utils/serializeTokens'
import { ethTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens(ethTokens)

export const CAKE_BNB_LP_MAINNET = '0x8db8B17c10E4b0d690e03ADF038d242C14AC13d8'

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
  {
    pid: 0,
    v1pid: 0,
    lpSymbol: 'GHOSTTY',
    lpAddresses: {
      97: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
      1: '0x8452c14f610DaBd23C3da8A810aBB55E71F137d3',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.usdc,
  },
  {
    pid: 1,
    v1pid: 1,
    lpSymbol: 'GHOSTTY-ETH LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      1: CAKE_BNB_LP_MAINNET,
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 2,
    v1pid: 2,
    lpSymbol: 'USDC-ETH LP',
    lpAddresses: {
      97: '0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe',
      1: '0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc',
    },
    token: serializedTokens.usdc,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 3,
    v1pid: 3,
    lpSymbol: 'GHOSTTY-USDC LP',
    lpAddresses: {
      97: '0x25293964dcaFd8a6cDf97AFF8b6559FD4A5Af864',
      1: '0xE74F2b213511166741e23eA179Bb377097A818d7',
    },
    boosted: true,
    token: serializedTokens.cake,
    quoteToken: serializedTokens.usdc,
  },
]

export default farms
