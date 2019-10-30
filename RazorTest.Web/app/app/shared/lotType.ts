import { Contact } from "./contact";
import { PickedDate } from './date';

export interface LotType {
    lotTypeId: number;
    title: string;
    description: string;
    model: string;
    agentUserCode: string;
    publishedDate: PickedDate;
    lotPrice: number;
    color: string;
    contact: Contact;
}