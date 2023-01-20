import YAML from "yamljs";
import SwaggerUI from 'swagger-ui-express'

import { join } from 'path'
import { injectable } from "tsyringe";

@injectable()
export class DocsService {

    public initDocs = SwaggerUI.serve
    public makeDocs = SwaggerUI.setup(
        YAML.load(join(__dirname, '..', '..', 'docs', 'index.yaml'))
    )

}