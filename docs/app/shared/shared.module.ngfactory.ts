/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '../../../app/shared/shared.module';
import * as import2 from '@angular/common';
import * as import3 from '@angular/forms';
import * as import4 from '@angular/material';
import * as import5 from '@angular/http';
import * as import6 from '../../node_modules/@angular/material/typings/index.ngfactory';
import * as import7 from '@angular/platform-browser';
class SharedModuleInjector extends import0.ɵNgModuleInjector<import1.SharedModule> {
  _CommonModule_0:import2.CommonModule;
  _ɵba_1:import3.ɵba;
  _FormsModule_2:import3.FormsModule;
  _PortalModule_3:import4.PortalModule;
  _OverlayModule_4:import4.OverlayModule;
  _PlatformModule_5:import4.PlatformModule;
  _A11yModule_6:import4.A11yModule;
  _CompatibilityModule_7:import4.CompatibilityModule;
  _MdDialogModule_8:import4.MdDialogModule;
  _MdRippleModule_9:import4.MdRippleModule;
  _MdSelectionModule_10:import4.MdSelectionModule;
  _MdOptionModule_11:import4.MdOptionModule;
  _MdAutocompleteModule_12:import4.MdAutocompleteModule;
  _StyleModule_13:import4.StyleModule;
  _MdButtonModule_14:import4.MdButtonModule;
  _MdButtonToggleModule_15:import4.MdButtonToggleModule;
  _MdCardModule_16:import4.MdCardModule;
  _MdChipsModule_17:import4.MdChipsModule;
  _MdCheckboxModule_18:import4.MdCheckboxModule;
  _MdLineModule_19:import4.MdLineModule;
  _MdGridListModule_20:import4.MdGridListModule;
  _HttpModule_21:import5.HttpModule;
  _MdIconModule_22:import4.MdIconModule;
  _MdInputModule_23:import4.MdInputModule;
  _MdListModule_24:import4.MdListModule;
  _MdMenuModule_25:import4.MdMenuModule;
  _MdProgressBarModule_26:import4.MdProgressBarModule;
  _MdProgressSpinnerModule_27:import4.MdProgressSpinnerModule;
  _MdRadioModule_28:import4.MdRadioModule;
  _MdSelectModule_29:import4.MdSelectModule;
  _MdSidenavModule_30:import4.MdSidenavModule;
  _RtlModule_31:import4.RtlModule;
  _MdSliderModule_32:import4.MdSliderModule;
  _MdSlideToggleModule_33:import4.MdSlideToggleModule;
  _MdSnackBarModule_34:import4.MdSnackBarModule;
  _ObserveContentModule_35:import4.ObserveContentModule;
  _MdTabsModule_36:import4.MdTabsModule;
  _MdToolbarModule_37:import4.MdToolbarModule;
  _MdTooltipModule_38:import4.MdTooltipModule;
  _MaterialModule_39:import4.MaterialModule;
  _SharedModule_40:import1.SharedModule;
  __NgLocalization_41:import2.NgLocaleLocalization;
  __ɵi_42:import3.ɵi;
  __OverlayContainer_43:any;
  __ScrollDispatcher_44:any;
  __ɵh_45:any;
  __ɵk_46:import4.ɵk;
  __Overlay_47:import4.Overlay;
  __Platform_48:import4.Platform;
  __InteractivityChecker_49:import4.InteractivityChecker;
  __FocusTrapFactory_50:import4.FocusTrapFactory;
  __LiveAnnouncer_51:any;
  __MdDialog_52:import4.MdDialog;
  __FocusOriginMonitor_53:any;
  __UniqueSelectionDispatcher_54:any;
  __BrowserXhr_55:import5.BrowserXhr;
  __ResponseOptions_56:import5.BaseResponseOptions;
  __XSRFStrategy_57:any;
  __XHRBackend_58:import5.XHRBackend;
  __RequestOptions_59:import5.BaseRequestOptions;
  __Http_60:any;
  __MdIconRegistry_61:any;
  __HAMMER_GESTURE_CONFIG_62:import4.GestureConfig;
  __MdSnackBar_63:import4.MdSnackBar;
  constructor(parent:import0.Injector) {
    super(parent,[
      import6.MdDialogContainerNgFactory,
      import6.MdSnackBarContainerNgFactory,
      import6.SimpleSnackBarNgFactory,
      import6.TooltipComponentNgFactory
    ]
    ,([] as any[]));
  }
  get _NgLocalization_41():import2.NgLocaleLocalization {
    if ((this.__NgLocalization_41 == null)) { (this.__NgLocalization_41 = new import2.NgLocaleLocalization(this.parent.get(import0.LOCALE_ID))); }
    return this.__NgLocalization_41;
  }
  get _ɵi_42():import3.ɵi {
    if ((this.__ɵi_42 == null)) { (this.__ɵi_42 = new import3.ɵi()); }
    return this.__ɵi_42;
  }
  get _OverlayContainer_43():any {
    if ((this.__OverlayContainer_43 == null)) { (this.__OverlayContainer_43 = import4.ɵa(this.parent.get(import4.OverlayContainer,(null as any)))); }
    return this.__OverlayContainer_43;
  }
  get _ScrollDispatcher_44():any {
    if ((this.__ScrollDispatcher_44 == null)) { (this.__ScrollDispatcher_44 = import4.ɵc(this.parent.get(import4.ScrollDispatcher,(null as any)),this.parent.get(import0.NgZone))); }
    return this.__ScrollDispatcher_44;
  }
  get _ɵh_45():any {
    if ((this.__ɵh_45 == null)) { (this.__ɵh_45 = import4.ɵi(this.parent.get(import4.ɵh,(null as any)),this._ScrollDispatcher_44)); }
    return this.__ɵh_45;
  }
  get _ɵk_46():import4.ɵk {
    if ((this.__ɵk_46 == null)) { (this.__ɵk_46 = new import4.ɵk(this._ɵh_45)); }
    return this.__ɵk_46;
  }
  get _Overlay_47():import4.Overlay {
    if ((this.__Overlay_47 == null)) { (this.__Overlay_47 = new import4.Overlay(this._OverlayContainer_43,this.componentFactoryResolver,this._ɵk_46,this.parent.get(import0.ApplicationRef),this,this.parent.get(import0.NgZone))); }
    return this.__Overlay_47;
  }
  get _Platform_48():import4.Platform {
    if ((this.__Platform_48 == null)) { (this.__Platform_48 = new import4.Platform()); }
    return this.__Platform_48;
  }
  get _InteractivityChecker_49():import4.InteractivityChecker {
    if ((this.__InteractivityChecker_49 == null)) { (this.__InteractivityChecker_49 = new import4.InteractivityChecker(this._Platform_48)); }
    return this.__InteractivityChecker_49;
  }
  get _FocusTrapFactory_50():import4.FocusTrapFactory {
    if ((this.__FocusTrapFactory_50 == null)) { (this.__FocusTrapFactory_50 = new import4.FocusTrapFactory(this._InteractivityChecker_49,this.parent.get(import0.NgZone))); }
    return this.__FocusTrapFactory_50;
  }
  get _LiveAnnouncer_51():any {
    if ((this.__LiveAnnouncer_51 == null)) { (this.__LiveAnnouncer_51 = import4.ɵf(this.parent.get(import4.LiveAnnouncer,(null as any)),this.parent.get(import4.LIVE_ANNOUNCER_ELEMENT_TOKEN,(null as any)))); }
    return this.__LiveAnnouncer_51;
  }
  get _MdDialog_52():import4.MdDialog {
    if ((this.__MdDialog_52 == null)) { (this.__MdDialog_52 = new import4.MdDialog(this._Overlay_47,this,this.parent.get(import4.MdDialog,(null as any)))); }
    return this.__MdDialog_52;
  }
  get _FocusOriginMonitor_53():any {
    if ((this.__FocusOriginMonitor_53 == null)) { (this.__FocusOriginMonitor_53 = import4.FOCUS_ORIGIN_MONITOR_PROVIDER_FACTORY(this.parent.get(import4.FocusOriginMonitor,(null as any)),this.parent.get(import0.NgZone))); }
    return this.__FocusOriginMonitor_53;
  }
  get _UniqueSelectionDispatcher_54():any {
    if ((this.__UniqueSelectionDispatcher_54 == null)) { (this.__UniqueSelectionDispatcher_54 = import4.ɵg(this.parent.get(import4.UniqueSelectionDispatcher,(null as any)))); }
    return this.__UniqueSelectionDispatcher_54;
  }
  get _BrowserXhr_55():import5.BrowserXhr {
    if ((this.__BrowserXhr_55 == null)) { (this.__BrowserXhr_55 = new import5.BrowserXhr()); }
    return this.__BrowserXhr_55;
  }
  get _ResponseOptions_56():import5.BaseResponseOptions {
    if ((this.__ResponseOptions_56 == null)) { (this.__ResponseOptions_56 = new import5.BaseResponseOptions()); }
    return this.__ResponseOptions_56;
  }
  get _XSRFStrategy_57():any {
    if ((this.__XSRFStrategy_57 == null)) { (this.__XSRFStrategy_57 = import5.ɵb()); }
    return this.__XSRFStrategy_57;
  }
  get _XHRBackend_58():import5.XHRBackend {
    if ((this.__XHRBackend_58 == null)) { (this.__XHRBackend_58 = new import5.XHRBackend(this._BrowserXhr_55,this._ResponseOptions_56,this._XSRFStrategy_57)); }
    return this.__XHRBackend_58;
  }
  get _RequestOptions_59():import5.BaseRequestOptions {
    if ((this.__RequestOptions_59 == null)) { (this.__RequestOptions_59 = new import5.BaseRequestOptions()); }
    return this.__RequestOptions_59;
  }
  get _Http_60():any {
    if ((this.__Http_60 == null)) { (this.__Http_60 = import5.ɵc(this._XHRBackend_58,this._RequestOptions_59)); }
    return this.__Http_60;
  }
  get _MdIconRegistry_61():any {
    if ((this.__MdIconRegistry_61 == null)) { (this.__MdIconRegistry_61 = import4.ICON_REGISTRY_PROVIDER_FACTORY(this.parent.get(import4.MdIconRegistry,(null as any)),this._Http_60,this.parent.get(import7.DomSanitizer))); }
    return this.__MdIconRegistry_61;
  }
  get _HAMMER_GESTURE_CONFIG_62():import4.GestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_62 == null)) { (this.__HAMMER_GESTURE_CONFIG_62 = new import4.GestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_62;
  }
  get _MdSnackBar_63():import4.MdSnackBar {
    if ((this.__MdSnackBar_63 == null)) { (this.__MdSnackBar_63 = new import4.MdSnackBar(this._Overlay_47,this._LiveAnnouncer_51,this.parent.get(import4.MdSnackBar,(null as any)))); }
    return this.__MdSnackBar_63;
  }
  createInternal():import1.SharedModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ɵba_1 = new import3.ɵba();
    this._FormsModule_2 = new import3.FormsModule();
    this._PortalModule_3 = new import4.PortalModule();
    this._OverlayModule_4 = new import4.OverlayModule();
    this._PlatformModule_5 = new import4.PlatformModule();
    this._A11yModule_6 = new import4.A11yModule();
    this._CompatibilityModule_7 = new import4.CompatibilityModule(this.parent.get(import7.DOCUMENT,(null as any)));
    this._MdDialogModule_8 = new import4.MdDialogModule();
    this._MdRippleModule_9 = new import4.MdRippleModule();
    this._MdSelectionModule_10 = new import4.MdSelectionModule();
    this._MdOptionModule_11 = new import4.MdOptionModule();
    this._MdAutocompleteModule_12 = new import4.MdAutocompleteModule();
    this._StyleModule_13 = new import4.StyleModule();
    this._MdButtonModule_14 = new import4.MdButtonModule();
    this._MdButtonToggleModule_15 = new import4.MdButtonToggleModule();
    this._MdCardModule_16 = new import4.MdCardModule();
    this._MdChipsModule_17 = new import4.MdChipsModule();
    this._MdCheckboxModule_18 = new import4.MdCheckboxModule();
    this._MdLineModule_19 = new import4.MdLineModule();
    this._MdGridListModule_20 = new import4.MdGridListModule();
    this._HttpModule_21 = new import5.HttpModule();
    this._MdIconModule_22 = new import4.MdIconModule();
    this._MdInputModule_23 = new import4.MdInputModule();
    this._MdListModule_24 = new import4.MdListModule();
    this._MdMenuModule_25 = new import4.MdMenuModule();
    this._MdProgressBarModule_26 = new import4.MdProgressBarModule();
    this._MdProgressSpinnerModule_27 = new import4.MdProgressSpinnerModule();
    this._MdRadioModule_28 = new import4.MdRadioModule();
    this._MdSelectModule_29 = new import4.MdSelectModule();
    this._MdSidenavModule_30 = new import4.MdSidenavModule();
    this._RtlModule_31 = new import4.RtlModule();
    this._MdSliderModule_32 = new import4.MdSliderModule();
    this._MdSlideToggleModule_33 = new import4.MdSlideToggleModule();
    this._MdSnackBarModule_34 = new import4.MdSnackBarModule();
    this._ObserveContentModule_35 = new import4.ObserveContentModule();
    this._MdTabsModule_36 = new import4.MdTabsModule();
    this._MdToolbarModule_37 = new import4.MdToolbarModule();
    this._MdTooltipModule_38 = new import4.MdTooltipModule();
    this._MaterialModule_39 = new import4.MaterialModule();
    this._SharedModule_40 = new import1.SharedModule();
    return this._SharedModule_40;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.ɵba)) { return this._ɵba_1; }
    if ((token === import3.FormsModule)) { return this._FormsModule_2; }
    if ((token === import4.PortalModule)) { return this._PortalModule_3; }
    if ((token === import4.OverlayModule)) { return this._OverlayModule_4; }
    if ((token === import4.PlatformModule)) { return this._PlatformModule_5; }
    if ((token === import4.A11yModule)) { return this._A11yModule_6; }
    if ((token === import4.CompatibilityModule)) { return this._CompatibilityModule_7; }
    if ((token === import4.MdDialogModule)) { return this._MdDialogModule_8; }
    if ((token === import4.MdRippleModule)) { return this._MdRippleModule_9; }
    if ((token === import4.MdSelectionModule)) { return this._MdSelectionModule_10; }
    if ((token === import4.MdOptionModule)) { return this._MdOptionModule_11; }
    if ((token === import4.MdAutocompleteModule)) { return this._MdAutocompleteModule_12; }
    if ((token === import4.StyleModule)) { return this._StyleModule_13; }
    if ((token === import4.MdButtonModule)) { return this._MdButtonModule_14; }
    if ((token === import4.MdButtonToggleModule)) { return this._MdButtonToggleModule_15; }
    if ((token === import4.MdCardModule)) { return this._MdCardModule_16; }
    if ((token === import4.MdChipsModule)) { return this._MdChipsModule_17; }
    if ((token === import4.MdCheckboxModule)) { return this._MdCheckboxModule_18; }
    if ((token === import4.MdLineModule)) { return this._MdLineModule_19; }
    if ((token === import4.MdGridListModule)) { return this._MdGridListModule_20; }
    if ((token === import5.HttpModule)) { return this._HttpModule_21; }
    if ((token === import4.MdIconModule)) { return this._MdIconModule_22; }
    if ((token === import4.MdInputModule)) { return this._MdInputModule_23; }
    if ((token === import4.MdListModule)) { return this._MdListModule_24; }
    if ((token === import4.MdMenuModule)) { return this._MdMenuModule_25; }
    if ((token === import4.MdProgressBarModule)) { return this._MdProgressBarModule_26; }
    if ((token === import4.MdProgressSpinnerModule)) { return this._MdProgressSpinnerModule_27; }
    if ((token === import4.MdRadioModule)) { return this._MdRadioModule_28; }
    if ((token === import4.MdSelectModule)) { return this._MdSelectModule_29; }
    if ((token === import4.MdSidenavModule)) { return this._MdSidenavModule_30; }
    if ((token === import4.RtlModule)) { return this._RtlModule_31; }
    if ((token === import4.MdSliderModule)) { return this._MdSliderModule_32; }
    if ((token === import4.MdSlideToggleModule)) { return this._MdSlideToggleModule_33; }
    if ((token === import4.MdSnackBarModule)) { return this._MdSnackBarModule_34; }
    if ((token === import4.ObserveContentModule)) { return this._ObserveContentModule_35; }
    if ((token === import4.MdTabsModule)) { return this._MdTabsModule_36; }
    if ((token === import4.MdToolbarModule)) { return this._MdToolbarModule_37; }
    if ((token === import4.MdTooltipModule)) { return this._MdTooltipModule_38; }
    if ((token === import4.MaterialModule)) { return this._MaterialModule_39; }
    if ((token === import1.SharedModule)) { return this._SharedModule_40; }
    if ((token === import2.NgLocalization)) { return this._NgLocalization_41; }
    if ((token === import3.ɵi)) { return this._ɵi_42; }
    if ((token === import4.OverlayContainer)) { return this._OverlayContainer_43; }
    if ((token === import4.ScrollDispatcher)) { return this._ScrollDispatcher_44; }
    if ((token === import4.ɵh)) { return this._ɵh_45; }
    if ((token === import4.ɵk)) { return this._ɵk_46; }
    if ((token === import4.Overlay)) { return this._Overlay_47; }
    if ((token === import4.Platform)) { return this._Platform_48; }
    if ((token === import4.InteractivityChecker)) { return this._InteractivityChecker_49; }
    if ((token === import4.FocusTrapFactory)) { return this._FocusTrapFactory_50; }
    if ((token === import4.LiveAnnouncer)) { return this._LiveAnnouncer_51; }
    if ((token === import4.MdDialog)) { return this._MdDialog_52; }
    if ((token === import4.FocusOriginMonitor)) { return this._FocusOriginMonitor_53; }
    if ((token === import4.UniqueSelectionDispatcher)) { return this._UniqueSelectionDispatcher_54; }
    if ((token === import5.BrowserXhr)) { return this._BrowserXhr_55; }
    if ((token === import5.ResponseOptions)) { return this._ResponseOptions_56; }
    if ((token === import5.XSRFStrategy)) { return this._XSRFStrategy_57; }
    if ((token === import5.XHRBackend)) { return this._XHRBackend_58; }
    if ((token === import5.RequestOptions)) { return this._RequestOptions_59; }
    if ((token === import5.Http)) { return this._Http_60; }
    if ((token === import4.MdIconRegistry)) { return this._MdIconRegistry_61; }
    if ((token === import7.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_62; }
    if ((token === import4.MdSnackBar)) { return this._MdSnackBar_63; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const SharedModuleNgFactory:import0.NgModuleFactory<import1.SharedModule> = new import0.NgModuleFactory<any>(SharedModuleInjector,import1.SharedModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvaW50ZXJuZXQvRG9jdW1lbnRzL0dpdEh1Yi9hbmd1bGFyMi9nZW5fZHJpZnQtbmdyeC00LXJjMy9hcHAvc2hhcmVkL3NoYXJlZC5tb2R1bGUubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vQzovVXNlcnMvaW50ZXJuZXQvRG9jdW1lbnRzL0dpdEh1Yi9hbmd1bGFyMi9nZW5fZHJpZnQtbmdyeC00LXJjMy9hcHAvc2hhcmVkL3NoYXJlZC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
