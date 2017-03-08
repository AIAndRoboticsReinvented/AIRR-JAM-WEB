/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../app/property-summary.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '../../app/property.service';
import * as import10 from '@angular/router/src/router_state';
import * as import11 from '@angular/common/src/location/location';
import * as import12 from './property-summary.component.css.shim.ngstyle';
import * as import13 from '@angular/core/src/linker/view_container';
import * as import14 from '../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import15 from '@angular/core/src/linker/template_ref';
import * as import16 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import17 from '@angular/common/src/directives/ng_for';
import * as import18 from '@angular/core/src/security';
export class Wrapper_PropertySummaryComponent {
  /*private*/ _eventHandler:Function;
  context:import0.PropertySummaryComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  constructor(p0:any,p1:any,p2:any) {
    this._changed = false;
    this.context = new import0.PropertySummaryComponent(p0,p1,p2);
    this._expr_0 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_property(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.property = currValue;
      this._expr_0 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_PropertySummaryComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_PropertySummaryComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.PropertySummaryComponent>;
  _PropertySummaryComponent_0_3:Wrapper_PropertySummaryComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PropertySummaryComponent_Host0,renderType_PropertySummaryComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'property-summary',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_PropertySummaryComponent0(this.viewUtils,this,0,this._el_0);
    this._PropertySummaryComponent_0_3 = new Wrapper_PropertySummaryComponent(this.injectorGet(import9.PropertyService,this.parentIndex),this.injectorGet(import10.ActivatedRoute,this.parentIndex),this.injectorGet(import11.Location,this.parentIndex));
    this.compView_0.create(this._PropertySummaryComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._PropertySummaryComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.PropertySummaryComponent) && (0 === requestNodeIndex))) { return this._PropertySummaryComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
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
export const PropertySummaryComponentNgFactory:import8.ComponentFactory<import0.PropertySummaryComponent> = new import8.ComponentFactory<import0.PropertySummaryComponent>('property-summary',View_PropertySummaryComponent_Host0,import0.PropertySummaryComponent);
const styles_PropertySummaryComponent:any[] = [import12.styles];
class View_PropertySummaryComponent1 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import13.ViewContainer) {
    super(View_PropertySummaryComponent1,renderType_PropertySummaryComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_5 = import1.UNINITIALIZED;
    this._expr_6 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','col-xs-6 col-sm-4'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n          ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'h4',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_5:any = import3.inlineInterpolate(1,'',this.context.$implicit.key,'');
    if (import3.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setText(this._text_3,currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = import3.inlineInterpolate(1,'\n          ',this.context.$implicit.value,'\n        ');
    if (import3.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setText(this._text_4,currVal_6);
      this._expr_6 = currVal_6;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
var renderType_PropertySummaryComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.Emulated,styles_PropertySummaryComponent,{});
export class View_PropertySummaryComponent0 extends import2.AppView<import0.PropertySummaryComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _text_16:any;
  _el_17:any;
  _text_18:any;
  _anchor_19:any;
  /*private*/ _vc_19:import13.ViewContainer;
  _TemplateRef_19_5:any;
  _NgFor_19_6:import14.Wrapper_NgFor;
  _text_20:any;
  _text_21:any;
  _text_22:any;
  _text_23:any;
  _el_24:any;
  _text_25:any;
  _el_26:any;
  _text_27:any;
  _el_28:any;
  _text_29:any;
  _text_30:any;
  _el_31:any;
  _text_32:any;
  _text_33:any;
  _text_34:any;
  _text_35:any;
  _text_36:any;
  _el_37:any;
  _text_38:any;
  _el_39:any;
  /*private*/ _expr_43:any;
  /*private*/ _expr_44:any;
  /*private*/ _expr_45:any;
  /*private*/ _expr_46:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_PropertySummaryComponent0,renderType_PropertySummaryComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
    this._expr_43 = import1.UNINITIALIZED;
    this._expr_44 = import1.UNINITIALIZED;
    this._expr_45 = import1.UNINITIALIZED;
    this._expr_46 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','propertysummary col-xs-12'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','row'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'div',new import3.InlineArray2(2,'class','col-xs-12 col-sm-3'),(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'\n      ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_4,'img',new import3.InlineArray2(2,'class','col-xs-12'),(null as any));
    this._text_7 = this.renderer.createText(this._el_4,'\n    ',(null as any));
    this._text_8 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_9 = import3.createRenderElement(this.renderer,this._el_2,'div',new import3.InlineArray2(2,'class','col-xs-12 col-sm-9'),(null as any));
    this._text_10 = this.renderer.createText(this._el_9,'\n      ',(null as any));
    this._el_11 = import3.createRenderElement(this.renderer,this._el_9,'h2',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_12 = this.renderer.createText(this._el_11,'',(null as any));
    this._text_13 = this.renderer.createText(this._el_9,'\n      ',(null as any));
    this._el_14 = import3.createRenderElement(this.renderer,this._el_9,'h3',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_15 = this.renderer.createText(this._el_14,'',(null as any));
    this._text_16 = this.renderer.createText(this._el_9,'\n      ',(null as any));
    this._el_17 = import3.createRenderElement(this.renderer,this._el_9,'div',new import3.InlineArray2(2,'class','row'),(null as any));
    this._text_18 = this.renderer.createText(this._el_17,'        \n        ',(null as any));
    this._anchor_19 = this.renderer.createTemplateAnchor(this._el_17,(null as any));
    this._vc_19 = new import13.ViewContainer(19,17,this,this._anchor_19);
    this._TemplateRef_19_5 = new import15.TemplateRef_(this,19,this._anchor_19);
    this._NgFor_19_6 = new import14.Wrapper_NgFor(this._vc_19.vcRef,this._TemplateRef_19_5,this.parentView.injectorGet(import16.IterableDiffers,this.parentIndex),this.ref);
    this._text_20 = this.renderer.createText(this._el_17,'\n      ',(null as any));
    this._text_21 = this.renderer.createText(this._el_9,'\n    ',(null as any));
    this._text_22 = this.renderer.createText(this._el_2,'\n  ',(null as any));
    this._text_23 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_24 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','row'),(null as any));
    this._text_25 = this.renderer.createText(this._el_24,'\n    ',(null as any));
    this._el_26 = import3.createRenderElement(this.renderer,this._el_24,'div',new import3.InlineArray2(2,'class','col-xs-12'),(null as any));
    this._text_27 = this.renderer.createText(this._el_26,'\n      ',(null as any));
    this._el_28 = import3.createRenderElement(this.renderer,this._el_26,'h4',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_29 = this.renderer.createText(this._el_28,'Description',(null as any));
    this._text_30 = this.renderer.createText(this._el_26,'\n      ',(null as any));
    this._el_31 = import3.createRenderElement(this.renderer,this._el_26,'p',new import3.InlineArray2(2,'class','about'),(null as any));
    this._text_32 = this.renderer.createText(this._el_31,'',(null as any));
    this._text_33 = this.renderer.createText(this._el_26,'\n    ',(null as any));
    this._text_34 = this.renderer.createText(this._el_24,'\n  ',(null as any));
    this._text_35 = this.renderer.createText(this._el_0,'\n\n',(null as any));
    this._text_36 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_37 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','clearfix'),(null as any));
    this._text_38 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_39 = import3.createRenderElement(this.renderer,parentRenderNode,'br',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._anchor_19,
      this._text_20,
      this._text_21,
      this._text_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._el_26,
      this._text_27,
      this._el_28,
      this._text_29,
      this._text_30,
      this._el_31,
      this._text_32,
      this._text_33,
      this._text_34,
      this._text_35,
      this._text_36,
      this._el_37,
      this._text_38,
      this._el_39
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.TemplateRef) && (19 === requestNodeIndex))) { return this._TemplateRef_19_5; }
    if (((token === import17.NgFor) && (19 === requestNodeIndex))) { return this._NgFor_19_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_19_0_0:any = this.context.property.propertyattributes;
    this._NgFor_19_6.check_ngForOf(currVal_19_0_0,throwOnChange,false);
    this._NgFor_19_6.ngDoCheck(this,this._anchor_19,throwOnChange);
    this._vc_19.detectChangesInNestedViews(throwOnChange);
    const currVal_43:any = import3.inlineInterpolate(1,'',this.context.property.masterimage,'');
    if (import3.checkBinding(throwOnChange,this._expr_43,currVal_43)) {
      this.renderer.setElementProperty(this._el_6,'src',this.viewUtils.sanitizer.sanitize(import18.SecurityContext.URL,currVal_43));
      this._expr_43 = currVal_43;
    }
    const currVal_44:any = import3.inlineInterpolate(1,'',this.context.property.name,'');
    if (import3.checkBinding(throwOnChange,this._expr_44,currVal_44)) {
      this.renderer.setText(this._text_12,currVal_44);
      this._expr_44 = currVal_44;
    }
    const currVal_45:any = import3.inlineInterpolate(1,'',this.context.property.location,'');
    if (import3.checkBinding(throwOnChange,this._expr_45,currVal_45)) {
      this.renderer.setText(this._text_15,currVal_45);
      this._expr_45 = currVal_45;
    }
    const currVal_46:any = import3.inlineInterpolate(1,'',this.context.property.description,'');
    if (import3.checkBinding(throwOnChange,this._expr_46,currVal_46)) {
      this.renderer.setText(this._text_32,currVal_46);
      this._expr_46 = currVal_46;
    }
  }
  destroyInternal():void {
    this._vc_19.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 19)) { return new View_PropertySummaryComponent1(this.viewUtils,this,19,this._anchor_19,this._vc_19); }
    return (null as any);
  }
}