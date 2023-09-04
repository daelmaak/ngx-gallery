"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["main"],{

/***/ 7718:
/*!********************************************!*\
  !*** ./apps/demo/src/app/app.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _libs_gallery_src_lib_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../libs/gallery/src/lib/components/gallery/gallery.component */ 4621);
/* harmony import */ var _components_demo_whole_config_demo_whole_config_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/demo-whole-config/demo-whole-config.component */ 7286);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ 2920);
/* harmony import */ var _components_showcase_showcase_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/showcase/showcase.component */ 4937);
/* harmony import */ var _components_demo_custom_templates_demo_custom_templates_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/demo-custom-templates/demo-custom-templates.component */ 4742);






class AppComponent {
  constructor(cd) {
    this.cd = cd;
    this.installScript = `
    yarn add @daelmaak/ngx-gallery
  `;
    this.componentCode = `
    import { GalleryComponent, GalleryItem } from '@daelmaak/ngx-gallery';

    @Component({
      standalone: true,
      imports: [GalleryComponent]
    })
    export class AppComponent {
      images: GalleryItem[] = [{ src: 'kitten1.jpg' }]
    }
  `;
    this.componentTemplateCode = `
    <gallery [items]="images"></gallery>
  `;
    this.images = [{
      src: './assets/images/mountains-1-lg.jpg',
      thumbSrc: './assets/images/mountains-1-sm.jpg',
      alt: 'Mountains',
      description: 'Mighty mountains'
    }, {
      src: './assets/images/house-1-lg.jpg',
      thumbSrc: './assets/images/house-1-sm.jpg',
      alt: 'House',
      description: `I just love mysterious houses`
    }, {
      src: './assets/images/church-1-lg.jpg',
      thumbSrc: './assets/images/church-1-sm.jpg',
      alt: 'Church hallway',
      description: 'Feel the history in this beautiful church'
    }, {
      src: './assets/images/lens-1-lg.jpg',
      thumbSrc: './assets/images/lens-1-sm.jpg',
      alt: 'Lens',
      description: 'Zoom the world'
    }, {
      src: './assets/images/terraces-1-lg.jpg',
      thumbSrc: './assets/images/terraces-1-sm.jpg',
      alt: 'Mountains',
      description: 'Sun lit mountains'
    }, {
      src: './assets/images/tulip-1-lg.jpg',
      thumbSrc: './assets/images/tulip-1-sm.jpg',
      alt: 'Tulip',
      description: `You didn't forget to buy your better half flowers, did you?`
    }];
    this.extendedImages = [...this.images, {
      src: './assets/images/forest-1-lg.jpg',
      thumbSrc: './assets/images/forest-1-sm.jpg',
      alt: 'Forest',
      description: 'Mysterious forest'
    }, {
      src: './assets/images/sky-1-lg.jpg',
      thumbSrc: './assets/images/sky-1-sm.jpg',
      alt: 'Sky',
      description: 'Mysterious sky'
    }, {
      src: './assets/images/cheers-1-lg.jpg',
      thumbSrc: './assets/images/cheers-1-sm.jpg',
      alt: 'Cheers',
      description: 'Two guys drinking during sunset'
    }, {
      src: './assets/images/laptop-1-lg.jpg',
      thumbSrc: './assets/images/laptop-1-sm.jpg',
      alt: 'Laptop',
      description: 'Ideal workplace for computer work'
    }, {
      src: './assets/images/snowflake-1-lg.jpg',
      thumbSrc: './assets/images/snowflake-1-sm.jpg',
      alt: 'Snowflake',
      description: 'Snowflake detail'
    }, {
      src: './assets/images/mesh-1-lg.jpg',
      thumbSrc: './assets/images/mesh-1-sm.jpg',
      alt: 'City',
      description: 'City at night'
    }];
    this.erroredImages = [{
      src: './assets/images/non-existing-picture.jpg',
      alt: 'Non-existing picture'
    }, {
      src: './assets/images/non-existing-video.jpg',
      alt: 'Non-existing video',
      video: true
    }, ...this.extendedImages.slice(2, 4)];
    this.videos = [{
      src: './assets/images/beach-1.mp4',
      video: true
    }, {
      src: 'https://www.youtube.com/embed/80_39eAx3z8',
      video: true
    }];
  }
  ngOnInit() {
    const mediaMatcher = matchMedia('(max-width: 1024px)');
    mediaMatcher.onchange = e => {
      this.mobile = e.matches;
      this.cd.detectChanges();
    };
    this.mobile = mediaMatcher.matches;
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 86,
  vars: 12,
  consts: [[1, "menu-heading"], ["href", "#usage"], ["href", "#demos"], ["href", "#demo-responsive"], ["href", "#demo-custom"], ["href", "#demo-rtl"], ["href", "#demo-descriptions"], ["href", "#demo-error-handling"], ["href", "#demo-videos"], ["href", "#demo-full-config"], ["href", "https://github.com/daelmaak/ngx-gallery/wiki", "target", "_blank"], ["role", "main"], [1, "main-content"], ["id", "usage", 1, "usage"], [1, "usage-code"], ["id", "demos"], ["id", "demo-responsive", "heading", "Responsive - resize me!", "stackblitz", "https://stackblitz.com/edit/ngx-gallery-demo-responsive?file=src%2Fapp%2Fapp.component.html"], ["loading", "lazy", 3, "items"], ["id", "demo-custom", "heading", "Custom templates", "stackblitz", "https://stackblitz.com/edit/ngx-gallery-demo-custom-templates?file=src%2Fapp%2Fapp.component.html"], ["subheading", ""], ["href", "https://github.com/daelmaak/ngx-gallery/wiki/Gallery-API", "target", "_blank"], [3, "mobile"], ["id", "demo-rtl", "heading", "Right to left"], ["loading", "lazy", 3, "items", "isRtl"], ["id", "demo-descriptions", "heading", "Descriptions", "stackblitz", "https://stackblitz.com/edit/ngx-gallery-demo-descriptions?file=src%2Fapp%2Fapp.component.html"], ["counterOrientation", "top", "loading", "lazy", 3, "items", "descriptions"], ["id", "demo-error-handling", "heading", "Error handling"], ["id", "demo-videos", "heading", "Videos", "subheading", "both YouTube and native videos"], ["id", "demo-full-config", "heading", "Full configuration"], [3, "images"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "aside")(2, "div", 0)(3, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Usage");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 0)(6, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Demos");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ul")(9, "li")(10, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Responsive");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "li")(13, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Custom templates");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "li")(16, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Right to left");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "li")(19, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Descriptions");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "li")(22, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Error handling");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "li")(25, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Videos");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "li")(28, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Full configuration");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Misc");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "ul")(33, "li")(34, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Documentation");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "main", 11)(37, "div", 12)(38, "div", 13)(39, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Usage");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 14)(42, "div")(43, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Install");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "pre")(46, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div")(49, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Component");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "pre")(52, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div")(55, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Template");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "pre")(58, "code");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "h2", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, "Demos");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "app-showcase", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](63, "gallery", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "app-showcase", 18)(65, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, " You can also use your custom templates for items, loading screen, loading errors, thumbnails and more. Find out how in the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "documentation.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](69, "app-demo-custom-templates", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "app-showcase", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](71, "gallery", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "app-showcase", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](73, "gallery", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "app-showcase", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](75, "gallery", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "app-showcase", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](77, "gallery", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "app-showcase", 28)(79, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80, " Some options like custom templates are missing. Check them out in the ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, "documentation.");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](83, "app-demo-whole-config", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "footer");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, "With care from daelmaak");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](47);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.installScript);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.componentCode);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.componentTemplateCode);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx.images);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mobile", ctx.mobile);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx.images)("isRtl", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx.images)("descriptions", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx.erroredImages);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx.videos);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("images", ctx.images);
    }
  },
  dependencies: [_libs_gallery_src_lib_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_0__.GalleryComponent, _components_demo_whole_config_demo_whole_config_component__WEBPACK_IMPORTED_MODULE_1__.DemoWholeConfigComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _components_showcase_showcase_component__WEBPACK_IMPORTED_MODULE_3__.ShowcaseComponent, _components_demo_custom_templates_demo_custom_templates_component__WEBPACK_IMPORTED_MODULE_4__.DemoCustomTemplatesComponent],
  styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-template-columns: 230px calc(100% - 230px);\n  grid-template-rows: auto auto 64px;\n}\n@media (max-width: 1024px) {\n  [_nghost-%COMP%] {\n    grid-template-columns: 0px 100%;\n  }\n}\n\napp-header[_ngcontent-%COMP%] {\n  grid-column: 1/span 2;\n  grid-row: 1;\n}\n\naside[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 2/span 2;\n  position: sticky;\n  top: 0;\n  max-height: 100vh;\n  background-color: #f3f3f3;\n  overflow: auto;\n}\n@media (max-width: 767px) {\n  aside[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\naside[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 5px 25px;\n}\naside[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 8px 0;\n}\naside[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #5b5b5b;\n}\naside[_ngcontent-%COMP%]   .menu-heading[_ngcontent-%COMP%] {\n  padding: 0 15px 8px;\n  box-sizing: border-box;\n  margin: 20px 10px 0;\n  color: #686868;\n  font-weight: bold;\n}\naside[_ngcontent-%COMP%]   .menu-heading[_ngcontent-%COMP%]    + ul[_ngcontent-%COMP%] {\n  border-top: 1px solid #c1c1c1;\n}\n\nmain[_ngcontent-%COMP%] {\n  grid-column: 2/span 1;\n  margin: 0 auto;\n  width: 100%;\n  background: #fafafa;\n}\n@media (max-width: 767px) {\n  main[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\nmain[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  width: 100%;\n  margin: 0 auto;\n}\nmain[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0 0 0 30px;\n}\nmain[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding: 0.83em 0 0.4em;\n}\n@media (min-width: 768px) {\n  main[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2.3em;\n  }\n}\n\nfooter[_ngcontent-%COMP%] {\n  grid-column: 2/span 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.9em;\n  text-align: center;\n  color: #b3b3b3;\n}\n\npre[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0;\n  font-size: 1.2em;\n}\n\n@media (max-width: 767px) {\n  .usage[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.usage-code[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0FBQ0Y7QUFDRTtFQUxGO0lBTUksK0JBQUE7RUFFRjtBQUNGOztBQUNBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQ0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQUVGO0FBQUU7RUFURjtJQVVJLGFBQUE7RUFHRjtBQUNGO0FBREU7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7QUFHSjtBQUFFO0VBQ0UsY0FBQTtBQUVKO0FBQ0U7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFDSjtBQUVFO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQUo7QUFFSTtFQUNFLDZCQUFBO0FBQU47O0FBS0E7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFGRjtBQUlFO0VBTkY7SUFPSSxlQUFBO0VBREY7QUFDRjtBQUdFO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQURKO0FBSUU7Ozs7O0VBS0Usa0JBQUE7QUFGSjtBQUtFO0VBQ0UsdUJBQUE7QUFISjtBQUtJO0VBSEY7SUFJSSxnQkFBQTtFQUZKO0FBQ0Y7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFPRTtFQURGO0lBRUksYUFBQTtFQUhGO0FBQ0Y7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQUhGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMzBweCBjYWxjKDEwMCUgLSAyMzBweCk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIDY0cHg7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMHB4IDEwMCU7XG4gIH1cbn1cblxuYXBwLWhlYWRlciB7XG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xuICBncmlkLXJvdzogMTtcbn1cblxuYXNpZGUge1xuICBncmlkLWNvbHVtbjogMTtcbiAgZ3JpZC1yb3c6IDIgLyBzcGFuIDI7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gIG92ZXJmbG93OiBhdXRvO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICB1bCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDVweCAyNXB4O1xuICB9XG5cbiAgbGkge1xuICAgIHBhZGRpbmc6IDhweCAwO1xuICB9XG5cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjNWI1YjViO1xuICB9XG5cbiAgLm1lbnUtaGVhZGluZyB7XG4gICAgcGFkZGluZzogMCAxNXB4IDhweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMjBweCAxMHB4IDA7XG4gICAgY29sb3I6IGxpZ2h0ZW4oIzViNWI1YiwgNSUpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgKyB1bCB7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRlbigjNWI1YjViLCA0MCUpO1xuICAgIH1cbiAgfVxufVxuXG5tYWluIHtcbiAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDE7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cblxuICAubWFpbi1jb250ZW50IHtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gIGgyLFxuICBoMyxcbiAgaDQsXG4gIGg1LFxuICBoNiB7XG4gICAgbWFyZ2luOiAwIDAgMCAzMHB4O1xuICB9XG5cbiAgaDIge1xuICAgIHBhZGRpbmc6IDAuODNlbSAwIDAuNGVtO1xuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICBmb250LXNpemU6IDIuM2VtO1xuICAgIH1cbiAgfVxufVxuXG5mb290ZXIge1xuICBncmlkLWNvbHVtbjogMiAvIHNwYW4gMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNiM2IzYjM7XG59XG5cbnByZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuLnVzYWdlIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4udXNhZ2UtY29kZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvZGVtby9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0FBQ0Y7QUFDRTtFQUxGO0lBTUksK0JBQUE7RUFFRjtBQUNGOztBQUNBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQ0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQUVGO0FBQUU7RUFURjtJQVVJLGFBQUE7RUFHRjtBQUNGO0FBREU7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7QUFHSjtBQUFFO0VBQ0UsY0FBQTtBQUVKO0FBQ0U7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFDSjtBQUVFO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQUo7QUFFSTtFQUNFLDZCQUFBO0FBQU47O0FBS0E7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFGRjtBQUlFO0VBTkY7SUFPSSxlQUFBO0VBREY7QUFDRjtBQUdFO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQURKO0FBSUU7Ozs7O0VBS0Usa0JBQUE7QUFGSjtBQUtFO0VBQ0UsdUJBQUE7QUFISjtBQUtJO0VBSEY7SUFJSSxnQkFBQTtFQUZKO0FBQ0Y7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFIRjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFPRTtFQURGO0lBRUksYUFBQTtFQUhGO0FBQ0Y7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQUhGO0FBQ0EsdzVHQUF3NUciLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjMwcHggY2FsYygxMDAlIC0gMjMwcHgpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byA2NHB4O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDBweCAxMDAlO1xuICB9XG59XG5cbmFwcC1oZWFkZXIge1xuICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMjtcbiAgZ3JpZC1yb3c6IDE7XG59XG5cbmFzaWRlIHtcbiAgZ3JpZC1jb2x1bW46IDE7XG4gIGdyaWQtcm93OiAyIC8gc3BhbiAyO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuICBvdmVyZmxvdzogYXV0bztcblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgdWwge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiA1cHggMjVweDtcbiAgfVxuXG4gIGxpIHtcbiAgICBwYWRkaW5nOiA4cHggMDtcbiAgfVxuXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzViNWI1YjtcbiAgfVxuXG4gIC5tZW51LWhlYWRpbmcge1xuICAgIHBhZGRpbmc6IDAgMTVweCA4cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDIwcHggMTBweCAwO1xuICAgIGNvbG9yOiBsaWdodGVuKCM1YjViNWIsIDUlKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgICsgdWwge1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0ZW4oIzViNWI1YiwgNDAlKTtcbiAgICB9XG4gIH1cbn1cblxubWFpbiB7XG4gIGdyaWQtY29sdW1uOiAyIC8gc3BhbiAxO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLm1haW4tY29udGVudCB7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuICBoMixcbiAgaDMsXG4gIGg0LFxuICBoNSxcbiAgaDYge1xuICAgIG1hcmdpbjogMCAwIDAgMzBweDtcbiAgfVxuXG4gIGgyIHtcbiAgICBwYWRkaW5nOiAwLjgzZW0gMCAwLjRlbTtcblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgZm9udC1zaXplOiAyLjNlbTtcbiAgICB9XG4gIH1cbn1cblxuZm9vdGVyIHtcbiAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDAuOWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjYjNiM2IzO1xufVxuXG5wcmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cbi51c2FnZSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLnVzYWdlLWNvZGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ }),

/***/ 6795:
/*!*****************************************!*\
  !*** ./apps/demo/src/app/app.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 895);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ 6658);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ 7728);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/radio */ 2106);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 7718);
/* harmony import */ var _components_demo_whole_config_demo_whole_config_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/demo-whole-config/demo-whole-config.component */ 7286);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ 2920);
/* harmony import */ var _components_showcase_showcase_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/showcase/showcase.component */ 4937);
/* harmony import */ var _components_demo_thumbs_orientation_demo_thumbs_orientation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/demo-thumbs-orientation/demo-thumbs-orientation.component */ 7646);
/* harmony import */ var _components_demo_multiple_items_demo_multiple_items_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/demo-multiple-items/demo-multiple-items.component */ 8886);
/* harmony import */ var _components_demo_custom_templates_demo_custom_templates_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/demo-custom-templates/demo-custom-templates.component */ 4742);
/* harmony import */ var _daelmaak_ngx_gallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @daelmaak/ngx-gallery */ 6081);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 1699);




















const materialModules = [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__.MatRadioModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbarModule];
class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
  imports: [materialModules, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule, _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule, _daelmaak_ngx_gallery__WEBPACK_IMPORTED_MODULE_7__.GalleryComponent]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _components_demo_whole_config_demo_whole_config_component__WEBPACK_IMPORTED_MODULE_1__.DemoWholeConfigComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _components_showcase_showcase_component__WEBPACK_IMPORTED_MODULE_3__.ShowcaseComponent, _components_demo_thumbs_orientation_demo_thumbs_orientation_component__WEBPACK_IMPORTED_MODULE_4__.DemoThumbsOrientationComponent, _components_demo_multiple_items_demo_multiple_items_component__WEBPACK_IMPORTED_MODULE_5__.DemoMultipleItemsComponent, _components_demo_custom_templates_demo_custom_templates_component__WEBPACK_IMPORTED_MODULE_6__.DemoCustomTemplatesComponent],
    imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__.MatRadioModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbarModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule, _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule, _daelmaak_ngx_gallery__WEBPACK_IMPORTED_MODULE_7__.GalleryComponent]
  });
})();

/***/ }),

/***/ 4742:
/*!***********************************************************************************************!*\
  !*** ./apps/demo/src/app/components/demo-custom-templates/demo-custom-templates.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DemoCustomTemplatesComponent: () => (/* binding */ DemoCustomTemplatesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _libs_gallery_src_lib_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../libs/gallery/src/lib/components/gallery/gallery.component */ 4621);




function DemoCustomTemplatesComponent_ng_template_1_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 8);
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r4.src, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function DemoCustomTemplatesComponent_ng_template_1_video_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "video", 9);
  }
  if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r4.src, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function DemoCustomTemplatesComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DemoCustomTemplatesComponent_ng_template_1_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const item_r4 = restoredCtx.item;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.selectedItem = item_r4);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DemoCustomTemplatesComponent_ng_template_1_img_2_Template, 1, 1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DemoCustomTemplatesComponent_ng_template_1_video_3_Template, 1, 1, "video", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 7)(5, "p")(6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.item;
    const video_r5 = ctx.video;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("custom-item--selected", ctx_r1.selectedItem === item_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !video_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", video_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.alt);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.description);
  }
}
function DemoCustomTemplatesComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "arrow_forward_ios");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class DemoCustomTemplatesComponent {
  constructor() {
    this.images = [{
      src: './assets/images/mountains-1-lg.jpg',
      thumbSrc: './assets/images/mountains-1-sm.jpg',
      alt: 'Mountains',
      description: 'Nothing is better than a hike in the mountains'
    }, {
      src: './assets/images/beach-1.mp4',
      alt: 'Beach',
      description: 'Video of a beach taken from drone',
      video: true
    }, {
      src: './assets/images/cheers-1-lg.jpg',
      thumbSrc: './assets/images/cheers-1-sm.jpg',
      alt: 'Cheers',
      description: 'Two guys drinking during sunset'
    }, {
      src: './assets/images/laptop-1-lg.jpg',
      alt: 'Laptop',
      description: 'Ideal workplace for computer work'
    }, {
      src: './assets/images/non-existing-image.jpg',
      alt: 'Sky',
      description: 'Mysterious sky'
    }, {
      src: './assets/images/snowflake-1-lg.jpg',
      thumbSrc: './assets/images/snowflake-1-sm.jpg',
      alt: 'Snowflake',
      description: 'Snowflake detail'
    }, {
      src: './assets/images/mesh-1-lg.jpg',
      thumbSrc: './assets/images/mesh-1-sm.jpg',
      alt: 'City',
      description: 'City at night'
    }];
  }
}
DemoCustomTemplatesComponent.ɵfac = function DemoCustomTemplatesComponent_Factory(t) {
  return new (t || DemoCustomTemplatesComponent)();
};
DemoCustomTemplatesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: DemoCustomTemplatesComponent,
  selectors: [["app-demo-custom-templates"]],
  inputs: {
    mobile: "mobile"
  },
  decls: 5,
  vars: 9,
  consts: [["loading", "lazy", 3, "items", "itemTemplate", "visibleItems", "moveByItems", "clip", "counter", "arrowTemplate", "loop", "thumbs"], ["customItem", ""], ["customArrow", ""], [1, "custom-item", 3, "click"], [1, "image-container"], [3, "src", 4, "ngIf"], ["controls", "", 3, "src", 4, "ngIf"], [1, "info-box"], [3, "src"], ["controls", "", 3, "src"], [1, "custom-arrow"]],
  template: function DemoCustomTemplatesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "gallery", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DemoCustomTemplatesComponent_ng_template_1_Template, 10, 6, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DemoCustomTemplatesComponent_ng_template_3_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.images)("itemTemplate", _r0)("visibleItems", ctx.mobile ? 2 : 3)("moveByItems", ctx.mobile ? 2 : 3)("clip", false)("counter", false)("arrowTemplate", _r2)("loop", true)("thumbs", false);
    }
  },
  dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _libs_gallery_src_lib_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_0__.GalleryComponent],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  padding: 0 4rem;\n  overflow: hidden;\n  position: relative;\n}\n[_nghost-%COMP%]::before, [_nghost-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  width: 3rem;\n  height: 100%;\n  z-index: 10;\n  top: 0;\n}\n[_nghost-%COMP%]::before {\n  left: 0;\n  background: linear-gradient(90deg, #fafafa 0%, rgba(250, 250, 250, 0) 100%), linear-gradient(90deg, #fafafa 0%, rgba(250, 250, 250, 0) 100%);\n}\n[_nghost-%COMP%]::after {\n  right: 0;\n  background: linear-gradient(270deg, #fafafa 0%, rgba(250, 250, 250, 0) 100%), linear-gradient(270deg, #fafafa 0%, rgba(250, 250, 250, 0) 100%);\n}\n\ngallery[_ngcontent-%COMP%] {\n  height: 500px;\n}\n\n.custom-item[_ngcontent-%COMP%] {\n  height: calc(100% - 2rem);\n  margin: 1rem 0.5rem;\n  padding: 1rem;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  border-radius: 5px;\n  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s;\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(0, 0, 0, 0.1411764706), 0 1px 3px rgba(0, 0, 0, 0.1215686275);\n  cursor: pointer;\n}\n.custom-item[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.1411764706), 0 3px 14px 2px rgba(0, 0, 0, 0.1215686275);\n}\n.custom-item--selected[_ngcontent-%COMP%] {\n  background-color: #eae0ff;\n}\n\n.image-container[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .image-container[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.info-box[_ngcontent-%COMP%] {\n  min-height: 5rem;\n}\n.info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:first-child) {\n  margin-top: 1rem;\n}\n\n.custom-arrow[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  font-size: 40px;\n  color: white;\n  text-shadow: 0 0 3px black;\n  margin-right: 20px;\n  opacity: 0.8;\n}\n.custom-arrow[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8tY3VzdG9tLXRlbXBsYXRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0U7RUFFRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0FBQUo7QUFHRTtFQUNFLE9BQUE7RUFDQSw0SUFBQTtBQURKO0FBS0U7RUFDRSxRQUFBO0VBQ0EsOElBQUE7QUFISjs7QUFRQTtFQUNFLGFBQUE7QUFMRjs7QUFRQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnRkFDRTtFQUVGLDJIQUNFO0VBR0YsZUFBQTtBQVZGO0FBWUU7RUFDRSxxSUFDRTtBQVhOO0FBZ0JFO0VBQ0UseUJBQUE7QUFkSjs7QUFrQkE7RUFDRSxZQUFBO0FBZkY7QUFpQkU7O0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQWZKOztBQW1CQTtFQUNFLGdCQUFBO0FBaEJGO0FBa0JFO0VBQ0UsU0FBQTtBQWhCSjtBQWtCSTtFQUNFLGdCQUFBO0FBaEJOOztBQXFCQTtFQUVFLFdBRFk7RUFFWixZQUZZO0VBR1osZUFIWTtFQUlaLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQW5CRjtBQXFCRTtFQUNFLFVBQUE7QUFuQkoiLCJmaWxlIjoiZGVtby1jdXN0b20tdGVtcGxhdGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMCA0cmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJjo6YmVmb3JlLFxuICAmOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzcmVtO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICB0b3A6IDA7XG4gIH1cblxuICAmOjpiZWZvcmUge1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmFmYWZhIDAlLCByZ2JhKDI1MCwgMjUwLCAyNTAsIDApIDEwMCUpLFxuICAgICAgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmFmYWZhIDAlLCByZ2JhKDI1MCwgMjUwLCAyNTAsIDApIDEwMCUpO1xuICB9XG5cbiAgJjo6YWZ0ZXIge1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICNmYWZhZmEgMCUsIHJnYmEoMjUwLCAyNTAsIDI1MCwgMCkgMTAwJSksXG4gICAgICBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZmFmYWZhIDAlLCByZ2JhKDI1MCwgMjUwLCAyNTAsIDApIDEwMCUpO1xuICB9XG59XG5cbmdhbGxlcnkge1xuICBoZWlnaHQ6IDUwMHB4O1xufVxuXG4uY3VzdG9tLWl0ZW0ge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDJyZW0pO1xuICBtYXJnaW46IDFyZW0gMC41cmVtO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjpcbiAgICBib3gtc2hhZG93IDAuMjhzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSksXG4gICAgYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuICBib3gtc2hhZG93OlxuICAgIDAgMnB4IDFweCAtMXB4ICMwMDAzLFxuICAgIDAgMXB4IDFweCAjMDAwMDAwMjQsXG4gICAgMCAxcHggM3B4ICMwMDAwMDAxZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6XG4gICAgICAwIDVweCA1cHggLTNweCAjMDAwMyxcbiAgICAgIDAgOHB4IDEwcHggMXB4ICMwMDAwMDAyNCxcbiAgICAgIDAgM3B4IDE0cHggMnB4ICMwMDAwMDAxZjtcbiAgfVxuXG4gICYtLXNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlMGZmO1xuICB9XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuICBmbGV4LWdyb3c6IDE7XG5cbiAgaW1nLFxuICB2aWRlbyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICB9XG59XG5cbi5pbmZvLWJveCB7XG4gIG1pbi1oZWlnaHQ6IDVyZW07XG5cbiAgcCB7XG4gICAgbWFyZ2luOiAwO1xuXG4gICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIH1cbiAgfVxufVxuXG4uY3VzdG9tLWFycm93IHtcbiAgJGljb24tc2l6ZTogNDBweDtcbiAgd2lkdGg6ICRpY29uLXNpemU7XG4gIGhlaWdodDogJGljb24tc2l6ZTtcbiAgZm9udC1zaXplOiAkaWNvbi1zaXplO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtc2hhZG93OiAwIDAgM3B4IGJsYWNrO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG9wYWNpdHk6IDAuODtcblxuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvZGVtby9zcmMvYXBwL2NvbXBvbmVudHMvZGVtby1jdXN0b20tdGVtcGxhdGVzL2RlbW8tY3VzdG9tLXRlbXBsYXRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0U7RUFFRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0FBQUo7QUFHRTtFQUNFLE9BQUE7RUFDQSw0SUFBQTtBQURKO0FBS0U7RUFDRSxRQUFBO0VBQ0EsOElBQUE7QUFISjs7QUFRQTtFQUNFLGFBQUE7QUFMRjs7QUFRQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnRkFDRTtFQUVGLDJIQUNFO0VBR0YsZUFBQTtBQVZGO0FBWUU7RUFDRSxxSUFDRTtBQVhOO0FBZ0JFO0VBQ0UseUJBQUE7QUFkSjs7QUFrQkE7RUFDRSxZQUFBO0FBZkY7QUFpQkU7O0VBRUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQWZKOztBQW1CQTtFQUNFLGdCQUFBO0FBaEJGO0FBa0JFO0VBQ0UsU0FBQTtBQWhCSjtBQWtCSTtFQUNFLGdCQUFBO0FBaEJOOztBQXFCQTtFQUVFLFdBRFk7RUFFWixZQUZZO0VBR1osZUFIWTtFQUlaLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQW5CRjtBQXFCRTtFQUNFLFVBQUE7QUFuQko7QUFDQSxnMkdBQWcyRyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDAgNHJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICY6OmJlZm9yZSxcbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogM3JlbTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgei1pbmRleDogMTA7XG4gICAgdG9wOiAwO1xuICB9XG5cbiAgJjo6YmVmb3JlIHtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZhZmFmYSAwJSwgcmdiYSgyNTAsIDI1MCwgMjUwLCAwKSAxMDAlKSxcbiAgICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZhZmFmYSAwJSwgcmdiYSgyNTAsIDI1MCwgMjUwLCAwKSAxMDAlKTtcbiAgfVxuXG4gICY6OmFmdGVyIHtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjZmFmYWZhIDAlLCByZ2JhKDI1MCwgMjUwLCAyNTAsIDApIDEwMCUpLFxuICAgICAgbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZhZmFmYSAwJSwgcmdiYSgyNTAsIDI1MCwgMjUwLCAwKSAxMDAlKTtcbiAgfVxufVxuXG5nYWxsZXJ5IHtcbiAgaGVpZ2h0OiA1MDBweDtcbn1cblxuLmN1c3RvbS1pdGVtIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAycmVtKTtcbiAgbWFyZ2luOiAxcmVtIDAuNXJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246XG4gICAgYm94LXNoYWRvdyAwLjI4cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpLFxuICAgIGJhY2tncm91bmQtY29sb3IgMC4zcztcbiAgYm94LXNoYWRvdzpcbiAgICAwIDJweCAxcHggLTFweCAjMDAwMyxcbiAgICAwIDFweCAxcHggIzAwMDAwMDI0LFxuICAgIDAgMXB4IDNweCAjMDAwMDAwMWY7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OlxuICAgICAgMCA1cHggNXB4IC0zcHggIzAwMDMsXG4gICAgICAwIDhweCAxMHB4IDFweCAjMDAwMDAwMjQsXG4gICAgICAwIDNweCAxNHB4IDJweCAjMDAwMDAwMWY7XG4gIH1cblxuICAmLS1zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VhZTBmZjtcbiAgfVxufVxuXG4uaW1hZ2UtY29udGFpbmVyIHtcbiAgZmxleC1ncm93OiAxO1xuXG4gIGltZyxcbiAgdmlkZW8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxufVxuXG4uaW5mby1ib3gge1xuICBtaW4taGVpZ2h0OiA1cmVtO1xuXG4gIHAge1xuICAgIG1hcmdpbjogMDtcblxuICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICB9XG4gIH1cbn1cblxuLmN1c3RvbS1hcnJvdyB7XG4gICRpY29uLXNpemU6IDQwcHg7XG4gIHdpZHRoOiAkaWNvbi1zaXplO1xuICBoZWlnaHQ6ICRpY29uLXNpemU7XG4gIGZvbnQtc2l6ZTogJGljb24tc2l6ZTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogMCAwIDNweCBibGFjaztcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBvcGFjaXR5OiAwLjg7XG5cbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 8886:
/*!*******************************************************************************************!*\
  !*** ./apps/demo/src/app/components/demo-multiple-items/demo-multiple-items.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DemoMultipleItemsComponent: () => (/* binding */ DemoMultipleItemsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _libs_gallery_src_lib_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../libs/gallery/src/lib/components/gallery/gallery.component */ 4621);



function DemoMultipleItemsComponent_gallery_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "gallery", 1);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx_r0.items)("visibleItems", ctx_r0.mobile ? 1.5 : 2.5);
  }
}
class DemoMultipleItemsComponent {
  constructor(cd) {
    this.cd = cd;
    this.showGallery = true;
  }
  reloadGallery() {
    this.showGallery = false;
    this.cd.detectChanges();
    this.showGallery = true;
    this.cd.detectChanges();
  }
}
DemoMultipleItemsComponent.ɵfac = function DemoMultipleItemsComponent_Factory(t) {
  return new (t || DemoMultipleItemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
};
DemoMultipleItemsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: DemoMultipleItemsComponent,
  selectors: [["app-demo-multiple-items"]],
  inputs: {
    items: "items",
    mobile: "mobile"
  },
  decls: 1,
  vars: 1,
  consts: [["loading", "lazy", 3, "items", "visibleItems", 4, "ngIf"], ["loading", "lazy", 3, "items", "visibleItems"]],
  template: function DemoMultipleItemsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DemoMultipleItemsComponent_gallery_0_Template, 1, 2, "gallery", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showGallery);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _libs_gallery_src_lib_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_0__.GalleryComponent],
  styles: ["input[_ngcontent-%COMP%] {\n  font-family: Consolas;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8tbXVsdGlwbGUtaXRlbXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGIiwiZmlsZSI6ImRlbW8tbXVsdGlwbGUtaXRlbXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBDb25zb2xhcztcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvZGVtby9zcmMvYXBwL2NvbXBvbmVudHMvZGVtby1tdWx0aXBsZS1pdGVtcy9kZW1vLW11bHRpcGxlLWl0ZW1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRjtBQUNBLGdWQUFnViIsInNvdXJjZXNDb250ZW50IjpbImlucHV0IHtcbiAgZm9udC1mYW1pbHk6IENvbnNvbGFzO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 7646:
/*!***************************************************************************************************!*\
  !*** ./apps/demo/src/app/components/demo-thumbs-orientation/demo-thumbs-orientation.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DemoThumbsOrientationComponent: () => (/* binding */ DemoThumbsOrientationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/radio */ 2106);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _libs_gallery_src_lib_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../libs/gallery/src/lib/components/gallery/gallery.component */ 4621);




class DemoThumbsOrientationComponent {
  ngOnChanges({
    mobile
  }) {
    if (mobile && mobile.firstChange) {
      this.orientation = this.mobile ? 'bottom' : 'left';
    }
  }
}
DemoThumbsOrientationComponent.ɵfac = function DemoThumbsOrientationComponent_Factory(t) {
  return new (t || DemoThumbsOrientationComponent)();
};
DemoThumbsOrientationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: DemoThumbsOrientationComponent,
  selectors: [["app-demo-thumbs-orientation"]],
  inputs: {
    items: "items",
    mobile: "mobile"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
  decls: 11,
  vars: 4,
  consts: [["name", "demoThumbsOrientation", 3, "ngModel", "ngModelChange"], ["value", "top"], ["value", "bottom"], ["value", "left"], ["value", "right"], ["loading", "lazy", 3, "items", "loop", "thumbsOrientation"], ["gallery", ""]],
  template: function DemoThumbsOrientationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-radio-group", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DemoThumbsOrientationComponent_Template_mat_radio_group_ngModelChange_0_listener($event) {
        return ctx.orientation = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-radio-button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "top");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-radio-button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "bottom");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-radio-button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "left");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-radio-button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "right");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "gallery", 5, 6);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.orientation);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.items)("loop", true)("thumbsOrientation", ctx.orientation);
    }
  },
  dependencies: [_angular_material_radio__WEBPACK_IMPORTED_MODULE_2__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_2__.MatRadioButton, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _libs_gallery_src_lib_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_0__.GalleryComponent],
  styles: ["mat-radio-button[_ngcontent-%COMP%] {\n  margin: 0 20px 20px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8tdGh1bWJzLW9yaWVudGF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRiIsImZpbGUiOiJkZW1vLXRodW1icy1vcmllbnRhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1yYWRpby1idXR0b24ge1xuICBtYXJnaW46IDAgMjBweCAyMHB4IDA7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvZGVtby9zcmMvYXBwL2NvbXBvbmVudHMvZGVtby10aHVtYnMtb3JpZW50YXRpb24vZGVtby10aHVtYnMtb3JpZW50YXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGO0FBQ0Esd1dBQXdXIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXJhZGlvLWJ1dHRvbiB7XG4gIG1hcmdpbjogMCAyMHB4IDIwcHggMDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 7286:
/*!***************************************************************************************!*\
  !*** ./apps/demo/src/app/components/demo-whole-config/demo-whole-config.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DemoWholeConfigComponent: () => (/* binding */ DemoWholeConfigComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9681);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9531);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6520);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5617);
/* harmony import */ var _daelmaak_ngx_gallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @daelmaak/ngx-gallery */ 6081);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ 6658);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 1333);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 6515);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 26);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ 2106);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _libs_gallery_src_lib_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../libs/gallery/src/lib/components/gallery/gallery.component */ 4621);












function DemoWholeConfigComponent_gallery_105_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "gallery", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("descriptionClick", function DemoWholeConfigComponent_gallery_105_Template_gallery_descriptionClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.galleryConfig.descriptions = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 19, ctx_r0.items))("arrows", ctx_r0.galleryConfig.arrows)("descriptions", ctx_r0.galleryConfig.descriptions)("mouseGestures", ctx_r0.galleryConfig.mouseGestures)("touchGestures", ctx_r0.galleryConfig.touchGestures)("counter", ctx_r0.galleryConfig.counter)("counterOrientation", ctx_r0.galleryConfig.counterOrientation)("visibleItems", ctx_r0.galleryConfig.visibleItems)("objectFit", ctx_r0.galleryConfig.objectFit)("loading", ctx_r0.galleryConfig.loading)("loop", ctx_r0.galleryConfig.loop)("isRtl", ctx_r0.galleryConfig.rtl)("selectedIndex", ctx_r0.galleryConfig.selectedIndex)("thumbs", ctx_r0.galleryConfig.thumbs)("thumbsAutoScroll", ctx_r0.galleryConfig.thumbsAutoScroll)("thumbsOrientation", ctx_r0.galleryConfig.thumbsOrientation)("thumbsArrows", ctx_r0.galleryConfig.thumbsArrows)("thumbsArrowSlideByLength", ctx_r0.galleryConfig.thumbsArrowSlideByLength)("thumbsScrollBehavior", ctx_r0.galleryConfig.thumbsScrollBehavior);
  }
}
function DemoWholeConfigComponent_ng_template_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Custom Loading ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DemoWholeConfigComponent_ng_template_108_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
function DemoWholeConfigComponent_ng_template_108_ng_template_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Custom item loading ... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DemoWholeConfigComponent_ng_template_108_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DemoWholeConfigComponent_ng_template_108_ng_template_1_div_2_Template, 2, 0, "div", 44);
  }
  if (rf & 2) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const seen_r18 = ctx_r26.seen;
    const item_r17 = ctx_r26.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", seen_r18 ? item_r17.src : "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", seen_r18 && _r24.naturalHeight <= 0);
  }
}
function DemoWholeConfigComponent_ng_template_108_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "video", 45, 46);
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const seen_r18 = ctx_r28.seen;
    const item_r17 = ctx_r28.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", seen_r18 ? item_r17.src : "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function DemoWholeConfigComponent_ng_template_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, DemoWholeConfigComponent_ng_template_108_ng_container_0_Template, 1, 0, "ng-container", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DemoWholeConfigComponent_ng_template_108_ng_template_1_Template, 3, 2, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DemoWholeConfigComponent_ng_template_108_ng_template_3_Template, 2, 1, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
  }
  if (rf & 2) {
    const item_r17 = ctx.item;
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r17.video)("ngIfThen", _r22)("ngIfElse", _r20);
  }
}
function DemoWholeConfigComponent_ng_template_110_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 47);
  }
  if (rf & 2) {
    const item_r31 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r31.thumbSrc || item_r31.src, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
  }
}
function DemoWholeConfigComponent_ng_template_112_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Custom loading error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DemoWholeConfigComponent_ng_template_114_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Custom thumb loading error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function DemoWholeConfigComponent_ng_template_116_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 50)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "arrow_forward_ios");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class DemoWholeConfigComponent {
  constructor(cd) {
    this.cd = cd;
    this.displayGallery = true;
    this.imageLoadingLatency = 0;
    this.mobile = matchMedia('(max-width: 767px)').matches;
    this.galleryConfig = {
      arrows: !this.mobile,
      descriptions: false,
      mouseGestures: true,
      touchGestures: true,
      counter: true,
      counterOrientation: 'bottom',
      visibleItems: 1,
      objectFit: 'cover',
      loading: 'lazy',
      loop: false,
      rtl: false,
      selectedIndex: 0,
      thumbs: true,
      thumbsAutoScroll: true,
      thumbsOrientation: 'bottom',
      thumbsArrows: true,
      thumbsArrowSlideByLength: 0,
      thumbsScrollBehavior: 'smooth'
    };
    this.storeGalleryConfig = () => {
      sessionStorage.setItem('galleryConfig', JSON.stringify(this.galleryConfig));
    };
    this.galleryConfig = this.getGalleryConfig() || this.galleryConfig;
  }
  ngOnInit() {
    this.items = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(this.images).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(items => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.defer)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(items).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.delay)(this.imageLoadingLatency)))));
    window.addEventListener('pagehide', this.storeGalleryConfig);
  }
  onConfigChange(prop, value) {
    if (value === '') {
      return;
    }
    this.galleryConfig[prop] = +value ?? value;
    this.reloadGallery();
  }
  reloadGallery() {
    this.displayGallery = false;
    this.cd.detectChanges();
    this.images.forEach(i => {
      i._loaded = false;
    });
    this.displayGallery = true;
    this.cd.detectChanges();
  }
  getInputValue(event) {
    return event.target.value;
  }
  getGalleryConfig() {
    return JSON.parse(sessionStorage.getItem('galleryConfig'));
  }
}
DemoWholeConfigComponent.ɵfac = function DemoWholeConfigComponent_Factory(t) {
  return new (t || DemoWholeConfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
};
DemoWholeConfigComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: DemoWholeConfigComponent,
  selectors: [["app-demo-whole-config"]],
  viewQuery: function DemoWholeConfigComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_daelmaak_ngx_gallery__WEBPACK_IMPORTED_MODULE_0__.GalleryComponent, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.gallery = _t.first);
    }
  },
  inputs: {
    images: "images"
  },
  decls: 118,
  vars: 20,
  consts: [["name", "arrows", 3, "ngModel", "ngModelChange"], ["name", "descriptions", 3, "ngModel", "ngModelChange"], ["name", "mouseGestures", 3, "ngModel", "ngModelChange", "change"], ["name", "touchGestures", 3, "ngModel", "ngModelChange", "change"], ["name", "counter", 3, "ngModel", "ngModelChange"], ["name", "loop", 3, "ngModel", "ngModelChange", "change"], ["name", "rtl", 3, "ngModel", "ngModelChange", "change"], ["name", "counterOrientation", 3, "ngModel", "ngModelChange"], ["value", "top"], ["value", "bottom"], ["name", "objectFit", 3, "ngModel", "ngModelChange"], ["value", "contain"], ["value", "cover"], ["name", "loading", 3, "ngModel", "ngModelChange", "change"], ["value", "auto"], ["value", "lazy"], ["name", "visibleItems", "matInput", "", 3, "ngModel", "ngModelChange", "change"], ["name", "selectedIndex", "type", "number", "matInput", "", 3, "value", "input"], ["name", "thumbs", 3, "ngModel", "ngModelChange"], ["name", "thumbsAutoScroll", 3, "ngModel", "ngModelChange"], ["name", "thumbsArrows", 3, "ngModel", "ngModelChange"], ["name", "thumbsOrientation", 3, "ngModel", "ngModelChange"], ["value", "left"], ["value", "right"], ["name", "thumbsScrollBehavior", 3, "ngModel", "ngModelChange"], ["value", "smooth"], ["name", "thumbsArrowsSlideByLength", "matInput", "", 3, "ngModel", "ngModelChange"], [1, "image-loading-latency"], ["name", "imageLoadingLatency", "matInput", "", 3, "ngModel", "ngModelChange", "change"], [1, "gallery-container"], [3, "items", "arrows", "descriptions", "mouseGestures", "touchGestures", "counter", "counterOrientation", "visibleItems", "objectFit", "loading", "loop", "isRtl", "selectedIndex", "thumbs", "thumbsAutoScroll", "thumbsOrientation", "thumbsArrows", "thumbsArrowSlideByLength", "thumbsScrollBehavior", "descriptionClick", 4, "ngIf"], ["loadingTemplate", ""], ["itemTemplate", ""], ["thumbTemplate", ""], ["errorTemplate", ""], ["thumbErrorTemplate", ""], ["arrowTemplate", ""], [3, "items", "arrows", "descriptions", "mouseGestures", "touchGestures", "counter", "counterOrientation", "visibleItems", "objectFit", "loading", "loop", "isRtl", "selectedIndex", "thumbs", "thumbsAutoScroll", "thumbsOrientation", "thumbsArrows", "thumbsArrowSlideByLength", "thumbsScrollBehavior", "descriptionClick"], [1, "custom-loading"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["imgTemplate", ""], ["videoTemplate", ""], [1, "custom-media", 3, "src"], ["img", ""], ["class", "custom-loading", 4, "ngIf"], ["controls", "", 1, "custom-media", 3, "src"], ["video", ""], [1, "custom-thumb", 3, "src"], [1, "custom-error"], [1, "custom-thumb-error"], [1, "custom-arrow"]],
  template: function DemoWholeConfigComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form")(1, "div")(2, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Gallery viewer properties");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "section")(5, "mat-checkbox", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoWholeConfigComponent_Template_mat_checkbox_ngModelChange_5_listener($event) {
        return ctx.galleryConfig.arrows = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Arrows");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "section")(8, "mat-checkbox", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoWholeConfigComponent_Template_mat_checkbox_ngModelChange_8_listener($event) {
        return ctx.galleryConfig.descriptions = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Descriptions ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "section")(11, "mat-checkbox", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoWholeConfigComponent_Template_mat_checkbox_ngModelChange_11_listener($event) {
        return ctx.galleryConfig.mouseGestures = $event;
      })("change", function DemoWholeConfigComponent_Template_mat_checkbox_change_11_listener() {
        return ctx.reloadGallery();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Mouse Gestures ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "section")(14, "mat-checkbox", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoWholeConfigComponent_Template_mat_checkbox_ngModelChange_14_listener($event) {
        return ctx.galleryConfig.touchGestures = $event;
      })("change", function DemoWholeConfigComponent_Template_mat_checkbox_change_14_listener() {
        return ctx.reloadGallery();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Touch Gestures ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "section")(17, "mat-checkbox", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoWholeConfigComponent_Template_mat_checkbox_ngModelChange_17_listener($event) {
        return ctx.galleryConfig.counter = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Counter");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "section")(20, "mat-checkbox", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoWholeConfigComponent_Template_mat_checkbox_ngModelChange_20_listener($event) {
        return ctx.galleryConfig.loop = $event;
      })("change", function DemoWholeConfigComponent_Template_mat_checkbox_change_20_listener() {
        return ctx.reloadGallery();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Loop");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "section")(23, "mat-checkbox", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoWholeConfigComponent_Template_mat_checkbox_ngModelChange_23_listener($event) {
        return ctx.galleryConfig.rtl = $event;
      })("change", function DemoWholeConfigComponent_Template_mat_checkbox_change_23_listener() {
        return ctx.reloadGallery();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Right to left");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "section")(26, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Counter orientation:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-radio-group", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoWholeConfigComponent_Template_mat_radio_group_ngModelChange_28_listener($event) {
        return ctx.galleryConfig.counterOrientation = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-radio-button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "top");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-radio-button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "bottom");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "section")(34, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Image fit:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "mat-radio-group", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoWholeConfigComponent_Template_mat_radio_group_ngModelChange_36_listener($event) {
        return ctx.galleryConfig.objectFit = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "mat-radio-button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "contain");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "mat-radio-button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "cover");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "section")(42, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Image loading strategy:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "mat-radio-group", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoWholeConfigComponent_Template_mat_radio_group_ngModelChange_44_listener($event) {
        return ctx.galleryConfig.loading = $event;
      })("change", function DemoWholeConfigComponent_Template_mat_radio_group_change_44_listener() {
        return ctx.reloadGallery();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "mat-radio-button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "auto");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "mat-radio-button", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "lazy");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "section")(50, "mat-form-field")(51, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Number of displayed items");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoWholeConfigComponent_Template_input_ngModelChange_53_listener($event) {
        return ctx.galleryConfig.visibleItems = $event;
      })("change", function DemoWholeConfigComponent_Template_input_change_53_listener() {
        return ctx.reloadGallery();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "section")(55, "mat-form-field")(56, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Selected index");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function DemoWholeConfigComponent_Template_input_input_58_listener($event) {
        return ctx.onConfigChange("selectedIndex", ctx.getInputValue($event));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div")(60, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Thumbnails properties");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "section")(63, "mat-checkbox", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoWholeConfigComponent_Template_mat_checkbox_ngModelChange_63_listener($event) {
        return ctx.galleryConfig.thumbs = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Thumbnails");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "section")(66, "mat-checkbox", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoWholeConfigComponent_Template_mat_checkbox_ngModelChange_66_listener($event) {
        return ctx.galleryConfig.thumbsAutoScroll = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Thumbs autoscroll");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "section")(69, "mat-checkbox", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoWholeConfigComponent_Template_mat_checkbox_ngModelChange_69_listener($event) {
        return ctx.galleryConfig.thumbsArrows = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Thumbnail arrows");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "section")(72, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Thumbnails orientation:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "mat-radio-group", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoWholeConfigComponent_Template_mat_radio_group_ngModelChange_74_listener($event) {
        return ctx.galleryConfig.thumbsOrientation = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "mat-radio-button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "top");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "mat-radio-button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "bottom");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "mat-radio-button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, "left");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "mat-radio-button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "right");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "section")(84, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Thumbnails scroll behavior:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "mat-radio-group", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoWholeConfigComponent_Template_mat_radio_group_ngModelChange_86_listener($event) {
        return ctx.galleryConfig.thumbsScrollBehavior = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "mat-radio-button", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "smooth");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "mat-radio-button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "auto");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "section")(92, "mat-form-field")(93, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "Slide thumbnails by length (px)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoWholeConfigComponent_Template_input_ngModelChange_95_listener($event) {
        return ctx.galleryConfig.thumbsArrowSlideByLength = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](96, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "Auxiliary");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "section", 27)(100, "mat-form-field")(101, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "Items (not images!) loading latency");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoWholeConfigComponent_Template_input_ngModelChange_103_listener($event) {
        return ctx.imageLoadingLatency = $event;
      })("change", function DemoWholeConfigComponent_Template_input_change_103_listener() {
        return ctx.reloadGallery();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](105, DemoWholeConfigComponent_gallery_105_Template, 2, 21, "gallery", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](106, DemoWholeConfigComponent_ng_template_106_Template, 2, 0, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](108, DemoWholeConfigComponent_ng_template_108_Template, 5, 3, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](110, DemoWholeConfigComponent_ng_template_110_Template, 1, 1, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](112, DemoWholeConfigComponent_ng_template_112_Template, 2, 0, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](114, DemoWholeConfigComponent_ng_template_114_Template, 2, 0, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](116, DemoWholeConfigComponent_ng_template_116_Template, 3, 0, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.galleryConfig.arrows);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.galleryConfig.descriptions);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.galleryConfig.mouseGestures);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.galleryConfig.touchGestures);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.galleryConfig.counter);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.galleryConfig.loop);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.galleryConfig.rtl);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.galleryConfig.counterOrientation);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.galleryConfig.objectFit);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.galleryConfig.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.galleryConfig.visibleItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx.galleryConfig.selectedIndex);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.galleryConfig.thumbs);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.galleryConfig.thumbsAutoScroll);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.galleryConfig.thumbsArrows);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.galleryConfig.thumbsOrientation);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.galleryConfig.thumbsScrollBehavior);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.galleryConfig.thumbsArrowSlideByLength);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.imageLoadingLatency);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.displayGallery);
    }
  },
  dependencies: [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckbox, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__.MatRadioButton, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgForm, _libs_gallery_src_lib_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__.GalleryComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-height: 1000px;\n}\n\nform[_ngcontent-%COMP%] {\n  margin: 20px;\n  display: flex;\n  justify-content: space-around;\n  flex-flow: row wrap;\n}\nform[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-right: auto;\n}\n\nsection[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n}\n\nmat-checkbox[_ngcontent-%COMP%] {\n  display: block;\n}\n\nmat-radio-button[_ngcontent-%COMP%] {\n  margin: 2px 0 2px 20px;\n}\n\nmat-form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\nmat-form-field[_ngcontent-%COMP%]     .mat-form-field-infix {\n  border-top: 0;\n}\nmat-form-field[_ngcontent-%COMP%]     .mat-form-field-wrapper {\n  padding-bottom: 0;\n}\nmat-form-field[_ngcontent-%COMP%]     .mat-form-field-underline {\n  bottom: 0;\n}\n\n.gallery-container[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  height: 80vh;\n}\n\ngallery[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 95%;\n  margin: 0 auto;\n}\n\nsection[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n[_nghost-%COMP%]  .image-loading-latency .mat-form-field-infix {\n  width: auto;\n}\n\n.custom-media[_ngcontent-%COMP%] {\n  object-fit: contain;\n  width: 100%;\n  height: 100%;\n  outline: 0;\n}\n.custom-media[src=\"\"][_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.custom-loading[_ngcontent-%COMP%], .custom-error[_ngcontent-%COMP%], .custom-thumb-error[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: black;\n  color: white;\n  opacity: 0.8;\n}\n\n.custom-arrow[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 36px;\n  background-color: transparent;\n  border: none;\n  display: flex;\n  outline: 0;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8td2hvbGUtY29uZmlnLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7QUFDSjs7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGNBQUE7QUFBRjs7QUFHQTtFQUNFLHNCQUFBO0FBQUY7O0FBSUU7RUFDRSxtQkFBQTtBQURKO0FBTU07RUFDRSxhQUFBO0FBSlI7QUFPTTtFQUNFLGlCQUFBO0FBTFI7QUFRTTtFQUNFLFNBQUE7QUFOUjs7QUFZQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtBQVRGOztBQVlBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBVEY7O0FBYUU7RUFDRSxpQkFBQTtBQVZKOztBQWVFO0VBQ0UsV0FBQTtBQVpKOztBQWdCQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBYkY7QUFlRTtFQUVFLFVBQUE7QUFkSjs7QUFrQkE7OztFQUdFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFoQkY7O0FBbUJBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFoQkYiLCJmaWxlIjoiZGVtby13aG9sZS1jb25maWcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4taGVpZ2h0OiAxMDAwcHg7XG59XG5cbmZvcm0ge1xuICBtYXJnaW46IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuXG4gID4gZGl2IHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIH1cbn1cblxuc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbm1hdC1jaGVja2JveCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgbWFyZ2luOiAycHggMCAycHggMjBweDtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICBsYWJlbCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuXG4gIDo6bmctZGVlcCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICAgICYtaW5maXgge1xuICAgICAgICBib3JkZXItdG9wOiAwO1xuICAgICAgfVxuXG4gICAgICAmLXdyYXBwZXIge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgIH1cblxuICAgICAgJi11bmRlcmxpbmUge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5nYWxsZXJ5LWNvbnRhaW5lciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogY2FsYyg4MHZoKTtcbn1cblxuZ2FsbGVyeSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDk1JTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbnNlY3Rpb24ge1xuICBidXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG59XG5cbjpob3N0OjpuZy1kZWVwIC5pbWFnZS1sb2FkaW5nLWxhdGVuY3kge1xuICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgIHdpZHRoOiBhdXRvO1xuICB9XG59XG5cbi5jdXN0b20tbWVkaWEge1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdXRsaW5lOiAwO1xuXG4gICZbc3JjPScnXSB7XG4gICAgLy8gZG8gbm90IHNob3cgbWVkaWEgaWYgbm90IHN0YXJ0ZWQgdG8gbG9hZCB5ZXRcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbi5jdXN0b20tbG9hZGluZyxcbi5jdXN0b20tZXJyb3IsXG4uY3VzdG9tLXRodW1iLWVycm9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG5cbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLmN1c3RvbS1hcnJvdyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDM2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG91dGxpbmU6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvZGVtby9zcmMvYXBwL2NvbXBvbmVudHMvZGVtby13aG9sZS1jb25maWcvZGVtby13aG9sZS1jb25maWcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtBQUNKOztBQUdBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtBQUFGOztBQUdBO0VBQ0Usc0JBQUE7QUFBRjs7QUFJRTtFQUNFLG1CQUFBO0FBREo7QUFNTTtFQUNFLGFBQUE7QUFKUjtBQU9NO0VBQ0UsaUJBQUE7QUFMUjtBQVFNO0VBQ0UsU0FBQTtBQU5SOztBQVlBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FBVEY7O0FBWUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFURjs7QUFhRTtFQUNFLGlCQUFBO0FBVko7O0FBZUU7RUFDRSxXQUFBO0FBWko7O0FBZ0JBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFiRjtBQWVFO0VBRUUsVUFBQTtBQWRKOztBQWtCQTs7O0VBR0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQWhCRjs7QUFtQkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQWhCRjtBQUNBLGd3R0FBZ3dHIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWluLWhlaWdodDogMTAwMHB4O1xufVxuXG5mb3JtIHtcbiAgbWFyZ2luOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcblxuICA+IGRpdiB7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB9XG59XG5cbnNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5tYXQtY2hlY2tib3gge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxubWF0LXJhZGlvLWJ1dHRvbiB7XG4gIG1hcmdpbjogMnB4IDAgMnB4IDIwcHg7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgbGFiZWwge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cblxuICA6Om5nLWRlZXAge1xuICAgIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgICAmLWluZml4IHtcbiAgICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgIH1cblxuICAgICAgJi13cmFwcGVyIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICB9XG5cbiAgICAgICYtdW5kZXJsaW5lIHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uZ2FsbGVyeS1jb250YWluZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IGNhbGMoODB2aCk7XG59XG5cbmdhbGxlcnkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5zZWN0aW9uIHtcbiAgYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxufVxuXG46aG9zdDo6bmctZGVlcCAuaW1hZ2UtbG9hZGluZy1sYXRlbmN5IHtcbiAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxufVxuXG4uY3VzdG9tLW1lZGlhIHtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3V0bGluZTogMDtcblxuICAmW3NyYz0nJ10ge1xuICAgIC8vIGRvIG5vdCBzaG93IG1lZGlhIGlmIG5vdCBzdGFydGVkIHRvIGxvYWQgeWV0XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG4uY3VzdG9tLWxvYWRpbmcsXG4uY3VzdG9tLWVycm9yLFxuLmN1c3RvbS10aHVtYi1lcnJvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5jdXN0b20tYXJyb3cge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAzNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdXRsaW5lOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ }),

/***/ 2920:
/*!*****************************************************************!*\
  !*** ./apps/demo/src/app/components/header/header.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class HeaderComponent {}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)();
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  decls: 12,
  vars: 0,
  consts: [[1, "header-inner-container"], [1, "subtitle"], [1, "links"], ["href", "https://github.com/daelmaak/ngx-gallery", 1, "github-link", "link"], ["src", "./assets/icons/GitHub-Mark-64px.png", "alt", "github link"], ["href", "https://www.npmjs.com/package/@daelmaak/ngx-gallery", "rel", "noreferrer", 1, "npm-link", "link"], ["src", "./assets/icons/npm-logo.svg", "alt", "npm link"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header")(1, "div", 0)(2, "div")(3, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ngx Gallery");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Performant, mobile first, easy to use Angular 8+ Gallery ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2)(8, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
  },
  styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\nheader[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 20px 0;\n  box-shadow: 0 1px 1px #bdbdbd;\n  z-index: 1;\n  position: relative;\n  box-sizing: border-box;\n}\nheader[_ngcontent-%COMP%]   .header-inner-container[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  box-sizing: border-box;\n  width: 800px;\n  max-width: 100vw;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nheader[_ngcontent-%COMP%]   .header-inner-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 110px;\n  position: relative;\n  right: 30px;\n  filter: drop-shadow(0px 0px 2px black);\n}\n@media (max-width: 767px) {\n  header[_ngcontent-%COMP%]   .header-inner-container[_ngcontent-%COMP%] {\n    display: block;\n  }\n  header[_ngcontent-%COMP%]   .header-inner-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    width: 100px;\n    position: static;\n    display: block;\n    margin: 0 auto 10px;\n  }\n}\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 10px;\n}\nheader[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n  font-size: 1.1em;\n  color: #313131;\n}\nheader[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  text-align: center;\n}\nheader[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 15px;\n}\nheader[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:nth-of-type(1) {\n  opacity: 0.85;\n}\nheader[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:nth-last-of-type(1) {\n  margin-right: 0;\n}\nheader[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%], header[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], header[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n}\nheader[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .npm-link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.3) translateY(3px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUNFO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0o7QUFDSTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxzQ0FBQTtBQUNOO0FBRUk7RUFqQkY7SUFrQkksY0FBQTtFQUNKO0VBQ0k7SUFDRSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsbUJBQUE7RUFDTjtBQUNGO0FBR0U7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQURKO0FBSUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRko7QUFLRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUhKO0FBS0k7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FBSE47QUFLTTtFQUNFLGFBQUE7QUFIUjtBQU1NO0VBQ0UsZUFBQTtBQUpSO0FBT007RUFJRSxXQURZO0VBRVosWUFGWTtBQU5wQjtBQWFNO0VBQ0UscUNBQUE7QUFYUiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCAjYmRiZGJkO1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgLmhlYWRlci1pbm5lci1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiA4MDBweDtcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIC5sb2dvIHtcbiAgICAgIHdpZHRoOiAxMTBweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHJpZ2h0OiAzMHB4O1xuICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDJweCBibGFjayk7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgLmxvZ28ge1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IDAgYXV0byAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGgxIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5cbiAgLnN1YnRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIGNvbG9yOiAjMzEzMTMxO1xuICB9XG5cbiAgLmxpbmtzIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAubGluayB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG5cbiAgICAgICY6bnRoLW9mLXR5cGUoMSkge1xuICAgICAgICBvcGFjaXR5OiAwLjg1O1xuICAgICAgfVxuXG4gICAgICAmOm50aC1sYXN0LW9mLXR5cGUoMSkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICB9XG5cbiAgICAgICYsXG4gICAgICAmIGltZyxcbiAgICAgICYgc3ZnIHtcbiAgICAgICAgJGRpbWVuc2lvbjogMzZweDtcbiAgICAgICAgd2lkdGg6ICRkaW1lbnNpb247XG4gICAgICAgIGhlaWdodDogJGRpbWVuc2lvbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubnBtLWxpbmsge1xuICAgICAgaW1nIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpIHRyYW5zbGF0ZVkoM3B4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvZGVtby9zcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFDRjtBQUNFO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0o7QUFDSTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxzQ0FBQTtBQUNOO0FBRUk7RUFqQkY7SUFrQkksY0FBQTtFQUNKO0VBQ0k7SUFDRSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsbUJBQUE7RUFDTjtBQUNGO0FBR0U7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQURKO0FBSUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRko7QUFLRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUhKO0FBS0k7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FBSE47QUFLTTtFQUNFLGFBQUE7QUFIUjtBQU1NO0VBQ0UsZUFBQTtBQUpSO0FBT007RUFJRSxXQURZO0VBRVosWUFGWTtBQU5wQjtBQWFNO0VBQ0UscUNBQUE7QUFYUjtBQUNBLHc0RkFBdzRGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMjBweCAwO1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggI2JkYmRiZDtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gIC5oZWFkZXItaW5uZXItY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogODAwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAubG9nbyB7XG4gICAgICB3aWR0aDogMTEwcHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICByaWdodDogMzBweDtcbiAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAycHggYmxhY2spO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAgIC5sb2dvIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gMTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuXG4gIC5zdWJ0aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICBjb2xvcjogIzMxMzEzMTtcbiAgfVxuXG4gIC5saW5rcyB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgLmxpbmsge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuXG4gICAgICAmOm50aC1vZi10eXBlKDEpIHtcbiAgICAgICAgb3BhY2l0eTogMC44NTtcbiAgICAgIH1cblxuICAgICAgJjpudGgtbGFzdC1vZi10eXBlKDEpIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgfVxuXG4gICAgICAmLFxuICAgICAgJiBpbWcsXG4gICAgICAmIHN2ZyB7XG4gICAgICAgICRkaW1lbnNpb246IDM2cHg7XG4gICAgICAgIHdpZHRoOiAkZGltZW5zaW9uO1xuICAgICAgICBoZWlnaHQ6ICRkaW1lbnNpb247XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm5wbS1saW5rIHtcbiAgICAgIGltZyB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4zKSB0cmFuc2xhdGVZKDNweCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ }),

/***/ 4937:
/*!*********************************************************************!*\
  !*** ./apps/demo/src/app/components/showcase/showcase.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShowcaseComponent: () => (/* binding */ ShowcaseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);


function ShowcaseComponent_a_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Edit on StackBlitz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.stackblitz, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
const _c0 = [[["", "subheading", ""]], "*"];
const _c1 = ["[subheading]", "*"];
class ShowcaseComponent {}
ShowcaseComponent.ɵfac = function ShowcaseComponent_Factory(t) {
  return new (t || ShowcaseComponent)();
};
ShowcaseComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ShowcaseComponent,
  selectors: [["app-showcase"]],
  inputs: {
    heading: "heading",
    subheading: "subheading",
    stackblitz: "stackblitz"
  },
  ngContentSelectors: _c1,
  decls: 8,
  vars: 3,
  consts: [[1, "heading-section"], [1, "subheading"], ["class", "stackblitz-demo-link", "target", "_blank", 3, "href", 4, "ngIf"], ["target", "_blank", 1, "stackblitz-demo-link", 3, "href"], ["src", "./assets/icons/stackblitz-logo-link.svg"]],
  template: function ShowcaseComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ShowcaseComponent_a_6_Template, 3, 1, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7, 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.heading);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subheading, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stackblitz);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
  styles: ["[_nghost-%COMP%] {\n  margin: 0 30px 50px;\n  display: block;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n[_nghost-%COMP%]     gallery {\n  width: 100%;\n}\n\n.heading-section[_ngcontent-%COMP%] {\n  padding: 1em 0;\n}\n.heading-section[_ngcontent-%COMP%]   .stackblitz-demo-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 10px;\n  text-decoration: none;\n}\n.heading-section[_ngcontent-%COMP%]   .stackblitz-demo-link[_ngcontent-%COMP%]:visited {\n  color: blue;\n}\n.heading-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20px;\n  margin-right: 4px;\n  margin-bottom: -4px;\n}\n\nh3[_ngcontent-%COMP%] {\n  color: #444444;\n  margin: 0;\n  padding: 0;\n}\n@media (min-width: 768px) {\n  h3[_ngcontent-%COMP%] {\n    font-size: 1.6em;\n  }\n}\n\n.subheading[_ngcontent-%COMP%] {\n  color: #5b5b5b;\n  margin-left: 5px;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3djYXNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFDRTtFQUNFLGNBQUE7QUFDSjtBQUVFO0VBQ0UsV0FBQTtBQUFKOztBQUlBO0VBQ0UsY0FBQTtBQURGO0FBR0U7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFESjtBQUdJO0VBQ0UsV0FBQTtBQUROO0FBS0U7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUhKOztBQU9BO0VBQ0UsY0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBSkY7QUFNRTtFQUxGO0lBTUksZ0JBQUE7RUFIRjtBQUNGOztBQU1BO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUhGIiwiZmlsZSI6InNob3djYXNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBtYXJnaW46IDAgMzBweCA1MHB4O1xuICBkaXNwbGF5OiBibG9jaztcblxuICA+ICoge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5cbiAgOjpuZy1kZWVwIGdhbGxlcnkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5oZWFkaW5nLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAxZW0gMDtcblxuICAuc3RhY2tibGl0ei1kZW1vLWxpbmsge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgICY6dmlzaXRlZCB7XG4gICAgICBjb2xvcjogYmx1ZTtcbiAgICB9XG4gIH1cblxuICBpbWcge1xuICAgIGhlaWdodDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtNHB4O1xuICB9XG59XG5cbmgzIHtcbiAgY29sb3I6ICM0NDQ0NDQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICBmb250LXNpemU6IDEuNmVtO1xuICB9XG59XG5cbi5zdWJoZWFkaW5nIHtcbiAgY29sb3I6ICM1YjViNWI7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvZGVtby9zcmMvYXBwL2NvbXBvbmVudHMvc2hvd2Nhc2Uvc2hvd2Nhc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFDRjtBQUNFO0VBQ0UsY0FBQTtBQUNKO0FBRUU7RUFDRSxXQUFBO0FBQUo7O0FBSUE7RUFDRSxjQUFBO0FBREY7QUFHRTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQURKO0FBR0k7RUFDRSxXQUFBO0FBRE47QUFLRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBSEo7O0FBT0E7RUFDRSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFKRjtBQU1FO0VBTEY7SUFNSSxnQkFBQTtFQUhGO0FBQ0Y7O0FBTUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBSEY7QUFDQSx3OENBQXc4QyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgbWFyZ2luOiAwIDMwcHggNTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgPiAqIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gIDo6bmctZGVlcCBnYWxsZXJ5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uaGVhZGluZy1zZWN0aW9uIHtcbiAgcGFkZGluZzogMWVtIDA7XG5cbiAgLnN0YWNrYmxpdHotZGVtby1saW5rIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgICAmOnZpc2l0ZWQge1xuICAgICAgY29sb3I6IGJsdWU7XG4gICAgfVxuICB9XG5cbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogLTRweDtcbiAgfVxufVxuXG5oMyB7XG4gIGNvbG9yOiAjNDQ0NDQ0O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgZm9udC1zaXplOiAxLjZlbTtcbiAgfVxufVxuXG4uc3ViaGVhZGluZyB7XG4gIGNvbG9yOiAjNWI1YjViO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ }),

/***/ 3522:
/*!***************************************************!*\
  !*** ./apps/demo/src/environments/environment.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 5306:
/*!*******************************!*\
  !*** ./apps/demo/src/main.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6795);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 3522);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 3142:
/*!**********************************************************************!*\
  !*** ./libs/gallery/src/lib/components/counter/counter.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CounterComponent: () => (/* binding */ CounterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class CounterComponent {}
CounterComponent.ɵfac = function CounterComponent_Factory(t) {
  return new (t || CounterComponent)();
};
CounterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CounterComponent,
  selectors: [["counter"]],
  hostVars: 2,
  hostBindings: function CounterComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.orientation);
    }
  },
  inputs: {
    itemQuantity: "itemQuantity",
    selectedIndex: "selectedIndex",
    orientation: "orientation"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 2,
  vars: 2,
  consts: [["aria-hidden", "true"]],
  template: function CounterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.selectedIndex + 1, "/", ctx.itemQuantity || 0, " ");
    }
  },
  styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  background: rgba(0, 0, 0, 0.6);\n  padding: 0.25rem 0.5rem;\n  font-size: 0.9rem;\n  color: rgb(241, 245, 249);\n  letter-spacing: 3px;\n  -webkit-user-select: none;\n          user-select: none;\n}\n.top[_nghost-%COMP%] {\n  top: 0;\n  border-bottom-left-radius: 0.375rem;\n  border-bottom-right-radius: 0.375rem;\n}\n.bottom[_nghost-%COMP%] {\n  bottom: 0;\n  border-top-left-radius: 0.375rem;\n  border-top-right-radius: 0.375rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FBREY7QUFHRTtFQUNFLE1BQUE7RUFDQSxtQ0FkYztFQWVkLG9DQWZjO0FBY2xCO0FBSUU7RUFDRSxTQUFBO0VBQ0EsZ0NBcEJjO0VBcUJkLGlDQXJCYztBQW1CbEIiLCJmaWxlIjoiY291bnRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgJGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogcmdiKDI0MSAyNDUgMjQ5KTsgLy8gVE9ETzogRXh0cmFjdCB0byB2YXJpYWJsZVxuICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAmLnRvcCB7XG4gICAgdG9wOiAwO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgfVxuXG4gICYuYm90dG9tIHtcbiAgICBib3R0b206IDA7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICB9XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvZ2FsbGVyeS9zcmMvbGliL2NvbXBvbmVudHMvY291bnRlci9jb3VudGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQURGO0FBR0U7RUFDRSxNQUFBO0VBQ0EsbUNBZGM7RUFlZCxvQ0FmYztBQWNsQjtBQUlFO0VBQ0UsU0FBQTtFQUNBLGdDQXBCYztFQXFCZCxpQ0FyQmM7QUFtQmxCO0FBRUEsNHRDQUE0dEMiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICRib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IHJnYigyNDEgMjQ1IDI0OSk7IC8vIFRPRE86IEV4dHJhY3QgdG8gdmFyaWFibGVcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgJi50b3Age1xuICAgIHRvcDogMDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gIH1cblxuICAmLmJvdHRvbSB7XG4gICAgYm90dG9tOiAwO1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 4621:
/*!**********************************************************************!*\
  !*** ./libs/gallery/src/lib/components/gallery/gallery.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GalleryComponent: () => (/* binding */ GalleryComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ 8247);
/* harmony import */ var _core_aria__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/aria */ 6090);
/* harmony import */ var _thumbs_thumbs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../thumbs/thumbs.component */ 4917);
/* harmony import */ var _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../viewer/viewer.component */ 5157);








function GalleryComponent_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.aria.galleryLabel, "\n");
  }
}
function GalleryComponent_thumbs_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "thumbs", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("thumbClick", function GalleryComponent_thumbs_1_Template_thumbs_thumbClick_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4._onThumbClick($event));
    })("thumbHover", function GalleryComponent_thumbs_1_Template_thumbs_thumbHover_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.thumbHover.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx_r1.items)("selectedIndex", ctx_r1.selectedIndex)("orientation", ctx_r1.thumbsOrientation)("arrows", ctx_r1.thumbsArrows)("arrowSlideByLength", ctx_r1.thumbsArrowSlideByLength)("autoScroll", ctx_r1.thumbsAutoScroll)("scrollBehavior", ctx_r1.thumbsScrollBehavior)("thumbTemplate", ctx_r1.thumbTemplate)("arrowTemplate", ctx_r1.thumbsArrowTemplate)("errorTemplate", ctx_r1.thumbErrorTemplate)("aria", ctx_r1.aria)("isRtl", ctx_r1.isRtl);
  }
}
function GalleryComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div")(2, "div")(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
class GalleryComponent {
  constructor() {
    this.selectedIndex = 0;
    this.aria = _core_aria__WEBPACK_IMPORTED_MODULE_1__.defaultAria;
    this.arrows = true;
    this.descriptions = false;
    this.mouseGestures = true;
    this.touchGestures = true;
    /**
     * Controls whether items outside gallery's scrollport should overflow it. When clip == false,
     * items overflowing the gallery will be visible on both sides. Otherwise they will be hidden
     * with `overflow: hidden`.
     */
    this.clip = true;
    this.counter = true;
    this.counterOrientation = 'bottom';
    this.visibleItems = 1;
    this.moveByItems = 1;
    this.loading = 'lazy';
    this.loop = false;
    this.objectFit = 'cover';
    this.thumbs = true;
    this.thumbsAutoScroll = true;
    this.thumbsOrientation = 'bottom';
    this.thumbsArrows = true;
    this.thumbsScrollBehavior = 'smooth';
    this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.thumbClick = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.thumbHover = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.descriptionClick = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    this.selection = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
  }
  get _galleryColumn() {
    return this.thumbsOrientation === 'top' || this.thumbsOrientation === 'bottom';
  }
  get _thumbsOrientationFlag() {
    return this._galleryColumn ? 6 /* OrientationFlag.HORIZONTAL */ : 24 /* OrientationFlag.VERTICAL */;
  }

  focus() {
    this._viewerElRef.nativeElement.focus();
  }
  next() {
    this._viewerRef.selectByDelta(1);
  }
  prev() {
    this._viewerRef.selectByDelta(-1);
  }
  select(index) {
    this._viewerRef.select(index);
    this._thumbsRef.select(index);
    this._selectInternal(index);
  }
  slideThumbs(direction) {
    this._thumbsRef.slide(direction);
  }
  _onThumbClick(event) {
    this._viewerRef.select(event.index);
    this.thumbClick.emit(event);
    this._selectInternal(event.index);
  }
  _selectInternal(index) {
    this.selectedIndex = index;
    this.selection.emit(this.items[index]);
  }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) {
  return new (t || GalleryComponent)();
};
GalleryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: GalleryComponent,
  selectors: [["gallery"]],
  viewQuery: function GalleryComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_3__.ViewerComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_thumbs_thumbs_component__WEBPACK_IMPORTED_MODULE_2__.ThumbsComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_3__.ViewerComponent, 5, _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._viewerRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._thumbsRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._viewerElRef = _t.first);
    }
  },
  hostVars: 4,
  hostBindings: function GalleryComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown.arrowright", function GalleryComponent_keydown_arrowright_HostBindingHandler() {
        return ctx.next();
      })("keydown.arrowleft", function GalleryComponent_keydown_arrowleft_HostBindingHandler() {
        return ctx.prev();
      });
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("rtl", ctx.isRtl)("gallery--column", ctx._galleryColumn);
    }
  },
  inputs: {
    items: "items",
    selectedIndex: "selectedIndex",
    aria: "aria",
    arrows: "arrows",
    descriptions: "descriptions",
    errorText: "errorText",
    mouseGestures: "mouseGestures",
    touchGestures: "touchGestures",
    clip: "clip",
    counter: "counter",
    counterOrientation: "counterOrientation",
    visibleItems: "visibleItems",
    moveByItems: "moveByItems",
    loading: "loading",
    loop: "loop",
    objectFit: "objectFit",
    isRtl: "isRtl",
    itemTemplate: "itemTemplate",
    loadingTemplate: "loadingTemplate",
    errorTemplate: "errorTemplate",
    arrowTemplate: "arrowTemplate",
    contentTemplate: "contentTemplate",
    thumbs: "thumbs",
    thumbsAutoScroll: "thumbsAutoScroll",
    thumbsOrientation: "thumbsOrientation",
    thumbsArrows: "thumbsArrows",
    thumbsArrowSlideByLength: "thumbsArrowSlideByLength",
    thumbsScrollBehavior: "thumbsScrollBehavior",
    thumbTemplate: "thumbTemplate",
    thumbsArrowTemplate: "thumbsArrowTemplate",
    thumbErrorTemplate: "thumbErrorTemplate"
  },
  outputs: {
    itemClick: "itemClick",
    thumbClick: "thumbClick",
    thumbHover: "thumbHover",
    descriptionClick: "descriptionClick",
    selection: "selection"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
  decls: 5,
  vars: 25,
  consts: [["class", "sr-only", "tabindex", "0", 4, "ngIf"], [3, "items", "selectedIndex", "orientation", "arrows", "arrowSlideByLength", "autoScroll", "scrollBehavior", "thumbTemplate", "arrowTemplate", "errorTemplate", "aria", "isRtl", "thumbClick", "thumbHover", 4, "ngIf"], [3, "items", "selectedIndex", "arrows", "descriptions", "errorText", "mouseGestures", "touchGestures", "clip", "counter", "counterOrientation", "visibleItems", "moveByItems", "objectFit", "loading", "itemTemplate", "loadingTemplate", "errorTemplate", "contentTemplate", "loop", "thumbsOrientation", "arrowTemplate", "aria", "isRtl", "itemClick", "descriptionClick", "selection"], ["defaultLoadingTemplate", ""], ["tabindex", "0", 1, "sr-only"], [3, "items", "selectedIndex", "orientation", "arrows", "arrowSlideByLength", "autoScroll", "scrollBehavior", "thumbTemplate", "arrowTemplate", "errorTemplate", "aria", "isRtl", "thumbClick", "thumbHover"], [1, "loading"]],
  template: function GalleryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, GalleryComponent_span_0_Template, 2, 1, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, GalleryComponent_thumbs_1_Template, 1, 12, "thumbs", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "viewer", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("itemClick", function GalleryComponent_Template_viewer_itemClick_2_listener($event) {
        return ctx.itemClick.emit($event);
      })("descriptionClick", function GalleryComponent_Template_viewer_descriptionClick_2_listener($event) {
        return ctx.descriptionClick.emit($event);
      })("selection", function GalleryComponent_Template_viewer_selection_2_listener($event) {
        ctx._selectInternal($event);
        return ctx._thumbsRef == null ? null : ctx._thumbsRef.select($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, GalleryComponent_ng_template_3_Template, 4, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.aria == null ? null : ctx.aria.galleryLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.thumbs);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx.items)("selectedIndex", +ctx.selectedIndex)("arrows", ctx.arrows)("descriptions", ctx.descriptions)("errorText", ctx.errorText)("mouseGestures", ctx.mouseGestures)("touchGestures", ctx.touchGestures)("clip", ctx.clip)("counter", ctx.counter)("counterOrientation", ctx.counterOrientation)("visibleItems", ctx.visibleItems)("moveByItems", ctx.moveByItems)("objectFit", ctx.objectFit)("loading", ctx.loading)("itemTemplate", ctx.itemTemplate)("loadingTemplate", ctx.loadingTemplate || _r2)("errorTemplate", ctx.errorTemplate)("contentTemplate", ctx.contentTemplate)("loop", ctx.loop)("thumbsOrientation", ctx._thumbsOrientationFlag)("arrowTemplate", ctx.arrowTemplate)("aria", ctx.aria)("isRtl", ctx.isRtl);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _thumbs_thumbs_component__WEBPACK_IMPORTED_MODULE_2__.ThumbsComponent, _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_3__.ViewerComponent],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  height: 600px;\n  width: 500px;\n  outline: 0;\n  position: relative;\n}\n.gallery--column[_nghost-%COMP%] {\n  flex-direction: column;\n}\n.rtl[_nghost-%COMP%] {\n  direction: ltr;\n}\n.rtl[_nghost-%COMP%]   viewer[_ngcontent-%COMP%], .rtl[_nghost-%COMP%]   thumbs[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n\n[_nghost-%COMP%]  {\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n}\n[_nghost-%COMP%]  button {\n  border: none;\n}\n[_nghost-%COMP%]  ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n[_nghost-%COMP%]  .sr-only {\n  position: absolute !important;\n  clip: rect(1px, 1px, 1px, 1px);\n  top: auto;\n  left: -9999px;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n}\n\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background-color: transparent;\n  z-index: 10;\n}\n.loading[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  height: 13px;\n  width: 13px;\n  background-color: #4a4a4a;\n  animation: _ngcontent-%COMP%_bounce 2s infinite;\n  border-radius: 50%;\n  box-shadow: 0 0 0 1px whitesmoke, 0 0 1px 1px whitesmoke;\n}\n.loading[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  animation-delay: 0.125s;\n}\n.loading[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%] {\n  animation-delay: 0.3s;\n}\n@keyframes _ngcontent-%COMP%_bounce {\n  20% {\n    transform: translateY(-20px);\n  }\n  50% {\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGxlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNFO0VBQ0Usc0JBQUE7QUFDSjtBQUVFO0VBRUUsY0FBQTtBQURKO0FBR0k7O0VBRUUsY0FBQTtBQUROOztBQU1BO0VBQ0UseURBQ0U7QUFKSjtBQVNFO0VBQ0UsWUFBQTtBQVBKO0FBVUU7RUFDRSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBUko7QUFXRTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFUSjs7QUFhQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0FBVkY7QUFZRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0RBQ0U7QUFYTjtBQWNJO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtBQVpOO0FBY007RUFDRSxxQkFBQTtBQVpSO0FBaUJFO0VBQ0U7SUFDRSw0QkFBQTtFQWZKO0VBaUJFO0lBQ0Usd0JBQUE7RUFmSjtBQUNGIiwiZmlsZSI6ImdhbGxlcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNjAwcHg7XG4gIHdpZHRoOiA1MDBweDtcbiAgb3V0bGluZTogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICYuZ2FsbGVyeS0tY29sdW1uIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgJi5ydGwge1xuICAgIC8vIG1haW50YWlucyB0aHVtYnMgb3JpZW50YXRpb24gYWxzbyB3aGVuIHRoZSB3aG9sZSBkb2N1bWVudCBpcyBpbiBSVEwgbW9kZVxuICAgIGRpcmVjdGlvbjogbHRyO1xuXG4gICAgdmlld2VyLFxuICAgIHRodW1icyB7XG4gICAgICBkaXJlY3Rpb246IHJ0bDtcbiAgICB9XG4gIH1cbn1cblxuOmhvc3Q6Om5nLWRlZXAge1xuICBmb250LWZhbWlseTpcbiAgICBIZWx2ZXRpY2EgTmV1ZSxcbiAgICBIZWx2ZXRpY2EsXG4gICAgQXJpYWwsXG4gICAgc2Fucy1zZXJpZjtcblxuICBidXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuXG4gIHVsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICAuc3Itb25seSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgY2xpcDogcmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpO1xuICAgIHRvcDogYXV0bztcbiAgICBsZWZ0OiAtOTk5OXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxufVxuXG4ubG9hZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHotaW5kZXg6IDEwO1xuXG4gID4gZGl2IHtcbiAgICBoZWlnaHQ6IDEzcHg7XG4gICAgd2lkdGg6IDEzcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRhNGE0YTtcbiAgICBhbmltYXRpb246IGJvdW5jZSAycyBpbmZpbml0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm94LXNoYWRvdzpcbiAgICAgIDAgMCAwIDFweCB3aGl0ZXNtb2tlLFxuICAgICAgMCAwIDFweCAxcHggd2hpdGVzbW9rZTtcblxuICAgICsgZGl2IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjEyNXM7XG5cbiAgICAgICsgZGl2IHtcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBrZXlmcmFtZXMgYm91bmNlIHtcbiAgICAyMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvZ2FsbGVyeS9zcmMvbGliL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLHNCQUFBO0FBQ0o7QUFFRTtFQUVFLGNBQUE7QUFESjtBQUdJOztFQUVFLGNBQUE7QUFETjs7QUFNQTtFQUNFLHlEQUNFO0FBSko7QUFTRTtFQUNFLFlBQUE7QUFQSjtBQVVFO0VBQ0UscUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQVJKO0FBV0U7RUFDRSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBVEo7O0FBYUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQVZGO0FBWUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLHdEQUNFO0FBWE47QUFjSTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7QUFaTjtBQWNNO0VBQ0UscUJBQUE7QUFaUjtBQWlCRTtFQUNFO0lBQ0UsNEJBQUE7RUFmSjtFQWlCRTtJQUNFLHdCQUFBO0VBZko7QUFDRjtBQUNBLDQ0RkFBNDRGIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDYwMHB4O1xuICB3aWR0aDogNTAwcHg7XG4gIG91dGxpbmU6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmLmdhbGxlcnktLWNvbHVtbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gICYucnRsIHtcbiAgICAvLyBtYWludGFpbnMgdGh1bWJzIG9yaWVudGF0aW9uIGFsc28gd2hlbiB0aGUgd2hvbGUgZG9jdW1lbnQgaXMgaW4gUlRMIG1vZGVcbiAgICBkaXJlY3Rpb246IGx0cjtcblxuICAgIHZpZXdlcixcbiAgICB0aHVtYnMge1xuICAgICAgZGlyZWN0aW9uOiBydGw7XG4gICAgfVxuICB9XG59XG5cbjpob3N0OjpuZy1kZWVwIHtcbiAgZm9udC1mYW1pbHk6XG4gICAgSGVsdmV0aWNhIE5ldWUsXG4gICAgSGVsdmV0aWNhLFxuICAgIEFyaWFsLFxuICAgIHNhbnMtc2VyaWY7XG5cbiAgYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cblxuICB1bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLnNyLW9ubHkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgIGNsaXA6IHJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtcbiAgICB0b3A6IGF1dG87XG4gICAgbGVmdDogLTk5OTlweDtcbiAgICB3aWR0aDogMXB4O1xuICAgIGhlaWdodDogMXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbn1cblxuLmxvYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB6LWluZGV4OiAxMDtcblxuICA+IGRpdiB7XG4gICAgaGVpZ2h0OiAxM3B4O1xuICAgIHdpZHRoOiAxM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YTRhNGE7XG4gICAgYW5pbWF0aW9uOiBib3VuY2UgMnMgaW5maW5pdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJveC1zaGFkb3c6XG4gICAgICAwIDAgMCAxcHggd2hpdGVzbW9rZSxcbiAgICAgIDAgMCAxcHggMXB4IHdoaXRlc21va2U7XG5cbiAgICArIGRpdiB7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4xMjVzO1xuXG4gICAgICArIGRpdiB7XG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC4zcztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGJvdW5jZSB7XG4gICAgMjAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ }),

/***/ 3677:
/*!*********************************************************************************!*\
  !*** ./libs/gallery/src/lib/components/icons/chevron/chevron-icon.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChevronIconComponent: () => (/* binding */ ChevronIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ChevronIconComponent {}
ChevronIconComponent.ɵfac = function ChevronIconComponent_Factory(t) {
  return new (t || ChevronIconComponent)();
};
ChevronIconComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ChevronIconComponent,
  selectors: [["chevron-icon"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
  decls: 17,
  vars: 0,
  consts: [["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 407.436 407.436", 0, "xml", "space", "preserve"], ["points", "112.814,0 91.566,21.178 273.512,203.718 91.566,386.258 112.814,407.436 315.869,203.718 "]],
  template: function ChevronIconComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "polygon", 1)(2, "g")(3, "g")(4, "g")(5, "g")(6, "g")(7, "g")(8, "g")(9, "g")(10, "g")(11, "g")(12, "g")(13, "g")(14, "g")(15, "g")(16, "g");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["svg[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n}\n\nsvg[_ngcontent-%COMP%] {\n  fill: white;\n  filter: drop-shadow(0 0 1px black);\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZXZyb24taWNvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLFdBRGdCO0VBRWhCLFlBRmdCO0FBRWxCOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtBQUFGIiwiZmlsZSI6ImNoZXZyb24taWNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInN2ZyB7XG4gICRzdmctZGltZW5zaW9uOiAyNnB4O1xuICB3aWR0aDogJHN2Zy1kaW1lbnNpb247XG4gIGhlaWdodDogJHN2Zy1kaW1lbnNpb247XG59XG5cbnN2ZyB7XG4gIGZpbGw6IHdoaXRlO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAxcHggYmxhY2spO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvZ2FsbGVyeS9zcmMvbGliL2NvbXBvbmVudHMvaWNvbnMvY2hldnJvbi9jaGV2cm9uLWljb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxXQURnQjtFQUVoQixZQUZnQjtBQUVsQjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7QUFBRjtBQUNBLDRqQkFBNGpCIiwic291cmNlc0NvbnRlbnQiOlsic3ZnIHtcbiAgJHN2Zy1kaW1lbnNpb246IDI2cHg7XG4gIHdpZHRoOiAkc3ZnLWRpbWVuc2lvbjtcbiAgaGVpZ2h0OiAkc3ZnLWRpbWVuc2lvbjtcbn1cblxuc3ZnIHtcbiAgZmlsbDogd2hpdGU7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDFweCBibGFjayk7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 4917:
/*!********************************************************************!*\
  !*** ./libs/gallery/src/lib/components/thumbs/thumbs.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThumbsComponent: () => (/* binding */ ThumbsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ 8247);
/* harmony import */ var _icons_chevron_chevron_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/chevron/chevron-icon.component */ 3677);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);






const _c0 = ["thumbs"];
const _c1 = ["thumb"];
function ThumbsComponent_button_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "chevron-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ThumbsComponent_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ThumbsComponent_button_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.slide(-1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ThumbsComponent_button_0_div_1_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.arrowTemplate)("ngIfElse", ctx_r0.arrowTemplate);
  }
}
function ThumbsComponent_li_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "li", 7);
  }
}
function ThumbsComponent_li_4_ng_container_2_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("thumbs-error-icon--video", item_r8.video);
  }
}
function ThumbsComponent_li_4_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ThumbsComponent_li_4_ng_container_2_ng_container_2_div_1_Template, 2, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r14.errorTemplate)("ngIfElse", ctx_r14.errorTemplate);
  }
}
function ThumbsComponent_li_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("load", function ThumbsComponent_li_4_ng_container_2_Template_img_load_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);
      const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r17.onLoadChange(item_r8, true));
    })("error", function ThumbsComponent_li_4_ng_container_2_Template_img_error_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);
      const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r20.onLoadChange(item_r8, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ThumbsComponent_li_4_ng_container_2_ng_container_2_Template, 2, 2, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r8.thumbSrc || "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", item_r8.alt);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r8._thumbFailed);
  }
}
function ThumbsComponent_li_4_ng_template_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
  }
}
const _c2 = function (a0, a1, a2) {
  return {
    index: a0,
    selectedIndex: a1,
    item: a2
  };
};
function ThumbsComponent_li_4_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThumbsComponent_li_4_ng_template_3_ng_container_0_Template, 1, 0, "ng-container", 16);
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r9 = ctx_r24.index;
    const item_r8 = ctx_r24.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", ctx_r13.thumbTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](2, _c2, i_r9, ctx_r13.selectedIndex, item_r8));
  }
}
function ThumbsComponent_li_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ThumbsComponent_li_4_Template_li_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26);
      const i_r9 = restoredCtx.index;
      const item_r8 = restoredCtx.$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r25.emitEvent(i_r9, item_r8, $event, ctx_r25.thumbClick));
    })("mouseenter", function ThumbsComponent_li_4_Template_li_mouseenter_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26);
      const i_r9 = restoredCtx.index;
      const item_r8 = restoredCtx.$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r27.emitEvent(i_r9, item_r8, $event, ctx_r27.thumbHover));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ThumbsComponent_li_4_ng_container_2_Template, 3, 3, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ThumbsComponent_li_4_ng_template_3_Template, 1, 6, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r9 = ctx.index;
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("thumbs-item--selected", i_r9 === ctx_r3.selectedIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r3.thumbTemplate)("ngIfElse", _r12);
  }
}
function ThumbsComponent_button_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "chevron-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ThumbsComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ThumbsComponent_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r29.slide(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ThumbsComponent_button_5_div_1_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r4.arrowTemplate)("ngIfElse", ctx_r4.arrowTemplate);
  }
}
class ThumbsComponent {
  get cssClass() {
    return `thumbs--${this.orientation}`;
  }
  get hostOffsetAxis() {
    return this.vertical ? this.elRef.nativeElement.offsetHeight : this.elRef.nativeElement.offsetWidth;
  }
  get scrollKey() {
    return this.vertical ? 'scrollTop' : 'scrollLeft';
  }
  get thumbsEmpty() {
    return !this.thumbsRef || !this.thumbsRef.length;
  }
  get vertical() {
    return this.orientation === 'left' || this.orientation === 'right';
  }
  constructor(cd, elRef) {
    this.cd = cd;
    this.elRef = elRef;
    this.items = [];
    this.thumbClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.thumbHover = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.showStartArrow = false;
    this.showEndArrow = false;
    this.onArrowsObserved = entries => {
      if (this.thumbsEmpty) return;
      const firstTarget = entries[0].target;
      const {
        first,
        last
      } = this.thumbsRef;
      const firstThumbEntry = firstTarget === first.nativeElement ? entries[0] : entries[1];
      const lastThumbEntry = firstTarget === last.nativeElement ? entries[0] : entries[1];
      this.setObservedArrows(firstThumbEntry, lastThumbEntry);
      this.cd.detectChanges();
    };
  }
  ngOnChanges({
    arrows,
    items
  }) {
    if (arrows) {
      if (arrows.currentValue) {
        this.observeArrows();
      } else if (!arrows.currentValue) {
        this.showStartArrow = this.showEndArrow = false;
        this.unobserveArrows();
      }
    }
    if (items) {
      setTimeout(() => {
        if (this.arrows) {
          this.observeArrows();
        }
        this.centerThumbIfNeeded(this.selectedIndex);
      });
    }
  }
  ngOnDestroy() {
    this.unobserveArrows();
  }
  slide(direction) {
    let delta;
    if (this.arrowSlideByLength) {
      delta = this.arrowSlideByLength;
    } else {
      // Note: Slide by the full height/width of the gallery
      // or by the overflow of the thumbs - to prevent unnecessary requestAnimationFrame calls while trying to scroll
      // outside of the min/max scroll of the thumbs
      const thumbList = this.thumbListRef.nativeElement;
      const thumbListScrollAxis = this.vertical ? thumbList.scrollHeight : thumbList.scrollWidth;
      const thumbListOffsetAxis = this.vertical ? thumbList.offsetHeight : thumbList.offsetWidth;
      delta = Math.min(thumbListOffsetAxis, thumbListScrollAxis - thumbListOffsetAxis);
    }
    this.scroll(delta * direction);
  }
  centerThumbIfNeeded(index) {
    if (!this.items || this.items.length <= 1) {
      return;
    }
    const nextItemRef = this.thumbsRef.toArray()[index];
    if (!nextItemRef) {
      return;
    }
    const nextItemEl = nextItemRef.nativeElement;
    const {
      offsetLeft,
      offsetTop,
      offsetWidth,
      offsetHeight
    } = nextItemEl;
    const itemOffset = this.vertical ? offsetTop : offsetLeft;
    const itemOffsetAxis = this.vertical ? offsetHeight : offsetWidth;
    const hostScrollAxis = this.hostOffsetAxis;
    const thumbListScroll = this.thumbListRef.nativeElement[this.scrollKey];
    const nextScrollDelta = itemOffset + itemOffsetAxis / 2 - hostScrollAxis / 2 - thumbListScroll;
    if (thumbListScroll + hostScrollAxis < itemOffset + itemOffsetAxis || thumbListScroll > itemOffset) {
      this.scroll(nextScrollDelta);
    }
  }
  select(index) {
    this.selectedIndex = index;
    this.cd.detectChanges();
    if (this.autoScroll) {
      setTimeout(() => this.centerThumbIfNeeded(index));
    }
  }
  emitEvent(index, item, event, emitter) {
    emitter.emit({
      index,
      item,
      event
    });
  }
  onLoadChange(item, success) {
    item._thumbFailed = !success;
  }
  scroll(totalScrollDelta) {
    if (!_core__WEBPACK_IMPORTED_MODULE_0__.isBrowser) {
      return;
    }
    if (_core__WEBPACK_IMPORTED_MODULE_0__.SUPPORT.scrollBehavior || this.scrollBehavior === 'auto') {
      this.shiftByDelta(totalScrollDelta);
      return;
    }
    if (this.scrollId != null) {
      cancelAnimationFrame(this.scrollId);
    }
    const totalDistance = Math.abs(totalScrollDelta);
    const startTime = Date.now();
    const baseArrowSlideTime = 200;
    let totalTime = (Math.log10(totalDistance) - 1.1) * baseArrowSlideTime;
    if (totalTime < 0) {
      totalTime = baseArrowSlideTime;
    }
    let currentScroll = 0;
    // Emulating native scroll-behavior: smooth
    // NOTE: This function is called on per frame basis recursively to create smooth animation.
    // The scroll value is updated proportionally to the time elapsed since the animation's start.
    // The period of requested frames should match the display's refresh rate as recommended in W3C spec.
    const animate = () => {
      const suggestedScroll = Math.ceil((Date.now() - startTime) / totalTime * totalDistance);
      let frameScroll = Math.min(suggestedScroll - currentScroll, totalDistance - currentScroll);
      frameScroll *= Math.sign(totalScrollDelta);
      currentScroll = suggestedScroll;
      this.shiftByDelta(frameScroll);
      if (currentScroll <= totalDistance) {
        this.scrollId = requestAnimationFrame(animate);
      }
    };
    this.scrollId = requestAnimationFrame(animate);
  }
  shiftByDelta(delta) {
    this.thumbListRef.nativeElement[this.scrollKey] += delta;
  }
  observeArrows() {
    if (this.thumbsEmpty) return;
    if (!this.arrowObserver) {
      this.arrowObserver = new IntersectionObserver(this.onArrowsObserved, {
        root: this.thumbListRef.nativeElement,
        threshold: 1.0
      });
    } else {
      this.unobserveArrows();
    }
    this.arrowObserver.observe(this.thumbsRef.first.nativeElement);
    this.arrowObserver.observe(this.thumbsRef.last.nativeElement);
  }
  setObservedArrows(firstThumb, lastThumb) {
    const inverse = this.isRtl && !this.vertical;
    if (inverse) {
      if (lastThumb) this.showStartArrow = lastThumb.intersectionRatio < 1;
      if (firstThumb) this.showEndArrow = firstThumb.intersectionRatio < 1;
    } else {
      if (firstThumb) this.showStartArrow = firstThumb.intersectionRatio < 1;
      if (lastThumb) this.showEndArrow = lastThumb.intersectionRatio < 1;
    }
  }
  unobserveArrows() {
    this.arrowObserver && this.arrowObserver.disconnect();
  }
}
ThumbsComponent.ɵfac = function ThumbsComponent_Factory(t) {
  return new (t || ThumbsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef));
};
ThumbsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ThumbsComponent,
  selectors: [["thumbs"]],
  viewQuery: function ThumbsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.thumbListRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.thumbsRef = _t);
    }
  },
  hostVars: 2,
  hostBindings: function ThumbsComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.cssClass);
    }
  },
  inputs: {
    items: "items",
    selectedIndex: "selectedIndex",
    aria: "aria",
    orientation: "orientation",
    arrows: "arrows",
    arrowSlideByLength: "arrowSlideByLength",
    autoScroll: "autoScroll",
    thumbTemplate: "thumbTemplate",
    arrowTemplate: "arrowTemplate",
    errorTemplate: "errorTemplate",
    scrollBehavior: "scrollBehavior",
    isRtl: "isRtl"
  },
  outputs: {
    thumbClick: "thumbClick",
    thumbHover: "thumbHover"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
  decls: 6,
  vars: 8,
  consts: [["aria-label", "Previous thumbnails", "class", "thumbs-arrow thumbs-arrow-prev", 3, "click", 4, "ngIf"], ["thumbs", ""], ["class", "thumbs-initial-item", 4, "ngIf"], ["aria-hidden", "true", 3, "thumbs-item--selected", "click", "mouseenter", 4, "ngFor", "ngForOf"], ["aria-label", "Next thumbnails", "class", "thumbs-arrow thumbs-arrow-next", 3, "click", 4, "ngIf"], ["aria-label", "Previous thumbnails", 1, "thumbs-arrow", "thumbs-arrow-prev", 3, "click"], [4, "ngIf", "ngIfElse"], [1, "thumbs-initial-item"], ["aria-hidden", "true", 3, "click", "mouseenter"], ["thumb", ""], ["customThumbTemplate", ""], [3, "src", "alt", "load", "error"], [4, "ngIf"], ["class", "thumbs-error", 4, "ngIf", "ngIfElse"], [1, "thumbs-error"], [1, "thumbs-error-icon"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-label", "Next thumbnails", 1, "thumbs-arrow", "thumbs-arrow-next", 3, "click"]],
  template: function ThumbsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ThumbsComponent_button_0_Template, 2, 2, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ul", null, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ThumbsComponent_li_3_Template, 1, 0, "li", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ThumbsComponent_li_4_Template, 5, 4, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ThumbsComponent_button_5_Template, 2, 2, "button", 4);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showStartArrow);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("scroll-behavior", ctx.scrollBehavior);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("rtl", ctx.isRtl);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.items || !ctx.items.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.items);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showEndArrow);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _icons_chevron_chevron_icon_component__WEBPACK_IMPORTED_MODULE_1__.ChevronIconComponent],
  styles: ["[_nghost-%COMP%] {\n  flex: 1 0 auto;\n  position: relative;\n  background-color: #f3f3f3;\n}\n\n.thumbs--top[_nghost-%COMP%], .thumbs--bottom[_nghost-%COMP%] {\n  width: 100%;\n}\n.thumbs--top[_nghost-%COMP%]   ul[_ngcontent-%COMP%], .thumbs--bottom[_nghost-%COMP%]   ul[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n.thumbs--top[_nghost-%COMP%]   ul.rtl[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child, .thumbs--bottom[_nghost-%COMP%]   ul.rtl[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n  margin-right: auto;\n}\n.thumbs--top[_nghost-%COMP%]   ul.rtl[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child, .thumbs--bottom[_nghost-%COMP%]   ul.rtl[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n  margin-left: auto;\n}\n.thumbs--top[_nghost-%COMP%]   li[_ngcontent-%COMP%], .thumbs--bottom[_nghost-%COMP%]   li[_ngcontent-%COMP%] {\n  flex: none;\n}\n.thumbs--top[_nghost-%COMP%]   li[_ngcontent-%COMP%]:not(:first-child), .thumbs--bottom[_nghost-%COMP%]   li[_ngcontent-%COMP%]:not(:first-child) {\n  border-left: 0;\n}\n.thumbs--top[_nghost-%COMP%]   li[_ngcontent-%COMP%]:first-child, .thumbs--bottom[_nghost-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-left: auto;\n}\n.thumbs--top[_nghost-%COMP%]   li[_ngcontent-%COMP%]:last-child, .thumbs--bottom[_nghost-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: auto;\n}\n.thumbs--top[_nghost-%COMP%]   .thumbs-arrow[_ngcontent-%COMP%], .thumbs--bottom[_nghost-%COMP%]   .thumbs-arrow[_ngcontent-%COMP%] {\n  top: 0;\n  height: 100%;\n}\n.thumbs--top[_nghost-%COMP%]   .thumbs-arrow[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], .thumbs--bottom[_nghost-%COMP%]   .thumbs-arrow[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 100%;\n}\n.thumbs--top[_nghost-%COMP%]   .thumbs-arrow-prev[_ngcontent-%COMP%], .thumbs--bottom[_nghost-%COMP%]   .thumbs-arrow-prev[_ngcontent-%COMP%] {\n  left: 0;\n}\n.thumbs--top[_nghost-%COMP%]   .thumbs-arrow-next[_ngcontent-%COMP%], .thumbs--bottom[_nghost-%COMP%]   .thumbs-arrow-next[_ngcontent-%COMP%] {\n  right: 0;\n}\n.thumbs--top[_nghost-%COMP%]   .thumbs-error[_ngcontent-%COMP%], .thumbs--bottom[_nghost-%COMP%]   .thumbs-error[_ngcontent-%COMP%] {\n  border-right: 1px solid #cecece;\n}\n.thumbs--left[_nghost-%COMP%], .thumbs--right[_nghost-%COMP%] {\n  height: 100%;\n}\n.thumbs--left[_nghost-%COMP%]   ul[_ngcontent-%COMP%], .thumbs--right[_nghost-%COMP%]   ul[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n.thumbs--left[_nghost-%COMP%]   li[_ngcontent-%COMP%], .thumbs--right[_nghost-%COMP%]   li[_ngcontent-%COMP%] {\n  border-top: 0;\n}\n.thumbs--left[_nghost-%COMP%]   .thumbs-arrow[_ngcontent-%COMP%], .thumbs--right[_nghost-%COMP%]   .thumbs-arrow[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.thumbs--left[_nghost-%COMP%]   .thumbs-arrow[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], .thumbs--right[_nghost-%COMP%]   .thumbs-arrow[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 30px;\n}\n.thumbs--left[_nghost-%COMP%]   .thumbs-arrow[_ngcontent-%COMP%]   chevron-icon[_ngcontent-%COMP%], .thumbs--right[_nghost-%COMP%]   .thumbs-arrow[_ngcontent-%COMP%]   chevron-icon[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.thumbs--left[_nghost-%COMP%]   .thumbs-arrow-prev[_ngcontent-%COMP%], .thumbs--right[_nghost-%COMP%]   .thumbs-arrow-prev[_ngcontent-%COMP%] {\n  top: 0;\n}\n.thumbs--left[_nghost-%COMP%]   .thumbs-arrow-next[_ngcontent-%COMP%], .thumbs--right[_nghost-%COMP%]   .thumbs-arrow-next[_ngcontent-%COMP%] {\n  bottom: 0;\n}\n.thumbs--left[_nghost-%COMP%]   .thumbs-error[_ngcontent-%COMP%], .thumbs--right[_nghost-%COMP%]   .thumbs-error[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #cecece;\n}\n.thumbs--bottom[_nghost-%COMP%], .thumbs--right[_nghost-%COMP%] {\n  order: 1;\n}\n\nul[_ngcontent-%COMP%] {\n  outline: 0;\n  scrollbar-width: none; \n\n  -webkit-overflow-scrolling: touch;\n  transform: translate3d(0, 0, 0);\n}\nul[_ngcontent-%COMP%]::-webkit-scrollbar {\n  \n\n  width: 0;\n  height: 0;\n}\n\nli[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 120px;\n  height: 80px;\n  position: relative;\n  cursor: pointer;\n}\nli.thumbs-initial-item[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\nli.thumbs-item--selected[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  border: 10px solid rgba(255, 255, 255, 0.8117647059);\n  box-sizing: border-box;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  object-fit: cover;\n  color: transparent;\n}\n\n.thumbs-error[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  background: #e8e8e8;\n  box-sizing: border-box;\n}\n.thumbs-error-icon[_ngcontent-%COMP%]:not(.thumbs-error-icon--video) {\n  position: relative;\n  border-left: 16px solid transparent;\n  border-right: 16px solid transparent;\n  border-bottom: 28px solid #a5a5a5;\n  margin-left: -8px;\n}\n.thumbs-error-icon[_ngcontent-%COMP%]:not(.thumbs-error-icon--video)::before, .thumbs-error-icon[_ngcontent-%COMP%]:not(.thumbs-error-icon--video)::after {\n  content: \"\";\n  position: absolute;\n}\n.thumbs-error-icon[_ngcontent-%COMP%]:not(.thumbs-error-icon--video)::before {\n  height: 10px;\n  width: 10px;\n  background-color: #a5a5a5;\n  border-radius: 100%;\n  left: 14px;\n}\n.thumbs-error-icon[_ngcontent-%COMP%]:not(.thumbs-error-icon--video)::after {\n  border-left: 14px solid transparent;\n  border-right: 14px solid transparent;\n  border-bottom: 17px solid #a5a5a5;\n  top: 11px;\n}\n.thumbs-error-icon--video[_ngcontent-%COMP%] {\n  border-top: 16px solid transparent;\n  border-bottom: 16px solid transparent;\n  border-left: 28px solid #a5a5a5;\n  margin-left: 9px;\n}\n\n.thumbs-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  padding: 0;\n  background-color: transparent;\n  cursor: pointer;\n  z-index: 10;\n}\n.thumbs-arrow-prev[_ngcontent-%COMP%] {\n  transform: scale(-1);\n}\n.thumbs-arrow[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.5);\n  padding: 0;\n  opacity: 0.7;\n}\n@media (hover: hover) and (pointer: fine) {\n  .thumbs-arrow[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:hover {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRodW1icy5jb21wb25lbnQuc2NzcyIsIi4uLy4uL2NvcmUvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUhGOztBQU9FO0VBRUUsV0FBQTtBQUxKO0FBT0k7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFMTjtBQVFRO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBTlY7QUFTUTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQVBWO0FBWUk7RUFDRSxVQUFBO0FBVk47QUFZTTtFQUNFLGNBQUE7QUFWUjtBQWFNO0VBQ0UsaUJBQUE7QUFYUjtBQWNNO0VBQ0Usa0JBQUE7QUFaUjtBQWdCSTtFQUNFLE1BQUE7RUFDQSxZQUFBO0FBZE47QUFnQk07RUFDRSxXQXJEYztFQXNEZCxZQUFBO0FBZFI7QUFpQk07RUFDRSxPQUFBO0FBZlI7QUFrQk07RUFDRSxRQUFBO0FBaEJSO0FBb0JJO0VBQ0UsK0JBQUE7QUFsQk47QUFzQkU7RUFFRSxZQUFBO0FBckJKO0FBdUJJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFyQk47QUF3Qkk7RUFDRSxhQUFBO0FBdEJOO0FBeUJJO0VBQ0UsV0FBQTtBQXZCTjtBQXlCTTtFQUNFLFdBQUE7RUFDQSxZQTFGYztBQW1FdEI7QUEwQk07RUFDRSx3QkFBQTtBQXhCUjtBQTJCTTtFQUNFLE1BQUE7QUF6QlI7QUE0Qk07RUFDRSxTQUFBO0FBMUJSO0FBOEJJO0VBQ0UsZ0NBQUE7QUE1Qk47QUFnQ0U7RUFFRSxRQUFBO0FBL0JKOztBQW1DQTtFQUNFLFVBQUE7RUFFQSxxQkFBQSxFQUFBLFlBQUE7RUFFQSxpQ0FBQTtFQUlBLCtCQUFBO0FBckNGO0FBdUNFO0VBQ0UsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBckNKOztBQXlDQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUF0Q0Y7QUF3Q0U7RUFDRSxrQkFBQTtBQXRDSjtBQTBDSTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0RBQUE7RUFDQSxzQkFBQTtBQXhDTjs7QUE2Q0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBMUNGOztBQTZDQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBMUNGO0FBK0NJO0VBQ0Usa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtBQTdDTjtBQStDTTtFQUVFLFdBQUE7RUFDQSxrQkFBQTtBQTlDUjtBQWlETTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBbEJTO0VBbUJULG1CQUFBO0VBQ0EsVUFBQTtBQS9DUjtBQWtETTtFQUNFLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQ0FBQTtFQUNBLFNBQUE7QUFoRFI7QUFvREk7RUFDRSxrQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQWxETjs7QUF1REE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBcERGO0FBc0RFO0VBQ0Usb0JBQUE7QUFwREo7QUF1REU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFyREo7QUM3TEU7RURxUEk7SUFDRSxVQUFBO0VBckROO0FBQ0YiLCJmaWxlIjoidGh1bWJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vY29yZS9taXhpbnMuc2Nzcyc7XG5cbiRhcnJvdy1idG4tZGltZW5zaW9uOiAzMHB4O1xuXG46aG9zdCB7XG4gIGZsZXg6IDEgMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG59XG5cbjpob3N0LnRodW1icyB7XG4gICYtLXRvcCxcbiAgJi0tYm90dG9tIHtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIHVsIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcblxuICAgICAgJi5ydGwge1xuICAgICAgICBsaTpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgbGk6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGkge1xuICAgICAgZmxleDogbm9uZTtcblxuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgICAgfVxuXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICB9XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGh1bWJzLWFycm93IHtcbiAgICAgIHRvcDogMDtcbiAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgPiBkaXYge1xuICAgICAgICB3aWR0aDogJGFycm93LWJ0bi1kaW1lbnNpb247XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgJi1wcmV2IHtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cblxuICAgICAgJi1uZXh0IHtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRodW1icy1lcnJvciB7XG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2VjZWNlO1xuICAgIH1cbiAgfVxuXG4gICYtLWxlZnQsXG4gICYtLXJpZ2h0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICB1bCB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgfVxuXG4gICAgbGkge1xuICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICB9XG5cbiAgICAudGh1bWJzLWFycm93IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICA+IGRpdiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6ICRhcnJvdy1idG4tZGltZW5zaW9uO1xuICAgICAgfVxuXG4gICAgICBjaGV2cm9uLWljb24ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICB9XG5cbiAgICAgICYtcHJldiB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgIH1cblxuICAgICAgJi1uZXh0IHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC50aHVtYnMtZXJyb3Ige1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjZWNlY2U7XG4gICAgfVxuICB9XG5cbiAgJi0tYm90dG9tLFxuICAmLS1yaWdodCB7XG4gICAgb3JkZXI6IDE7XG4gIH1cbn1cblxudWwge1xuICBvdXRsaW5lOiAwO1xuICAvLyBoaWRlIHNjcm9sbGJhclxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cblxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG5cbiAgLy8gUHJvbW90ZXMgdGh1bWIgbGlzdCB0byBhIHNlcGFyYXRlIGxheWVyLCB3aGljaCBhbGxvd3MgZm9yIGNvbXBvc2l0aW5nIHdoZW4gc2Nyb2xsaW5nLCB3aGljaCBwcmV2ZW50cyByZXBhaW50cy5cbiAgLy8gSXQgYWxzbyByZWR1Y2VzIHRoZSBhbW91bnQgb2YgbWVtb3J5IGhlbGQgYnkgaXRzIHBhcmVudCBsYXllciBkcmFtYXRpY2FsbHkuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIC8qIFdlYktpdCAqL1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgfVxufVxuXG5saSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmLnRodW1icy1pbml0aWFsLWl0ZW0ge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxuXG4gICYudGh1bWJzLWl0ZW0tLXNlbGVjdGVkIHtcbiAgICAmOjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYm9yZGVyOiAxMHB4IHNvbGlkICNmZmZmZmZjZjtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuICB9XG59XG5cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLnRodW1icy1lcnJvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICYtaWNvbiB7XG4gICAgJGljb24tY29sb3I6ICNhNWE1YTU7XG5cbiAgICAmOm5vdCgmLS12aWRlbykge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgYm9yZGVyLWxlZnQ6IDE2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItcmlnaHQ6IDE2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItYm90dG9tOiAyOHB4IHNvbGlkICRpY29uLWNvbG9yO1xuICAgICAgbWFyZ2luLWxlZnQ6IC04cHg7XG5cbiAgICAgICY6OmJlZm9yZSxcbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIH1cblxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGljb24tY29sb3I7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIGxlZnQ6IDE0cHg7XG4gICAgICB9XG5cbiAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDE0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1yaWdodDogMTRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMTdweCBzb2xpZCAkaWNvbi1jb2xvcjtcbiAgICAgICAgdG9wOiAxMXB4O1xuICAgICAgfVxuICAgIH1cblxuICAgICYtLXZpZGVvIHtcbiAgICAgIGJvcmRlci10b3A6IDE2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItYm90dG9tOiAxNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLWxlZnQ6IDI4cHggc29saWQgJGljb24tY29sb3I7XG4gICAgICBtYXJnaW4tbGVmdDogOXB4O1xuICAgIH1cbiAgfVxufVxuXG4udGh1bWJzLWFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxMDtcblxuICAmLXByZXYge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLTEpO1xuICB9XG5cbiAgPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgcGFkZGluZzogMDtcbiAgICBvcGFjaXR5OiAwLjc7XG5cbiAgICBAaW5jbHVkZSBzdXBwb3J0cy1ob3ZlciB7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBtaXhpbiBzdXBwb3J0cy1ob3ZlciB7XG4gIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvZ2FsbGVyeS9zcmMvbGliL2NvbXBvbmVudHMvdGh1bWJzL3RodW1icy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL2xpYnMvZ2FsbGVyeS9zcmMvbGliL2NvcmUvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUhGOztBQU9FO0VBRUUsV0FBQTtBQUxKO0FBT0k7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFMTjtBQVFRO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBTlY7QUFTUTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQVBWO0FBWUk7RUFDRSxVQUFBO0FBVk47QUFZTTtFQUNFLGNBQUE7QUFWUjtBQWFNO0VBQ0UsaUJBQUE7QUFYUjtBQWNNO0VBQ0Usa0JBQUE7QUFaUjtBQWdCSTtFQUNFLE1BQUE7RUFDQSxZQUFBO0FBZE47QUFnQk07RUFDRSxXQXJEYztFQXNEZCxZQUFBO0FBZFI7QUFpQk07RUFDRSxPQUFBO0FBZlI7QUFrQk07RUFDRSxRQUFBO0FBaEJSO0FBb0JJO0VBQ0UsK0JBQUE7QUFsQk47QUFzQkU7RUFFRSxZQUFBO0FBckJKO0FBdUJJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFyQk47QUF3Qkk7RUFDRSxhQUFBO0FBdEJOO0FBeUJJO0VBQ0UsV0FBQTtBQXZCTjtBQXlCTTtFQUNFLFdBQUE7RUFDQSxZQTFGYztBQW1FdEI7QUEwQk07RUFDRSx3QkFBQTtBQXhCUjtBQTJCTTtFQUNFLE1BQUE7QUF6QlI7QUE0Qk07RUFDRSxTQUFBO0FBMUJSO0FBOEJJO0VBQ0UsZ0NBQUE7QUE1Qk47QUFnQ0U7RUFFRSxRQUFBO0FBL0JKOztBQW1DQTtFQUNFLFVBQUE7RUFFQSxxQkFBQSxFQUFBLFlBQUE7RUFFQSxpQ0FBQTtFQUlBLCtCQUFBO0FBckNGO0FBdUNFO0VBQ0UsV0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBckNKOztBQXlDQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUF0Q0Y7QUF3Q0U7RUFDRSxrQkFBQTtBQXRDSjtBQTBDSTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0RBQUE7RUFDQSxzQkFBQTtBQXhDTjs7QUE2Q0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBMUNGOztBQTZDQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBMUNGO0FBK0NJO0VBQ0Usa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtBQTdDTjtBQStDTTtFQUVFLFdBQUE7RUFDQSxrQkFBQTtBQTlDUjtBQWlETTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBbEJTO0VBbUJULG1CQUFBO0VBQ0EsVUFBQTtBQS9DUjtBQWtETTtFQUNFLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQ0FBQTtFQUNBLFNBQUE7QUFoRFI7QUFvREk7RUFDRSxrQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQWxETjs7QUF1REE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBcERGO0FBc0RFO0VBQ0Usb0JBQUE7QUFwREo7QUF1REU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFyREo7QUM3TEU7RURxUEk7SUFDRSxVQUFBO0VBckROO0FBQ0Y7QUFDQSxvb1FBQW9vUSIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL2NvcmUvbWl4aW5zLnNjc3MnO1xuXG4kYXJyb3ctYnRuLWRpbWVuc2lvbjogMzBweDtcblxuOmhvc3Qge1xuICBmbGV4OiAxIDAgYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xufVxuXG46aG9zdC50aHVtYnMge1xuICAmLS10b3AsXG4gICYtLWJvdHRvbSB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICB1bCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgICBvdmVyZmxvdy15OiBoaWRkZW47XG5cbiAgICAgICYucnRsIHtcbiAgICAgICAgbGk6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpOmxhc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGxpIHtcbiAgICAgIGZsZXg6IG5vbmU7XG5cbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICBib3JkZXItbGVmdDogMDtcbiAgICAgIH1cblxuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgfVxuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRodW1icy1hcnJvdyB7XG4gICAgICB0b3A6IDA7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgID4gZGl2IHtcbiAgICAgICAgd2lkdGg6ICRhcnJvdy1idG4tZGltZW5zaW9uO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgICYtcHJldiB7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG5cbiAgICAgICYtbmV4dCB7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC50aHVtYnMtZXJyb3Ige1xuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NlY2VjZTtcbiAgICB9XG4gIH1cblxuICAmLS1sZWZ0LFxuICAmLS1yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgdWwge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIH1cblxuICAgIGxpIHtcbiAgICAgIGJvcmRlci10b3A6IDA7XG4gICAgfVxuXG4gICAgLnRodW1icy1hcnJvdyB7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgPiBkaXYge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAkYXJyb3ctYnRuLWRpbWVuc2lvbjtcbiAgICAgIH1cblxuICAgICAgY2hldnJvbi1pY29uIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgfVxuXG4gICAgICAmLXByZXYge1xuICAgICAgICB0b3A6IDA7XG4gICAgICB9XG5cbiAgICAgICYtbmV4dCB7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGh1bWJzLWVycm9yIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2VjZWNlO1xuICAgIH1cbiAgfVxuXG4gICYtLWJvdHRvbSxcbiAgJi0tcmlnaHQge1xuICAgIG9yZGVyOiAxO1xuICB9XG59XG5cbnVsIHtcbiAgb3V0bGluZTogMDtcbiAgLy8gaGlkZSBzY3JvbGxiYXJcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXG5cbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuXG4gIC8vIFByb21vdGVzIHRodW1iIGxpc3QgdG8gYSBzZXBhcmF0ZSBsYXllciwgd2hpY2ggYWxsb3dzIGZvciBjb21wb3NpdGluZyB3aGVuIHNjcm9sbGluZywgd2hpY2ggcHJldmVudHMgcmVwYWludHMuXG4gIC8vIEl0IGFsc28gcmVkdWNlcyB0aGUgYW1vdW50IG9mIG1lbW9yeSBoZWxkIGJ5IGl0cyBwYXJlbnQgbGF5ZXIgZHJhbWF0aWNhbGx5LlxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAvKiBXZWJLaXQgKi9cbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gIH1cbn1cblxubGkge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogODBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJi50aHVtYnMtaW5pdGlhbC1pdGVtIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cblxuICAmLnRodW1icy1pdGVtLS1zZWxlY3RlZCB7XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJvcmRlcjogMTBweCBzb2xpZCAjZmZmZmZmY2Y7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cbiAgfVxufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi50aHVtYnMtZXJyb3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAmLWljb24ge1xuICAgICRpY29uLWNvbG9yOiAjYTVhNWE1O1xuXG4gICAgJjpub3QoJi0tdmlkZW8pIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJvcmRlci1sZWZ0OiAxNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLXJpZ2h0OiAxNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMjhweCBzb2xpZCAkaWNvbi1jb2xvcjtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xuXG4gICAgICAmOjpiZWZvcmUsXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB9XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpY29uLWNvbG9yO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBsZWZ0OiAxNHB4O1xuICAgICAgfVxuXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAxNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItcmlnaHQ6IDE0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDE3cHggc29saWQgJGljb24tY29sb3I7XG4gICAgICAgIHRvcDogMTFweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLS12aWRlbyB7XG4gICAgICBib3JkZXItdG9wOiAxNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMTZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1sZWZ0OiAyOHB4IHNvbGlkICRpY29uLWNvbG9yO1xuICAgICAgbWFyZ2luLWxlZnQ6IDlweDtcbiAgICB9XG4gIH1cbn1cblxuLnRodW1icy1hcnJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMTA7XG5cbiAgJi1wcmV2IHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC0xKTtcbiAgfVxuXG4gID4gZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgb3BhY2l0eTogMC43O1xuXG4gICAgQGluY2x1ZGUgc3VwcG9ydHMtaG92ZXIge1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJAbWl4aW4gc3VwcG9ydHMtaG92ZXIge1xuICBAbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  changeDetection: 0
});

/***/ }),

/***/ 5157:
/*!********************************************************************!*\
  !*** ./libs/gallery/src/lib/components/viewer/viewer.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ViewerComponent: () => (/* binding */ ViewerComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 2501);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ 8247);
/* harmony import */ var _directives_media_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/media.directive */ 9881);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/safe.pipe */ 8615);
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../counter/counter.component */ 3142);
/* harmony import */ var _icons_chevron_chevron_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/chevron/chevron-icon.component */ 3677);










const _c0 = ["itemList"];
const _c1 = ["itemsRef"];
function ViewerComponent_button_0_chevron_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "chevron-icon");
  }
}
function ViewerComponent_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mousedown", function ViewerComponent_button_0_Template_button_mousedown_0_listener($event) {
      return $event.stopPropagation();
    })("click", function ViewerComponent_button_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.selectByDelta(-ctx_r11.moveByItems));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ViewerComponent_button_0_chevron_icon_1_Template, 1, 0, "chevron-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.arrowTemplate)("ngIfElse", ctx_r0.arrowTemplate);
  }
}
function ViewerComponent_li_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "li", 11);
  }
}
function ViewerComponent_li_4_ng_container_2_picture_1_source_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "source", 20);
  }
  if (rf & 2) {
    const source_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("srcset", source_r25.srcset);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("media", source_r25.media)("sizes", source_r25.sizes)("type", source_r25.type);
  }
}
function ViewerComponent_li_4_ng_container_2_picture_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ViewerComponent_li_4_ng_container_2_picture_1_source_1_Template, 1, 4, "source", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@mediaAnimate", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", item_r13.pictureSources);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("object-fit", ctx_r21.objectFit);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("viewer-media-loading", !ctx_r21.itemLoaded(item_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", item_r13.src, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("alt", item_r13.alt);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("loading", ctx_r21.loading);
  }
}
function ViewerComponent_li_4_ng_container_2_video_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "video", 21);
  }
  if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("object-fit", ctx_r22.objectFit);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("viewer-media-loading", !ctx_r22.itemLoaded(item_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@mediaAnimate", undefined)("src", item_r13.src, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("poster", item_r13.thumbSrc || "", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("preload", ctx_r22.loading === "lazy" ? "metadata" : "auto");
  }
}
function ViewerComponent_li_4_ng_container_2_iframe_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "iframe", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "safe");
  }
  if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@mediaAnimate", undefined)("src", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 3, item_r13.src), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeResourceUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("loading", ctx_r23.loading);
  }
}
function ViewerComponent_li_4_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ViewerComponent_li_4_ng_container_2_picture_1_Template, 3, 9, "picture", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ViewerComponent_li_4_ng_container_2_video_2_Template, 1, 8, "video", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ViewerComponent_li_4_ng_container_2_iframe_3_Template, 2, 5, "iframe", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !item_r13.video);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r16.isYoutube(item_r13) && item_r13.video);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r16.isYoutube(item_r13));
  }
}
function ViewerComponent_li_4_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}
function ViewerComponent_li_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ViewerComponent_li_4_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", ctx_r17.loadingTemplate);
  }
}
function ViewerComponent_li_4_ng_container_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 25)(1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "\u26A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r31.errorText || "Loading of this media failed", " ");
  }
}
function ViewerComponent_li_4_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ViewerComponent_li_4_ng_container_4_div_1_Template, 5, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r18.errorTemplate)("ngIfElse", ctx_r18.errorTemplate);
  }
}
function ViewerComponent_li_4_ng_template_6_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}
const _c2 = function (a0, a1, a2, a3) {
  return {
    index: a0,
    selectedIndex: a1,
    item: a2,
    video: a3
  };
};
function ViewerComponent_li_4_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ViewerComponent_li_4_ng_template_6_ng_container_0_Template, 1, 0, "ng-container", 7);
  }
  if (rf & 2) {
    const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", ctx_r20.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction4"](2, _c2, ctx_r20.items == null ? null : ctx_r20.items.indexOf(item_r13), ctx_r20.selectedIndex, item_r13, item_r13.video));
  }
}
function ViewerComponent_li_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ViewerComponent_li_4_Template_li_click_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35);
      const item_r13 = restoredCtx.$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r34.onImageClick(item_r13, $event));
    })("mediaLoad", function ViewerComponent_li_4_Template_li_mediaLoad_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35);
      const item_r13 = restoredCtx.$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r36.onItemLoaded(item_r13));
    })("mediaLoadError", function ViewerComponent_li_4_Template_li_mediaLoadError_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35);
      const item_r13 = restoredCtx.$implicit;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r37.onItemErrored(item_r13));
    })("keydown.Tab", function ViewerComponent_li_4_Template_li_keydown_Tab_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35);
      const i_r14 = restoredCtx.index;
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r38.onTab(i_r14 + 1));
    })("keydown.shift.Tab", function ViewerComponent_li_4_Template_li_keydown_shift_Tab_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35);
      const i_r14 = restoredCtx.index;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r39.onTab(i_r14 - 1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ViewerComponent_li_4_ng_container_2_Template, 4, 3, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ViewerComponent_li_4_ng_container_3_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ViewerComponent_li_4_ng_container_4_Template, 2, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ViewerComponent_li_4_ng_template_6_Template, 1, 7, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("tabindex", ctx_r3.itemTabbable(i_r14))("aria-label", item_r13.alt)("aria-describedby", "viewer-aria-description-" + i_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r3.itemTemplate)("ngIfElse", _r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r3.itemLoaded(item_r13) && !ctx_r3.itemFailedToLoad(item_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r3.itemFailedToLoad(item_r13));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", "viewer-aria-description-" + i_r14)("innerHTML", item_r13.description, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
  }
}
function ViewerComponent_ng_container_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}
function ViewerComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ViewerComponent_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.loadingTemplate);
  }
}
function ViewerComponent_button_6_chevron_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "chevron-icon");
  }
}
function ViewerComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mousedown", function ViewerComponent_button_6_Template_button_mousedown_0_listener($event) {
      return $event.stopPropagation();
    })("click", function ViewerComponent_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r43.selectByDelta(ctx_r43.moveByItems));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ViewerComponent_button_6_chevron_icon_1_Template, 1, 0, "chevron-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r5.arrowTemplate)("ngIfElse", ctx_r5.arrowTemplate);
  }
}
function ViewerComponent_counter_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "counter", 29);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("itemQuantity", ctx_r6.items == null ? null : ctx_r6.items.length)("selectedIndex", ctx_r6.counterIndex)("orientation", ctx_r6.counterOrientation);
  }
}
function ViewerComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
  }
}
function ViewerComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ViewerComponent_div_9_div_1_Template_div_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r47.descriptionClick.emit($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const description_r46 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", description_r46, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
  }
}
function ViewerComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ViewerComponent_div_9_div_1_Template, 1, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("viewer-description--above-counter", ctx_r8.counter && ctx_r8.counterOrientation === "bottom");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.items[ctx_r8.selectedIndex] == null ? null : ctx_r8.items[ctx_r8.selectedIndex].description);
  }
}
const _c3 = function (a0) {
  return {
    selectedIndex: a0
  };
};
const passiveEventListenerOpts = {
  passive: true
};
class ViewerComponent {
  set noAnimation(value) {
    this.itemListRef.nativeElement.style.transitionDuration = value ? '0ms' : '400ms';
  }
  get counterIndex() {
    return Math.floor(this.selectedIndex / this.moveByItems);
  }
  get showArrow() {
    return this.arrows && this.items && this.items.length > 1;
  }
  get showPrevArrow() {
    return this.showArrow && (this.selectedIndex > 0 || this.loop);
  }
  get showNextArrow() {
    return this.showArrow && (this.selectedIndex < this.items.length - 1 || this.loop);
  }
  constructor(_hostRef, _cd, _destroyRef, _zone) {
    this._hostRef = _hostRef;
    this._cd = _cd;
    this._destroyRef = _destroyRef;
    this._zone = _zone;
    this.itemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.descriptionClick = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.selection = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.pointerDeltaX = 0;
    this.sliding = false;
    this.repositionOnFringe = entries => {
      if (!this.loop || !this.sliding) {
        return;
      }
      const {
        first
      } = this.itemsRef;
      const visibleEntries = entries.filter(e => e.isIntersecting);
      if (visibleEntries.length === 0) {
        return;
      }
      const beginningVisible = entries[0].target === first.nativeElement;
      this.pointerDeltaX += (beginningVisible ? -1 : 1) * this.items.length * this._itemWidth;
    };
    this.updateDimensions = () => {
      this._itemWidth = this._hostRef.nativeElement.querySelector('li').offsetWidth;
    };
    this.shiftByDelta = delta => {
      this.pointerDeltaX += delta;
      this.shift(this.pointerDeltaX);
    };
  }
  ngOnChanges({
    visibleItems,
    items,
    loop
  }) {
    if (loop || items) {
      this.loop = this.items?.length > 1 ? this.loop : false;
      this.fringeCount = this.getFringeCount();
      this.displayedItems = this.getItemsToBeDisplayed(this.fringeCount);
      if (this.loop) {
        setTimeout(() => this.observeFringes());
      }
    }
    if (visibleItems) {
      this.itemListRef.nativeElement.style.setProperty('--item-width', `calc(100% / ${this.visibleItems})`);
      setTimeout(this.updateDimensions);
    }
  }
  ngOnInit() {
    if (_core__WEBPACK_IMPORTED_MODULE_0__.isBrowser) {
      this.handleResizes();
      if (this.mouseGestures) {
        this.handleMouseSlides();
      }
      if (this.touchGestures) {
        this.handleTouchSlides();
      }
      this._destroyRef.onDestroy(() => this.fringeObserver?.disconnect());
    }
  }
  ngAfterViewInit() {
    this.center();
    setTimeout(() => this.noAnimation = false);
  }
  isYoutube(item) {
    return !!item.src.match(/youtube.*\/embed\//);
  }
  select(index) {
    if (this.selectedIndex === index) {
      return this.center();
    }
    if (this.items[this.selectedIndex].video) {
      this.stopCurrentVideo();
    }
    const indexOutOfBounds = !this.items[index];
    const looping = this.loop && indexOutOfBounds;
    if (looping) {
      this.loopTo(index);
    } else {
      this.selectedIndex = indexOutOfBounds ? this.correctIndexOutOfBounds(index) : index;
      this.center(); // we center only for this branch since looping does a delayed centering
    }

    this.selection.emit(this.selectedIndex);
  }
  selectByDelta(delta) {
    this.select(this.selectedIndex + delta);
  }
  onImageClick(item, event) {
    this.itemClick.emit({
      event,
      item,
      index: this.items.indexOf(item)
    });
  }
  onTab(nextItemIndex) {
    nextItemIndex = nextItemIndex - this.fringeCount;
    // allow focus to escape viewer
    if (nextItemIndex >= 0 && nextItemIndex < this.items.length) {
      this.select(nextItemIndex);
      // focusing an item literally scrolls the item list, so I have to scroll it back
      requestAnimationFrame(() => this._hostRef.nativeElement.scrollLeft = 0);
    }
  }
  onItemLoaded(item) {
    item._loaded = true;
    item._failed = false;
    this._cd.detectChanges();
  }
  onItemErrored(item) {
    item._failed = true;
    this._cd.detectChanges();
  }
  itemFailedToLoad(item) {
    return item._failed;
  }
  itemLoaded(item) {
    return item._loaded;
  }
  itemTabbable(index) {
    index = index - this.fringeCount;
    return index >= 0 && index < this.items.length ? 0 : -1;
  }
  center() {
    this.shift();
  }
  correctIndexOutOfBounds(index) {
    return index < 0 ? 0 : this.items.length - 1;
  }
  getFringeCount() {
    return this.loop ? Math.min(Math.ceil(this.visibleItems), this.items.length) : 0;
  }
  getItemsToBeDisplayed(fringeCount) {
    return this.loop ? [...this.items.slice(-fringeCount), ...this.items, ...this.items.slice(0, fringeCount)] : this.items;
  }
  handleMouseSlides() {
    this._zone.runOutsideAngular(() => {
      const hostEl = this._hostRef.nativeElement;
      let mousedown;
      let maxDeltaX = 0;
      let maxDeltaY = 0;
      const onmousedown = e => {
        mousedown = e;
        this.noAnimation = this.sliding = true;
        document.addEventListener('mousemove', onmousemove, passiveEventListenerOpts);
        document.addEventListener('mouseup', onmouseup, passiveEventListenerOpts);
      };
      const onmousemove = e => {
        maxDeltaX = Math.max(Math.abs(mousedown.x - e.x));
        maxDeltaY = Math.max(Math.abs(mousedown.y - e.y));
        this.shiftByDelta(e.movementX);
      };
      const onmouseup = () => {
        this.noAnimation = this.sliding = false;
        this._zone.run(() => this.selectBySwipeStats(this.pointerDeltaX));
        this.pointerDeltaX = 0;
        document.removeEventListener('mousemove', onmousemove);
        document.removeEventListener('mouseup', onmouseup);
      };
      const onclick = e => {
        if (maxDeltaX > 10 || maxDeltaY > 10) {
          e.stopPropagation();
          // to prevent playing a video on swipe
          e.preventDefault();
        }
        maxDeltaY = maxDeltaX = 0;
      };
      const ondragstart = e => e.preventDefault();
      hostEl.addEventListener('mousedown', onmousedown, passiveEventListenerOpts);
      hostEl.addEventListener('click', onclick, {
        capture: true
      });
      hostEl.addEventListener('dragstart', ondragstart);
      this._destroyRef.onDestroy(() => {
        hostEl.removeEventListener('mousedown', onmousedown);
        hostEl.removeEventListener('click', onclick);
        hostEl.removeEventListener('dragstart', ondragstart);
      });
    });
  }
  handleTouchSlides() {
    this._zone.runOutsideAngular(() => {
      const hostEl = this._hostRef.nativeElement;
      let horizontal;
      let touchstart;
      let lastTouchmove;
      const ontouchstart = e => {
        touchstart = e;
        this.noAnimation = this.sliding = true;
      };
      const ontouchmove = e => {
        if (!touchstart || e.touches.length !== 1) {
          return;
        }
        const startTouch = touchstart.touches[0];
        const moveTouch = e.touches[0];
        if (horizontal == null) {
          const deltaX = Math.abs(moveTouch.clientX - startTouch.clientX);
          const deltaY = Math.abs(moveTouch.clientY - startTouch.clientY);
          if (deltaX || deltaY) {
            horizontal = deltaX * 1.2 >= deltaY;
          }
        }
        if (horizontal) {
          this.shiftByDelta(moveTouch.clientX - (lastTouchmove ?? touchstart).touches[0].clientX);
          lastTouchmove = e;
          if (_core__WEBPACK_IMPORTED_MODULE_0__.UA.ios) {
            e.preventDefault();
            e.stopPropagation();
          }
        }
      };
      const ontouchend = () => {
        this.noAnimation = this.sliding = false;
        this._zone.run(() => this.selectBySwipeStats(this.pointerDeltaX));
        this.pointerDeltaX = 0;
        horizontal = undefined;
        touchstart = undefined;
        lastTouchmove = undefined;
      };
      hostEl.addEventListener('touchstart', ontouchstart, passiveEventListenerOpts);
      document.addEventListener('touchmove', ontouchmove, {
        passive: !_core__WEBPACK_IMPORTED_MODULE_0__.UA.ios
      });
      document.addEventListener('touchend', ontouchend, passiveEventListenerOpts);
      this._destroyRef.onDestroy(() => {
        hostEl.removeEventListener('touchstart', ontouchstart);
        document.removeEventListener('touchmove', ontouchmove);
        document.removeEventListener('touchend', ontouchend);
      });
    });
  }
  handleResizes() {
    window.addEventListener('resize', this.updateDimensions, passiveEventListenerOpts);
    this._destroyRef.onDestroy(() => {
      window.removeEventListener('resize', this.updateDimensions);
    });
  }
  loopTo(desiredIndex) {
    this.noAnimation = true;
    const shift = Math.sign(desiredIndex) * this.items.length * this._itemWidth;
    this.shiftByDelta(shift);
    this.selectedIndex = desiredIndex < 0 ? desiredIndex + this.items.length : desiredIndex - this.items.length;
    // NOTE: This is needed so that animation is reactivated really only after the loop shift
    // happened. Without the requestAnimationFrame, the setTimeout is often not enough, as it
    // can happen still before the next frame is painted, which would cause the loop shift
    // to be animated.
    // But, requestAnimationFrame is not enough as its callback is called BEFORE the next paint,
    // not after. Second requestAnimationFrame would also be possible, but setTimeout is better
    // as it's called right after the next paint happens.
    requestAnimationFrame(() => setTimeout(() => {
      this.pointerDeltaX = 0;
      this.noAnimation = false;
      this.center();
    }));
  }
  observeFringes() {
    if (!_core__WEBPACK_IMPORTED_MODULE_0__.isBrowser) {
      return;
    }
    this.fringeObserver?.disconnect();
    const observer = new IntersectionObserver(this.repositionOnFringe, {
      root: this._hostRef.nativeElement,
      threshold: 1.0
    });
    observer.observe(this.itemsRef.first.nativeElement);
    observer.observe(this.itemsRef.last.nativeElement);
    this.fringeObserver = observer;
  }
  selectBySwipeStats(distance) {
    // I use round instead of previous ceil here because the ceil was pretty one-sided in where the
    // index delta would move. This was apparent in looping mode, where items that were clearly to be
    // scrolled to were actually hidden in favor of items that were barely visible, but selected thanks
    // to Math.ceil.
    // Now I use magical constant 2.25 to make sure a tiny swipe slides to next items, but there is still
    // a tiny threshold to make sure the slide doesn't always happen.
    const indexDelta = Math.round((Math.abs(distance) + this._itemWidth / 2.25) / this._itemWidth) * -Math.sign(distance);
    const newIndex = this.selectedIndex + indexDelta;
    this.select(newIndex);
  }
  shift(delta = 0) {
    const multiplier = this.isRtl ? 1 : -1;
    const index = (this.selectedIndex + this.fringeCount) * multiplier;
    delta *= -multiplier;
    const shift = `calc(${index} * var(--item-width) + ${delta}px)`;
    this.itemListRef.nativeElement.style.transform = `translate3d(${shift}, 0, 0)`;
  }
  stopCurrentVideo() {
    const videoEl = this.itemsRef.get(this.selectedIndex)?.nativeElement.querySelector('video');
    if (videoEl) {
      videoEl.pause();
    }
  }
}
ViewerComponent.ɵfac = function ViewerComponent_Factory(t) {
  return new (t || ViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.DestroyRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone));
};
ViewerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ViewerComponent,
  selectors: [["viewer"]],
  viewQuery: function ViewerComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.itemListRef = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.itemsRef = _t);
    }
  },
  hostVars: 4,
  hostBindings: function ViewerComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("clip", ctx.clip)("rtl", ctx.isRtl);
    }
  },
  inputs: {
    items: "items",
    arrows: "arrows",
    selectedIndex: "selectedIndex",
    descriptions: "descriptions",
    errorText: "errorText",
    mouseGestures: "mouseGestures",
    touchGestures: "touchGestures",
    counter: "counter",
    counterOrientation: "counterOrientation",
    loading: "loading",
    objectFit: "objectFit",
    itemTemplate: "itemTemplate",
    loadingTemplate: "loadingTemplate",
    errorTemplate: "errorTemplate",
    arrowTemplate: "arrowTemplate",
    contentTemplate: "contentTemplate",
    thumbsOrientation: "thumbsOrientation",
    aria: "aria",
    loop: "loop",
    visibleItems: "visibleItems",
    moveByItems: "moveByItems",
    clip: "clip",
    isRtl: "isRtl"
  },
  outputs: {
    itemClick: "itemClick",
    descriptionClick: "descriptionClick",
    selection: "selection"
  },
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
  decls: 10,
  vars: 12,
  consts: [["aria-label", "Previous image", "class", "viewer-arrow viewer-arrow-prev", 3, "mousedown", "click", 4, "ngIf"], ["itemList", ""], ["class", "viewer-initial-item", 4, "ngIf"], ["media", "", 3, "click", "mediaLoad", "mediaLoadError", "keydown.Tab", "keydown.shift.Tab", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["aria-label", "Next image", "class", "viewer-arrow viewer-arrow-next", 3, "mousedown", "click", 4, "ngIf"], [3, "itemQuantity", "selectedIndex", "orientation", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "viewer-description", "aria-hidden", "true", 3, "viewer-description--above-counter", 4, "ngIf"], ["aria-label", "Previous image", 1, "viewer-arrow", "viewer-arrow-prev", 3, "mousedown", "click"], [4, "ngIf", "ngIfElse"], [1, "viewer-initial-item"], ["media", "", 3, "click", "mediaLoad", "mediaLoadError", "keydown.Tab", "keydown.shift.Tab"], ["itemsRef", ""], [1, "sr-only", 3, "id", "innerHTML"], ["customTemplate", ""], ["controls", "", "playsinline", "", 3, "src", "poster", "viewer-media-loading", "objectFit", 4, "ngIf"], ["allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 3, "src", 4, "ngIf"], [3, "srcset", 4, "ngFor", "ngForOf"], [3, "src", "alt"], [3, "srcset"], ["controls", "", "playsinline", "", 3, "src", "poster"], ["allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 3, "src"], [4, "ngTemplateOutlet"], ["class", "viewer-error", 4, "ngIf", "ngIfElse"], [1, "viewer-error"], [1, "viewer-error-icon"], [1, "viewer-error-text"], ["aria-label", "Next image", 1, "viewer-arrow", "viewer-arrow-next", 3, "mousedown", "click"], [3, "itemQuantity", "selectedIndex", "orientation"], ["aria-hidden", "true", 1, "viewer-description"], ["class", "viewer-description-inner", 3, "innerHTML", "click", 4, "ngIf"], [1, "viewer-description-inner", 3, "innerHTML", "click"]],
  template: function ViewerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ViewerComponent_button_0_Template, 2, 2, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ul", null, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ViewerComponent_li_3_Template, 1, 0, "li", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ViewerComponent_li_4_Template, 8, 9, "li", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ViewerComponent_ng_container_5_Template, 2, 1, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ViewerComponent_button_6_Template, 2, 2, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ViewerComponent_counter_7_Template, 1, 3, "counter", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ViewerComponent_ng_container_8_Template, 1, 0, "ng-container", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ViewerComponent_div_9_Template, 2, 3, "div", 8);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showPrevArrow);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-label", ctx.aria == null ? null : ctx.aria.viewerLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !(ctx.displayedItems == null ? null : ctx.displayedItems.length));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.displayedItems);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.items == null ? null : ctx.items.length) <= 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showNextArrow);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.counter && (ctx.items == null ? null : ctx.items.length));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", ctx.contentTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c3, ctx.selectedIndex));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.descriptions && ctx.items);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet, _counter_counter_component__WEBPACK_IMPORTED_MODULE_3__.CounterComponent, _icons_chevron_chevron_icon_component__WEBPACK_IMPORTED_MODULE_4__.ChevronIconComponent, _directives_media_directive__WEBPACK_IMPORTED_MODULE_1__.MediaDirective, _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_2__.SafePipe],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  outline: none;\n  z-index: 1;\n}\n.clip[_nghost-%COMP%] {\n  overflow: hidden;\n}\n.rtl[_nghost-%COMP%]   .viewer-arrow-next[_ngcontent-%COMP%] {\n  right: auto;\n  left: 0;\n  transform: translateY(-50%) scale(-1);\n}\n.rtl[_nghost-%COMP%]   .viewer-arrow-prev[_ngcontent-%COMP%] {\n  right: 0;\n  left: auto;\n  transform: translateY(-50%);\n}\n\nul[_ngcontent-%COMP%] {\n  --item-width: 100%;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  transition: transform;\n  scrollbar-width: none; \n\n}\nul[_ngcontent-%COMP%]::-webkit-scrollbar {\n  \n\n  width: 0;\n  height: 0;\n}\n\nli[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex: none;\n  position: relative;\n  width: var(--item-width);\n  -webkit-user-select: none;\n          user-select: none;\n  outline: 0;\n}\n\npicture[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\nimg[_ngcontent-%COMP%], video[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n  outline: 0;\n  color: transparent;\n}\n\niframe[_ngcontent-%COMP%] {\n  border: 0;\n}\n\nimg[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.viewer-description[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0.5rem;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  font-size: 0.9rem;\n}\n.viewer-description--above-counter[_ngcontent-%COMP%] {\n  bottom: 2.5rem;\n}\n.viewer-description-inner[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: rgba(0, 0, 0, 0.7);\n  color: rgb(241, 245, 249);\n  padding: 0.5rem 0.75rem;\n  max-width: 80%;\n  text-align: center;\n  border-radius: 0.5rem;\n}\n\n.viewer-error[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  background-color: #f5f5f5;\n  color: #7d7d7d;\n}\n.viewer-error-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n.viewer-error-text[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  letter-spacing: 0.01em;\n}\n\n.viewer-arrow[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  top: 50%;\n  padding: 0;\n  background-color: transparent;\n  transform: translateY(-50%);\n  z-index: 100;\n  cursor: pointer;\n}\n.viewer-arrow-prev[_ngcontent-%COMP%] {\n  left: 0;\n  transform: scale(-1) translateY(50%);\n}\n.viewer-arrow-next[_ngcontent-%COMP%] {\n  right: 0;\n}\n.viewer-arrow[_ngcontent-%COMP%]   chevron-icon[_ngcontent-%COMP%] {\n  margin: 15px 6px;\n  opacity: 0.7;\n}\n@media (hover: hover) and (pointer: fine) {\n  .viewer-arrow[_ngcontent-%COMP%]   chevron-icon[_ngcontent-%COMP%]:hover {\n    opacity: 1;\n  }\n}\n.viewer-arrow[_ngcontent-%COMP%]   chevron-icon[_ngcontent-%COMP%]  svg {\n  height: 32px;\n  width: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uL2NvcmUvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFLQSxVQUFBO0FBTEY7QUFPRTtFQUNFLGdCQUFBO0FBTEo7QUFTSTtFQUNFLFdBQUE7RUFDQSxPQUFBO0VBQ0EscUNBQUE7QUFQTjtBQVVJO0VBQ0UsUUFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtBQVJOOztBQWFBO0VBQ0Usa0JBQUE7RUFFQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUdBLHFCQUFBLEVBQUEsWUFBQTtBQWJGO0FBY0U7RUFDRSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFaSjs7QUFnQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxVQUFBO0FBYkY7O0FBZ0JBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFiRjs7QUFnQkE7OztFQUdFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFiRjs7QUFnQkE7RUFDRSxTQUFBO0FBYkY7O0FBZ0JBO0VBQ0UseUJBQUE7VUFBQSxpQkFBQTtBQWJGOztBQWdCQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQWJGO0FBZUU7RUFDRSxjQUFBO0FBYko7QUFnQkU7RUFDRSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBZEo7O0FBa0JBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQWZGO0FBaUJFO0VBQ0UsZUFBQTtBQWZKO0FBa0JFO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtBQWhCSjs7QUFvQkE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQWpCRjtBQW1CRTtFQUNFLE9BQUE7RUFDQSxvQ0FBQTtBQWpCSjtBQW9CRTtFQUNFLFFBQUE7QUFsQko7QUFxQkU7RUFHRSxnQkFBQTtFQUNBLFlBQUE7QUFyQko7QUNsSUU7RUQwSkk7SUFDRSxVQUFBO0VBckJOO0FBQ0Y7QUF3Qkk7RUFDRSxZQVplO0VBYWYsV0FiZTtBQVRyQiIsImZpbGUiOiJ2aWV3ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9jb3JlL21peGlucy5zY3NzJztcblxuOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xuICAvLyBOT1RFIG9uIHotaW5kZXg6IEl0IHByZXZlbnRzIGNyZWF0aW9uIG9mIHNlY29uZGFyeSBsYXllciBmb3Igc2Nyb2xsYWJsZSBjb250ZW50IChmb3VuZCBvdXQgaW4gQ2hyb21pdW0gZGV2IHRvb2xzIGluIExheWVycykgaW4gY29udGV4dCBvZiB0aGUgdmlld2VyIERPTSBlbGVtZW50LlxuICAvLyBUaGlzIHNlY29uZGFyeSBsYXllciBob2xkcyBhIGxhcmdlIHBvcnRpb24gb2YgbWVtb3J5XG4gIC8vIFBvc2l0aXZlIHotaW5kZXggcHJldmVudCBjcmVhdGlvbiBvZiB0aGlzIGxheWVyLiBJdCBhbHNvIGNhdXNlcyBhIHNlcGFyYXRlIGxheWVyIHRvIGJlIGNyZWF0ZWQsIGJlY2F1c2UgaXQgaGFzIFwiY29tcG9zaXRlZFwiIGRlc2NlbmRhbnRzIC0gdWwgZWxlbWVudCxcbiAgLy8gaG93ZXZlciwgdGhpcyBsYXllciBob2xkcyBtdWNoIGxlc3MgbWVtb3J5LlxuICB6LWluZGV4OiAxO1xuXG4gICYuY2xpcCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gICYucnRsIHtcbiAgICAudmlld2VyLWFycm93LW5leHQge1xuICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKC0xKTtcbiAgICB9XG5cbiAgICAudmlld2VyLWFycm93LXByZXYge1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBsZWZ0OiBhdXRvO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIH1cbiAgfVxufVxuXG51bCB7XG4gIC0taXRlbS13aWR0aDogMTAwJTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm07XG5cbiAgLy8gaGlkZSB0aGUgc2Nyb2xsYmFyXG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRmlyZWZveCAqL1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgLyogV2ViS2l0ICovXG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICB9XG59XG5cbmxpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleDogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogdmFyKC0taXRlbS13aWR0aCk7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBvdXRsaW5lOiAwO1xufVxuXG5waWN0dXJlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuaW1nLFxudmlkZW8sXG5pZnJhbWUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgb3V0bGluZTogMDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5pZnJhbWUge1xuICBib3JkZXI6IDA7XG59XG5cbmltZyB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4udmlld2VyLWRlc2NyaXB0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDAuNXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDAuOXJlbTtcblxuICAmLS1hYm92ZS1jb3VudGVyIHtcbiAgICBib3R0b206IDIuNXJlbTtcbiAgfVxuXG4gICYtaW5uZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgY29sb3I6IHJnYigyNDEgMjQ1IDI0OSk7XG4gICAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XG4gICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgfVxufVxuXG4udmlld2VyLWVycm9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGNvbG9yOiAjN2Q3ZDdkO1xuXG4gICYtaWNvbiB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICB9XG5cbiAgJi10ZXh0IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIH1cbn1cblxuLnZpZXdlci1hcnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHotaW5kZXg6IDEwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICYtcHJldiB7XG4gICAgbGVmdDogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKC0xKSB0cmFuc2xhdGVZKDUwJSk7XG4gIH1cblxuICAmLW5leHQge1xuICAgIHJpZ2h0OiAwO1xuICB9XG5cbiAgY2hldnJvbi1pY29uIHtcbiAgICAkaWNvbi1kaW1lbnNpb246IDMycHg7XG5cbiAgICBtYXJnaW46IDE1cHggNnB4O1xuICAgIG9wYWNpdHk6IDAuNztcblxuICAgIEBpbmNsdWRlIHN1cHBvcnRzLWhvdmVyIHtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6Om5nLWRlZXAgc3ZnIHtcbiAgICAgIGhlaWdodDogJGljb24tZGltZW5zaW9uO1xuICAgICAgd2lkdGg6ICRpY29uLWRpbWVuc2lvbjtcbiAgICB9XG4gIH1cbn1cbiIsIkBtaXhpbiBzdXBwb3J0cy1ob3ZlciB7XG4gIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIl19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2xpYnMvZ2FsbGVyeS9zcmMvbGliL2NvbXBvbmVudHMvdmlld2VyL3ZpZXdlci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL2xpYnMvZ2FsbGVyeS9zcmMvbGliL2NvcmUvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFLQSxVQUFBO0FBTEY7QUFPRTtFQUNFLGdCQUFBO0FBTEo7QUFTSTtFQUNFLFdBQUE7RUFDQSxPQUFBO0VBQ0EscUNBQUE7QUFQTjtBQVVJO0VBQ0UsUUFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtBQVJOOztBQWFBO0VBQ0Usa0JBQUE7RUFFQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUdBLHFCQUFBLEVBQUEsWUFBQTtBQWJGO0FBY0U7RUFDRSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFaSjs7QUFnQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxVQUFBO0FBYkY7O0FBZ0JBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFiRjs7QUFnQkE7OztFQUdFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFiRjs7QUFnQkE7RUFDRSxTQUFBO0FBYkY7O0FBZ0JBO0VBQ0UseUJBQUE7VUFBQSxpQkFBQTtBQWJGOztBQWdCQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQWJGO0FBZUU7RUFDRSxjQUFBO0FBYko7QUFnQkU7RUFDRSxxQkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBZEo7O0FBa0JBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQWZGO0FBaUJFO0VBQ0UsZUFBQTtBQWZKO0FBa0JFO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtBQWhCSjs7QUFvQkE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQWpCRjtBQW1CRTtFQUNFLE9BQUE7RUFDQSxvQ0FBQTtBQWpCSjtBQW9CRTtFQUNFLFFBQUE7QUFsQko7QUFxQkU7RUFHRSxnQkFBQTtFQUNBLFlBQUE7QUFyQko7QUNsSUU7RUQwSkk7SUFDRSxVQUFBO0VBckJOO0FBQ0Y7QUF3Qkk7RUFDRSxZQVplO0VBYWYsV0FiZTtBQVRyQjtBQUdBLDRxTEFBNHFMIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vY29yZS9taXhpbnMuc2Nzcyc7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgLy8gTk9URSBvbiB6LWluZGV4OiBJdCBwcmV2ZW50cyBjcmVhdGlvbiBvZiBzZWNvbmRhcnkgbGF5ZXIgZm9yIHNjcm9sbGFibGUgY29udGVudCAoZm91bmQgb3V0IGluIENocm9taXVtIGRldiB0b29scyBpbiBMYXllcnMpIGluIGNvbnRleHQgb2YgdGhlIHZpZXdlciBET00gZWxlbWVudC5cbiAgLy8gVGhpcyBzZWNvbmRhcnkgbGF5ZXIgaG9sZHMgYSBsYXJnZSBwb3J0aW9uIG9mIG1lbW9yeVxuICAvLyBQb3NpdGl2ZSB6LWluZGV4IHByZXZlbnQgY3JlYXRpb24gb2YgdGhpcyBsYXllci4gSXQgYWxzbyBjYXVzZXMgYSBzZXBhcmF0ZSBsYXllciB0byBiZSBjcmVhdGVkLCBiZWNhdXNlIGl0IGhhcyBcImNvbXBvc2l0ZWRcIiBkZXNjZW5kYW50cyAtIHVsIGVsZW1lbnQsXG4gIC8vIGhvd2V2ZXIsIHRoaXMgbGF5ZXIgaG9sZHMgbXVjaCBsZXNzIG1lbW9yeS5cbiAgei1pbmRleDogMTtcblxuICAmLmNsaXAge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAmLnJ0bCB7XG4gICAgLnZpZXdlci1hcnJvdy1uZXh0IHtcbiAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgtMSk7XG4gICAgfVxuXG4gICAgLnZpZXdlci1hcnJvdy1wcmV2IHtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgbGVmdDogYXV0bztcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB9XG4gIH1cbn1cblxudWwge1xuICAtLWl0ZW0td2lkdGg6IDEwMCU7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtO1xuXG4gIC8vIGhpZGUgdGhlIHNjcm9sbGJhclxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIC8qIFdlYktpdCAqL1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgfVxufVxuXG5saSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXg6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IHZhcigtLWl0ZW0td2lkdGgpO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgb3V0bGluZTogMDtcbn1cblxucGljdHVyZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmltZyxcbnZpZGVvLFxuaWZyYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG91dGxpbmU6IDA7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaWZyYW1lIHtcbiAgYm9yZGVyOiAwO1xufVxuXG5pbWcge1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnZpZXdlci1kZXNjcmlwdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwLjVyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjlyZW07XG5cbiAgJi0tYWJvdmUtY291bnRlciB7XG4gICAgYm90dG9tOiAyLjVyZW07XG4gIH1cblxuICAmLWlubmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgIGNvbG9yOiByZ2IoMjQxIDI0NSAyNDkpO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xuICAgIG1heC13aWR0aDogODAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIH1cbn1cblxuLnZpZXdlci1lcnJvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICBjb2xvcjogIzdkN2Q3ZDtcblxuICAmLWljb24ge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgfVxuXG4gICYtdGV4dCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICB9XG59XG5cbi52aWV3ZXItYXJyb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBwYWRkaW5nOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB6LWluZGV4OiAxMDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmLXByZXYge1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgtMSkgdHJhbnNsYXRlWSg1MCUpO1xuICB9XG5cbiAgJi1uZXh0IHtcbiAgICByaWdodDogMDtcbiAgfVxuXG4gIGNoZXZyb24taWNvbiB7XG4gICAgJGljb24tZGltZW5zaW9uOiAzMnB4O1xuXG4gICAgbWFyZ2luOiAxNXB4IDZweDtcbiAgICBvcGFjaXR5OiAwLjc7XG5cbiAgICBAaW5jbHVkZSBzdXBwb3J0cy1ob3ZlciB7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOjpuZy1kZWVwIHN2ZyB7XG4gICAgICBoZWlnaHQ6ICRpY29uLWRpbWVuc2lvbjtcbiAgICAgIHdpZHRoOiAkaWNvbi1kaW1lbnNpb247XG4gICAgfVxuICB9XG59XG4iLCJAbWl4aW4gc3VwcG9ydHMtaG92ZXIge1xuICBAbWVkaWEgKGhvdmVyOiBob3ZlcikgYW5kIChwb2ludGVyOiBmaW5lKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('mediaAnimate', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)(':leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('0ms 100ms')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
      opacity: 0
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('400ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
      opacity: 1
    }))])])]
  },
  changeDetection: 0
});

/***/ }),

/***/ 6090:
/*!*******************************************!*\
  !*** ./libs/gallery/src/lib/core/aria.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultAria: () => (/* binding */ defaultAria)
/* harmony export */ });
const defaultAria = {
  galleryLabel: 'Image Gallery',
  viewerLabel: 'Displayed gallery images.'
};

/***/ }),

/***/ 8247:
/*!********************************************!*\
  !*** ./libs/gallery/src/lib/core/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SUPPORT: () => (/* reexport safe */ _support__WEBPACK_IMPORTED_MODULE_0__.SUPPORT),
/* harmony export */   UA: () => (/* reexport safe */ _support__WEBPACK_IMPORTED_MODULE_0__.UA),
/* harmony export */   isBrowser: () => (/* reexport safe */ _support__WEBPACK_IMPORTED_MODULE_0__.isBrowser),
/* harmony export */   orientations: () => (/* reexport safe */ _orientation__WEBPACK_IMPORTED_MODULE_3__.orientations)
/* harmony export */ });
/* harmony import */ var _support__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support */ 5049);
/* harmony import */ var _object_fit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object-fit */ 2256);
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading */ 4506);
/* harmony import */ var _orientation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orientation */ 3802);
/* harmony import */ var _template_contexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./template-contexts */ 9945);






/***/ }),

/***/ 4506:
/*!**********************************************!*\
  !*** ./libs/gallery/src/lib/core/loading.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 2256:
/*!*************************************************!*\
  !*** ./libs/gallery/src/lib/core/object-fit.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 3802:
/*!**************************************************!*\
  !*** ./libs/gallery/src/lib/core/orientation.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   orientations: () => (/* binding */ orientations)
/* harmony export */ });
const orientations = {
  left: 2 /* OrientationFlag.LEFT */,
  right: 4 /* OrientationFlag.RIGHT */,
  top: 8 /* OrientationFlag.TOP */,
  bottom: 16 /* OrientationFlag.BOTTOM */
};

/***/ }),

/***/ 5049:
/*!**********************************************!*\
  !*** ./libs/gallery/src/lib/core/support.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SUPPORT: () => (/* binding */ SUPPORT),
/* harmony export */   UA: () => (/* binding */ UA),
/* harmony export */   isBrowser: () => (/* binding */ isBrowser)
/* harmony export */ });
const isBrowser = typeof window !== 'undefined';
const SUPPORT = {
  scrollBehavior: isBrowser && 'scrollBehavior' in document.body.style
};
const UA = {
  ios: isBrowser && !!window.navigator.userAgent.match(/iP(ad|hone|od)/)
};

/***/ }),

/***/ 9945:
/*!********************************************************!*\
  !*** ./libs/gallery/src/lib/core/template-contexts.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 9881:
/*!************************************************************!*\
  !*** ./libs/gallery/src/lib/directives/media.directive.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaDirective: () => (/* binding */ MediaDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);


class MediaDirective {
  constructor(hostRef) {
    this.mediaLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.mediaLoadError = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.onLoad = ev => {
      const errored = ev.type === 'error';
      errored ? this.mediaLoadError.emit() : this.mediaLoad.emit();
    };
    this.nativeEl = hostRef.nativeElement;
  }
  ngOnInit() {
    this.nativeEl.addEventListener('load', this.onLoad, true);
    this.nativeEl.addEventListener('loadedmetadata', this.onLoad, true);
    this.nativeEl.addEventListener('error', this.onLoad, true);
  }
  ngOnDestroy() {
    this.nativeEl.removeEventListener('load', this.onLoad, true);
    this.nativeEl.removeEventListener('loadedmetadata', this.onLoad, true);
    this.nativeEl.removeEventListener('error', this.onLoad, true);
  }
}
MediaDirective.ɵfac = function MediaDirective_Factory(t) {
  return new (t || MediaDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};
MediaDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MediaDirective,
  selectors: [["", "media", ""]],
  outputs: {
    mediaLoad: "mediaLoad",
    mediaLoadError: "mediaLoadError"
  },
  standalone: true
});

/***/ }),

/***/ 8615:
/*!*************************************************!*\
  !*** ./libs/gallery/src/lib/pipes/safe.pipe.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SafePipe: () => (/* binding */ SafePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);


class SafePipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
SafePipe.ɵfac = function SafePipe_Factory(t) {
  return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
};
SafePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "safe",
  type: SafePipe,
  pure: true,
  standalone: true
});

/***/ }),

/***/ 6081:
/*!****************************************!*\
  !*** ./libs/gallery/src/public-api.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GalleryComponent: () => (/* reexport safe */ _lib_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_0__.GalleryComponent),
/* harmony export */   SUPPORT: () => (/* reexport safe */ _lib_core__WEBPACK_IMPORTED_MODULE_1__.SUPPORT),
/* harmony export */   UA: () => (/* reexport safe */ _lib_core__WEBPACK_IMPORTED_MODULE_1__.UA),
/* harmony export */   isBrowser: () => (/* reexport safe */ _lib_core__WEBPACK_IMPORTED_MODULE_1__.isBrowser),
/* harmony export */   orientations: () => (/* reexport safe */ _lib_core__WEBPACK_IMPORTED_MODULE_1__.orientations)
/* harmony export */ });
/* harmony import */ var _lib_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/components/gallery/gallery.component */ 4621);
/* harmony import */ var _lib_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/core */ 8247);
/*
 * Public API Surface of the gallery
 */



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(5306)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map