import os from 'os'
import {$} from 'zx'
import {cliAgents} from './agents'

const platform = os.platform()
console.log(platform);

const cli = cliAgents[platform]

const cliParam = process.argv.slice(2)
$`${cli} ${cliParam}`
