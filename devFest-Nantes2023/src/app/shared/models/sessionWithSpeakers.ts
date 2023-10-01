import { Intervenant } from "./intervenant";

export interface SessionwithSpeakers {
    array: any;
    id?: number
    title?: string
    description?: string
    speakers?: Array<Intervenant>
}