/// <reference path="typings/main.d.ts" />

declare module "react-list" {
  import * as React from 'react';

  interface IReactListProps extends React.Props<ReactList> {
    axis?: any;
    initialIndex?: Number;
    itemSizeGetter?: Function;
    itemRenderer?: Function;
    itemsRenderer?: Function;
    length?: Number;
    pageSize?:Number;
    scrollParentGetter?: Function;
    threshold?: Number;
    type?: any;
    useTranslate3d?: Boolean;
    s
    // How to force a call to itemRenderer?
    // https://github.com/orgsync/react-list/issues/36
    updateWhenThisValueChanges?: any;
  }

  interface ReactList extends React.ComponentClass<IReactListProps> {
  }
  const ReactList : ReactList;

  export = ReactList;
}