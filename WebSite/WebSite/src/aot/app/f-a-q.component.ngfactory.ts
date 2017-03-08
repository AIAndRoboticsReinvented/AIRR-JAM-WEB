/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../app/f-a-q.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../app/pagetitle.component';
import * as import9 from './pagetitle.component.ngfactory';
export class Wrapper_FAQComponent {
  /*private*/ _eventHandler:Function;
  context:import0.FAQComponent;
  /*private*/ _changed:boolean;
  constructor() {
    this._changed = false;
    this.context = new import0.FAQComponent();
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
var renderType_FAQComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_FAQComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.FAQComponent>;
  _FAQComponent_0_3:Wrapper_FAQComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_FAQComponent_Host0,renderType_FAQComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'faq',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_FAQComponent0(this.viewUtils,this,0,this._el_0);
    this._FAQComponent_0_3 = new Wrapper_FAQComponent();
    this.compView_0.create(this._FAQComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._FAQComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.FAQComponent) && (0 === requestNodeIndex))) { return this._FAQComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._FAQComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const FAQComponentNgFactory:import7.ComponentFactory<import0.FAQComponent> = new import7.ComponentFactory<import0.FAQComponent>('faq',View_FAQComponent_Host0,import0.FAQComponent);
const styles_FAQComponent:any[] = ([] as any[]);
var renderType_FAQComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_FAQComponent,{});
export class View_FAQComponent0 extends import1.AppView<import0.FAQComponent> {
  _text_0:any;
  _el_1:any;
  compView_1:import1.AppView<import8.PageTitleComponent>;
  _PageTitleComponent_1_3:import9.Wrapper_PageTitleComponent;
  _text_2:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_FAQComponent0,renderType_FAQComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n      ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'pagetitle',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_1 = new import9.View_PageTitleComponent0(this.viewUtils,this,1,this._el_1);
    this._PageTitleComponent_1_3 = new import9.Wrapper_PageTitleComponent();
    this.compView_1.create(this._PageTitleComponent_1_3.context);
    this._text_2 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import8.PageTitleComponent) && (1 === requestNodeIndex))) { return this._PageTitleComponent_1_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:any = this.context.title;
    this._PageTitleComponent_1_3.check_title(currVal_1_0_0,throwOnChange,false);
    this._PageTitleComponent_1_3.ngDoCheck(this,this._el_1,throwOnChange);
    this.compView_1.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_1.destroy();
  }
}