export type MaterialColor = 'primary' | 'accent' | 'warn';
export type Inputs = Array<{preDefData: number, hint: string, dvdrColor: string, interval: Range, toolTip: string}>;
export type Range = Array<number>;
export type AttrSetter = [string, string | number];
export type ArrAttrSetter = AttrSetter[];
export type AnimationT = string | { [key: string]: string | number; }
export type AnimationStylesT = string | { [key: string]: string | number; } | (string | { [key: string]: string | number; })[];


//Copyright (c) 2017 Alex Tranchenko. All rights reserved.
//MIT License.
