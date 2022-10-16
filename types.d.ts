import {BeDecoratedProps, MinimalProxy} from 'be-decorated/types';

export interface VirtualProps extends MinimalProxy{}

export type Proxy = Element & VirtualProps;

export interface ProxyProps extends VirtualProps{
    proxy: Proxy
}

export type PP = ProxyProps;

export interface Actions{
    finale(proxy: Element & VirtualProps, target:Element): void;
}