import { StepDto } from "./step.dto";

export interface ApplicationDto {
    id: string;
    name: string;
    steps: StepDto[];
}