/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../app/hero-detail.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '../../app/hero.service';
import * as import10 from '@angular/router/src/router_state';
import * as import11 from '@angular/common/src/location/location';
import * as import12 from './hero-detail.component.css.shim.ngstyle';
import * as import13 from '../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import14 from '../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import15 from '../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import16 from '@angular/core/src/linker/view_container';
import * as import17 from '@angular/core/src/linker/element_ref';
import * as import18 from '@angular/forms/src/directives/default_value_accessor';
import * as import19 from '@angular/forms/src/directives/control_value_accessor';
import * as import20 from '@angular/forms/src/directives/ng_model';
import * as import21 from '@angular/forms/src/directives/ng_control';
import * as import22 from '@angular/forms/src/directives/ng_control_status';
import * as import23 from '../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import24 from '@angular/core/src/linker/template_ref';
import * as import25 from '@angular/common/src/directives/ng_if';
export class Wrapper_HeroDetailComponent {
  /*private*/ _eventHandler:Function;
  context:import0.HeroDetailComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  constructor(p0:any,p1:any,p2:any) {
    this._changed = false;
    this.context = new import0.HeroDetailComponent(p0,p1,p2);
    this._expr_0 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_hero(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.hero = currValue;
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
var renderType_HeroDetailComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_HeroDetailComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.HeroDetailComponent>;
  _HeroDetailComponent_0_3:Wrapper_HeroDetailComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_HeroDetailComponent_Host0,renderType_HeroDetailComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'my-hero-detail',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_HeroDetailComponent0(this.viewUtils,this,0,this._el_0);
    this._HeroDetailComponent_0_3 = new Wrapper_HeroDetailComponent(this.injectorGet(import9.HeroService,this.parentIndex),this.injectorGet(import10.ActivatedRoute,this.parentIndex),this.injectorGet(import11.Location,this.parentIndex));
    this.compView_0.create(this._HeroDetailComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._HeroDetailComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.HeroDetailComponent) && (0 === requestNodeIndex))) { return this._HeroDetailComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._HeroDetailComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const HeroDetailComponentNgFactory:import8.ComponentFactory<import0.HeroDetailComponent> = new import8.ComponentFactory<import0.HeroDetailComponent>('my-hero-detail',View_HeroDetailComponent_Host0,import0.HeroDetailComponent);
const styles_HeroDetailComponent:any[] = [import12.styles];
class View_HeroDetailComponent1 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _el_6:any;
  _text_7:any;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _text_14:any;
  _el_15:any;
  _DefaultValueAccessor_15_3:import13.Wrapper_DefaultValueAccessor;
  _NG_VALUE_ACCESSOR_15_4:any[];
  _NgModel_15_5:import14.Wrapper_NgModel;
  _NgControl_15_6:any;
  _NgControlStatus_15_7:import15.Wrapper_NgControlStatus;
  _text_16:any;
  _text_17:any;
  _el_18:any;
  _text_19:any;
  _text_20:any;
  /*private*/ _expr_26:any;
  /*private*/ _expr_27:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import16.ViewContainer) {
    super(View_HeroDetailComponent1,renderType_HeroDetailComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_26 = import1.UNINITIALIZED;
    this._expr_27 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'h2',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_0,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_5,'label',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'id: ',(null as any));
    this._text_8 = this.renderer.createText(this._el_5,'',(null as any));
    this._text_9 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_10 = import3.createRenderElement(this.renderer,this._el_0,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_11 = this.renderer.createText(this._el_10,'\n    ',(null as any));
    this._el_12 = import3.createRenderElement(this.renderer,this._el_10,'label',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_13 = this.renderer.createText(this._el_12,'name: ',(null as any));
    this._text_14 = this.renderer.createText(this._el_10,'\n    ',(null as any));
    this._el_15 = import3.createRenderElement(this.renderer,this._el_10,'input',new import3.InlineArray2(2,'placeholder','name'),(null as any));
    this._DefaultValueAccessor_15_3 = new import13.Wrapper_DefaultValueAccessor(this.renderer,new import17.ElementRef(this._el_15));
    this._NG_VALUE_ACCESSOR_15_4 = [this._DefaultValueAccessor_15_3.context];
    this._NgModel_15_5 = new import14.Wrapper_NgModel((null as any),(null as any),(null as any),this._NG_VALUE_ACCESSOR_15_4);
    this._NgControl_15_6 = this._NgModel_15_5.context;
    this._NgControlStatus_15_7 = new import15.Wrapper_NgControlStatus(this._NgControl_15_6);
    this._text_16 = this.renderer.createText(this._el_10,'\n  ',(null as any));
    this._text_17 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_18 = import3.createRenderElement(this.renderer,this._el_0,'button',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_19 = this.renderer.createText(this._el_18,'Back',(null as any));
    this._text_20 = this.renderer.createText(this._el_0,'\n',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_15,new import3.InlineArray8(6,'ngModelChange',(null as any),'input',(null as any),'blur',(null as any)),this.eventHandler(this.handleEvent_15));
    this._NgModel_15_5.subscribe(this,this.eventHandler(this.handleEvent_15),true);
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_18,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_18));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._text_14,
      this._el_15,
      this._text_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._text_20
    ]
    ),[
      disposable_0,
      disposable_1
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import18.DefaultValueAccessor) && (15 === requestNodeIndex))) { return this._DefaultValueAccessor_15_3.context; }
    if (((token === import19.NG_VALUE_ACCESSOR) && (15 === requestNodeIndex))) { return this._NG_VALUE_ACCESSOR_15_4; }
    if (((token === import20.NgModel) && (15 === requestNodeIndex))) { return this._NgModel_15_5.context; }
    if (((token === import21.NgControl) && (15 === requestNodeIndex))) { return this._NgControl_15_6; }
    if (((token === import22.NgControlStatus) && (15 === requestNodeIndex))) { return this._NgControlStatus_15_7.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._DefaultValueAccessor_15_3.ngDoCheck(this,this._el_15,throwOnChange);
    const currVal_15_1_0:any = this.parentView.context.hero.name;
    this._NgModel_15_5.check_model(currVal_15_1_0,throwOnChange,false);
    this._NgModel_15_5.ngDoCheck(this,this._el_15,throwOnChange);
    this._NgControlStatus_15_7.ngDoCheck(this,this._el_15,throwOnChange);
    const currVal_26:any = import3.inlineInterpolate(1,'',this.parentView.context.hero.name,' details!');
    if (import3.checkBinding(throwOnChange,this._expr_26,currVal_26)) {
      this.renderer.setText(this._text_3,currVal_26);
      this._expr_26 = currVal_26;
    }
    const currVal_27:any = import3.inlineInterpolate(1,'',this.parentView.context.hero.id,'');
    if (import3.checkBinding(throwOnChange,this._expr_27,currVal_27)) {
      this.renderer.setText(this._text_8,currVal_27);
      this._expr_27 = currVal_27;
    }
    this._NgControlStatus_15_7.checkHost(this,this,this._el_15,throwOnChange);
  }
  destroyInternal():void {
    this._NgModel_15_5.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_15(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._DefaultValueAccessor_15_3.handleEvent(eventName,$event) && result);
    if ((eventName == 'ngModelChange')) {
      const pd_sub_0:any = ((<any>(this.parentView.context.hero.name = $event)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
  handleEvent_18(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.parentView.context.goBack()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
var renderType_HeroDetailComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.Emulated,styles_HeroDetailComponent,{});
export class View_HeroDetailComponent0 extends import2.AppView<import0.HeroDetailComponent> {
  _anchor_0:any;
  /*private*/ _vc_0:import16.ViewContainer;
  _TemplateRef_0_5:any;
  _NgIf_0_6:import23.Wrapper_NgIf;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_HeroDetailComponent0,renderType_HeroDetailComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_0 = new import16.ViewContainer(0,(null as any),this,this._anchor_0);
    this._TemplateRef_0_5 = new import24.TemplateRef_(this,0,this._anchor_0);
    this._NgIf_0_6 = new import23.Wrapper_NgIf(this._vc_0.vcRef,this._TemplateRef_0_5);
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [this._anchor_0]),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import24.TemplateRef) && (0 === requestNodeIndex))) { return this._TemplateRef_0_5; }
    if (((token === import25.NgIf) && (0 === requestNodeIndex))) { return this._NgIf_0_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this.context.hero;
    this._NgIf_0_6.check_ngIf(currVal_0_0_0,throwOnChange,false);
    this._NgIf_0_6.ngDoCheck(this,this._anchor_0,throwOnChange);
    this._vc_0.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_0.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 0)) { return new View_HeroDetailComponent1(this.viewUtils,this,0,this._anchor_0,this._vc_0); }
    return (null as any);
  }
}