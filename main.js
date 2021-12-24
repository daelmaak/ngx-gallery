"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["main"],{

/***/ 6504:
/*!************************************************!*\
  !*** ./projects/demo/src/app/app.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _daelmaak_ngx_gallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @daelmaak/ngx-gallery */ 8488);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ 6583);
/* harmony import */ var _components_showcase_showcase_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/showcase/showcase.component */ 2269);
/* harmony import */ var _gallery_src_lib_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../gallery/src/lib/components/gallery/gallery.component */ 5410);
/* harmony import */ var _components_demo_multiple_items_demo_multiple_items_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/demo-multiple-items/demo-multiple-items.component */ 3494);
/* harmony import */ var _components_demo_thumbs_orientation_demo_thumbs_orientation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/demo-thumbs-orientation/demo-thumbs-orientation.component */ 6684);
/* harmony import */ var _components_demo_custom_templates_demo_custom_templates_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/demo-custom-templates/demo-custom-templates.component */ 8698);
/* harmony import */ var _components_demo_whole_config_demo_whole_config_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/demo-whole-config/demo-whole-config.component */ 8082);









class AppComponent {
    constructor() {
        this.installScript = `
    npm i @daelmaak/ngx-gallery -S
  `;
        this.moduleCode = `
    import { GalleryModule } from '@daelmaak/ngx-gallery';

    @NgModule({
      imports: [ GalleryModule ]
    })
    export class AppModule { }
  `;
        this.componentCode = `
    import { GalleryImage } from '@daelmaak/ngx-gallery';

    @Component({...})
    export class AppComponent {
      images = [ new GalleryImage('kitten1.jpg') ]
    }
  `;
        this.componentTemplateCode = `
    <gallery [items]="images"></gallery>
  `;
        this.images = [
            new _daelmaak_ngx_gallery__WEBPACK_IMPORTED_MODULE_0__.GalleryImage('./assets/images/mountains-1-lg.jpg', './assets/images/mountains-1-sm.jpg', 'Mountains', 'Mighty mountains'),
            new _daelmaak_ngx_gallery__WEBPACK_IMPORTED_MODULE_0__.GalleryImage('./assets/images/house-1-lg.jpg', './assets/images/house-1-sm.jpg', 'House', `I just love mysterious houses`),
            new _daelmaak_ngx_gallery__WEBPACK_IMPORTED_MODULE_0__.GalleryImage('./assets/images/church-1-lg.jpg', './assets/images/church-1-sm.jpg', 'Church hallway', 'Feel the history in this beautiful church'),
            new _daelmaak_ngx_gallery__WEBPACK_IMPORTED_MODULE_0__.GalleryImage('./assets/images/lens-1-lg.jpg', './assets/images/lens-1-sm.jpg', 'Lens', 'Zoom the world'),
            new _daelmaak_ngx_gallery__WEBPACK_IMPORTED_MODULE_0__.GalleryImage('./assets/images/terraces-1-lg.jpg', './assets/images/terraces-1-sm.jpg', 'Mountains', 'Sun lit mountains'),
            new _daelmaak_ngx_gallery__WEBPACK_IMPORTED_MODULE_0__.GalleryImage('./assets/images/tulip-1-lg.jpg', './assets/images/tulip-1-sm.jpg', 'Tulip', `You didn't forget to buy your better half flowers, did you?`),
        ];
        this.smallerImages = this.images.map(i => (Object.assign(Object.assign({}, i), { src: i.src.replace('-lg', '-md') })));
        this.extendedImages = [
            ...this.images,
            new _daelmaak_ngx_gallery__WEBPACK_IMPORTED_MODULE_0__.GalleryImage('./assets/images/forest-1-lg.jpg', './assets/images/forest-1-sm.jpg', 'Forest', 'Mysterious forest'),
            new _daelmaak_ngx_gallery__WEBPACK_IMPORTED_MODULE_0__.GalleryImage('./assets/images/sky-1-lg.jpg', './assets/images/sky-1-sm.jpg', 'Sky', 'Mysterious sky'),
            new _daelmaak_ngx_gallery__WEBPACK_IMPORTED_MODULE_0__.GalleryImage('./assets/images/cheers-1-lg.jpg', './assets/images/cheers-1-sm.jpg', 'Cheers', 'Two guys drinking during sunset'),
            new _daelmaak_ngx_gallery__WEBPACK_IMPORTED_MODULE_0__.GalleryImage('./assets/images/laptop-1-lg.jpg', './assets/images/laptop-1-sm.jpg', 'Laptop', 'Ideal workplace for computer work'),
            new _daelmaak_ngx_gallery__WEBPACK_IMPORTED_MODULE_0__.GalleryImage('./assets/images/snowflake-1-lg.jpg', './assets/images/snowflake-1-sm.jpg', 'Snowflake', 'Snowflake detail'),
            new _daelmaak_ngx_gallery__WEBPACK_IMPORTED_MODULE_0__.GalleryImage('./assets/images/mesh-1-lg.jpg', './assets/images/mesh-1-sm.jpg', 'City', 'City at night'),
        ];
        this.erroredImages = [
            new _daelmaak_ngx_gallery__WEBPACK_IMPORTED_MODULE_0__.GalleryImage('./assets/images/non-existing-picture.jpg', null, 'Non-existing picture'),
            new _daelmaak_ngx_gallery__WEBPACK_IMPORTED_MODULE_0__.GalleryVideo('./assets/images/non-existing-video.jpg', null, 'Non-existing video'),
            ...this.extendedImages.slice(2, 4),
        ];
        this.videos = [
            new _daelmaak_ngx_gallery__WEBPACK_IMPORTED_MODULE_0__.GalleryVideo('./assets/images/beach-1.mp4'),
            new _daelmaak_ngx_gallery__WEBPACK_IMPORTED_MODULE_0__.GalleryVideo('https://www.youtube.com/embed/80_39eAx3z8'),
        ];
        this.mobile = matchMedia('(max-width: 767px)').matches;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 115, vars: 19, consts: [[1, "menu-heading"], ["href", "#usage"], ["href", "#demos"], ["href", "#demo-responsive"], ["href", "#demo-multiple"], ["href", "#demo-infinite-loop-multiple"], ["href", "#demo-thumbs-orientation"], ["href", "#demo-rtl"], ["href", "#demo-descriptions"], ["href", "#demo-error-handling"], ["href", "#demo-videos"], ["href", "#demo-custom"], ["href", "#demo-full-config"], ["href", "https://github.com/daelmaak/ngx-gallery/wiki", "target", "_blank"], ["role", "main"], [1, "main-content"], ["id", "usage", 1, "usage"], [1, "usage-code"], ["id", "demos"], ["id", "demo-responsive", "heading", "Responsive - resize me!", "stackblitz", "https://stackblitz.com/edit/ngx-gallery-demo-responsive?file=src%2Fapp%2Fapp.component.html"], ["loading", "lazy", 3, "items"], ["id", "demo-multiple", "heading", "Multiple items", "stackblitz", "https://stackblitz.com/edit/ngx-gallery-demo-multiple-items?file=src%2Fapp%2Fapp.component.html"], [3, "items", "mobile"], ["id", "demo-infinite-loop-multiple", "heading", "Infinite loop", "stackblitz", "https://stackblitz.com/edit/ngx-gallery-demo-infinite-loop?file=src%2Fapp%2Fapp.component.html"], ["loading", "lazy", 3, "items", "loop", "itemWidth"], ["id", "demo-thumbs-orientation", "heading", "Thumbnails orientation & autoscroll", "subheading", "w/ infinite scroll", "stackblitz", "https://stackblitz.com/edit/ngx-gallery-demo-thumbs-orientation?file=src%2Fapp%2Fapp.component.html"], ["id", "demo-rtl", "heading", "Right to left"], ["loading", "lazy", 3, "items", "isRtl"], ["id", "demo-descriptions", "heading", "Descriptions", "stackblitz", "https://stackblitz.com/edit/ngx-gallery-demo-descriptions?file=src%2Fapp%2Fapp.component.html"], ["loading", "lazy", 3, "items", "descriptions"], ["id", "demo-error-handling", "heading", "Error handling"], ["id", "demo-videos", "heading", "Videos", "subheading", "both YouTube and native videos"], ["id", "demo-custom", "heading", "Custom items, arrows and error handling", "stackblitz", "https://stackblitz.com/edit/ngx-gallery-demo-custom-templates?file=src%2Fapp%2Fapp.component.html"], ["subheading", ""], ["href", "https://github.com/daelmaak/ngx-gallery/wiki/Gallery-API", "target", "_blank"], ["href", "https://stackblitz.com/edit/ngx-gallery-demo-custom-templates", "target", "_blank"], ["id", "demo-full-config", "heading", "Full configuration"], [3, "images"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "aside");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Demos");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Responsive");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Multiple items");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Infinite loop");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "Thumbnails orientation & autoscroll");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, "Right to left");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "Descriptions");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "Error handling");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "Videos");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "Custom items, arrows, loading and error handling");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38, "Full configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, "Misc");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "main", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](52, "Install");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59, "Module");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](60, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](61, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](65, "Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](66, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](71, "Component template");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](72, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "h2", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](76, "Demos");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](77, "app-showcase", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](78, "gallery", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](79, "app-showcase", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](80, "app-demo-multiple-items", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "app-showcase", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](82, "gallery", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "app-showcase", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](84, "app-demo-thumbs-orientation", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](85, "app-showcase", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](86, "gallery", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](87, "app-showcase", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](88, "gallery", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](89, "app-showcase", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](90, "gallery", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](91, "app-showcase", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](92, "gallery", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](93, "app-showcase", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](94, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](95, " You can also have custom loading screen, thumbnails, thumbnail errors and thumbnail navigation arrows. Find out how in the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](96, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](97, "documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](98, " and/or try it out in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](99, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](100, "StackBlitz");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](101, " ! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](102, "app-demo-custom-templates");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](103, "app-showcase", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](104, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](105, " Some properties like custom templates are missing. Checkout them out in the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](106, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](107, "documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](108, " and/or try them out in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](109, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](110, "StackBlitz");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](111, " ! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](112, "app-demo-whole-config", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](113, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](114, "With care from daelmaak");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.installScript);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.moduleCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.componentCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.componentTemplateCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("items", ctx.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("items", ctx.smallerImages)("mobile", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("items", ctx.smallerImages)("loop", true)("itemWidth", ctx.mobile ? "75%" : "34%");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("items", ctx.extendedImages)("mobile", ctx.mobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("items", ctx.images)("isRtl", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("items", ctx.images)("descriptions", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("items", ctx.erroredImages);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("items", ctx.videos);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("images", ctx.images);
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _components_showcase_showcase_component__WEBPACK_IMPORTED_MODULE_2__.ShowcaseComponent, _gallery_src_lib_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__.GalleryComponent, _components_demo_multiple_items_demo_multiple_items_component__WEBPACK_IMPORTED_MODULE_4__.DemoMultipleItemsComponent, _components_demo_thumbs_orientation_demo_thumbs_orientation_component__WEBPACK_IMPORTED_MODULE_5__.DemoThumbsOrientationComponent, _components_demo_custom_templates_demo_custom_templates_component__WEBPACK_IMPORTED_MODULE_6__.DemoCustomTemplatesComponent, _components_demo_whole_config_demo_whole_config_component__WEBPACK_IMPORTED_MODULE_7__.DemoWholeConfigComponent], styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-template-columns: 230px calc(100% - 230px);\n  grid-template-rows: auto auto 64px;\n}\n@media (max-width: 767px) {\n  [_nghost-%COMP%] {\n    grid-template-columns: 0px 100%;\n  }\n}\napp-header[_ngcontent-%COMP%] {\n  grid-column: 1/span 2;\n  grid-row: 1;\n}\naside[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 2/span 2;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  max-height: 100vh;\n  background-color: #f3f3f3;\n  overflow: auto;\n}\n@media (max-width: 767px) {\n  aside[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\naside[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 5px 25px;\n}\naside[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 8px 0;\n}\naside[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #5b5b5b;\n}\naside[_ngcontent-%COMP%]   .menu-heading[_ngcontent-%COMP%] {\n  padding: 0 15px 8px;\n  box-sizing: border-box;\n  margin: 20px 10px 0;\n  color: #686868;\n  font-weight: bold;\n}\naside[_ngcontent-%COMP%]   .menu-heading[_ngcontent-%COMP%]    + ul[_ngcontent-%COMP%] {\n  border-top: 1px solid #c1c1c1;\n}\nmain[_ngcontent-%COMP%] {\n  grid-column: 2/span 1;\n  margin: 0 auto;\n  width: 100%;\n  background: #fafafa;\n}\n@media (max-width: 767px) {\n  main[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\nmain[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  max-width: 2000px;\n  width: 100%;\n  margin: 0 auto;\n}\nmain[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], main[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0 0 0 30px;\n}\nmain[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding: 0.83em 0 0.4em;\n}\n@media (min-width: 768px) {\n  main[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2.3em;\n  }\n}\nfooter[_ngcontent-%COMP%] {\n  grid-column: 2/span 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 0.9em;\n  text-align: center;\n  color: #b3b3b3;\n}\npre[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0;\n  font-size: 1.2em;\n}\n@media (max-width: 767px) {\n  .usage[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.usage-code[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0FBQ0Y7QUFDRTtFQUxGO0lBTUksK0JBQUE7RUFFRjtBQUNGO0FBQ0E7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QUFFRjtBQUNBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQUVGO0FBQUU7RUFURjtJQVVJLGFBQUE7RUFHRjtBQUNGO0FBREU7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7QUFHSjtBQUFFO0VBQ0UsY0FBQTtBQUVKO0FBQ0U7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFDSjtBQUVFO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQUo7QUFFSTtFQUNFLDZCQUFBO0FBQU47QUFLQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUZGO0FBSUU7RUFORjtJQU9JLGVBQUE7RUFERjtBQUNGO0FBR0U7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBREo7QUFJRTs7Ozs7RUFLRSxrQkFBQTtBQUZKO0FBS0U7RUFDRSx1QkFBQTtBQUhKO0FBS0k7RUFIRjtJQUlJLGdCQUFBO0VBRko7QUFDRjtBQU1BO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBSEY7QUFNQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFIRjtBQU9FO0VBREY7SUFFSSxhQUFBO0VBSEY7QUFDRjtBQU1BO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFIRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjMwcHggY2FsYygxMDAlIC0gMjMwcHgpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byA2NHB4O1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMHB4IDEwMCU7XG4gIH1cbn1cblxuYXBwLWhlYWRlciB7XG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xuICBncmlkLXJvdzogMTtcbn1cblxuYXNpZGUge1xuICBncmlkLWNvbHVtbjogMTtcbiAgZ3JpZC1yb3c6IDIgLyBzcGFuIDI7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gIG92ZXJmbG93OiBhdXRvO1xuXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICB1bCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDVweCAyNXB4O1xuICB9XG5cbiAgbGkge1xuICAgIHBhZGRpbmc6IDhweCAwO1xuICB9XG5cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjNWI1YjViO1xuICB9XG5cbiAgLm1lbnUtaGVhZGluZyB7XG4gICAgcGFkZGluZzogMCAxNXB4IDhweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbjogMjBweCAxMHB4IDA7XG4gICAgY29sb3I6IGxpZ2h0ZW4oIzViNWI1YiwgNSUpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgKyB1bCB7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgbGlnaHRlbigjNWI1YjViLCA0MCUpO1xuICAgIH1cbiAgfVxufVxuXG5tYWluIHtcbiAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDE7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcblxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cblxuICAubWFpbi1jb250ZW50IHtcbiAgICBtYXgtd2lkdGg6IDIwMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gIGgyLFxuICBoMyxcbiAgaDQsXG4gIGg1LFxuICBoNiB7XG4gICAgbWFyZ2luOiAwIDAgMCAzMHB4O1xuICB9XG5cbiAgaDIge1xuICAgIHBhZGRpbmc6IDAuODNlbSAwIDAuNGVtO1xuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICBmb250LXNpemU6IDIuM2VtO1xuICAgIH1cbiAgfVxufVxuXG5mb290ZXIge1xuICBncmlkLWNvbHVtbjogMiAvIHNwYW4gMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNiM2IzYjM7XG59XG5cbnByZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuLnVzYWdlIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4udXNhZ2UtY29kZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 7200:
/*!*********************************************!*\
  !*** ./projects/demo/src/app/app.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/radio */ 8390);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6504);
/* harmony import */ var _components_demo_whole_config_demo_whole_config_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/demo-whole-config/demo-whole-config.component */ 8082);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ 6583);
/* harmony import */ var _components_showcase_showcase_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/showcase/showcase.component */ 2269);
/* harmony import */ var _components_demo_thumbs_orientation_demo_thumbs_orientation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/demo-thumbs-orientation/demo-thumbs-orientation.component */ 6684);
/* harmony import */ var _components_demo_multiple_items_demo_multiple_items_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/demo-multiple-items/demo-multiple-items.component */ 3494);
/* harmony import */ var _components_demo_custom_templates_demo_custom_templates_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/demo-custom-templates/demo-custom-templates.component */ 8698);
/* harmony import */ var _daelmaak_ngx_gallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @daelmaak/ngx-gallery */ 8488);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);




















const materialModules = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule,
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule,
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule,
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
    _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule,
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__.MatRadioModule,
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbarModule,
];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [], imports: [[
            ...materialModules,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
            _daelmaak_ngx_gallery__WEBPACK_IMPORTED_MODULE_7__.GalleryModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _components_demo_whole_config_demo_whole_config_component__WEBPACK_IMPORTED_MODULE_1__.DemoWholeConfigComponent,
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
        _components_showcase_showcase_component__WEBPACK_IMPORTED_MODULE_3__.ShowcaseComponent,
        _components_demo_thumbs_orientation_demo_thumbs_orientation_component__WEBPACK_IMPORTED_MODULE_4__.DemoThumbsOrientationComponent,
        _components_demo_multiple_items_demo_multiple_items_component__WEBPACK_IMPORTED_MODULE_5__.DemoMultipleItemsComponent,
        _components_demo_custom_templates_demo_custom_templates_component__WEBPACK_IMPORTED_MODULE_6__.DemoCustomTemplatesComponent], imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormFieldModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_13__.MatRadioModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbarModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
        _daelmaak_ngx_gallery__WEBPACK_IMPORTED_MODULE_7__.GalleryModule] }); })();


/***/ }),

/***/ 8698:
/*!***************************************************************************************************!*\
  !*** ./projects/demo/src/app/components/demo-custom-templates/demo-custom-templates.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoCustomTemplatesComponent": () => (/* binding */ DemoCustomTemplatesComponent)
/* harmony export */ });
/* harmony import */ var _daelmaak_ngx_gallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @daelmaak/ngx-gallery */ 8488);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _gallery_src_lib_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../gallery/src/lib/components/gallery/gallery.component */ 5410);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _gallery_src_lib_directives_media_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../gallery/src/lib/directives/media.directive */ 9925);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 5590);






function DemoCustomTemplatesComponent_ng_template_1_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 9);
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", item_r6.src, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function DemoCustomTemplatesComponent_ng_template_1_video_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "video", 10);
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", item_r6.src, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function DemoCustomTemplatesComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, DemoCustomTemplatesComponent_ng_template_1_img_2_Template, 1, 1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DemoCustomTemplatesComponent_ng_template_1_video_3_Template, 1, 1, "video", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.item;
    const video_r7 = ctx.video;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !video_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", video_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r6.description);
} }
function DemoCustomTemplatesComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "arrow_forward_ios");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function DemoCustomTemplatesComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "sentiment_very_dissatisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "I am a custom error screen");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class DemoCustomTemplatesComponent {
    constructor() {
        this.images = [
            new _daelmaak_ngx_gallery__WEBPACK_IMPORTED_MODULE_0__.GalleryImage('./assets/images/mountains-1-lg.jpg', './assets/images/mountains-1-sm.jpg', 'Mountains', 'Mighty mountains'),
            new _daelmaak_ngx_gallery__WEBPACK_IMPORTED_MODULE_0__.GalleryVideo('./assets/images/beach-1.mp4', null, 'Beach', 'Video of a beach taken from drone'),
            new _daelmaak_ngx_gallery__WEBPACK_IMPORTED_MODULE_0__.GalleryImage('./assets/images/non-existing-image.jpg', null, 'Sky', 'Mysterious sky'),
            new _daelmaak_ngx_gallery__WEBPACK_IMPORTED_MODULE_0__.GalleryImage('./assets/images/cheers-1-lg.jpg', './assets/images/cheers-1-sm.jpg', 'Cheers', 'Two guys drinking during sunset'),
            new _daelmaak_ngx_gallery__WEBPACK_IMPORTED_MODULE_0__.GalleryImage('./assets/images/laptop-1-lg.jpg', null, 'Laptop', 'Ideal workplace for computer work'),
            new _daelmaak_ngx_gallery__WEBPACK_IMPORTED_MODULE_0__.GalleryImage('./assets/images/snowflake-1-lg.jpg', './assets/images/snowflake-1-sm.jpg', 'Snowflake', 'Snowflake detail'),
            new _daelmaak_ngx_gallery__WEBPACK_IMPORTED_MODULE_0__.GalleryImage('./assets/images/mesh-1-lg.jpg', './assets/images/mesh-1-sm.jpg', 'City', 'City at night'),
        ];
    }
}
DemoCustomTemplatesComponent.ɵfac = function DemoCustomTemplatesComponent_Factory(t) { return new (t || DemoCustomTemplatesComponent)(); };
DemoCustomTemplatesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DemoCustomTemplatesComponent, selectors: [["app-demo-custom-templates"]], decls: 7, vars: 4, consts: [["loading", "lazy", 3, "items", "itemTemplate", "arrowTemplate", "errorTemplate"], ["customItem", ""], ["customArrow", ""], ["customError", ""], [1, "custom-item"], [1, "image-container"], ["media", "", 3, "src", 4, "ngIf"], ["controls", "", "media", "", 3, "src", 4, "ngIf"], [1, "description"], ["media", "", 3, "src"], ["controls", "", "media", "", 3, "src"], [1, "custom-arrow"], [1, "custom-error"]], template: function DemoCustomTemplatesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "gallery", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DemoCustomTemplatesComponent_ng_template_1_Template, 6, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DemoCustomTemplatesComponent_ng_template_3_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, DemoCustomTemplatesComponent_ng_template_5_Template, 5, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx.images)("itemTemplate", _r0)("arrowTemplate", _r2)("errorTemplate", _r4);
    } }, directives: [_gallery_src_lib_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__.GalleryComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _gallery_src_lib_directives_media_directive__WEBPACK_IMPORTED_MODULE_2__.MediaDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon], styles: [".custom-item[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: #272727;\n}\n.custom-item[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n  width: calc(100% - 40px);\n  height: calc(100% - 70px);\n  margin: 20px auto 10px;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.custom-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  background-size: cover;\n}\n.custom-item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  height: 40px;\n  margin: 0 20px;\n  color: #dedede;\n}\n.custom-arrow[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  font-size: 40px;\n  color: white;\n  text-shadow: 0 0 3px black;\n  margin-right: 20px;\n  opacity: 0.8;\n}\n.custom-arrow[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.custom-error[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  background-color: #eacbcb;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.custom-error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 50px;\n  height: 50px;\n  width: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8tY3VzdG9tLXRlbXBsYXRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFDRjtBQUNFO0VBQ0Usd0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBRUU7RUFDRSxzQkFBQTtBQUFKO0FBR0U7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFESjtBQUtBO0VBRUUsV0FEWTtFQUVaLFlBRlk7RUFHWixlQUhZO0VBSVosWUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBSEY7QUFLRTtFQUNFLFVBQUE7QUFISjtBQU9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBSkY7QUFNRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUpKIiwiZmlsZSI6ImRlbW8tY3VzdG9tLXRlbXBsYXRlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20taXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzI3Mjc7XG5cbiAgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNzBweCk7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIGltZyB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgfVxuXG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbjogMCAyMHB4O1xuICAgIGNvbG9yOiAjZGVkZWRlO1xuICB9XG59XG5cbi5jdXN0b20tYXJyb3cge1xuICAkaWNvbi1zaXplOiA0MHB4O1xuICB3aWR0aDogJGljb24tc2l6ZTtcbiAgaGVpZ2h0OiAkaWNvbi1zaXplO1xuICBmb250LXNpemU6ICRpY29uLXNpemU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDAgMCAzcHggYmxhY2s7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgb3BhY2l0eTogMC44O1xuXG4gICY6aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLmN1c3RvbS1lcnJvciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFjYmNiO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICBtYXQtaWNvbiB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgfVxufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 3494:
/*!***********************************************************************************************!*\
  !*** ./projects/demo/src/app/components/demo-multiple-items/demo-multiple-items.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoMultipleItemsComponent": () => (/* binding */ DemoMultipleItemsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _gallery_src_lib_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../gallery/src/lib/components/gallery/gallery.component */ 5410);






function DemoMultipleItemsComponent_gallery_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "gallery", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx_r0.items)("itemWidth", ctx_r0.itemWidth);
} }
class DemoMultipleItemsComponent {
    constructor(cd) {
        this.cd = cd;
        this.showGallery = true;
    }
    ngOnChanges({ mobile }) {
        if (mobile && mobile.firstChange) {
            this.itemWidth = this.mobile ? 'calc(100% / 1.5)' : 'calc(100% / 2.5)';
        }
    }
    reloadGallery() {
        this.showGallery = false;
        this.cd.detectChanges();
        this.showGallery = true;
        this.cd.detectChanges();
    }
}
DemoMultipleItemsComponent.ɵfac = function DemoMultipleItemsComponent_Factory(t) { return new (t || DemoMultipleItemsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
DemoMultipleItemsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DemoMultipleItemsComponent, selectors: [["app-demo-multiple-items"]], inputs: { items: "items", mobile: "mobile" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 2, consts: [["name", "itemWidth", "matInput", "", 3, "ngModel", "ngModelChange", "change"], ["loading", "lazy", 3, "items", "itemWidth", 4, "ngIf"], ["loading", "lazy", 3, "items", "itemWidth"]], template: function DemoMultipleItemsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Item width");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DemoMultipleItemsComponent_Template_input_ngModelChange_3_listener($event) { return ctx.itemWidth = $event; })("change", function DemoMultipleItemsComponent_Template_input_change_3_listener() { return ctx.reloadGallery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DemoMultipleItemsComponent_gallery_4_Template, 1, 2, "gallery", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.itemWidth);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showGallery);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _gallery_src_lib_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_0__.GalleryComponent], styles: ["input[_ngcontent-%COMP%] {\n  font-family: Consolas;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8tbXVsdGlwbGUtaXRlbXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQUNGIiwiZmlsZSI6ImRlbW8tbXVsdGlwbGUtaXRlbXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBDb25zb2xhcztcbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 6684:
/*!*******************************************************************************************************!*\
  !*** ./projects/demo/src/app/components/demo-thumbs-orientation/demo-thumbs-orientation.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoThumbsOrientationComponent": () => (/* binding */ DemoThumbsOrientationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/radio */ 8390);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _gallery_src_lib_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../gallery/src/lib/components/gallery/gallery.component */ 5410);




class DemoThumbsOrientationComponent {
    ngOnChanges({ mobile }) {
        if (mobile && mobile.firstChange) {
            this.orientation = this.mobile ? 'bottom' : 'left';
        }
    }
}
DemoThumbsOrientationComponent.ɵfac = function DemoThumbsOrientationComponent_Factory(t) { return new (t || DemoThumbsOrientationComponent)(); };
DemoThumbsOrientationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DemoThumbsOrientationComponent, selectors: [["app-demo-thumbs-orientation"]], inputs: { items: "items", mobile: "mobile" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 11, vars: 4, consts: [["name", "demoThumbsOrientation", 3, "ngModel", "ngModelChange"], ["value", "top"], ["value", "bottom"], ["value", "left"], ["value", "right"], ["loading", "lazy", 3, "items", "loop", "thumbsOrientation"], ["gallery", ""]], template: function DemoThumbsOrientationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-radio-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DemoThumbsOrientationComponent_Template_mat_radio_group_ngModelChange_0_listener($event) { return ctx.orientation = $event; });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "gallery", 5, 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.orientation);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.items)("loop", true)("thumbsOrientation", ctx.orientation);
    } }, directives: [_angular_material_radio__WEBPACK_IMPORTED_MODULE_2__.MatRadioGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_material_radio__WEBPACK_IMPORTED_MODULE_2__.MatRadioButton, _gallery_src_lib_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_0__.GalleryComponent], styles: ["mat-radio-button[_ngcontent-%COMP%] {\n  margin: 0 20px 20px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8tdGh1bWJzLW9yaWVudGF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRiIsImZpbGUiOiJkZW1vLXRodW1icy1vcmllbnRhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1yYWRpby1idXR0b24ge1xuICBtYXJnaW46IDAgMjBweCAyMHB4IDA7XG59XG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 8082:
/*!*******************************************************************************************!*\
  !*** ./projects/demo/src/app/components/demo-whole-config/demo-whole-config.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoWholeConfigComponent": () => (/* binding */ DemoWholeConfigComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2160);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5843);
/* harmony import */ var _daelmaak_ngx_gallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @daelmaak/ngx-gallery */ 8488);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ 8390);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _gallery_src_lib_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../gallery/src/lib/components/gallery/gallery.component */ 5410);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 5590);













function DemoWholeConfigComponent_gallery_105_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "gallery", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("imageClick", function DemoWholeConfigComponent_gallery_105_Template_gallery_imageClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.onImageClick($event); })("descriptionClick", function DemoWholeConfigComponent_gallery_105_Template_gallery_descriptionClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.galleryConfig.descriptions = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 19, ctx_r0.items))("selectedIndex", +ctx_r0.galleryConfig.selectedIndex)("arrows", ctx_r0.galleryConfig.arrows)("descriptions", ctx_r0.galleryConfig.descriptions)("mouseGestures", ctx_r0.galleryConfig.mouseGestures)("touchGestures", ctx_r0.galleryConfig.touchGestures)("counter", ctx_r0.galleryConfig.counter)("counterOrientation", ctx_r0.galleryConfig.counterOrientation)("itemWidth", ctx_r0.galleryConfig.itemWidth)("objectFit", ctx_r0.galleryConfig.objectFit)("loading", ctx_r0.galleryConfig.loading)("loop", ctx_r0.galleryConfig.loop)("isRtl", ctx_r0.galleryConfig.rtl)("thumbs", ctx_r0.galleryConfig.thumbs)("thumbsAutoScroll", ctx_r0.galleryConfig.thumbsAutoScroll)("thumbsOrientation", ctx_r0.galleryConfig.thumbsOrientation)("thumbsArrows", ctx_r0.galleryConfig.thumbsArrows)("thumbsArrowSlideByLength", ctx_r0.galleryConfig.thumbsArrowSlideByLength)("thumbsScrollBehavior", ctx_r0.galleryConfig.thumbsScrollBehavior);
} }
function DemoWholeConfigComponent_ng_template_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Custom Loading ... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DemoWholeConfigComponent_ng_template_108_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
} }
function DemoWholeConfigComponent_ng_template_108_ng_template_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Custom item loading ... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DemoWholeConfigComponent_ng_template_108_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "img", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("load", function DemoWholeConfigComponent_ng_template_108_ng_template_1_Template_img_load_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r27.onImageLoad(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DemoWholeConfigComponent_ng_template_108_ng_template_1_div_2_Template, 2, 0, "div", 44);
} if (rf & 2) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const seen_r19 = ctx_r29.seen;
    const item_r18 = ctx_r29.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", seen_r19 ? item_r18.src : "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", seen_r19 && _r25.naturalHeight <= 0);
} }
function DemoWholeConfigComponent_ng_template_108_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "video", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("loadedmetadata", function DemoWholeConfigComponent_ng_template_108_ng_template_3_Template_video_loadedmetadata_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r31.onImageLoad(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const seen_r19 = ctx_r33.seen;
    const item_r18 = ctx_r33.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", seen_r19 ? item_r18.src : "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function DemoWholeConfigComponent_ng_template_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, DemoWholeConfigComponent_ng_template_108_ng_container_0_Template, 1, 0, "ng-container", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DemoWholeConfigComponent_ng_template_108_ng_template_1_Template, 3, 2, "ng-template", null, 40, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DemoWholeConfigComponent_ng_template_108_ng_template_3_Template, 2, 1, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const item_r18 = ctx.item;
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r18.video)("ngIfThen", _r23)("ngIfElse", _r21);
} }
function DemoWholeConfigComponent_ng_template_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 47);
} if (rf & 2) {
    const item_r36 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r36.thumbSrc || item_r36.src, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function DemoWholeConfigComponent_ng_template_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Custom loading error ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DemoWholeConfigComponent_ng_template_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Custom thumb loading error ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function DemoWholeConfigComponent_ng_template_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "arrow_forward_ios");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class DemoWholeConfigComponent {
    constructor(cd) {
        this.cd = cd;
        this.displayGallery = true;
        this.imageLoadingLatency = 0;
        this.mobile = matchMedia('(max-width: 767px)').matches;
        this.galleryConfig = {
            selectedIndex: 0,
            arrows: !this.mobile,
            descriptions: false,
            mouseGestures: true,
            touchGestures: true,
            counter: true,
            counterOrientation: 'bottom',
            itemWidth: '',
            objectFit: 'cover',
            loading: 'lazy',
            loop: false,
            rtl: false,
            thumbs: true,
            thumbsAutoScroll: true,
            thumbsOrientation: 'bottom',
            thumbsArrows: true,
            thumbsArrowSlideByLength: 0,
            thumbsScrollBehavior: 'smooth',
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
    onImageClick(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () { });
    }
    onImageLoad() { }
    reloadGallery() {
        this.displayGallery = false;
        this.cd.detectChanges();
        this.images.forEach((i) => {
            i._loaded = false;
        });
        this.displayGallery = true;
        this.cd.detectChanges();
    }
    getGalleryConfig() {
        return JSON.parse(sessionStorage.getItem('galleryConfig'));
    }
}
DemoWholeConfigComponent.ɵfac = function DemoWholeConfigComponent_Factory(t) { return new (t || DemoWholeConfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef)); };
DemoWholeConfigComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DemoWholeConfigComponent, selectors: [["app-demo-whole-config"]], viewQuery: function DemoWholeConfigComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_daelmaak_ngx_gallery__WEBPACK_IMPORTED_MODULE_0__.GalleryComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.gallery = _t.first);
    } }, inputs: { images: "images" }, decls: 118, vars: 20, consts: [["name", "arrows", 3, "ngModel", "ngModelChange"], ["name", "descriptions", 3, "ngModel", "ngModelChange"], ["name", "mouseGestures", 3, "ngModel", "ngModelChange", "change"], ["name", "touchGestures", 3, "ngModel", "ngModelChange", "change"], ["name", "counter", 3, "ngModel", "ngModelChange"], ["name", "loop", 3, "ngModel", "ngModelChange", "change"], ["name", "rtl", 3, "ngModel", "ngModelChange", "change"], ["name", "counterOrientation", 3, "ngModel", "ngModelChange"], ["value", "top"], ["value", "bottom"], ["name", "objectFit", 3, "ngModel", "ngModelChange"], ["value", "contain"], ["value", "cover"], ["name", "loading", 3, "ngModel", "ngModelChange", "change"], ["value", "auto"], ["value", "lazy"], ["name", "itemWidth", "matInput", "", 3, "ngModel", "ngModelChange", "change"], ["name", "selectedIndex", "matInput", "", 3, "ngModel", "ngModelChange", "change"], ["name", "thumbs", 3, "ngModel", "ngModelChange"], ["name", "thumbsAutoScroll", 3, "ngModel", "ngModelChange"], ["name", "thumbsArrows", 3, "ngModel", "ngModelChange"], ["name", "thumbsOrientation", 3, "ngModel", "ngModelChange"], ["value", "left"], ["value", "right"], ["name", "thumbsScrollBehavior", 3, "ngModel", "ngModelChange"], ["value", "smooth"], ["name", "thumbsArrowsSlideByLength", "matInput", "", 3, "ngModel", "ngModelChange"], [1, "image-loading-latency"], ["name", "imageLoadingLatency", "matInput", "", 3, "ngModel", "ngModelChange", "change"], [1, "gallery-container"], [3, "items", "selectedIndex", "arrows", "descriptions", "mouseGestures", "touchGestures", "counter", "counterOrientation", "itemWidth", "objectFit", "loading", "loop", "isRtl", "thumbs", "thumbsAutoScroll", "thumbsOrientation", "thumbsArrows", "thumbsArrowSlideByLength", "thumbsScrollBehavior", "imageClick", "descriptionClick", 4, "ngIf"], ["loadingTemplate", ""], ["itemTemplate", ""], ["thumbTemplate", ""], ["errorTemplate", ""], ["thumbErrorTemplate", ""], ["arrowTemplate", ""], [3, "items", "selectedIndex", "arrows", "descriptions", "mouseGestures", "touchGestures", "counter", "counterOrientation", "itemWidth", "objectFit", "loading", "loop", "isRtl", "thumbs", "thumbsAutoScroll", "thumbsOrientation", "thumbsArrows", "thumbsArrowSlideByLength", "thumbsScrollBehavior", "imageClick", "descriptionClick"], [1, "custom-loading"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["imgTemplate", ""], ["videoTemplate", ""], [1, "custom-media", 3, "src", "load"], ["img", ""], ["class", "custom-loading", 4, "ngIf"], ["controls", "", 1, "custom-media", 3, "src", "loadedmetadata"], ["video", ""], [1, "custom-thumb", 3, "src"], [1, "custom-error"], [1, "custom-thumb-error"], [1, "custom-arrow"]], template: function DemoWholeConfigComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Gallery viewer properties");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-checkbox", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoWholeConfigComponent_Template_mat_checkbox_ngModelChange_5_listener($event) { return ctx.galleryConfig.arrows = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Arrows");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-checkbox", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoWholeConfigComponent_Template_mat_checkbox_ngModelChange_8_listener($event) { return ctx.galleryConfig.descriptions = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Descriptions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-checkbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoWholeConfigComponent_Template_mat_checkbox_ngModelChange_11_listener($event) { return ctx.galleryConfig.mouseGestures = $event; })("change", function DemoWholeConfigComponent_Template_mat_checkbox_change_11_listener() { return ctx.reloadGallery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Mouse Gestures ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-checkbox", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoWholeConfigComponent_Template_mat_checkbox_ngModelChange_14_listener($event) { return ctx.galleryConfig.touchGestures = $event; })("change", function DemoWholeConfigComponent_Template_mat_checkbox_change_14_listener() { return ctx.reloadGallery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Touch Gestures ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-checkbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoWholeConfigComponent_Template_mat_checkbox_ngModelChange_17_listener($event) { return ctx.galleryConfig.counter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Counter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoWholeConfigComponent_Template_mat_checkbox_ngModelChange_20_listener($event) { return ctx.galleryConfig.loop = $event; })("change", function DemoWholeConfigComponent_Template_mat_checkbox_change_20_listener() { return ctx.reloadGallery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Loop");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "mat-checkbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoWholeConfigComponent_Template_mat_checkbox_ngModelChange_23_listener($event) { return ctx.galleryConfig.rtl = $event; })("change", function DemoWholeConfigComponent_Template_mat_checkbox_change_23_listener() { return ctx.reloadGallery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Right to left");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Counter orientation:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "mat-radio-group", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoWholeConfigComponent_Template_mat_radio_group_ngModelChange_28_listener($event) { return ctx.galleryConfig.counterOrientation = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "mat-radio-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "top");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "mat-radio-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "bottom");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Image fit:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "mat-radio-group", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoWholeConfigComponent_Template_mat_radio_group_ngModelChange_36_listener($event) { return ctx.galleryConfig.objectFit = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "mat-radio-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "contain");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "mat-radio-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "cover");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Image loading strategy:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "mat-radio-group", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoWholeConfigComponent_Template_mat_radio_group_ngModelChange_44_listener($event) { return ctx.galleryConfig.loading = $event; })("change", function DemoWholeConfigComponent_Template_mat_radio_group_change_44_listener() { return ctx.reloadGallery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "mat-radio-button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "mat-radio-button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "lazy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Item width");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoWholeConfigComponent_Template_input_ngModelChange_53_listener($event) { return ctx.galleryConfig.itemWidth = $event; })("change", function DemoWholeConfigComponent_Template_input_change_53_listener() { return ctx.reloadGallery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Selected index");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoWholeConfigComponent_Template_input_ngModelChange_58_listener($event) { return ctx.galleryConfig.selectedIndex = $event; })("change", function DemoWholeConfigComponent_Template_input_change_58_listener() { return ctx.reloadGallery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Thumbnails properties");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "mat-checkbox", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoWholeConfigComponent_Template_mat_checkbox_ngModelChange_63_listener($event) { return ctx.galleryConfig.thumbs = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Thumbnails");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "mat-checkbox", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoWholeConfigComponent_Template_mat_checkbox_ngModelChange_66_listener($event) { return ctx.galleryConfig.thumbsAutoScroll = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Thumbs autoscroll");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "mat-checkbox", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoWholeConfigComponent_Template_mat_checkbox_ngModelChange_69_listener($event) { return ctx.galleryConfig.thumbsArrows = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Thumbnail arrows");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Thumbnails orientation:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "mat-radio-group", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoWholeConfigComponent_Template_mat_radio_group_ngModelChange_74_listener($event) { return ctx.galleryConfig.thumbsOrientation = $event; });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Thumbnails scroll behavior:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "mat-radio-group", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoWholeConfigComponent_Template_mat_radio_group_ngModelChange_86_listener($event) { return ctx.galleryConfig.thumbsScrollBehavior = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "mat-radio-button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "smooth");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "mat-radio-button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "Slide thumbnails by length (px)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoWholeConfigComponent_Template_input_ngModelChange_95_listener($event) { return ctx.galleryConfig.thumbsArrowSlideByLength = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](96, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](98, "Auxiliary");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "section", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "Items (not images!) loading latency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoWholeConfigComponent_Template_input_ngModelChange_103_listener($event) { return ctx.imageLoadingLatency = $event; })("change", function DemoWholeConfigComponent_Template_input_change_103_listener() { return ctx.reloadGallery(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](105, DemoWholeConfigComponent_gallery_105_Template, 2, 21, "gallery", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](106, DemoWholeConfigComponent_ng_template_106_Template, 2, 0, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](108, DemoWholeConfigComponent_ng_template_108_Template, 5, 3, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](110, DemoWholeConfigComponent_ng_template_110_Template, 1, 1, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](112, DemoWholeConfigComponent_ng_template_112_Template, 2, 0, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](114, DemoWholeConfigComponent_ng_template_114_Template, 2, 0, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](116, DemoWholeConfigComponent_ng_template_116_Template, 3, 0, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.galleryConfig.itemWidth);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.galleryConfig.selectedIndex);
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__.MatRadioButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _gallery_src_lib_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__.GalleryComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-height: 1000px;\n}\n\nform[_ngcontent-%COMP%] {\n  margin: 20px;\n  display: flex;\n  justify-content: space-around;\n  flex-flow: row wrap;\n}\n\nform[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-right: auto;\n}\n\nsection[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  display: flex;\n  flex-flow: row wrap;\n  align-items: center;\n}\n\nmat-checkbox[_ngcontent-%COMP%] {\n  display: block;\n}\n\nmat-radio-button[_ngcontent-%COMP%] {\n  margin: 2px 0 2px 20px;\n}\n\nmat-form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n\nmat-form-field[_ngcontent-%COMP%]     .mat-form-field-infix {\n  border-top: 0;\n}\n\nmat-form-field[_ngcontent-%COMP%]     .mat-form-field-wrapper {\n  padding-bottom: 0;\n}\n\nmat-form-field[_ngcontent-%COMP%]     .mat-form-field-underline {\n  bottom: 0;\n}\n\n.gallery-container[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  height: calc(100vh - 64px);\n}\n\ngallery[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 95%;\n  margin: 0 auto;\n}\n\nsection[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 20px;\n}\n\n[_nghost-%COMP%]  .image-loading-latency .mat-form-field-infix {\n  width: auto;\n}\n\n.custom-media[_ngcontent-%COMP%] {\n  -o-object-fit: contain;\n     object-fit: contain;\n  width: 100%;\n  height: 100%;\n  outline: 0;\n}\n\n.custom-media[src=\"\"][_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.custom-loading[_ngcontent-%COMP%], .custom-error[_ngcontent-%COMP%], .custom-thumb-error[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: black;\n  color: white;\n  opacity: 0.8;\n}\n\n.custom-arrow[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 36px;\n  background-color: transparent;\n  border: none;\n  display: flex;\n  outline: 0;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8td2hvbGUtY29uZmlnLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDRTtFQUNFLGtCQUFBO0FBQ0o7O0FBR0E7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0FBQUY7O0FBR0E7RUFDRSxzQkFBQTtBQUFGOztBQUlFO0VBQ0UsbUJBQUE7QUFESjs7QUFNTTtFQUNFLGFBQUE7QUFKUjs7QUFPTTtFQUNFLGlCQUFBO0FBTFI7O0FBUU07RUFDRSxTQUFBO0FBTlI7O0FBWUE7RUFDRSxzQkFBQTtFQUNBLDBCQUFBO0FBVEY7O0FBWUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUFURjs7QUFhRTtFQUNFLGlCQUFBO0FBVko7O0FBZUU7RUFDRSxXQUFBO0FBWko7O0FBZ0JBO0VBQ0Usc0JBQUE7S0FBQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQWJGOztBQWVFO0VBRUUsVUFBQTtBQWRKOztBQWtCQTs7O0VBR0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQWhCRjs7QUFtQkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQWhCRiIsImZpbGUiOiJkZW1vLXdob2xlLWNvbmZpZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1pbi1oZWlnaHQ6IDEwMDBweDtcbn1cblxuZm9ybSB7XG4gIG1hcmdpbjogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG5cbiAgPiBkaXYge1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxufVxuXG5zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxubWF0LWNoZWNrYm94IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbm1hdC1yYWRpby1idXR0b24ge1xuICBtYXJnaW46IDJweCAwIDJweCAyMHB4O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIGxhYmVsIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG5cbiAgOjpuZy1kZWVwIHtcbiAgICAubWF0LWZvcm0tZmllbGQge1xuICAgICAgJi1pbmZpeCB7XG4gICAgICAgIGJvcmRlci10b3A6IDA7XG4gICAgICB9XG5cbiAgICAgICYtd3JhcHBlciB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgfVxuXG4gICAgICAmLXVuZGVybGluZSB7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmdhbGxlcnktY29udGFpbmVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XG59XG5cbmdhbGxlcnkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5NSU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG5zZWN0aW9uIHtcbiAgYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxufVxuXG46aG9zdDo6bmctZGVlcCAuaW1hZ2UtbG9hZGluZy1sYXRlbmN5IHtcbiAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxufVxuXG4uY3VzdG9tLW1lZGlhIHtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3V0bGluZTogMDtcblxuICAmW3NyYz0nJ10ge1xuICAgIC8vIGRvIG5vdCBzaG93IG1lZGlhIGlmIG5vdCBzdGFydGVkIHRvIGxvYWQgeWV0XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG4uY3VzdG9tLWxvYWRpbmcsXG4uY3VzdG9tLWVycm9yLFxuLmN1c3RvbS10aHVtYi1lcnJvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5jdXN0b20tYXJyb3cge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAzNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdXRsaW5lOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 6583:
/*!*********************************************************************!*\
  !*** ./projects/demo/src/app/components/header/header.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class HeaderComponent {
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 12, vars: 0, consts: [[1, "header-inner-container"], [1, "subtitle"], [1, "links"], ["href", "https://github.com/daelmaak/ngx-gallery", 1, "github-link", "link"], ["src", "./assets/icons/GitHub-Mark-64px.png", "alt", "github link"], ["href", "https://www.npmjs.com/package/@daelmaak/ngx-gallery", "rel", "noreferrer", 1, "npm-link", "link"], ["src", "./assets/icons/npm-logo.svg", "alt", "npm link"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ngx Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Performant, mobile first, easy to use Angular 8+ Gallery ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\nheader[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 20px 0;\n  box-shadow: 0 1px 1px #bdbdbd;\n  z-index: 1;\n  position: relative;\n  box-sizing: border-box;\n}\n\nheader[_ngcontent-%COMP%]   .header-inner-container[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  box-sizing: border-box;\n  width: 800px;\n  max-width: 100vw;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\nheader[_ngcontent-%COMP%]   .header-inner-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 110px;\n  position: relative;\n  right: 30px;\n  filter: drop-shadow(0px 0px 2px black);\n}\n\n@media (max-width: 767px) {\n  header[_ngcontent-%COMP%]   .header-inner-container[_ngcontent-%COMP%] {\n    display: block;\n  }\n  header[_ngcontent-%COMP%]   .header-inner-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    width: 100px;\n    position: static;\n    display: block;\n    margin: 0 auto 10px;\n  }\n}\n\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n\nheader[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 20px;\n  font-size: 1.1em;\n  color: #313131;\n}\n\nheader[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  text-align: center;\n}\n\nheader[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 15px;\n}\n\nheader[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:nth-of-type(1) {\n  opacity: 0.85;\n}\n\nheader[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]:nth-last-of-type(1) {\n  margin-right: 0;\n}\n\nheader[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%], header[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], header[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n}\n\nheader[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   .npm-link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.3) translateY(3px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFDRTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUNJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHNDQUFBO0FBQ047O0FBRUk7RUFqQkY7SUFrQkksY0FBQTtFQUNKO0VBQ0k7SUFDRSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxjQUFBO0lBQ0EsbUJBQUE7RUFDTjtBQUNGOztBQUdFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFGSjs7QUFLRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQUhKOztBQUtJO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQUhOOztBQUtNO0VBQ0UsYUFBQTtBQUhSOztBQU1NO0VBQ0UsZUFBQTtBQUpSOztBQU9NO0VBSUUsV0FEWTtFQUVaLFlBRlk7QUFOcEI7O0FBYU07RUFDRSxxQ0FBQTtBQVhSIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4ICNiZGJkYmQ7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAuaGVhZGVyLWlubmVyLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgd2lkdGg6IDgwMHB4O1xuICAgIG1heC13aWR0aDogMTAwdnc7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgLmxvZ28ge1xuICAgICAgd2lkdGg6IDExMHB4O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgcmlnaHQ6IDMwcHg7XG4gICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggMnB4IGJsYWNrKTtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgICAubG9nbyB7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvIDEwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaDEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cblxuICAuc3VidGl0bGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgY29sb3I6ICMzMTMxMzE7XG4gIH1cblxuICAubGlua3Mge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIC5saW5rIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcblxuICAgICAgJjpudGgtb2YtdHlwZSgxKSB7XG4gICAgICAgIG9wYWNpdHk6IDAuODU7XG4gICAgICB9XG5cbiAgICAgICY6bnRoLWxhc3Qtb2YtdHlwZSgxKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgIH1cblxuICAgICAgJixcbiAgICAgICYgaW1nLFxuICAgICAgJiBzdmcge1xuICAgICAgICAkZGltZW5zaW9uOiAzNnB4O1xuICAgICAgICB3aWR0aDogJGRpbWVuc2lvbjtcbiAgICAgICAgaGVpZ2h0OiAkZGltZW5zaW9uO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5ucG0tbGluayB7XG4gICAgICBpbWcge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMykgdHJhbnNsYXRlWSgzcHgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 2269:
/*!*************************************************************************!*\
  !*** ./projects/demo/src/app/components/showcase/showcase.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowcaseComponent": () => (/* binding */ ShowcaseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);


function ShowcaseComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Edit on StackBlitz");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.stackblitz, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = [[["", "subheading", ""]], "*"];
const _c1 = ["[subheading]", "*"];
class ShowcaseComponent {
}
ShowcaseComponent.ɵfac = function ShowcaseComponent_Factory(t) { return new (t || ShowcaseComponent)(); };
ShowcaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowcaseComponent, selectors: [["app-showcase"]], inputs: { heading: "heading", subheading: "subheading", stackblitz: "stackblitz" }, ngContentSelectors: _c1, decls: 8, vars: 3, consts: [[1, "heading-section"], [1, "subheading"], ["class", "stackblitz-demo-link", "target", "_blank", 3, "href", 4, "ngIf"], ["target", "_blank", 1, "stackblitz-demo-link", 3, "href"], ["src", "./assets/icons/stackblitz-logo-link.svg"]], template: function ShowcaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ShowcaseComponent_a_6_Template, 3, 1, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.heading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.subheading, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stackblitz);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["[_nghost-%COMP%] {\n  margin: 0 30px 50px;\n  display: block;\n}\n[_nghost-%COMP%]    >  {\n  margin: 0 auto;\n}\n[_nghost-%COMP%]     gallery {\n  width: 100%;\n  background-color: #f3f3f3;\n}\n.heading-section[_ngcontent-%COMP%] {\n  padding: 1em 0;\n}\n.heading-section[_ngcontent-%COMP%]   .stackblitz-demo-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 10px;\n  text-decoration: none;\n}\n.heading-section[_ngcontent-%COMP%]   .stackblitz-demo-link[_ngcontent-%COMP%]:visited {\n  color: blue;\n}\n.heading-section[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20px;\n  margin-right: 4px;\n  margin-bottom: -4px;\n}\nh3[_ngcontent-%COMP%] {\n  color: #444444;\n  margin: 0;\n  padding: 0;\n}\n@media (min-width: 768px) {\n  h3[_ngcontent-%COMP%] {\n    font-size: 1.6em;\n  }\n}\n.subheading[_ngcontent-%COMP%] {\n  color: #5b5b5b;\n  margin-left: 5px;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3djYXNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBQ0Y7QUFDRTtFQUNFLGNBQUE7QUFDSjtBQUVFO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0FBQUo7QUFJQTtFQUNFLGNBQUE7QUFERjtBQUdFO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBREo7QUFHSTtFQUNFLFdBQUE7QUFETjtBQUtFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFISjtBQU9BO0VBQ0UsY0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBSkY7QUFNRTtFQUxGO0lBTUksZ0JBQUE7RUFIRjtBQUNGO0FBTUE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBSEYiLCJmaWxlIjoic2hvd2Nhc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIG1hcmdpbjogMCAzMHB4IDUwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuXG4gID4ge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5cbiAgOjpuZy1kZWVwIGdhbGxlcnkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gIH1cbn1cblxuLmhlYWRpbmctc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDFlbSAwO1xuXG4gIC5zdGFja2JsaXR6LWRlbW8tbGluayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgJjp2aXNpdGVkIHtcbiAgICAgIGNvbG9yOiBibHVlO1xuICAgIH1cbiAgfVxuXG4gIGltZyB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IC00cHg7XG4gIH1cbn1cblxuaDMge1xuICBjb2xvcjogIzQ0NDQ0NDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIGZvbnQtc2l6ZTogMS42ZW07XG4gIH1cbn1cblxuLnN1YmhlYWRpbmcge1xuICBjb2xvcjogIzViNWI1YjtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 3585:
/*!*******************************************************!*\
  !*** ./projects/demo/src/environments/environment.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
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

/***/ 873:
/*!***********************************!*\
  !*** ./projects/demo/src/main.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 7200);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 3585);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 3697:
/*!**************************************************************************!*\
  !*** ./projects/gallery/src/lib/components/counter/counter.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CounterComponent": () => (/* binding */ CounterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class CounterComponent {
}
CounterComponent.ɵfac = function CounterComponent_Factory(t) { return new (t || CounterComponent)(); };
CounterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CounterComponent, selectors: [["counter"]], hostVars: 2, hostBindings: function CounterComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.orientation);
    } }, inputs: { itemQuantity: "itemQuantity", selectedIndex: "selectedIndex", orientation: "orientation" }, decls: 5, vars: 2, consts: [["aria-hidden", "true"], [1, "counter-delimiter"]], template: function CounterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.selectedIndex + 1, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.itemQuantity || 0, " ");
    } }, styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  background: black;\n  padding: 4px 7px 3px;\n  color: white;\n  opacity: 0.7;\n  font-size: 14px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.top[_nghost-%COMP%] {\n  top: 0;\n}\n.bottom[_nghost-%COMP%] {\n  bottom: 0;\n}\n.counter-delimiter[_ngcontent-%COMP%] {\n  padding: 0 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7QUFDRjtBQUNFO0VBQ0UsTUFBQTtBQUNKO0FBRUU7RUFDRSxTQUFBO0FBQUo7QUFJQTtFQUNFLGNBQUE7QUFERiIsImZpbGUiOiJjb3VudGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgcGFkZGluZzogNHB4IDdweCAzcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMC43O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuXG4gICYudG9wIHtcbiAgICB0b3A6IDA7XG4gIH1cblxuICAmLmJvdHRvbSB7XG4gICAgYm90dG9tOiAwO1xuICB9XG59XG5cbi5jb3VudGVyLWRlbGltaXRlciB7XG4gIHBhZGRpbmc6IDAgMnB4O1xufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 5410:
/*!**************************************************************************!*\
  !*** ./projects/gallery/src/lib/components/gallery/gallery.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryComponent": () => (/* binding */ GalleryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ 2733);
/* harmony import */ var _core_aria__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/aria */ 9174);
/* harmony import */ var _thumbs_thumbs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../thumbs/thumbs.component */ 4328);
/* harmony import */ var _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../viewer/viewer.component */ 8666);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);









function GalleryComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.aria.galleryLabel, "\n");
} }
function GalleryComponent_thumbs_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "thumbs", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("thumbClick", function GalleryComponent_thumbs_1_Template_thumbs_thumbClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4._onThumbClick($event); })("thumbHover", function GalleryComponent_thumbs_1_Template_thumbs_thumbHover_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.thumbHover.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx_r1.items)("selectedIndex", ctx_r1.selectedIndex)("orientation", ctx_r1.thumbsOrientation)("arrows", ctx_r1.thumbsArrows)("arrowSlideByLength", ctx_r1.thumbsArrowSlideByLength)("autoScroll", ctx_r1.thumbsAutoScroll)("scrollBehavior", ctx_r1.thumbsScrollBehavior)("thumbTemplate", ctx_r1.thumbTemplate)("arrowTemplate", ctx_r1.thumbsArrowTemplate)("errorTemplate", ctx_r1.thumbErrorTemplate)("aria", ctx_r1.aria)("isRtl", ctx_r1.isRtl);
} }
function GalleryComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class GalleryComponent {
    constructor(cd, hostRef) {
        this.cd = cd;
        this.hostRef = hostRef;
        this.selectedIndex = 0;
        this.aria = _core_aria__WEBPACK_IMPORTED_MODULE_1__.defaultAria;
        this.arrows = true;
        this.descriptions = false;
        this.mouseGestures = true;
        this.touchGestures = true;
        this.counter = true;
        this.counterOrientation = 'bottom';
        this.loading = 'auto';
        this.loop = false;
        this.objectFit = 'cover';
        this.thumbs = true;
        this.thumbsAutoScroll = true;
        this.thumbsOrientation = 'bottom';
        this.thumbsArrows = true;
        this.thumbsScrollBehavior = 'smooth';
        this.imageClick = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.thumbClick = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.thumbHover = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.descriptionClick = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.selection = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this._touched = false;
        this.INIT_INTERACTIONS = ['touchstart', 'mousedown', 'keydown'];
        this._markAsInteractedWith = () => {
            const hostEl = this.hostRef.nativeElement;
            this._touched = true;
            this.cd.detectChanges();
            this.INIT_INTERACTIONS.forEach(ename => hostEl.removeEventListener(ename, this._markAsInteractedWith));
        };
        this.INIT_INTERACTIONS.forEach(ename => hostRef.nativeElement.addEventListener(ename, this._markAsInteractedWith, {
            passive: true,
        }));
    }
    get _galleryColumn() {
        return (this.thumbsOrientation === 'top' || this.thumbsOrientation === 'bottom');
    }
    get _thumbsOrientationFlag() {
        if (this.thumbsOrientation === 'top' ||
            this.thumbsOrientation === 'bottom') {
            return 6 /* HORIZONTAL */;
        }
        return 24 /* VERTICAL */;
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
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef)); };
GalleryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["gallery"]], viewQuery: function GalleryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_3__.ViewerComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_thumbs_thumbs_component__WEBPACK_IMPORTED_MODULE_2__.ThumbsComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_3__.ViewerComponent, 5, _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._viewerRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._thumbsRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx._viewerElRef = _t.first);
    } }, hostVars: 4, hostBindings: function GalleryComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown.arrowright", function GalleryComponent_keydown_arrowright_HostBindingHandler() { return ctx.next(); })("keydown.arrowleft", function GalleryComponent_keydown_arrowleft_HostBindingHandler() { return ctx.prev(); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("rtl", ctx.isRtl)("gallery--column", ctx._galleryColumn);
    } }, inputs: { items: "items", selectedIndex: "selectedIndex", aria: "aria", arrows: "arrows", descriptions: "descriptions", errorText: "errorText", mouseGestures: "mouseGestures", touchGestures: "touchGestures", counter: "counter", counterOrientation: "counterOrientation", itemWidth: "itemWidth", loading: "loading", loop: "loop", objectFit: "objectFit", isRtl: "isRtl", itemTemplate: "itemTemplate", loadingTemplate: "loadingTemplate", errorTemplate: "errorTemplate", arrowTemplate: "arrowTemplate", contentTemplate: "contentTemplate", thumbs: "thumbs", thumbsAutoScroll: "thumbsAutoScroll", thumbsOrientation: "thumbsOrientation", thumbsArrows: "thumbsArrows", thumbsArrowSlideByLength: "thumbsArrowSlideByLength", thumbsScrollBehavior: "thumbsScrollBehavior", thumbTemplate: "thumbTemplate", thumbsArrowTemplate: "thumbsArrowTemplate", thumbErrorTemplate: "thumbErrorTemplate" }, outputs: { imageClick: "imageClick", thumbClick: "thumbClick", thumbHover: "thumbHover", descriptionClick: "descriptionClick", selection: "selection" }, decls: 5, vars: 24, consts: [["class", "sr-only", "tabindex", "0", 4, "ngIf"], [3, "items", "selectedIndex", "orientation", "arrows", "arrowSlideByLength", "autoScroll", "scrollBehavior", "thumbTemplate", "arrowTemplate", "errorTemplate", "aria", "isRtl", "thumbClick", "thumbHover", 4, "ngIf"], [3, "items", "selectedIndex", "arrows", "descriptions", "errorText", "mouseGestures", "touchGestures", "counter", "counterOrientation", "itemWidth", "objectFit", "loading", "itemTemplate", "loadingTemplate", "errorTemplate", "contentTemplate", "loop", "thumbsOrientation", "arrowTemplate", "aria", "isRtl", "touched", "imageClick", "descriptionClick", "selection"], ["defaultLoadingTemplate", ""], ["tabindex", "0", 1, "sr-only"], [3, "items", "selectedIndex", "orientation", "arrows", "arrowSlideByLength", "autoScroll", "scrollBehavior", "thumbTemplate", "arrowTemplate", "errorTemplate", "aria", "isRtl", "thumbClick", "thumbHover"], [1, "loading"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, GalleryComponent_span_0_Template, 2, 1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, GalleryComponent_thumbs_1_Template, 1, 12, "thumbs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "viewer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("imageClick", function GalleryComponent_Template_viewer_imageClick_2_listener($event) { return ctx.imageClick.emit($event); })("descriptionClick", function GalleryComponent_Template_viewer_descriptionClick_2_listener($event) { return ctx.descriptionClick.emit($event); })("selection", function GalleryComponent_Template_viewer_selection_2_listener($event) { ctx._selectInternal($event); return ctx._thumbsRef == null ? null : ctx._thumbsRef.select($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, GalleryComponent_ng_template_3_Template, 4, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.aria == null ? null : ctx.aria.galleryLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.thumbs);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("items", ctx.items)("selectedIndex", ctx.selectedIndex)("arrows", ctx.arrows)("descriptions", ctx.descriptions)("errorText", ctx.errorText)("mouseGestures", ctx.mouseGestures)("touchGestures", ctx.touchGestures)("counter", ctx.counter)("counterOrientation", ctx.counterOrientation)("itemWidth", ctx.itemWidth)("objectFit", ctx.objectFit)("loading", ctx.loading)("itemTemplate", ctx.itemTemplate)("loadingTemplate", ctx.loadingTemplate || _r2)("errorTemplate", ctx.errorTemplate)("contentTemplate", ctx.contentTemplate)("loop", ctx.loop)("thumbsOrientation", ctx._thumbsOrientationFlag)("arrowTemplate", ctx.arrowTemplate)("aria", ctx.aria)("isRtl", ctx.isRtl)("touched", ctx._touched);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _viewer_viewer_component__WEBPACK_IMPORTED_MODULE_3__.ViewerComponent, _thumbs_thumbs_component__WEBPACK_IMPORTED_MODULE_2__.ThumbsComponent], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  height: 600px;\n  width: 500px;\n  outline: 0;\n  position: relative;\n}\n.gallery--column[_nghost-%COMP%] {\n  flex-direction: column;\n}\n.rtl[_nghost-%COMP%] {\n  direction: ltr;\n}\n.rtl[_nghost-%COMP%]   viewer[_ngcontent-%COMP%], .rtl[_nghost-%COMP%]   thumbs[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n[_nghost-%COMP%]  {\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n}\n[_nghost-%COMP%]  button {\n  border: none;\n}\n[_nghost-%COMP%]  ul {\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n}\n[_nghost-%COMP%]  .sr-only {\n  position: absolute !important;\n  clip: rect(1px, 1px, 1px, 1px);\n  top: auto;\n  left: -9999px;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background-color: transparent;\n  z-index: 10;\n}\n.loading[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  height: 13px;\n  width: 13px;\n  background-color: #4a4a4a;\n  -webkit-animation: bounce 2s infinite;\n          animation: bounce 2s infinite;\n  border-radius: 50%;\n  box-shadow: 0 0 0 1px whitesmoke, 0 0 1px 1px whitesmoke;\n}\n.loading[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  -webkit-animation-delay: 0.125s;\n          animation-delay: 0.125s;\n}\n.loading[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%] {\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n}\n@-webkit-keyframes bounce {\n  20% {\n    transform: translateY(-20px);\n  }\n  50% {\n    transform: translateY(0);\n  }\n}\n@keyframes bounce {\n  20% {\n    transform: translateY(-20px);\n  }\n  50% {\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGxlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNFO0VBQ0Usc0JBQUE7QUFDSjtBQUVFO0VBRUUsY0FBQTtBQURKO0FBR0k7O0VBRUUsY0FBQTtBQUROO0FBTUE7RUFDRSx5REFBQTtBQUhGO0FBS0U7RUFDRSxZQUFBO0FBSEo7QUFNRTtFQUNFLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFKSjtBQU9FO0VBQ0UsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUxKO0FBU0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtBQU5GO0FBUUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0RBQUE7QUFOSjtBQVFJO0VBQ0UsaUJBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0FBTk47QUFRTTtFQUNFLDZCQUFBO1VBQUEscUJBQUE7QUFOUjtBQVdFO0VBQ0U7SUFDRSw0QkFBQTtFQVRKO0VBV0U7SUFDRSx3QkFBQTtFQVRKO0FBQ0Y7QUFHRTtFQUNFO0lBQ0UsNEJBQUE7RUFUSjtFQVdFO0lBQ0Usd0JBQUE7RUFUSjtBQUNGIiwiZmlsZSI6ImdhbGxlcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNjAwcHg7XG4gIHdpZHRoOiA1MDBweDtcbiAgb3V0bGluZTogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICYuZ2FsbGVyeS0tY29sdW1uIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgJi5ydGwge1xuICAgIC8vIG1haW50YWlucyB0aHVtYnMgb3JpZW50YXRpb24gYWxzbyB3aGVuIHRoZSB3aG9sZSBkb2N1bWVudCBpcyBpbiBSVEwgbW9kZVxuICAgIGRpcmVjdGlvbjogbHRyO1xuXG4gICAgdmlld2VyLFxuICAgIHRodW1icyB7XG4gICAgICBkaXJlY3Rpb246IHJ0bDtcbiAgICB9XG4gIH1cbn1cblxuOmhvc3Q6Om5nLWRlZXAge1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiAgYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cblxuICB1bCB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgLnNyLW9ubHkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgIGNsaXA6IHJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtcbiAgICB0b3A6IGF1dG87XG4gICAgbGVmdDogLTk5OTlweDtcbiAgICB3aWR0aDogMXB4O1xuICAgIGhlaWdodDogMXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbn1cblxuLmxvYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB6LWluZGV4OiAxMDtcblxuICA+IGRpdiB7XG4gICAgaGVpZ2h0OiAxM3B4O1xuICAgIHdpZHRoOiAxM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YTRhNGE7XG4gICAgYW5pbWF0aW9uOiBib3VuY2UgMnMgaW5maW5pdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCB3aGl0ZXNtb2tlLCAwIDAgMXB4IDFweCB3aGl0ZXNtb2tlO1xuXG4gICAgKyBkaXYge1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICBhbmltYXRpb24tZGVsYXk6IDAuMTI1cztcblxuICAgICAgKyBkaXYge1xuICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBib3VuY2Uge1xuICAgIDIwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIH1cbiAgfVxufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 2683:
/*!*************************************************************************************!*\
  !*** ./projects/gallery/src/lib/components/icons/chevron/chevron-icon.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChevronIconComponent": () => (/* binding */ ChevronIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ChevronIconComponent {
}
ChevronIconComponent.ɵfac = function ChevronIconComponent_Factory(t) { return new (t || ChevronIconComponent)(); };
ChevronIconComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChevronIconComponent, selectors: [["chevron-icon"]], decls: 17, vars: 0, consts: [["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 407.436 407.436", 0, "xml", "space", "preserve"], ["points", "112.814,0 91.566,21.178 273.512,203.718 91.566,386.258 112.814,407.436 315.869,203.718 "]], template: function ChevronIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "polygon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["svg[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n}\n\nsvg[_ngcontent-%COMP%] {\n  fill: white;\n  filter: drop-shadow(0 0 1px black);\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZXZyb24taWNvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLFdBRGdCO0VBRWhCLFlBRmdCO0FBRWxCOztBQUdBO0VBQ0UsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtBQUFGIiwiZmlsZSI6ImNoZXZyb24taWNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInN2ZyB7XG4gICRzdmctZGltZW5zaW9uOiAyNnB4O1xuICB3aWR0aDogJHN2Zy1kaW1lbnNpb247XG4gIGhlaWdodDogJHN2Zy1kaW1lbnNpb247XG59XG5cbnN2ZyB7XG4gIGZpbGw6IHdoaXRlO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAxcHggYmxhY2spO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 4328:
/*!************************************************************************!*\
  !*** ./projects/gallery/src/lib/components/thumbs/thumbs.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThumbsComponent": () => (/* binding */ ThumbsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ 2733);
/* harmony import */ var _core_gallery_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/gallery-item */ 7565);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _icons_chevron_chevron_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/chevron/chevron-icon.component */ 2683);






const _c0 = ["thumbs"];
const _c1 = ["thumb"];
function ThumbsComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "chevron-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ThumbsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ThumbsComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.slide(-1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ThumbsComponent_div_0_div_1_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.arrowTemplate)("ngIfElse", ctx_r0.arrowTemplate);
} }
function ThumbsComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "li", 7);
} }
function ThumbsComponent_li_4_ng_container_2_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("thumbs-error-icon--video", ctx_r15.isVideo(item_r8));
} }
function ThumbsComponent_li_4_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ThumbsComponent_li_4_ng_container_2_ng_container_2_div_1_Template, 2, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r14.errorTemplate)("ngIfElse", ctx_r14.errorTemplate);
} }
function ThumbsComponent_li_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("load", function ThumbsComponent_li_4_ng_container_2_Template_img_load_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r17.onLoadChange(item_r8, true); })("error", function ThumbsComponent_li_4_ng_container_2_Template_img_error_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r20.onLoadChange(item_r8, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ThumbsComponent_li_4_ng_container_2_ng_container_2_Template, 2, 2, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", item_r8.thumbSrc || "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", item_r8.alt);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r8._thumbFailed);
} }
function ThumbsComponent_li_4_ng_template_3_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
} }
const _c2 = function (a0, a1, a2) { return { index: a0, selectedIndex: a1, item: a2 }; };
function ThumbsComponent_li_4_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ThumbsComponent_li_4_ng_template_3_ng_container_0_Template, 1, 0, "ng-container", 16);
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const i_r9 = ctx_r24.index;
    const item_r8 = ctx_r24.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r13.thumbTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c2, i_r9, ctx_r13.selectedIndex, item_r8));
} }
function ThumbsComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ThumbsComponent_li_4_Template_li_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26); const i_r9 = restoredCtx.index; const item_r8 = restoredCtx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r25.emitEvent(i_r9, item_r8, $event, ctx_r25.thumbClick); })("mouseenter", function ThumbsComponent_li_4_Template_li_mouseenter_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26); const i_r9 = restoredCtx.index; const item_r8 = restoredCtx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r27.emitEvent(i_r9, item_r8, $event, ctx_r27.thumbHover); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ThumbsComponent_li_4_ng_container_2_Template, 3, 3, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ThumbsComponent_li_4_ng_template_3_Template, 1, 6, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r9 = ctx.index;
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("thumbs-item--selected", i_r9 === ctx_r3.selectedIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r3.thumbTemplate)("ngIfElse", _r12);
} }
function ThumbsComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "chevron-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ThumbsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ThumbsComponent_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r29.slide(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ThumbsComponent_div_5_div_1_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r4.arrowTemplate)("ngIfElse", ctx_r4.arrowTemplate);
} }
class ThumbsComponent {
    constructor(cd, elRef) {
        this.cd = cd;
        this.elRef = elRef;
        this.items = [];
        this.thumbClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.thumbHover = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.isVideo = _core_gallery_item__WEBPACK_IMPORTED_MODULE_1__.isVideo;
        this.showStartArrow = false;
        this.showEndArrow = false;
        this.onArrowsObserved = entries => {
            if (this.thumbsEmpty)
                return;
            const firstTarget = entries[0].target;
            const { first, last } = this.thumbsRef;
            const firstThumbEntry = firstTarget === first.nativeElement ? entries[0] : entries[1];
            const lastThumbEntry = firstTarget === last.nativeElement ? entries[0] : entries[1];
            this.setObservedArrows(firstThumbEntry, lastThumbEntry);
            this.cd.detectChanges();
        };
    }
    get cssClass() {
        return `thumbs--${this.orientation}`;
    }
    get hostOffsetAxis() {
        return this.vertical
            ? this.elRef.nativeElement.offsetHeight
            : this.elRef.nativeElement.offsetWidth;
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
    ngOnChanges({ arrows, items }) {
        if (arrows) {
            if (arrows.currentValue) {
                this.observeArrows();
            }
            else if (!arrows.currentValue) {
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
        }
        else {
            // Note: Slide by the full height/width of the gallery
            // or by the overflow of the thumbs - to prevent unnecessary requestAnimationFrame calls while trying to scroll
            // outside of the min/max scroll of the thumbs
            const thumbList = this.thumbListRef.nativeElement;
            const thumbListScrollAxis = this.vertical
                ? thumbList.scrollHeight
                : thumbList.scrollWidth;
            const thumbListOffsetAxis = this.vertical
                ? thumbList.offsetHeight
                : thumbList.offsetWidth;
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
        const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = nextItemEl;
        const itemOffset = this.vertical ? offsetTop : offsetLeft;
        const itemOffsetAxis = this.vertical ? offsetHeight : offsetWidth;
        const hostScrollAxis = this.hostOffsetAxis;
        const thumbListScroll = this.thumbListRef.nativeElement[this.scrollKey];
        const nextScrollDelta = itemOffset + itemOffsetAxis / 2 - hostScrollAxis / 2 - thumbListScroll;
        if (thumbListScroll + hostScrollAxis < itemOffset + itemOffsetAxis ||
            thumbListScroll > itemOffset) {
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
            event,
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
            const suggestedScroll = Math.ceil(((Date.now() - startTime) / totalTime) * totalDistance);
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
        if (this.thumbsEmpty)
            return;
        if (!this.arrowObserver) {
            this.arrowObserver = new IntersectionObserver(this.onArrowsObserved, {
                root: this.thumbListRef.nativeElement,
                threshold: 1.0,
            });
        }
        else {
            this.unobserveArrows();
        }
        this.arrowObserver.observe(this.thumbsRef.first.nativeElement);
        this.arrowObserver.observe(this.thumbsRef.last.nativeElement);
    }
    setObservedArrows(firstThumb, lastThumb) {
        const inverse = this.isRtl && !this.vertical;
        if (inverse) {
            if (lastThumb)
                this.showStartArrow = lastThumb.intersectionRatio < 1;
            if (firstThumb)
                this.showEndArrow = firstThumb.intersectionRatio < 1;
        }
        else {
            if (firstThumb)
                this.showStartArrow = firstThumb.intersectionRatio < 1;
            if (lastThumb)
                this.showEndArrow = lastThumb.intersectionRatio < 1;
        }
    }
    unobserveArrows() {
        this.arrowObserver && this.arrowObserver.disconnect();
    }
}
ThumbsComponent.ɵfac = function ThumbsComponent_Factory(t) { return new (t || ThumbsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef)); };
ThumbsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ThumbsComponent, selectors: [["thumbs"]], viewQuery: function ThumbsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.thumbListRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.thumbsRef = _t);
    } }, hostVars: 2, hostBindings: function ThumbsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.cssClass);
    } }, inputs: { items: "items", selectedIndex: "selectedIndex", aria: "aria", orientation: "orientation", arrows: "arrows", arrowSlideByLength: "arrowSlideByLength", autoScroll: "autoScroll", thumbTemplate: "thumbTemplate", arrowTemplate: "arrowTemplate", errorTemplate: "errorTemplate", scrollBehavior: "scrollBehavior", isRtl: "isRtl" }, outputs: { thumbClick: "thumbClick", thumbHover: "thumbHover" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 6, vars: 8, consts: [["class", "thumbs-arrow thumbs-arrow-prev", 3, "click", 4, "ngIf"], ["thumbs", ""], ["class", "thumbs-initial-item", 4, "ngIf"], ["aria-hidden", "true", 3, "thumbs-item--selected", "click", "mouseenter", 4, "ngFor", "ngForOf"], ["class", "thumbs-arrow thumbs-arrow-next", 3, "click", 4, "ngIf"], [1, "thumbs-arrow", "thumbs-arrow-prev", 3, "click"], [4, "ngIf", "ngIfElse"], [1, "thumbs-initial-item"], ["aria-hidden", "true", 3, "click", "mouseenter"], ["thumb", ""], ["customThumbTemplate", ""], [3, "src", "alt", "load", "error"], [4, "ngIf"], ["class", "thumbs-error", 4, "ngIf", "ngIfElse"], [1, "thumbs-error"], [1, "thumbs-error-icon"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "thumbs-arrow", "thumbs-arrow-next", 3, "click"]], template: function ThumbsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ThumbsComponent_div_0_Template, 2, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ul", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ThumbsComponent_li_3_Template, 1, 0, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ThumbsComponent_li_4_Template, 5, 4, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ThumbsComponent_div_5_Template, 2, 2, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showStartArrow);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("scroll-behavior", ctx.scrollBehavior);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("rtl", ctx.isRtl);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.items || !ctx.items.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showEndArrow);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _icons_chevron_chevron_icon_component__WEBPACK_IMPORTED_MODULE_2__.ChevronIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet], styles: ["[_nghost-%COMP%] {\n  flex: 1 0 auto;\n  position: relative;\n  background-color: #f3f3f3;\n}\n\n.thumbs--top[_nghost-%COMP%], .thumbs--bottom[_nghost-%COMP%] {\n  width: 100%;\n}\n\n.thumbs--top[_nghost-%COMP%]   ul[_ngcontent-%COMP%], .thumbs--bottom[_nghost-%COMP%]   ul[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n\n.thumbs--top[_nghost-%COMP%]   ul.rtl[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child, .thumbs--bottom[_nghost-%COMP%]   ul.rtl[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n  margin-right: auto;\n}\n\n.thumbs--top[_nghost-%COMP%]   ul.rtl[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child, .thumbs--bottom[_nghost-%COMP%]   ul.rtl[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n  margin-left: auto;\n}\n\n.thumbs--top[_nghost-%COMP%]   li[_ngcontent-%COMP%], .thumbs--bottom[_nghost-%COMP%]   li[_ngcontent-%COMP%] {\n  flex: none;\n}\n\n.thumbs--top[_nghost-%COMP%]   li[_ngcontent-%COMP%]:not(:first-child), .thumbs--bottom[_nghost-%COMP%]   li[_ngcontent-%COMP%]:not(:first-child) {\n  border-left: 0;\n}\n\n.thumbs--top[_nghost-%COMP%]   li[_ngcontent-%COMP%]:first-child, .thumbs--bottom[_nghost-%COMP%]   li[_ngcontent-%COMP%]:first-child {\n  margin-left: auto;\n}\n\n.thumbs--top[_nghost-%COMP%]   li[_ngcontent-%COMP%]:last-child, .thumbs--bottom[_nghost-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-right: auto;\n}\n\n.thumbs--top[_nghost-%COMP%]   .thumbs-arrow[_ngcontent-%COMP%], .thumbs--bottom[_nghost-%COMP%]   .thumbs-arrow[_ngcontent-%COMP%] {\n  top: 0;\n  height: 100%;\n}\n\n.thumbs--top[_nghost-%COMP%]   .thumbs-arrow[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], .thumbs--bottom[_nghost-%COMP%]   .thumbs-arrow[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 100%;\n}\n\n.thumbs--top[_nghost-%COMP%]   .thumbs-arrow-prev[_ngcontent-%COMP%], .thumbs--bottom[_nghost-%COMP%]   .thumbs-arrow-prev[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n.thumbs--top[_nghost-%COMP%]   .thumbs-arrow-next[_ngcontent-%COMP%], .thumbs--bottom[_nghost-%COMP%]   .thumbs-arrow-next[_ngcontent-%COMP%] {\n  right: 0;\n}\n\n.thumbs--top[_nghost-%COMP%]   .thumbs-error[_ngcontent-%COMP%], .thumbs--bottom[_nghost-%COMP%]   .thumbs-error[_ngcontent-%COMP%] {\n  border-right: 1px solid #cecece;\n}\n\n.thumbs--left[_nghost-%COMP%], .thumbs--right[_nghost-%COMP%] {\n  height: 100%;\n}\n\n.thumbs--left[_nghost-%COMP%]   ul[_ngcontent-%COMP%], .thumbs--right[_nghost-%COMP%]   ul[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n\n.thumbs--left[_nghost-%COMP%]   li[_ngcontent-%COMP%], .thumbs--right[_nghost-%COMP%]   li[_ngcontent-%COMP%] {\n  border-top: 0;\n}\n\n.thumbs--left[_nghost-%COMP%]   .thumbs-arrow[_ngcontent-%COMP%], .thumbs--right[_nghost-%COMP%]   .thumbs-arrow[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.thumbs--left[_nghost-%COMP%]   .thumbs-arrow[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], .thumbs--right[_nghost-%COMP%]   .thumbs-arrow[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 30px;\n}\n\n.thumbs--left[_nghost-%COMP%]   .thumbs-arrow[_ngcontent-%COMP%]   chevron-icon[_ngcontent-%COMP%], .thumbs--right[_nghost-%COMP%]   .thumbs-arrow[_ngcontent-%COMP%]   chevron-icon[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n\n.thumbs--left[_nghost-%COMP%]   .thumbs-arrow-prev[_ngcontent-%COMP%], .thumbs--right[_nghost-%COMP%]   .thumbs-arrow-prev[_ngcontent-%COMP%] {\n  top: 0;\n}\n\n.thumbs--left[_nghost-%COMP%]   .thumbs-arrow-next[_ngcontent-%COMP%], .thumbs--right[_nghost-%COMP%]   .thumbs-arrow-next[_ngcontent-%COMP%] {\n  bottom: 0;\n}\n\n.thumbs--left[_nghost-%COMP%]   .thumbs-error[_ngcontent-%COMP%], .thumbs--right[_nghost-%COMP%]   .thumbs-error[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #cecece;\n}\n\n.thumbs--bottom[_nghost-%COMP%], .thumbs--right[_nghost-%COMP%] {\n  order: 1;\n}\n\nul[_ngcontent-%COMP%] {\n  outline: 0;\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  \n  -webkit-overflow-scrolling: touch;\n  transform: translate3d(0, 0, 0);\n}\n\nul[_ngcontent-%COMP%]::-webkit-scrollbar {\n  \n  width: 0;\n  height: 0;\n}\n\nli[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 120px;\n  height: 80px;\n  position: relative;\n  cursor: pointer;\n}\n\nli.thumbs-initial-item[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\nli.thumbs-item--selected[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  border: 10px solid #ffffffcf;\n  box-sizing: border-box;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-position: center;\n  -o-object-fit: cover;\n     object-fit: cover;\n  color: transparent;\n}\n\n.thumbs-error[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  background: #e8e8e8;\n  box-sizing: border-box;\n}\n\n.thumbs-error-icon[_ngcontent-%COMP%]:not(.thumbs-error-icon--video) {\n  position: relative;\n  border-left: 16px solid transparent;\n  border-right: 16px solid transparent;\n  border-bottom: 28px solid #a5a5a5;\n  margin-left: -8px;\n}\n\n.thumbs-error-icon[_ngcontent-%COMP%]:not(.thumbs-error-icon--video)::before, .thumbs-error-icon[_ngcontent-%COMP%]:not(.thumbs-error-icon--video)::after {\n  content: \"\";\n  position: absolute;\n}\n\n.thumbs-error-icon[_ngcontent-%COMP%]:not(.thumbs-error-icon--video)::before {\n  height: 10px;\n  width: 10px;\n  background-color: #a5a5a5;\n  border-radius: 100%;\n  left: 14px;\n}\n\n.thumbs-error-icon[_ngcontent-%COMP%]:not(.thumbs-error-icon--video)::after {\n  border-left: 14px solid transparent;\n  border-right: 14px solid transparent;\n  border-bottom: 17px solid #a5a5a5;\n  top: 11px;\n}\n\n.thumbs-error-icon--video[_ngcontent-%COMP%] {\n  border-top: 16px solid transparent;\n  border-bottom: 16px solid transparent;\n  border-left: 28px solid #a5a5a5;\n  margin-left: 9px;\n}\n\n.thumbs-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  cursor: pointer;\n  z-index: 10;\n}\n\n.thumbs-arrow-prev[_ngcontent-%COMP%] {\n  transform: scale(-1);\n}\n\n.thumbs-arrow[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.5);\n  padding: 0;\n  opacity: 0.7;\n}\n\n@media (hover: hover) and (pointer: fine) {\n  .thumbs-arrow[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:hover {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRodW1icy5jb21wb25lbnQuc2NzcyIsIi4uLy4uL2NvcmUvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUhGOztBQU9FO0VBRUUsV0FBQTtBQUxKOztBQU9JO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBTE47O0FBUVE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFOVjs7QUFTUTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQVBWOztBQVlJO0VBQ0UsVUFBQTtBQVZOOztBQVlNO0VBQ0UsY0FBQTtBQVZSOztBQWFNO0VBQ0UsaUJBQUE7QUFYUjs7QUFjTTtFQUNFLGtCQUFBO0FBWlI7O0FBZ0JJO0VBQ0UsTUFBQTtFQUNBLFlBQUE7QUFkTjs7QUFnQk07RUFDRSxXQXJEYztFQXNEZCxZQUFBO0FBZFI7O0FBaUJNO0VBQ0UsT0FBQTtBQWZSOztBQWtCTTtFQUNFLFFBQUE7QUFoQlI7O0FBb0JJO0VBQ0UsK0JBQUE7QUFsQk47O0FBc0JFO0VBRUUsWUFBQTtBQXJCSjs7QUF1Qkk7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQXJCTjs7QUF3Qkk7RUFDRSxhQUFBO0FBdEJOOztBQXlCSTtFQUNFLFdBQUE7QUF2Qk47O0FBeUJNO0VBQ0UsV0FBQTtFQUNBLFlBMUZjO0FBbUV0Qjs7QUEwQk07RUFDRSx3QkFBQTtBQXhCUjs7QUEyQk07RUFDRSxNQUFBO0FBekJSOztBQTRCTTtFQUNFLFNBQUE7QUExQlI7O0FBOEJJO0VBQ0UsZ0NBQUE7QUE1Qk47O0FBZ0NFO0VBRUUsUUFBQTtBQS9CSjs7QUFtQ0E7RUFDRSxVQUFBO0VBRUEscUJBQUE7RUFBdUIsWUFBQTtFQUN2Qix3QkFBQTtFQUEwQiwwQkFBQTtFQUUxQixpQ0FBQTtFQUlBLCtCQUFBO0FBbkNGOztBQXFDRTtFQUNFLFdBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQW5DSjs7QUF1Q0E7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBcENGOztBQXNDRTtFQUNFLGtCQUFBO0FBcENKOztBQXdDSTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQXRDTjs7QUEyQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esa0JBQUE7QUF4Q0Y7O0FBMkNBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUF4Q0Y7O0FBNkNJO0VBQ0Usa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQkFBQTtBQTNDTjs7QUE2Q007RUFFRSxXQUFBO0VBQ0Esa0JBQUE7QUE1Q1I7O0FBK0NNO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFsQlM7RUFtQlQsbUJBQUE7RUFDQSxVQUFBO0FBN0NSOztBQWdETTtFQUNFLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQ0FBQTtFQUNBLFNBQUE7QUE5Q1I7O0FBa0RJO0VBQ0Usa0NBQUE7RUFDQSxxQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUFoRE47O0FBcURBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQWxERjs7QUFvREU7RUFDRSxvQkFBQTtBQWxESjs7QUFxREU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFuREo7O0FDOUxFO0VEb1BJO0lBQ0UsVUFBQTtFQW5ETjtBQUNGIiwiZmlsZSI6InRodW1icy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL2NvcmUvbWl4aW5zLnNjc3MnO1xuXG4kYXJyb3ctYnRuLWRpbWVuc2lvbjogMzBweDtcblxuOmhvc3Qge1xuICBmbGV4OiAxIDAgYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xufVxuXG46aG9zdC50aHVtYnMge1xuICAmLS10b3AsXG4gICYtLWJvdHRvbSB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICB1bCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgICBvdmVyZmxvdy15OiBoaWRkZW47XG5cbiAgICAgICYucnRsIHtcbiAgICAgICAgbGk6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpOmxhc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGxpIHtcbiAgICAgIGZsZXg6IG5vbmU7XG5cbiAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICBib3JkZXItbGVmdDogMDtcbiAgICAgIH1cblxuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgfVxuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRodW1icy1hcnJvdyB7XG4gICAgICB0b3A6IDA7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgID4gZGl2IHtcbiAgICAgICAgd2lkdGg6ICRhcnJvdy1idG4tZGltZW5zaW9uO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgICYtcHJldiB7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG5cbiAgICAgICYtbmV4dCB7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC50aHVtYnMtZXJyb3Ige1xuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NlY2VjZTtcbiAgICB9XG4gIH1cblxuICAmLS1sZWZ0LFxuICAmLS1yaWdodCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgdWwge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIH1cblxuICAgIGxpIHtcbiAgICAgIGJvcmRlci10b3A6IDA7XG4gICAgfVxuXG4gICAgLnRodW1icy1hcnJvdyB7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgPiBkaXYge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAkYXJyb3ctYnRuLWRpbWVuc2lvbjtcbiAgICAgIH1cblxuICAgICAgY2hldnJvbi1pY29uIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgfVxuXG4gICAgICAmLXByZXYge1xuICAgICAgICB0b3A6IDA7XG4gICAgICB9XG5cbiAgICAgICYtbmV4dCB7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAudGh1bWJzLWVycm9yIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2VjZWNlO1xuICAgIH1cbiAgfVxuXG4gICYtLWJvdHRvbSxcbiAgJi0tcmlnaHQge1xuICAgIG9yZGVyOiAxO1xuICB9XG59XG5cbnVsIHtcbiAgb3V0bGluZTogMDtcbiAgLy8gaGlkZSBzY3JvbGxiYXJcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTArICovXG5cbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuXG4gIC8vIFByb21vdGVzIHRodW1iIGxpc3QgdG8gYSBzZXBhcmF0ZSBsYXllciwgd2hpY2ggYWxsb3dzIGZvciBjb21wb3NpdGluZyB3aGVuIHNjcm9sbGluZywgd2hpY2ggcHJldmVudHMgcmVwYWludHMuXG4gIC8vIEl0IGFsc28gcmVkdWNlcyB0aGUgYW1vdW50IG9mIG1lbW9yeSBoZWxkIGJ5IGl0cyBwYXJlbnQgbGF5ZXIgZHJhbWF0aWNhbGx5LlxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAvKiBXZWJLaXQgKi9cbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gIH1cbn1cblxubGkge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogODBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJi50aHVtYnMtaW5pdGlhbC1pdGVtIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cblxuICAmLnRodW1icy1pdGVtLS1zZWxlY3RlZCB7XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJvcmRlcjogMTBweCBzb2xpZCAjZmZmZmZmY2Y7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cbiAgfVxufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi50aHVtYnMtZXJyb3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAmLWljb24ge1xuICAgICRpY29uLWNvbG9yOiAjYTVhNWE1O1xuXG4gICAgJjpub3QoJi0tdmlkZW8pIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJvcmRlci1sZWZ0OiAxNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLXJpZ2h0OiAxNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMjhweCBzb2xpZCAkaWNvbi1jb2xvcjtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xuXG4gICAgICAmOjpiZWZvcmUsXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB9XG5cbiAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpY29uLWNvbG9yO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBsZWZ0OiAxNHB4O1xuICAgICAgfVxuXG4gICAgICAmOjphZnRlciB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAxNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItcmlnaHQ6IDE0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDE3cHggc29saWQgJGljb24tY29sb3I7XG4gICAgICAgIHRvcDogMTFweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLS12aWRlbyB7XG4gICAgICBib3JkZXItdG9wOiAxNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMTZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1sZWZ0OiAyOHB4IHNvbGlkICRpY29uLWNvbG9yO1xuICAgICAgbWFyZ2luLWxlZnQ6IDlweDtcbiAgICB9XG4gIH1cbn1cblxuLnRodW1icy1hcnJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxMDtcblxuICAmLXByZXYge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLTEpO1xuICB9XG5cbiAgPiBkaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgcGFkZGluZzogMDtcbiAgICBvcGFjaXR5OiAwLjc7XG5cbiAgICBAaW5jbHVkZSBzdXBwb3J0cy1ob3ZlciB7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIkBtaXhpbiBzdXBwb3J0cy1ob3ZlciB7XG4gIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 8666:
/*!************************************************************************!*\
  !*** ./projects/gallery/src/lib/components/viewer/viewer.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewerComponent": () => (/* binding */ ViewerComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 6312);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ 2733);
/* harmony import */ var _core_gallery_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/gallery-item */ 7565);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _icons_chevron_chevron_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/chevron/chevron-icon.component */ 2683);
/* harmony import */ var _directives_media_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/media.directive */ 9925);
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../counter/counter.component */ 3697);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/safe.pipe */ 2847);












const _c0 = ["itemList"];
const _c1 = ["itemsRef"];
function ViewerComponent_div_0_chevron_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "chevron-icon");
} }
function ViewerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewerComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r10.selectByDelta(-1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ViewerComponent_div_0_chevron_icon_1_Template, 1, 0, "chevron-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.arrowTemplate)("ngIfElse", ctx_r0.arrowTemplate);
} }
function ViewerComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "li", 11);
} }
function ViewerComponent_li_4_ng_container_2_ng_container_1_picture_1_source_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "source", 20);
} if (rf & 2) {
    const source_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("srcset", source_r25.srcset, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("media", source_r25.media)("sizes", source_r25.sizes)("type", source_r25.type);
} }
function ViewerComponent_li_4_ng_container_2_ng_container_1_picture_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ViewerComponent_li_4_ng_container_2_ng_container_1_picture_1_source_1_Template, 1, 4, "source", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("load", function ViewerComponent_li_4_ng_container_2_ng_container_1_picture_1_Template_img_load_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28); const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3).$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r26.onItemLoaded(item_r12); })("error", function ViewerComponent_li_4_ng_container_2_ng_container_1_picture_1_Template_img_error_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28); const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3).$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r29.onItemErrored(item_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3).$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@mediaAnimate", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", item_r12.pictureSources);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("object-fit", ctx_r21.objectFit);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("viewer-media-loading", !ctx_r21.itemLoaded(item_r12));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", item_r12.src, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("alt", item_r12.alt);
} }
function ViewerComponent_li_4_ng_container_2_ng_container_1_video_2_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "video", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("loadedmetadata", function ViewerComponent_li_4_ng_container_2_ng_container_1_video_2_Template_video_loadedmetadata_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34); const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3).$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r32.onItemLoaded(item_r12); })("error", function ViewerComponent_li_4_ng_container_2_ng_container_1_video_2_Template_video_error_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34); const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3).$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r35.onItemErrored(item_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3).$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("object-fit", ctx_r22.objectFit);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("viewer-media-loading", !ctx_r22.itemLoaded(item_r12));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@mediaAnimate", undefined)("src", item_r12.src, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"])("poster", item_r12.thumbSrc || "", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
function ViewerComponent_li_4_ng_container_2_ng_container_1_iframe_3_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "iframe", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("load", function ViewerComponent_li_4_ng_container_2_ng_container_1_iframe_3_Template_iframe_load_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r40); const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3).$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r38.onItemLoaded(item_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@mediaAnimate", undefined)("src", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 2, item_r12.src), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeResourceUrl"]);
} }
function ViewerComponent_li_4_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ViewerComponent_li_4_ng_container_2_ng_container_1_picture_1_Template, 3, 8, "picture", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ViewerComponent_li_4_ng_container_2_ng_container_1_video_2_Template, 1, 7, "video", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ViewerComponent_li_4_ng_container_2_ng_container_1_iframe_3_Template, 2, 4, "iframe", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r18.isVideo(item_r12));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r18.isYoutube(item_r12) && ctx_r18.isVideo(item_r12));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r18.isYoutube(item_r12));
} }
function ViewerComponent_li_4_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
} }
function ViewerComponent_li_4_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ViewerComponent_li_4_ng_container_2_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", ctx_r19.loadingTemplate);
} }
function ViewerComponent_li_4_ng_container_2_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\u26A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r44.errorText || "Loading of this media failed", " ");
} }
function ViewerComponent_li_4_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ViewerComponent_li_4_ng_container_2_ng_container_3_div_1_Template, 5, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r20.errorTemplate)("ngIfElse", ctx_r20.errorTemplate);
} }
function ViewerComponent_li_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ViewerComponent_li_4_ng_container_2_ng_container_1_Template, 4, 3, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ViewerComponent_li_4_ng_container_2_ng_container_2_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ViewerComponent_li_4_ng_container_2_ng_container_3_Template, 2, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const item_r12 = ctx_r45.$implicit;
    const i_r13 = ctx_r45.index;
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](4);
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r15.itemTemplate)("ngIfElse", _r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r15.itemLoaded(item_r12) && !ctx_r15.itemFailedToLoad(item_r12));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r15.itemFailedToLoad(item_r12));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("id", "viewer-aria-description-" + i_r13)("innerHTML", item_r12.description, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
} }
function ViewerComponent_li_4_ng_template_3_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
} }
const _c2 = function (a0, a1, a2, a3) { return { index: a0, selectedIndex: a1, item: a2, video: a3 }; };
function ViewerComponent_li_4_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, ViewerComponent_li_4_ng_template_3_ng_container_0_Template, 1, 0, "ng-container", 7);
} if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", ctx_r17.itemTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction4"](2, _c2, ctx_r17.items == null ? null : ctx_r17.items.indexOf(item_r12), ctx_r17.selectedIndex, item_r12, ctx_r17.isVideo(item_r12)));
} }
function ViewerComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewerComponent_li_4_Template_li_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r49); const item_r12 = restoredCtx.$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r48.onImageClick(item_r12, $event); })("media-load", function ViewerComponent_li_4_Template_li_media_load_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r49); const item_r12 = restoredCtx.$implicit; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r50.onItemLoaded(item_r12); })("media-error", function ViewerComponent_li_4_Template_li_media_error_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r49); const item_r12 = restoredCtx.$implicit; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r51.onItemErrored(item_r12); })("keydown.Tab", function ViewerComponent_li_4_Template_li_keydown_Tab_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r49); const i_r13 = restoredCtx.index; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r52.onTab(i_r13 + 1); })("keydown.shift.Tab", function ViewerComponent_li_4_Template_li_keydown_shift_Tab_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r49); const i_r13 = restoredCtx.index; const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r53.onTab(i_r13 - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ViewerComponent_li_4_ng_container_2_Template, 5, 6, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ViewerComponent_li_4_ng_template_3_Template, 1, 7, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("viewer-item--selected", i_r13 === ctx_r3.selectedIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("tabindex", ctx_r3.itemTabbable(i_r13))("aria-label", item_r12.alt)("aria-describedby", "viewer-aria-description-" + i_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r3.lazyLoading || ctx_r3.isInScrollportProximity(i_r13));
} }
function ViewerComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
} }
function ViewerComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ViewerComponent_ng_container_5_ng_container_1_Template, 1, 0, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.loadingTemplate);
} }
function ViewerComponent_div_6_chevron_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "chevron-icon");
} }
function ViewerComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewerComponent_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r56.selectByDelta(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ViewerComponent_div_6_chevron_icon_1_Template, 1, 0, "chevron-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r5.arrowTemplate)("ngIfElse", ctx_r5.arrowTemplate);
} }
function ViewerComponent_counter_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "counter", 29);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("itemQuantity", ctx_r6.items == null ? null : ctx_r6.items.length)("selectedIndex", ctx_r6.selectedIndex)("orientation", ctx_r6.counterOrientation);
} }
function ViewerComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainer"](0);
} }
function ViewerComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ViewerComponent_div_9_div_1_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r61); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r60.descriptionClick.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const description_r59 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", description_r59, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
} }
function ViewerComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ViewerComponent_div_9_div_1_Template, 1, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("viewer-description--above-counter", ctx_r8.counter && ctx_r8.counterOrientation === "bottom");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.items[ctx_r8.selectedIndex] == null ? null : ctx_r8.items[ctx_r8.selectedIndex].description);
} }
const _c3 = function (a0) { return { selectedIndex: a0 }; };
const passiveEventListenerOpts = {
    passive: true,
};
class ViewerComponent {
    constructor(_hostRef, _cd, _zone) {
        this._hostRef = _hostRef;
        this._cd = _cd;
        this._zone = _zone;
        this.imageClick = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.descriptionClick = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.selection = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.isVideo = _core_gallery_item__WEBPACK_IMPORTED_MODULE_1__.isVideo;
        this.UA = _core__WEBPACK_IMPORTED_MODULE_0__.UA;
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this._listX = 0;
        this.onResize = () => {
            // the setTimeout is here to prevent layout trashing when inquiring layout properties like offsetWidth
            // using setTimeout increases chance the trashing will be avoided and cashed layout calculation will be used
            setTimeout(() => {
                this._noAnimation = true;
                this.updateDimensionsAndCenter();
                // the setTimeout makes sure that the animation is allowed AFTER the list was shifted
                setTimeout(() => (this._noAnimation = false));
            });
        };
        this.shiftByDelta = (delta) => {
            this.shift(this._listX - delta);
        };
    }
    set loop(val) {
        this._loop = val;
    }
    get loop() {
        return this.items && this.items.length > 1 && this._loop;
    }
    set itemWidth(val) {
        this.itemListRef.nativeElement.style.setProperty('--item-width', val || '');
    }
    set _noAnimation(value) {
        this.itemListRef.nativeElement.style.transitionDuration = value
            ? '0ms'
            : '';
    }
    get lazyLoading() {
        return this.loading === 'lazy';
    }
    get showArrow() {
        return this.arrows && this.items && this.items.length > 1;
    }
    get showPrevArrow() {
        return this.showArrow && (this.selectedIndex > 0 || this.loop);
    }
    get showNextArrow() {
        return (this.showArrow &&
            (this.selectedIndex < this.items.length - 1 || this.loop));
    }
    ngOnChanges({ thumbsOrientation, items }) {
        if (thumbsOrientation && !thumbsOrientation.firstChange) {
            const axis = thumbsOrientation.currentValue | thumbsOrientation.previousValue;
            if (axis !== 6 /* HORIZONTAL */ &&
                axis !== 24 /* VERTICAL */) {
                this.onResize();
            }
        }
        if (items && items.currentValue && items.currentValue.length) {
            this.onResize();
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
        }
    }
    ngOnDestroy() {
        this._destroy$.next(null);
        this._destroy$.complete();
    }
    isInScrollportProximity(index) {
        if (this.loop) {
            index -= this._fringeCount;
        }
        const spread = this.getSelectedItemProximitySpread();
        const distance = Math.abs(this.selectedIndex - index);
        const isLeftFringeItemToLoad = this.loop && Math.abs(distance - this.items.length) <= spread;
        return isLeftFringeItemToLoad || distance <= spread;
    }
    isYoutube(item) {
        return !!item.src.match(/youtube.*\/embed\//);
    }
    select(index) {
        if (this.selectedIndex === index) {
            return this.center();
        }
        const indexOutOfBounds = !this.items[index];
        const looping = this.loop && indexOutOfBounds;
        if (looping) {
            this.loopTo(index);
        }
        if (indexOutOfBounds) {
            index = this.correctIndexOutOfBounds(index);
        }
        if (this.isVideo(this.items[this.selectedIndex])) {
            this.stopCurrentVideo();
        }
        this.selectedIndex = index;
        this.selection.emit(index);
        if (!looping) {
            this.center();
        }
    }
    selectByDelta(delta) {
        this.select(this.selectedIndex + delta);
    }
    onImageClick(item, event) {
        this.imageClick.emit({
            event,
            item,
            index: this.items.indexOf(item),
        });
    }
    onTab(nextItemIndex) {
        nextItemIndex = nextItemIndex - this._fringeCount;
        // allow focus to escape viewer
        if (nextItemIndex >= 0 && nextItemIndex < this.items.length) {
            this.select(nextItemIndex);
            // focusing an item literally scrolls the item list, so I have to scroll it back
            requestAnimationFrame(() => (this._hostRef.nativeElement.scrollLeft = 0));
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
        index = index - this._fringeCount;
        return index >= 0 && index < this.items.length ? 0 : -1;
    }
    center() {
        const centeringOffset = (this._viewerWidth - this._itemWidth) / 2;
        this.shift((this.selectedIndex + this._fringeCount) * this._itemWidth -
            centeringOffset);
    }
    correctIndexOutOfBounds(index) {
        if (this.loop) {
            return index < 0 ? this.items.length - 1 : 0;
        }
        return index < 0 ? 0 : this.items.length - 1;
    }
    getFringeCount() {
        return this.loop
            ? Math.min(Math.ceil(this._viewerWidth / (this._itemWidth + 1)), this.items.length)
            : 0;
    }
    getItemsToBeDisplayed() {
        return this.loop
            ? [
                ...this.items.slice(-this._fringeCount),
                ...this.items,
                ...this.items.slice(0, this._fringeCount),
            ]
            : this.items;
    }
    getSelectedItemProximitySpread() {
        return this.touched
            ? Math.ceil(this._viewerWidth / (this._itemWidth + 1)) || 1
            : Math.floor(Math.ceil(this._viewerWidth / this._itemWidth) / 2);
    }
    handleMouseSlides() {
        this._zone.runOutsideAngular(() => {
            const hostEl = this._hostRef.nativeElement;
            let mousedown;
            let maxDeltaX = 0;
            let maxDeltaY = 0;
            const onmousedown = (e) => {
                mousedown = e;
                this._noAnimation = true;
                document.addEventListener('mousemove', onmousemove, passiveEventListenerOpts);
                document.addEventListener('mouseup', onmouseup, passiveEventListenerOpts);
            };
            const onmousemove = (e) => {
                maxDeltaX = Math.max(Math.abs(mousedown.x - e.x));
                maxDeltaY = Math.max(Math.abs(mousedown.y - e.y));
                this.shiftByDelta(e.movementX);
            };
            const onmouseup = (e) => {
                const distance = mousedown.x - e.x;
                this._noAnimation = false;
                this._zone.run(() => this.selectBySwipeStats(distance));
                document.removeEventListener('mousemove', onmousemove);
                document.removeEventListener('mouseup', onmouseup);
            };
            const onclick = (e) => {
                if (maxDeltaX > 10 || maxDeltaY > 10) {
                    e.stopPropagation();
                    // to prevent playing a video on swipe
                    e.preventDefault();
                }
                maxDeltaY = maxDeltaX = 0;
            };
            const ondragstart = (e) => e.preventDefault();
            hostEl.addEventListener('mousedown', onmousedown, passiveEventListenerOpts);
            hostEl.addEventListener('click', onclick, { capture: true });
            hostEl.addEventListener('dragstart', ondragstart);
            this._destroy$.subscribe(() => {
                hostEl.removeEventListener('mousedown', onmousedown);
                hostEl.removeEventListener('click', onclick);
                hostEl.removeEventListener('dragstart', ondragstart);
            });
        });
    }
    handleTouchSlides() {
        this._zone.runOutsideAngular(() => {
            const hostEl = this._hostRef.nativeElement;
            let horizontal = null;
            let touchstart;
            let lastTouchmove;
            const ontouchstart = (e) => {
                touchstart = e;
                this._noAnimation = true;
            };
            const ontouchmove = (e) => {
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
                    this.shiftByDelta(moveTouch.clientX - (lastTouchmove || touchstart).touches[0].clientX);
                    lastTouchmove = e;
                    if (_core__WEBPACK_IMPORTED_MODULE_0__.UA.ios) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                }
            };
            const ontouchend = () => {
                this._noAnimation = false;
                if (lastTouchmove) {
                    const distance = touchstart.touches[0].clientX - lastTouchmove.touches[0].clientX;
                    this._zone.run(() => this.selectBySwipeStats(distance));
                }
                horizontal = null;
                touchstart = null;
                lastTouchmove = null;
            };
            hostEl.addEventListener('touchstart', ontouchstart, passiveEventListenerOpts);
            document.addEventListener('touchmove', ontouchmove, {
                passive: !_core__WEBPACK_IMPORTED_MODULE_0__.UA.ios,
            });
            document.addEventListener('touchend', ontouchend, passiveEventListenerOpts);
            this._destroy$.subscribe(() => {
                hostEl.removeEventListener('touchstart', ontouchstart);
                document.removeEventListener('touchmove', ontouchmove);
                document.removeEventListener('touchend', ontouchend);
            });
        });
    }
    handleResizes() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.fromEvent)(window, 'resize', passiveEventListenerOpts)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this._destroy$))
            .subscribe(this.onResize);
    }
    loopTo(desiredIndex) {
        this._noAnimation = true;
        setTimeout(() => {
            const shiftDelta = Math.sign(desiredIndex) * this.items.length * this._itemWidth;
            this.shiftByDelta(shiftDelta);
            setTimeout(() => {
                this._noAnimation = false;
                this.center();
            });
        });
    }
    readDimensions() {
        this._viewerWidth = this._hostRef.nativeElement.offsetWidth;
        this._itemWidth = this._hostRef.nativeElement.querySelector('li').offsetWidth;
        this._fringeCount = this.getFringeCount();
        this._displayedItems = this.getItemsToBeDisplayed();
    }
    selectBySwipeStats(distance) {
        const indexDelta = Math.ceil((Math.abs(distance) - 25) / this._itemWidth);
        if (indexDelta) {
            this.selectByDelta(indexDelta * Math.sign(distance));
        }
        else {
            this.center();
        }
    }
    shift(x) {
        const multiplier = this.isRtl ? 1 : -1;
        this.itemListRef.nativeElement.style.transform = `translate3d(${multiplier * (this._listX = x)}px, 0, 0)`;
    }
    stopCurrentVideo() {
        const videoEl = this.itemsRef
            .toArray()[this.selectedIndex].nativeElement.querySelector('video');
        if (videoEl) {
            videoEl.pause();
        }
    }
    updateDimensionsAndCenter() {
        if (this.items && this.items.length) {
            this.readDimensions();
            this.center();
            this._cd.detectChanges();
        }
    }
}
ViewerComponent.ɵfac = function ViewerComponent_Factory(t) { return new (t || ViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgZone)); };
ViewerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ViewerComponent, selectors: [["viewer"]], viewQuery: function ViewerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.itemListRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.itemsRef = _t);
    } }, hostVars: 2, hostBindings: function ViewerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("rtl", ctx.isRtl);
    } }, inputs: { items: "items", arrows: "arrows", selectedIndex: "selectedIndex", descriptions: "descriptions", errorText: "errorText", mouseGestures: "mouseGestures", touchGestures: "touchGestures", counter: "counter", counterOrientation: "counterOrientation", loading: "loading", objectFit: "objectFit", itemTemplate: "itemTemplate", loadingTemplate: "loadingTemplate", errorTemplate: "errorTemplate", arrowTemplate: "arrowTemplate", contentTemplate: "contentTemplate", thumbsOrientation: "thumbsOrientation", aria: "aria", loop: "loop", itemWidth: "itemWidth", touched: "touched", isRtl: "isRtl" }, outputs: { imageClick: "imageClick", descriptionClick: "descriptionClick", selection: "selection" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]], decls: 10, vars: 12, consts: [["class", "viewer-arrow viewer-arrow-prev", 3, "click", 4, "ngIf"], ["itemList", ""], ["class", "viewer-initial-item", 4, "ngIf"], [3, "viewer-item--selected", "click", "media-load", "media-error", "keydown.Tab", "keydown.shift.Tab", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "viewer-arrow viewer-arrow-next", 3, "click", 4, "ngIf"], [3, "itemQuantity", "selectedIndex", "orientation", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "viewer-description", "aria-hidden", "true", 3, "viewer-description--above-counter", 4, "ngIf"], [1, "viewer-arrow", "viewer-arrow-prev", 3, "click"], [4, "ngIf", "ngIfElse"], [1, "viewer-initial-item"], [3, "click", "media-load", "media-error", "keydown.Tab", "keydown.shift.Tab"], ["itemsRef", ""], ["customTemplate", ""], [1, "sr-only", 3, "id", "innerHTML"], ["controls", "", "playsinline", "", 3, "src", "poster", "viewer-media-loading", "objectFit", "loadedmetadata", "error", 4, "ngIf"], ["frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 3, "src", "load", 4, "ngIf"], [3, "srcset", 4, "ngFor", "ngForOf"], [3, "src", "alt", "load", "error"], [3, "srcset"], ["controls", "", "playsinline", "", 3, "src", "poster", "loadedmetadata", "error"], ["frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 3, "src", "load"], [4, "ngTemplateOutlet"], ["class", "viewer-error", 4, "ngIf", "ngIfElse"], [1, "viewer-error"], [1, "viewer-error-icon"], [1, "viewer-error-text"], [1, "viewer-arrow", "viewer-arrow-next", 3, "click"], [3, "itemQuantity", "selectedIndex", "orientation"], ["aria-hidden", "true", 1, "viewer-description"], ["class", "viewer-description-inner", 3, "innerHTML", "click", 4, "ngIf"], [1, "viewer-description-inner", 3, "innerHTML", "click"]], template: function ViewerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, ViewerComponent_div_0_Template, 2, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ul", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ViewerComponent_li_3_Template, 1, 0, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ViewerComponent_li_4_Template, 5, 6, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ViewerComponent_ng_container_5_Template, 2, 1, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ViewerComponent_div_6_Template, 2, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ViewerComponent_counter_7_Template, 1, 3, "counter", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ViewerComponent_ng_container_8_Template, 1, 0, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ViewerComponent_div_9_Template, 2, 3, "div", 8);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showPrevArrow);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-label", ctx.aria == null ? null : ctx.aria.viewerLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !(ctx._displayedItems == null ? null : ctx._displayedItems.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx._displayedItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.items == null ? null : ctx.items.length) <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showNextArrow);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.counter && (ctx.items == null ? null : ctx.items.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngTemplateOutlet", ctx.contentTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](10, _c3, ctx.selectedIndex));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.descriptions && ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgTemplateOutlet, _icons_chevron_chevron_icon_component__WEBPACK_IMPORTED_MODULE_2__.ChevronIconComponent, _directives_media_directive__WEBPACK_IMPORTED_MODULE_3__.MediaDirective, _counter_counter_component__WEBPACK_IMPORTED_MODULE_4__.CounterComponent], pipes: [_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_5__.SafePipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  outline: none;\n  background-color: #ececec;\n  z-index: 1;\n}\n.rtl[_nghost-%COMP%]   .viewer-arrow-next[_ngcontent-%COMP%] {\n  right: auto;\n  left: 0;\n  transform: translateY(-50%) scale(-1);\n}\n.rtl[_nghost-%COMP%]   .viewer-arrow-prev[_ngcontent-%COMP%] {\n  right: 0;\n  left: auto;\n  transform: translateY(-50%);\n}\nul[_ngcontent-%COMP%] {\n  --item-width: calc(100% - 0.01px);\n  display: flex;\n  width: 100%;\n  height: 100%;\n  transition: transform 400ms;\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  \n}\nul[_ngcontent-%COMP%]::-webkit-scrollbar {\n  \n  width: 0;\n  height: 0;\n}\nli[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex: none;\n  position: relative;\n  width: var(--item-width);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  outline: 0;\n}\npicture[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  \n}\npicture[_ngcontent-%COMP%]:not(:first-child) {\n  display: none;\n}\nimg[_ngcontent-%COMP%], video[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n  outline: 0;\n  color: transparent;\n}\nimg[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.viewer-description[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 5px;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.viewer-description--above-counter[_ngcontent-%COMP%] {\n  bottom: 35px;\n}\n.viewer-description-inner[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: black;\n  opacity: 0.8;\n  color: white;\n  padding: 6px 15px;\n  max-width: 80%;\n  font-size: 0.95em;\n  text-align: center;\n}\n.viewer-error[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  background-color: #f5f5f5;\n  color: #7d7d7d;\n}\n.viewer-error-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n.viewer-error-text[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  letter-spacing: 0.01em;\n}\n.viewer-arrow[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 100;\n  cursor: pointer;\n}\n.viewer-arrow-prev[_ngcontent-%COMP%] {\n  left: 0;\n  transform: scale(-1) translateY(50%);\n}\n.viewer-arrow-next[_ngcontent-%COMP%] {\n  right: 0;\n}\n.viewer-arrow[_ngcontent-%COMP%]   chevron-icon[_ngcontent-%COMP%] {\n  margin: 15px 6px;\n  opacity: 0.7;\n}\n@media (hover: hover) and (pointer: fine) {\n  .viewer-arrow[_ngcontent-%COMP%]   chevron-icon[_ngcontent-%COMP%]:hover {\n    opacity: 1;\n  }\n}\n.viewer-arrow[_ngcontent-%COMP%]   chevron-icon[_ngcontent-%COMP%]  svg {\n  height: 32px;\n  width: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXdlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uL2NvcmUvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBS0EsVUFBQTtBQVBGO0FBVUk7RUFDRSxXQUFBO0VBQ0EsT0FBQTtFQUNBLHFDQUFBO0FBUk47QUFXSTtFQUNFLFFBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7QUFUTjtBQWNBO0VBSUUsaUNBQUE7RUFFQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUdBLHFCQUFBO0VBQXVCLFlBQUE7RUFDdkIsd0JBQUE7RUFBMEIsMEJBQUE7QUFmNUI7QUFnQkU7RUFDRSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFkSjtBQWtCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0EsVUFBQTtBQWZGO0FBa0JBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFFQSwyQ0FBQTtBQWhCRjtBQWlCRTtFQUNFLGFBQUE7QUFmSjtBQW1CQTs7O0VBR0UsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQWhCRjtBQW1CQTtFQUNFLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtBQWhCRjtBQW1CQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFoQkY7QUFrQkU7RUFDRSxZQUFBO0FBaEJKO0FBbUJFO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQWpCSjtBQXFCQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFsQkY7QUFvQkU7RUFDRSxlQUFBO0FBbEJKO0FBcUJFO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtBQW5CSjtBQXVCQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBcEJGO0FBc0JFO0VBQ0UsT0FBQTtFQUNBLG9DQUFBO0FBcEJKO0FBdUJFO0VBQ0UsUUFBQTtBQXJCSjtBQXdCRTtFQUdFLGdCQUFBO0VBQ0EsWUFBQTtBQXhCSjtBQ2xJRTtFRDZKSTtJQUNFLFVBQUE7RUF4Qk47QUFDRjtBQTJCSTtFQUNFLFlBWmU7RUFhZixXQWJlO0FBWnJCIiwiZmlsZSI6InZpZXdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL2NvcmUvbWl4aW5zLnNjc3MnO1xuXG4kZGVmYXVsdC1pdGVtLXdpZHRoOiBjYWxjKDEwMCUgLSAwLjAxcHgpO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gIC8vIE5PVEUgb24gei1pbmRleDogSXQgcHJldmVudHMgY3JlYXRpb24gb2Ygc2Vjb25kYXJ5IGxheWVyIGZvciBzY3JvbGxhYmxlIGNvbnRlbnQgKGZvdW5kIG91dCBpbiBDaHJvbWl1bSBkZXYgdG9vbHMgaW4gTGF5ZXJzKSBpbiBjb250ZXh0IG9mIHRoZSB2aWV3ZXIgRE9NIGVsZW1lbnQuXG4gIC8vIFRoaXMgc2Vjb25kYXJ5IGxheWVyIGhvbGRzIGEgbGFyZ2UgcG9ydGlvbiBvZiBtZW1vcnlcbiAgLy8gUG9zaXRpdmUgei1pbmRleCBwcmV2ZW50IGNyZWF0aW9uIG9mIHRoaXMgbGF5ZXIuIEl0IGFsc28gY2F1c2VzIGEgc2VwYXJhdGUgbGF5ZXIgdG8gYmUgY3JlYXRlZCwgYmVjYXVzZSBpdCBoYXMgXCJjb21wb3NpdGVkXCIgZGVzY2VuZGFudHMgLSB1bCBlbGVtZW50LFxuICAvLyBob3dldmVyLCB0aGlzIGxheWVyIGhvbGRzIG11Y2ggbGVzcyBtZW1vcnkuXG4gIHotaW5kZXg6IDE7XG5cbiAgJi5ydGwge1xuICAgIC52aWV3ZXItYXJyb3ctbmV4dCB7XG4gICAgICByaWdodDogYXV0bztcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoLTEpO1xuICAgIH1cblxuICAgIC52aWV3ZXItYXJyb3ctcHJldiB7XG4gICAgICByaWdodDogMDtcbiAgICAgIGxlZnQ6IGF1dG87XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgfVxuICB9XG59XG5cbnVsIHtcbiAgLy8gVGhlIHNtYWxsIHN1YnRyYWN0aW9uIG1pdGlnYXRlcyBGRidzIGxhenkgaW1hZ2UgZGlzcGxheWluZy4gSWYgaW1nMSB0YWtlcyBlbnRpcmUgc2Nyb2xscG9ydCBvZiB0aGUgdmlld2VyLCBuZXh0IGltYWdlIGltZzIgaXMgY29tcGxldGVseSBvdXRzaWRlIGFuZCBub3QgcmVuZGVyZWQgYnkgRkZcbiAgLy8gV2hlbiBuYXZpZ2F0aW5nIHRvIGltZzIsIHRoZXJlIGlzIGEgYnJpZWYgZmxhc2ggb2YgYmFja2dyb3VuZCB3aGlsZSBGRiByZW5kZXJzIHRoZSBzZWNvbmQgaW1hZ2VcbiAgLy8gU2V0dGluZyBpdGVtIHdpZHRoIHRvIG51bWJlciB2ZXJ5IGNsb3NlIHRvIDEwMCUgZm9yY2VzIEZGIHRvIHByZXJlbmRlciB0aGUgc2Vjb25kIGltYWdlLCB3aXRob3V0IHVud2FudGVkIGZsYXNoZXMgb24gbmF2aWdhdGlvblxuICAtLWl0ZW0td2lkdGg6ICN7JGRlZmF1bHQtaXRlbS13aWR0aH07XG5cbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDQwMG1zO1xuXG4gIC8vIGhpZGUgdGhlIHNjcm9sbGJhclxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZpcmVmb3ggKi9cbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMCsgKi9cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIC8qIFdlYktpdCAqL1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgfVxufVxuXG5saSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXg6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IHZhcigtLWl0ZW0td2lkdGgpO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgb3V0bGluZTogMDtcbn1cblxucGljdHVyZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgLyogRml4IHRvIGhpZGUgZHVwbGljYXRlIHBpY3R1cmVzIGluIElFMTEgKi9cbiAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG5pbWcsXG52aWRlbyxcbmlmcmFtZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBvdXRsaW5lOiAwO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmltZyB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4udmlld2VyLWRlc2NyaXB0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICYtLWFib3ZlLWNvdW50ZXIge1xuICAgIGJvdHRvbTogMzVweDtcbiAgfVxuXG4gICYtaW5uZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDZweCAxNXB4O1xuICAgIG1heC13aWR0aDogODAlO1xuICAgIGZvbnQtc2l6ZTogMC45NWVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG4udmlld2VyLWVycm9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGNvbG9yOiAjN2Q3ZDdkO1xuXG4gICYtaWNvbiB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICB9XG5cbiAgJi10ZXh0IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIH1cbn1cblxuLnZpZXdlci1hcnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgei1pbmRleDogMTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJi1wcmV2IHtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLTEpIHRyYW5zbGF0ZVkoNTAlKTtcbiAgfVxuXG4gICYtbmV4dCB7XG4gICAgcmlnaHQ6IDA7XG4gIH1cblxuICBjaGV2cm9uLWljb24ge1xuICAgICRpY29uLWRpbWVuc2lvbjogMzJweDtcblxuICAgIG1hcmdpbjogMTVweCA2cHg7XG4gICAgb3BhY2l0eTogMC43O1xuXG4gICAgQGluY2x1ZGUgc3VwcG9ydHMtaG92ZXIge1xuICAgICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjo6bmctZGVlcCBzdmcge1xuICAgICAgaGVpZ2h0OiAkaWNvbi1kaW1lbnNpb247XG4gICAgICB3aWR0aDogJGljb24tZGltZW5zaW9uO1xuICAgIH1cbiAgfVxufVxuIiwiQG1peGluIHN1cHBvcnRzLWhvdmVyIHtcbiAgQG1lZGlhIChob3ZlcjogaG92ZXIpIGFuZCAocG9pbnRlcjogZmluZSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iXX0= */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.trigger)('mediaAnimate', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.transition)(':leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.animate)('0ms 100ms')),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.transition)(':enter', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({ opacity: 0 }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.animate)('400ms', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_11__.style)({ opacity: 1 })),
                ]),
            ]),
        ] }, changeDetection: 0 });


/***/ }),

/***/ 9174:
/*!***********************************************!*\
  !*** ./projects/gallery/src/lib/core/aria.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultAria": () => (/* binding */ defaultAria)
/* harmony export */ });
const defaultAria = {
    galleryLabel: 'Image Gallery',
    viewerLabel: 'Displayed gallery images.',
};


/***/ }),

/***/ 7565:
/*!*******************************************************!*\
  !*** ./projects/gallery/src/lib/core/gallery-item.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryItem": () => (/* binding */ GalleryItem),
/* harmony export */   "GalleryImage": () => (/* binding */ GalleryImage),
/* harmony export */   "GalleryVideo": () => (/* binding */ GalleryVideo),
/* harmony export */   "isVideo": () => (/* binding */ isVideo)
/* harmony export */ });
class GalleryItem {
    constructor(
    /**
     * Media url
     */
    src, 
    /**
     * Url of media thumbnail
     */
    thumbSrc, 
    /**
     * Alt text for not yet loaded image
     */
    alt, 
    /**
     * Description that is to be shown on the currently displayed gallery item
     */
    description, 
    /**
     * Custom data where you can put whatever you want
     */
    data) {
        this.src = src;
        this.thumbSrc = thumbSrc;
        this.alt = alt;
        this.description = description;
        this.data = data;
    }
}
class GalleryImage extends GalleryItem {
    constructor(src, thumbSrc, alt, description, 
    /**
     * Sources for <picture>
     */
    pictureSources, data) {
        super(src, thumbSrc, alt, description, data);
        this.pictureSources = pictureSources;
    }
}
class GalleryVideo extends GalleryItem {
    constructor(src, thumbSrc, alt, description, data) {
        super(src, thumbSrc, alt, description, data);
    }
}
const isVideo = (item) => item instanceof GalleryVideo;


/***/ }),

/***/ 2733:
/*!************************************************!*\
  !*** ./projects/gallery/src/lib/core/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SUPPORT": () => (/* reexport safe */ _support__WEBPACK_IMPORTED_MODULE_0__.SUPPORT),
/* harmony export */   "UA": () => (/* reexport safe */ _support__WEBPACK_IMPORTED_MODULE_0__.UA),
/* harmony export */   "isBrowser": () => (/* reexport safe */ _support__WEBPACK_IMPORTED_MODULE_0__.isBrowser),
/* harmony export */   "GalleryItem": () => (/* reexport safe */ _gallery_item__WEBPACK_IMPORTED_MODULE_1__.GalleryItem),
/* harmony export */   "GalleryImage": () => (/* reexport safe */ _gallery_item__WEBPACK_IMPORTED_MODULE_1__.GalleryImage),
/* harmony export */   "GalleryVideo": () => (/* reexport safe */ _gallery_item__WEBPACK_IMPORTED_MODULE_1__.GalleryVideo),
/* harmony export */   "orientations": () => (/* reexport safe */ _orientation__WEBPACK_IMPORTED_MODULE_4__.orientations),
/* harmony export */   "MediaDirective": () => (/* reexport safe */ _directives_media_directive__WEBPACK_IMPORTED_MODULE_6__.MediaDirective)
/* harmony export */ });
/* harmony import */ var _support__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support */ 7034);
/* harmony import */ var _gallery_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery-item */ 7565);
/* harmony import */ var _object_fit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./object-fit */ 3625);
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading */ 627);
/* harmony import */ var _orientation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./orientation */ 2435);
/* harmony import */ var _template_contexts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./template-contexts */ 4781);
/* harmony import */ var _directives_media_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../directives/media.directive */ 9925);









/***/ }),

/***/ 627:
/*!**************************************************!*\
  !*** ./projects/gallery/src/lib/core/loading.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 3625:
/*!*****************************************************!*\
  !*** ./projects/gallery/src/lib/core/object-fit.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 2435:
/*!******************************************************!*\
  !*** ./projects/gallery/src/lib/core/orientation.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "orientations": () => (/* binding */ orientations)
/* harmony export */ });
const orientations = {
    left: 2 /* LEFT */,
    right: 4 /* RIGHT */,
    top: 8 /* TOP */,
    bottom: 16 /* BOTTOM */
};


/***/ }),

/***/ 7034:
/*!**************************************************!*\
  !*** ./projects/gallery/src/lib/core/support.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isBrowser": () => (/* binding */ isBrowser),
/* harmony export */   "SUPPORT": () => (/* binding */ SUPPORT),
/* harmony export */   "UA": () => (/* binding */ UA)
/* harmony export */ });
const isBrowser = typeof window !== 'undefined';
const SUPPORT = {
    scrollBehavior: isBrowser && 'scrollBehavior' in document.body.style,
};
const UA = {
    ios: isBrowser && !!window.navigator.userAgent.match(/iP(ad|hone|od)/)
};


/***/ }),

/***/ 4781:
/*!************************************************************!*\
  !*** ./projects/gallery/src/lib/core/template-contexts.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 9925:
/*!****************************************************************!*\
  !*** ./projects/gallery/src/lib/directives/media.directive.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaDirective": () => (/* binding */ MediaDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class MediaDirective {
    constructor(hostRef) {
        this.hostRef = hostRef;
    }
    onLoad(ev) {
        const evName = ev.type === 'error' ? 'media-error' : 'media-load';
        this.hostRef.nativeElement.dispatchEvent(new CustomEvent(evName, {
            bubbles: true,
            cancelable: true,
            detail: ev
        }));
    }
}
MediaDirective.ɵfac = function MediaDirective_Factory(t) { return new (t || MediaDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
MediaDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MediaDirective, selectors: [["", "media", ""]], hostBindings: function MediaDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function MediaDirective_load_HostBindingHandler($event) { return ctx.onLoad($event); })("loadedmetadata", function MediaDirective_loadedmetadata_HostBindingHandler($event) { return ctx.onLoad($event); })("error", function MediaDirective_error_HostBindingHandler($event) { return ctx.onLoad($event); });
    } } });


/***/ }),

/***/ 9121:
/*!****************************************************!*\
  !*** ./projects/gallery/src/lib/gallery.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryModule": () => (/* binding */ GalleryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/counter/counter.component */ 3697);
/* harmony import */ var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/gallery/gallery.component */ 5410);
/* harmony import */ var _components_icons_chevron_chevron_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/icons/chevron/chevron-icon.component */ 2683);
/* harmony import */ var _components_thumbs_thumbs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/thumbs/thumbs.component */ 4328);
/* harmony import */ var _components_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/viewer/viewer.component */ 8666);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/safe.pipe */ 2847);
/* harmony import */ var _directives_media_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/media.directive */ 9925);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);









class GalleryModule {
}
GalleryModule.ɵfac = function GalleryModule_Factory(t) { return new (t || GalleryModule)(); };
GalleryModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: GalleryModule });
GalleryModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](GalleryModule, { declarations: [_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__.GalleryComponent,
        _components_thumbs_thumbs_component__WEBPACK_IMPORTED_MODULE_3__.ThumbsComponent,
        _components_viewer_viewer_component__WEBPACK_IMPORTED_MODULE_4__.ViewerComponent,
        _components_icons_chevron_chevron_icon_component__WEBPACK_IMPORTED_MODULE_2__.ChevronIconComponent,
        _components_counter_counter_component__WEBPACK_IMPORTED_MODULE_0__.CounterComponent,
        _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_5__.SafePipe,
        _directives_media_directive__WEBPACK_IMPORTED_MODULE_6__.MediaDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule], exports: [_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__.GalleryComponent, _directives_media_directive__WEBPACK_IMPORTED_MODULE_6__.MediaDirective] }); })();


/***/ }),

/***/ 2847:
/*!*****************************************************!*\
  !*** ./projects/gallery/src/lib/pipes/safe.pipe.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafePipe": () => (/* binding */ SafePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 318);


class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16)); };
SafePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safe", type: SafePipe, pure: true });


/***/ }),

/***/ 8488:
/*!********************************************!*\
  !*** ./projects/gallery/src/public-api.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryComponent": () => (/* reexport safe */ _lib_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_0__.GalleryComponent),
/* harmony export */   "GalleryModule": () => (/* reexport safe */ _lib_gallery_module__WEBPACK_IMPORTED_MODULE_1__.GalleryModule),
/* harmony export */   "GalleryImage": () => (/* reexport safe */ _lib_core__WEBPACK_IMPORTED_MODULE_2__.GalleryImage),
/* harmony export */   "GalleryItem": () => (/* reexport safe */ _lib_core__WEBPACK_IMPORTED_MODULE_2__.GalleryItem),
/* harmony export */   "GalleryVideo": () => (/* reexport safe */ _lib_core__WEBPACK_IMPORTED_MODULE_2__.GalleryVideo),
/* harmony export */   "MediaDirective": () => (/* reexport safe */ _lib_core__WEBPACK_IMPORTED_MODULE_2__.MediaDirective),
/* harmony export */   "SUPPORT": () => (/* reexport safe */ _lib_core__WEBPACK_IMPORTED_MODULE_2__.SUPPORT),
/* harmony export */   "UA": () => (/* reexport safe */ _lib_core__WEBPACK_IMPORTED_MODULE_2__.UA),
/* harmony export */   "isBrowser": () => (/* reexport safe */ _lib_core__WEBPACK_IMPORTED_MODULE_2__.isBrowser),
/* harmony export */   "orientations": () => (/* reexport safe */ _lib_core__WEBPACK_IMPORTED_MODULE_2__.orientations)
/* harmony export */ });
/* harmony import */ var _lib_components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/components/gallery/gallery.component */ 5410);
/* harmony import */ var _lib_gallery_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/gallery.module */ 9121);
/* harmony import */ var _lib_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/core */ 2733);
/*
 * Public API Surface of the gallery
 */





/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(873)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map