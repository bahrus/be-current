import { define } from 'be-decorated/be-decorated.js';
import { register } from "be-hive/register.js";
import { BeObservant } from 'be-observant/be-observant.js';
export class BeCurrent extends BeObservant {
    async toIObserve(s) {
        return {
            observeWinObj: 'navigation',
            on: 'navigate',
            eventFilter: {
                info: {
                    path: s
                }
            },
            vft: 'currentState.getState|.' + s
        };
    }
}
const tagName = 'be-current';
const ifWantsToBe = 'current';
const upgrade = '*';
define({
    config: {
        tagName,
        propDefaults: {
            upgrade,
            ifWantsToBe,
            intro: 'intro',
            noParse: true,
            forceVisible: ['template', 'script', 'style'],
            finale: 'finale',
            virtualProps: []
        }
    },
    complexPropDefaults: {
        controller: BeCurrent
    }
});
register(ifWantsToBe, upgrade, tagName);
