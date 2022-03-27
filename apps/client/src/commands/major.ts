import { CommandMajor } from 'func'

@CommandMajor()
export class Major {
  constructor() {
    console.log("Please use option `-h` or `--help` to access the help menu");
  }
}
