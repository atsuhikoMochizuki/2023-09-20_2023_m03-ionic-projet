import { Intervenant } from "./intervenant";

export interface Session {
    array: any;
    id?: number;
    title?: string;
    description?: string;
    speakers?: number[];
    physicalsSpeakers?: Array<Intervenant>;
  }
  