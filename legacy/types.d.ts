import {BeDecoratedProps, MinimalProxy} from 'be-decorated/types';
import {EndUserProps as BeObservantEndUserProps, Actions as BeObservantActions} from 'be-observant/types';

export interface EndUserProps extends BeObservantEndUserProps{}

export interface VirtualProps extends EndUserProps, MinimalProxy{}

export type Proxy = Element & VirtualProps;

export interface ProxyProps extends VirtualProps{
    proxy: Proxy
}

export type PP = ProxyProps;

export interface Actions extends BeObservantActions{
    finale(proxy: Element & VirtualProps, target:Element): void;
}