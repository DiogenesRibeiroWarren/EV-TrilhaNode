import { DocsController } from "./DocsController";
import { DocsService } from "./DocsService";

const docsController = new DocsController(
    new DocsService()
)

export { docsController }