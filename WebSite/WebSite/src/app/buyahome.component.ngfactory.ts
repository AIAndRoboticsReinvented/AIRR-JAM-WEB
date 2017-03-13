/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './buyahome.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from './pagetitle.component';
import * as import9 from './pagetitle.component.ngfactory';
import * as import10 from './properties.component';
import * as import11 from './property.service';
import * as import12 from './properties.component.ngfactory';
import * as import13 from '@angular/router/src/router';
export class Wrapper_BuyAHomeComponent {
  /*private*/ _eventHandler:Function;
  context:import0.BuyAHomeComponent;
  /*private*/ _changed:boolean;
  constructor() {
    this._changed = false;
    this.context = new import0.BuyAHomeComponent();
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_BuyAHomeComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_BuyAHomeComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.BuyAHomeComponent>;
  _BuyAHomeComponent_0_3:Wrapper_BuyAHomeComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_BuyAHomeComponent_Host0,renderType_BuyAHomeComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'buyahome',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_BuyAHomeComponent0(this.viewUtils,this,0,this._el_0);
    this._BuyAHomeComponent_0_3 = new Wrapper_BuyAHomeComponent();
    this.compView_0.create(this._BuyAHomeComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._BuyAHomeComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.BuyAHomeComponent) && (0 === requestNodeIndex))) { return this._BuyAHomeComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._BuyAHomeComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const BuyAHomeComponentNgFactory:import7.ComponentFactory<import0.BuyAHomeComponent> = new import7.ComponentFactory<import0.BuyAHomeComponent>('buyahome',View_BuyAHomeComponent_Host0,import0.BuyAHomeComponent);
const styles_BuyAHomeComponent:any[] = ([] as any[]);
var renderType_BuyAHomeComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_BuyAHomeComponent,{});
export class View_BuyAHomeComponent0 extends import1.AppView<import0.BuyAHomeComponent> {
  _text_0:any;
  _el_1:any;
  compView_1:import1.AppView<import8.PageTitleComponent>;
  _PageTitleComponent_1_3:import9.Wrapper_PageTitleComponent;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  _el_5:any;
  compView_5:import1.AppView<import10.PropertiesComponent>;
  _PropertyService_5_3:import11.PropertyService;
  _PropertiesComponent_5_4:import12.Wrapper_PropertiesComponent;
  _text_6:any;
  _text_7:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_BuyAHomeComponent0,renderType_BuyAHomeComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n      ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'pagetitle',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_1 = new import9.View_PageTitleComponent0(this.viewUtils,this,1,this._el_1);
    this._PageTitleComponent_1_3 = new import9.Wrapper_PageTitleComponent();
    this.compView_1.create(this._PageTitleComponent_1_3.context);
    this._text_2 = this.renderer.createText(parentRenderNode,'\n\n      ',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','container'),(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'\n        ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_3,'properties',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_5 = new import12.View_PropertiesComponent0(this.viewUtils,this,5,this._el_5);
    this._PropertyService_5_3 = new import11.PropertyService();
    this._PropertiesComponent_5_4 = new import12.Wrapper_PropertiesComponent(this.parentView.injectorGet(import13.Router,this.parentIndex),this._PropertyService_5_3);
    this.compView_5.create(this._PropertiesComponent_5_4.context);
    this._text_6 = this.renderer.createText(this._el_3,'\n      ',(null as any));
    this._text_7 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import8.PageTitleComponent) && (1 === requestNodeIndex))) { return this._PageTitleComponent_1_3.context; }
    if (((token === import11.PropertyService) && (5 === requestNodeIndex))) { return this._PropertyService_5_3; }
    if (((token === import10.PropertiesComponent) && (5 === requestNodeIndex))) { return this._PropertiesComponent_5_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = this.context.title;
    this._PageTitleComponent_1_3.check_title(currVal_1_0_0,throwOnChange,false);
    this._PageTitleComponent_1_3.ngDoCheck(this,this._el_1,throwOnChange);
    this._PropertiesComponent_5_4.ngDoCheck(this,this._el_5,throwOnChange);
    this.compView_1.internalDetectChanges(throwOnChange);
    this.compView_5.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_1.destroy();
    this.compView_5.destroy();
  }
}