import { StepBrief } from "./step-brief";

export interface Application {
    id: string;
    name: string;
    steps: StepBrief[];
}