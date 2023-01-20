import { DocsService } from "./DocsService";

export class DocsController {

    constructor(
        private docsService: DocsService
    ) { }

    public initDocs = this.docsService.initDocs
    public makeDocs = this.docsService.makeDocs

}