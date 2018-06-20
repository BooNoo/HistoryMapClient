import {ILocation} from './ILocation';
import {ILocationType} from './ILocationType';
import {IObjectImage} from './IObjectImage';
import {IObjectVideo} from './IObjectVideo';
import {IObjectAudio} from './IObjectAudio';

export interface IObject {
    id: number;
    name: string;
    information: string;
    fk_typeid: number;
    fk_locationid: number;
    objectImages: [IObjectImage];
    objectVideos: [IObjectVideo];
    objectAudios: [IObjectAudio];
    location: ILocation;
    locationType: ILocationType;
    latitude?: number;
    longitude?: number;
}
