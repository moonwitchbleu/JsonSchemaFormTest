import { Contact } from "./contact";
import { PickedDate } from './date';

export interface LotType {
    LotTypeId: number;
    Title: string;
    Description: string;
    Model: string;
    AgentUserCode: string;
    PublishedDate: PickedDate;
    LotPrice: number;
    Color: string;
    Contact: Contact;
}