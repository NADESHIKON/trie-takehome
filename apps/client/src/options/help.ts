import { Option, RegisterProvider } from "func"
import pkg from "../../package.json"

@Option({
  name: "help",
  alias: "h",
  description: "help",
})
export class Help {
  constructor(regs: RegisterProvider) {
    const mapped = {
      add: "add <keyword>",
      remove: "remove <keyword>",
      list: "list",
      search: "search <keyword>",
      suggest: "suggest <prefix>"
    };

    console.log(pkg.name.toUpperCase())
    console.log("")

    regs.commands.forEach(data => {
      console.log(`  ${mapped[data.name]} ${Help.description(data.description)}`)
    })

    console.log("")

    regs.options.forEach(data => {
      const alias = data.alias ? ` -${data.alias}` : ""
      console.log(`  --${data.name}${alias} \<option\>${Help.description(data.description)}`)
    })

    console.log("")
  }

  private static description(desc: string): string {
    return desc ? ` |  ${desc}` : ""
  }
}
