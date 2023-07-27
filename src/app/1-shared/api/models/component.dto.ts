import { PropertyDto } from "./property.dto"
import { SignalDto } from "./signal.dto";

export interface ComponentDto {
    public_id: string;
    type_public_id: string;
    name: string;
    ui_properties: string;
    properties: PropertyDto[],
    signals: SignalDto[];
}