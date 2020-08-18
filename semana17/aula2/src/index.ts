import { HashManager } from "./services/HashManager";

const handManager = new HashManager()

function hashin (s: string) {
    const result = handManager.hash(s)
    return result
}

hashin('aasdasd')