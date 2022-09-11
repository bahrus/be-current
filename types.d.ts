import {BeDecoratedProps, MinimalProxy} from 'be-decorated/types';

export interface VirtualProps extends MinimalProxy{}

export type Proxy = Element & VirtualProps;

export interface ProxyProps extends VirtualProps{
    proxy: Proxy
}

export type PP = ProxyProps;

export interface Actions{
    intro(proxy: Element & VirtualProps, target: Element, beDecorProps: BeDecoratedProps): void;
    finale(proxy: Element & VirtualProps, target:Element): void;
}