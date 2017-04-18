// if private data.json exists, exit with error, warn the user to delete old one before trying again
import * as chalk from 'chalk'
import * as request from 'request'
import { config } from './config'
import { getAuthhead } from './data'

//let authheadRaw = getAuthhead();
let authheadRaw = '0100000001f0c981fc4291db2471b8638bd72770aa9cf14085b7fd8f8cd16328b502f4b130000000006a47304402205e6482b785291d5a047a6b0355cdc40cbce24bb44bb5abce80f4200931405e9702202f9a829d08fe7c7fdc35233abe9f24e6fdf01211c237a979d5cb56f9d5e84afc01210300feb24a6b06b0509ef4ca2041be2527f9106675ecb3f0a63b844064349ad9a3ffffffff03405dc600000000001976a91457e006c48ab1f2cfd9e4819b5f183d0a8fc6c47588ac405dc600000000001976a914f8db4656854c9a2bbc9ac6fcf140321094838c1a88ac76653206000000001976a914fc6cc10a33c690609d0abbba9f268bd42e4a448d88ac00000000';

console.log(`Broadcasting the latest authhead to the P2P network via ${config.insight} ...\n`)
console.log(authheadRaw)

request(`${config.insight}api/tx/send`, {method: 'POST', json: true, body: {rawtx: authheadRaw }},
        (err, res, json) => {
          if (err) {
            console.error(chalk.red(err))
            process.exit(1)
          }
          console.log(chalk.inverse(`Response:`))
          console.log(json)
          console.log()
        })
