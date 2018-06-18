import {ILocation} from './ILocation';
import {ILocationType} from './ILocationType';

export interface IObject {
    id: number;
    name: string;
    information: string;
    fk_typeid: number;
    fk_locationid: number;
    objectImages: any;
    location: ILocation;
    locationType: ILocationType;
    latitude?: number;
    longitude?: number;
}
