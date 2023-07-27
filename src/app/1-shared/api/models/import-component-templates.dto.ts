export interface ImportComponentTemplateDto {
    publicId: string;
    name: string;
    description: string;
    labels: string[],
    type: string,
    inPortsCnt: number,
    outPortsCnt: number,
    uiProperties: string,
    image: string,
}