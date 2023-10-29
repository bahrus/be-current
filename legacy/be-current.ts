import {define, BeDecoratedProps} from 'be-decorated/DE.js';
import {Actions, VirtualProps} from './types';
import {register} from "be-hive/register.js";
import {BeObservant, IObserve} from 'be-observant/be-observant.js';

export class BeCurrent extends BeObservant implements Actions{
    override async toIObserve(s: string): Promise<IObserve<any, any, Event>> {
        console.log('toIObserve');
        return {
            observeWinObj: 'navigation',
            on: 'navigate',
            eventFilter: {
                info: {
                    path: s
                }
            },
            vft: 'currentEntry.getState|.' + s
        } as IObserve;
        
    }
}

const tagName = 'be-current';

const ifWantsToBe = 'current';

const upgrade = '*';

define<VirtualProps & BeDecoratedProps<VirtualProps, Actions>, Actions>({
    config:{
        tagName,
        propDefaults:{
            upgrade,
            ifWantsToBe,
            forceVisible: ['template', 'script', 'style'],
            finale: 'finale',
            //duplicated settings with beobservant
            virtualProps: ['props'],
            primaryProp: 'props',
            primaryPropReq: true,
        },
        actions: {
            onProps: 'props',
        }
    },
    complexPropDefaults:{
        controller: BeCurrent
    }
});

register(ifWantsToBe, upgrade, tagName);