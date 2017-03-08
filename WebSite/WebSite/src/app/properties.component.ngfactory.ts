/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './properties.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from './property.service';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/router/src/router';
import * as import10 from './properties.component.css.shim.ngstyle';
import * as import11 from './property-summary.component';
import * as import12 from './property-summary.component.ngfactory';
import * as import13 from '@angular/core/src/linker/view_container';
import * as import14 from '@angular/router/src/router_state';
import * as import15 from '@angular/common/src/location/location';
import * as import16 from '../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import17 from '@angular/core/src/linker/template_ref';
import * as import18 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import19 from '@angular/common/src/directives/ng_for';
export class Wrapper_PropertiesComponent {
  /*private*/ _eventHandler:Function;
  context:import0.PropertiesComponent;
  /*private*/ _changed:boolean;
  constructor(p0:any,p1:any) {
    this._changed = false;
    this.context = new import0.PropertiesComponent(p0,p1);
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
var renderType_PropertiesComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_PropertiesComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.PropertiesComponent>;
  _PropertyService_0_3:import5.PropertyService;
  _PropertiesComponent_0_4:Wrapper_PropertiesComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PropertiesComponent_Host0,renderType_PropertiesComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'properties',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_PropertiesComponent0(this.viewUtils,this,0,this._el_0);
    this._PropertyService_0_3 = new import5.PropertyService();
    this._PropertiesComponent_0_4 = new Wrapper_PropertiesComponent(this.injectorGet(import9.Router,this.parentIndex),this._PropertyService_0_3);
    this.compView_0.create(this._PropertiesComponent_0_4.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._PropertiesComponent_0_4.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import5.PropertyService) && (0 === requestNodeIndex))) { return this._PropertyService_0_3; }
    if (((token === import0.PropertiesComponent) && (0 === requestNodeIndex))) { return this._PropertiesComponent_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._PropertiesComponent_0_4.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const PropertiesComponentNgFactory:import8.ComponentFactory<import0.PropertiesComponent> = new import8.ComponentFactory<import0.PropertiesComponent>('properties',View_PropertiesComponent_Host0,import0.PropertiesComponent);
const styles_PropertiesComponent:any[] = [import10.styles];
class View_PropertiesComponent1 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import11.PropertySummaryComponent>;
  _PropertySummaryComponent_0_3:import12.Wrapper_PropertySummaryComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import13.ViewContainer) {
    super(View_PropertiesComponent1,renderType_PropertiesComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'property-summary',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_0 = new import12.View_PropertySummaryComponent0(this.viewUtils,this,0,this._el_0);
    this._PropertySummaryComponent_0_3 = new import12.Wrapper_PropertySummaryComponent(this.parentView.injectorGet(import5.PropertyService,this.parentIndex),this.parentView.injectorGet(import14.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import15.Location,this.parentIndex));
    this.compView_0.create(this._PropertySummaryComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import11.PropertySummaryComponent) && (0 === requestNodeIndex))) { return this._PropertySummaryComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.context.$implicit;
    this._PropertySummaryComponent_0_3.check_property(currVal_0_0_0,throwOnChange,false);
    this._PropertySummaryComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
var renderType_PropertiesComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.Emulated,styles_PropertiesComponent,{});
export class View_PropertiesComponent0 extends import1.AppView<import0.PropertiesComponent> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  _anchor_3:any;
  /*private*/ _vc_3:import13.ViewContainer;
  _TemplateRef_3_5:any;
  _NgFor_3_6:import16.Wrapper_NgFor;
  _text_4:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PropertiesComponent0,renderType_PropertiesComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'h2',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'Available Properties',(null as any));
    this._text_2 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._anchor_3 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_3 = new import13.ViewContainer(3,(null as any),this,this._anchor_3);
    this._TemplateRef_3_5 = new import17.TemplateRef_(this,3,this._anchor_3);
    this._NgFor_3_6 = new import16.Wrapper_NgFor(this._vc_3.vcRef,this._TemplateRef_3_5,this.parentView.injectorGet(import18.IterableDiffers,this.parentIndex),this.ref);
    this._text_4 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._text_2,
      this._anchor_3,
      this._text_4
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.TemplateRef) && (3 === requestNodeIndex))) { return this._TemplateRef_3_5; }
    if (((token === import19.NgFor) && (3 === requestNodeIndex))) { return this._NgFor_3_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_3_0_0:any = this.context.properties;
    this._NgFor_3_6.check_ngForOf(currVal_3_0_0,throwOnChange,false);
    this._NgFor_3_6.ngDoCheck(this,this._anchor_3,throwOnChange);
    this._vc_3.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_3.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 3)) { return new View_PropertiesComponent1(this.viewUtils,this,3,this._anchor_3,this._vc_3); }
    return (null as any);
  }
}