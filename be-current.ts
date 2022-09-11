import {define, BeDecoratedProps} from 'be-decorated/be-decorated.js';
import {Actions, VirtualProps} from './types';
import {register} from "be-hive/register.js";
import {BeObservant, IObserve} from 'be-observant/be-observant.js';

export class BeCurrent extends BeObservant implements Actions{
    override async toIObserve(s: string): Promise<IObserve<any, any, Event>> {
        
    }
}