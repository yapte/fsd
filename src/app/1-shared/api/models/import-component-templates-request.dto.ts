import { ImportComponentTemplateDto } from "./import-component-templates.dto";

export interface ImportComponentTemplateRequestDto {
    deprecated: string[],
    update: ImportComponentTemplateDto[];
}