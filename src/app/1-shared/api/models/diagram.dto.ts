import { ComponentDto } from "./component.dto"
import { ConnectionDto } from "./connection.dto"

export interface DiagramDto {
    public_id: string;
    name: string;
    description: string;
    ui_properties: string;
    components: ComponentDto[];
    connections: ConnectionDto[];
}