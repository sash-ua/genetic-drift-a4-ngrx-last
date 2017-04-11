/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from './app.component.css.shim.ngstyle';
import * as import1 from '@angular/core';
import * as import2 from '../../app/AppComponent';
import * as import3 from '@angular/router';
import * as import4 from '@angular/common';
import * as import5 from '@ngrx/store/src/store';
const styles_AppComponent:any[] = [import0.styles];
export const RenderType_AppComponent:import1.RendererType2 = import1.ɵcrt({
  encapsulation: 0,
  styles: styles_AppComponent,
  data: {}
}
);
export function View_AppComponent_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
      (l()(),import1.ɵeld(0,(null as any),(null as any),41,'div',[[
        'class',
        'wrapper'
      ]
      ],(null as any),[[
        (null as any),
        'swipe'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:import2.AppComponent = v.component;
      if (('swipe' === en)) {
        const pd_0:any = ((<any>co.onSwipe($event,co.store)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n        '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),4,'header',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n            '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),1,'h1',[[
        'class',
        'header__title introduction__txt'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['Genetic drift'])),
    (l()(),import1.ɵted((null as any),['\n        '])),
    (l()(),import1.ɵted((null as any),['\n        '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),32,'main',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n            '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),24,'nav',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n                '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),21,'ul',[[
        'class',
        'nav'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n                    '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),8,'li',[[
        'class',
        'nav__el'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n                        '])),
      (l()(),import1.ɵeld(0,[[
        'intro',
        1
      ]
    ],(null as any),5,'a',[
      [
        'class',
        'nav_link link'
      ]
      ,
      [
        'routerLink',
        '/instruction'
      ]
      ,
      [
        'routerLinkActive',
        'active'
      ]

    ]
    ,[
      [
        2,
        'activeR',
        (null as any)
      ]
      ,
      [
        1,
        'target',
        0
      ]
      ,
      [
        8,
        'href',
        4
      ]

    ]
      ,[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>import1.ɵnov(v,17).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
      import1.ɵdid(335872,[[
        2,
        4
      ]
    ],0,import3.RouterLinkWithHref,[
      import3.Router,
      import3.ActivatedRoute,
      import4.LocationStrategy
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
    import1.ɵdid(860160,(null as any),2,import3.RouterLinkActive,[
      import3.Router,
      import1.ElementRef,
      import1.Renderer,
      import1.ChangeDetectorRef
    ]
      ,{routerLinkActive: [
        0,
        'routerLinkActive'
      ]
    },(null as any)),
    import1.ɵqud(301989888,1,{links: 1}),
    import1.ɵqud(301989888,2,{linksWithHrefs: 1}),
    (l()(),import1.ɵted((null as any),['Introduction'])),
    (l()(),import1.ɵted((null as any),['\n                    '])),
    (l()(),import1.ɵted((null as any),['\n                    '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),8,'li',[[
        'class',
        'nav__el'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n                        '])),
      (l()(),import1.ɵeld(0,[[
        'mode',
        1
      ]
    ],(null as any),5,'a',[
      [
        'class',
        'nav_link link'
      ]
      ,
      [
        'routerLink',
        '/modeling'
      ]
      ,
      [
        'routerLinkActive',
        'active'
      ]

    ]
    ,[
      [
        2,
        'activeR',
        (null as any)
      ]
      ,
      [
        1,
        'target',
        0
      ]
      ,
      [
        8,
        'href',
        4
      ]

    ]
      ,[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>import1.ɵnov(v,27).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
      import1.ɵdid(335872,[[
        4,
        4
      ]
    ],0,import3.RouterLinkWithHref,[
      import3.Router,
      import3.ActivatedRoute,
      import4.LocationStrategy
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
    import1.ɵdid(860160,(null as any),2,import3.RouterLinkActive,[
      import3.Router,
      import1.ElementRef,
      import1.Renderer,
      import1.ChangeDetectorRef
    ]
      ,{routerLinkActive: [
        0,
        'routerLinkActive'
      ]
    },(null as any)),
    import1.ɵqud(301989888,3,{links: 1}),
    import1.ɵqud(301989888,4,{linksWithHrefs: 1}),
    (l()(),import1.ɵted((null as any),['Modeling'])),
    (l()(),import1.ɵted((null as any),['\n                    '])),
    (l()(),import1.ɵted((null as any),['\n                '])),
    (l()(),import1.ɵted((null as any),['\n            '])),
    (l()(),import1.ɵted((null as any),['\n            '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),0,'div',[[
        'class',
        'line-stub'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n            '])),
    (l()(),import1.ɵeld(8388608,(null as any),(null as any),1,'router-outlet',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    import1.ɵdid(73728,(null as any),0,import3.RouterOutlet,[
      import3.RouterOutletMap,
      import1.ViewContainerRef,
      import1.ComponentFactoryResolver,
      [
        8,
        (null as any)
      ]

    ]
    ,(null as any),(null as any)),
    (l()(),import1.ɵted((null as any),['\n        '])),
    (l()(),import1.ɵted((null as any),['\n    ']))
  ]
  ,(ck,v) => {
    const currVal_3:any = '/instruction';
    ck(v,17,0,currVal_3);
    const currVal_4:any = 'active';
    ck(v,18,0,currVal_4);
    const currVal_8:any = '/modeling';
    ck(v,27,0,currVal_8);
    const currVal_9:any = 'active';
    ck(v,28,0,currVal_9);
  },(ck,v) => {
    var co:import2.AppComponent = v.component;
    const currVal_0:any = co.active;
    const currVal_1:any = import1.ɵnov(v,17).target;
    const currVal_2:any = import1.ɵnov(v,17).href;
    ck(v,16,0,currVal_0,currVal_1,currVal_2);
    const currVal_5:any = co.active;
    const currVal_6:any = import1.ɵnov(v,27).target;
    const currVal_7:any = import1.ɵnov(v,27).href;
    ck(v,26,0,currVal_5,currVal_6,currVal_7);
  });
}
function View_AppComponent_Host_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'app-root',([] as any[]),(null as any),(null as any),(null as any),View_AppComponent_0,RenderType_AppComponent)),
    import1.ɵdid(24576,(null as any),0,import2.AppComponent,[import5.Store],(null as any),(null as any))
  ]
  ,(null as any),(null as any));
}
export const AppComponentNgFactory:import1.ComponentFactory<import2.AppComponent> = import1.ɵccf('app-root',import2.AppComponent,View_AppComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvaW50ZXJuZXQvRG9jdW1lbnRzL0dpdEh1Yi9hbmd1bGFyMi9nZW5fZHJpZnQtbmdyeC00LXJjMy9hcHAvQXBwQ29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1VzZXJzL2ludGVybmV0L0RvY3VtZW50cy9HaXRIdWIvYW5ndWxhcjIvZ2VuX2RyaWZ0LW5ncngtNC1yYzMvYXBwL0FwcENvbXBvbmVudC50cyIsIm5nOi8vL0M6L1VzZXJzL2ludGVybmV0L0RvY3VtZW50cy9HaXRIdWIvYW5ndWxhcjIvZ2VuX2RyaWZ0LW5ncngtNC1yYzMvYXBwL0FwcENvbXBvbmVudC50cy5BcHBDb21wb25lbnQuaHRtbCIsIm5nOi8vL0M6L1VzZXJzL2ludGVybmV0L0RvY3VtZW50cy9HaXRIdWIvYW5ndWxhcjIvZ2VuX2RyaWZ0LW5ncngtNC1yYzMvYXBwL0FwcENvbXBvbmVudC50cy5BcHBDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8ZGl2IChzd2lwZSk9XCJvblN3aXBlKCRldmVudCwgc3RvcmUpXCIgY2xhc3M9XCJ3cmFwcGVyXCI+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICA8aDEgY2xhc3M9XCJoZWFkZXJfX3RpdGxlIGludHJvZHVjdGlvbl9fdHh0XCI+R2VuZXRpYyBkcmlmdDwvaDE+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdl9fZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIHJvdXRlckxpbms9XCIvaW5zdHJ1Y3Rpb25cIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCIgW2NsYXNzLmFjdGl2ZVJdPVwiYWN0aXZlXCIgY2xhc3M9XCJuYXZfbGluayBsaW5rXCIgI2ludHJvPkludHJvZHVjdGlvbjwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2X19lbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgcm91dGVyTGluaz1cIi9tb2RlbGluZ1wiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIiBbY2xhc3MuYWN0aXZlUl09XCJhY3RpdmVcIiBjbGFzcz1cIm5hdl9saW5rIGxpbmtcIiAjbW9kZT5Nb2RlbGluZzwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluZS1zdHViXCI+PC9kaXY+XG4gICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgICAgIDwvbWFpbj5cbiAgICA8L2Rpdj4iLCI8YXBwLXJvb3Q+PC9hcHAtcm9vdD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ0FBO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBSztRQUFBO1FBQUE7TUFBQTtNQUFMO0lBQUE7SUFBc0Q7SUFDOUM7SUFBUTtNQUNKO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBNEM7SUFBa0I7SUFDekQ7SUFDVDtJQUFNO0lBQ0Y7SUFBSztNQUNEO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBZ0I7TUFDWjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQW9CO01BQ2hCO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO0lBQUE7a0JBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTs7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Z0JBQUE7SUFBNkc7SUFBZ0I7SUFDNUg7TUFDTDtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQW9CO01BQ2hCO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO0lBQUE7a0JBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTs7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Z0JBQUE7SUFBeUc7SUFBWTtJQUNwSDtJQUNKO0lBQ0g7TUFDTjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQTZCO0lBQzdCO2dCQUFBOzs7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtJQUErQjtJQUM1Qjs7O0lBVFk7SUFBSCxVQUFHLFNBQUg7SUFBNkI7SUFBN0IsVUFBNkIsU0FBN0I7SUFHRztJQUFILFVBQUcsU0FBSDtJQUEwQjtJQUExQixVQUEwQixTQUExQjs7O0lBSHVEO0lBQXZEO0lBQUE7SUFBQSxVQUF1RCxVQUF2RCxtQkFBQTtJQUdvRDtJQUFwRDtJQUFBO0lBQUEsVUFBb0QsVUFBcEQsbUJBQUE7Ozs7O0lDWHhCO2dCQUFBOzs7OyJ9
