export interface ComponentTemplateDto {
    publicId: string;
    name: string;
    description: string;
    labels: string[],
    type: string,
    inPortsCnt: number,
    outPortsCnt: number,
    updatedAt: string,
    updatedBy: string,
    imageId: string,
    uiProperties: string,
}