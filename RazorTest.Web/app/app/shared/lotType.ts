import { Contact } from "./contact";
import { PickedDate } from './date';

export interface LotType {
    LotTypeId: number;
    Title: string;
    Description: string;
    Model: string;
    ModelDescription: string;
    AgentUserCode: string;
    AgentName: string;
    PublishedDate: PickedDate;
    LotPrice: number;
    Color: string;
    Contact: Contact;
}