webpackJsonp([1],{"+TC7":function(t,e,a){"use strict";var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{attrs:{id:"nav"}},[a("ul",[a("li",[a("router-link",{attrs:{to:"/",exact:""}},[t._v("Home")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"about",exact:""}},[t._v("About")])],1),t._v(" "),a("li",[a("router-link",{attrs:{to:"events",exact:""}},[t._v("Events")])],1),t._v(" "),a("li",[a("a",{on:{click:function(e){t.handleClick()}}},[t._v("Contact")])])]),t._v(" "),a("ul",{staticClass:"right"},[a("li",[a("router-link",{attrs:{to:{name:"Cart"}}},[a("i",{staticClass:"fas fa-shopping-cart"})]),t._v(" "),a("button",{staticStyle:{display:"none","background-color":"orange",position:"absolute",top:"0",right:"0",border:"none"},on:{click:function(e){t.goToCheckout()}}},[t._v("to checkout")])],1)])])},staticRenderFns:[]};e.a=n},"/w5R":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=a("Dd8w"),r=(n=o)&&n.__esModule?n:{default:n},i=a("NYxO");e.default={name:"Cart",computed:(0,r.default)({},(0,i.mapGetters)(["cart"])),data:function(){return{cartSubtotal:0}},beforeCreate:function(){this.$store.dispatch("LOAD_PRODUCTS")},mounted:function(){this.cartSubtotal=this.calculateSubtotal(this.cart)},methods:{calculateSubtotal:function(t){var e=0;return this.cart.forEach(function(t){e+=t.itemPrice*t.itemQuantity}),parseInt(e).toFixed(2)},handleRemoveItem:function(t){this.$store.dispatch("REMOVE_ITEM_FROM_CART",t),this.cartSubtotal=this.calculateSubtotal(this.cart)},handleCheckout:function(){}}}},"0GLn":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("NYxO");e.default={name:"ContactModal",data:function(){return{msg:"Welcome to Your Contact Page"}},computed:(0,n.mapState)(["contactModalOpen"]),methods:{handleClose:function(){this.$store.dispatch("CLOSE_CONTACT_MODAL")}}}},"2qMB":function(t,e,a){"use strict";var n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main",attrs:{id:"home"}},[e("img",{attrs:{src:a("mM+N")}}),this._v(" "),this._m(0),this._v(" "),e("div",{staticClass:"link-wrapper"},[e("router-link",{attrs:{to:"/product_categories",exact:""}},[this._v("View Collection")])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("Carey Dueweke")]),this._v(" "),e("p",[this._v("Creativity ...by Design")])])}]};e.a=n},"4MlH":function(t,e,a){"use strict";var n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Nav"),this._v(" "),e("router-view"),this._v(" "),e("Footer")],1)},staticRenderFns:[]};e.a=n},CpAq:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});o(a("7+uW")),o(a("NYxO"));var n=o(a("mtWM"));function o(t){return t&&t.__esModule?t:{default:t}}var r="",i="";"localhost"==window.location.hostname?(r="http://localhost:5000/items",i="http://localhost:5000/categoryList"):(r="https://carey-store.herokuapp.com/items",i="https://carey-store.herokuapp.com/categoryList");var u={OPEN_CONTACT_MODAL_POPUP:function(t){(0,t.commit)("OPEN_CONTACT_MODAL")},CLOSE_CONTACT_MODAL_POPUP:function(t){(0,t.commit)("CLOSE_CONTACT_MODAL")},LOAD_PRODUCTS:function(t){var e=t.commit;n.default.get(r).then(function(t){e("SET_PRODUCTS",{products:t.data})},function(t){console.log(t)})},LOAD_PRODUCT_CATEGORIES:function(t){var e=t.commit;n.default.get(i).then(function(t){e("SET_PRODUCT_CATEGORIES",{productCategories:t.data})},function(t){console.log(t)})}};e.default={state:{contactModalOpen:!1,products:[],productCategories:[]},getters:{contactModalOpen:function(t){return t.contactModalOpen},products:function(t){return t.products},productCategories:function(t){return t.productCategories}},actions:u,mutations:{OPEN_CONTACT_MODAL:function(t){t.contactModalOpen=!0},CLOSE_CONTACT_MODAL:function(t){t.contactModalOpen=!1},SET_PRODUCTS:function(t,e){var a=e.products;t.products=a},SET_PRODUCT_CATEGORIES:function(t,e){var a=e.productCategories;t.productCategories=a}}}},FEs4:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(a("Dd8w")),o=a("NYxO"),r=i(a("wd27"));function i(t){return t&&t.__esModule?t:{default:t}}e.default={name:"ProductList",components:{Loader:r.default},computed:(0,n.default)({},(0,o.mapGetters)(["products","productCategories","cart"])),data:function(){return{filteredProducts:{},show:!1,showProductModal:!1,showLoaderAnimation:!0,productModalProduct:null,message:""}},beforeCreate:function(){this.$store.dispatch("LOAD_PRODUCTS"),this.$store.dispatch("LOAD_PRODUCT_CATEGORIES")},mounted:function(){var t=this;setTimeout(function(){t.filterProducts()},3e3)},methods:{filterProducts:function(t){var e=this,a=void 0;this.show=!1,a=t?this.products.filter(function(e){return e.item_data.category_id==t}):this.products,setTimeout(function(){e.filteredProducts=a,e.show=!0,e.showLoaderAnimation=!1},2e3)},setProductModalProduct:function(t){return this.products.find(function(e){return e.id==t})},openProductModal:function(t){this.productModalProduct=this.setProductModalProduct(t),this.showProductModal=!0},closeProductModal:function(){this.productModalProduct=null,this.showProductModal=!1,this.message=""},addItemToCart:function(t){var e=[this.productModalProduct,t];this.$store.dispatch("ADD_ITEM_TO_CART",e),this.message="This item has been added to your cart! Yay!"}}}},Fs8J:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Home",data:function(){return{show:!1}},methods:{},mounted:function(){this.show=!0}}},GjTN:function(t,e,a){"use strict";var n={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"contact-modal"}},[this._v("\n  "+this._s(this.msg)+"\n")])},staticRenderFns:[]};e.a=n},Hjxw:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("0GLn"),o=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);var i=a("GjTN"),u=a("VU/8")(o.a,i.a,!1,null,null,null);e.default=u.exports},IcnI:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=u(a("7+uW")),o=u(a("NYxO")),r=u(a("xW+n")),i=u(a("CpAq"));function u(t){return t&&t.__esModule?t:{default:t}}n.default.use(o.default);var c=new o.default.Store({modules:{shoppingCart:r.default,squareUp:i.default}});e.default=c},M93x:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("xJD8"),o=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);var i=a("4MlH");var u=function(t){a("rF3j")},c=a("VU/8")(o.a,i.a,!1,u,null,null);e.default=c.exports},NHnr:function(t,e,a){"use strict";var n=c(a("7+uW")),o=c(a("NYxO")),r=c(a("M93x")),i=c(a("YaEn")),u=c(a("IcnI"));function c(t){return t&&t.__esModule?t:{default:t}}n.default.config.productionTip=!1,n.default.use(o.default),new n.default({el:"#app",router:i.default,store:u.default,components:{App:r.default},template:"<App/>"})},NqS7:function(t,e,a){"use strict";var n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"loader"}},[e("div",{staticClass:"loader-container"},[e("div",{staticClass:"loader-box"},[e("div",{staticClass:"loader-circle"}),this._v(" "),e("div",{staticClass:"loader-circle"}),this._v(" "),e("div",{staticClass:"loader-circle"}),this._v(" "),e("div",{staticClass:"loader-circle"}),this._v(" "),e("div",{staticClass:"loader-circle"}),this._v(" "),e("div",{staticClass:"loader-circle"})])])])}]};e.a=n},NzPD:function(t,e,a){"use strict";var n={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"main",attrs:{id:"about"}},[this._v("\n  "+this._s(this.msg)+"\n")])},staticRenderFns:[]};e.a=n},Q6FB:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("NYxO"),o=r(a("Hjxw"));r(a("YaEn"));function r(t){return t&&t.__esModule?t:{default:t}}e.default={name:"Nav",computed:(0,n.mapState)(["contactModalOpen"]),components:{ContactModal:o.default},methods:{handleClick:function(){this.$store.dispatch("OPEN_CONTACT_MODAL")},handleClose:function(){this.$store.dispatch("CLOSE_CONTACT_MODAL")},goToCheckout:function(){window.location.href=window.location.href+"checkout"}}}},TVmP:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("UthT"),o=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);var i=a("xzKZ"),u=a("VU/8")(o.a,i.a,!1,null,null,null);e.default=u.exports},UthT:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Footer"}},YaEn:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=d(a("7+uW")),o=d(a("/ocq")),r=d(a("c27y")),i=d(a("Zc39")),u=d(a("vQVo")),c=d(a("lO7g")),s=d(a("vmgX"));function d(t){return t&&t.__esModule?t:{default:t}}n.default.use(o.default),e.default=new o.default({mode:"history",routes:[{path:"/",name:"Home",component:c.default},{path:"/about",name:"About",component:r.default},{path:"/cart",name:"Cart",component:i.default},{path:"/events",name:"Events",component:u.default},{path:"/product_categories",name:"ProductList",component:s.default}]})},YcGa:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Events",data:function(){return{msg:"Welcome to Your Events Page"}}}},Zc39:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("/w5R"),o=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);var i=a("xSIj"),u=a("VU/8")(o.a,i.a,!1,null,null,null);e.default=u.exports},Zs8U:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"About",data:function(){return{msg:"Welcome to Your About Page"}}}},c27y:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Zs8U"),o=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);var i=a("NzPD"),u=a("VU/8")(o.a,i.a,!1,null,null,null);e.default=u.exports},hX4M:function(t,e,a){"use strict";var n={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"main",attrs:{id:"events"}},[this._v("\n  "+this._s(this.msg)+"\n")])},staticRenderFns:[]};e.a=n},lO7g:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Fs8J"),o=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);var i=a("2qMB"),u=a("VU/8")(o.a,i.a,!1,null,null,null);e.default=u.exports},"mM+N":function(t,e,a){t.exports=a.p+"static/img/SelfPortrait-01.4d4eefa.png"},nmPp:function(t,e,a){"use strict";var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main",attrs:{id:"product-list"}},[a("div",{attrs:{id:"sidebar"}},[a("ul",[a("li",[a("a",{on:{click:function(e){t.filterProducts()}}},[t._v("View All")])]),t._v(" "),t._l(t.productCategories,function(e){return a("li",[a("a",{on:{click:function(a){t.filterProducts(e.id)}}},[t._v("\n            "+t._s(e.category_data.name)+"\n          ")])])})],2)]),t._v(" "),t.showLoaderAnimation?a("Loader"):t._e(),t._v(" "),a("transition",{attrs:{name:"fade"}},[t.show?a("div",{staticClass:"product-list-wrapper"},t._l(t.filteredProducts,function(e){return a("div",{staticClass:"product-box"},[a("img",{attrs:{src:e.item_data.image_url}}),t._v(" "),a("a",{on:{click:function(a){t.openProductModal(e.id)}}},[t._v(t._s(e.item_data.name))])])})):t._e()]),t._v(" "),t.showProductModal&&t.productModalProduct?a("div",{attrs:{id:"product-modal"}},[a("div",{staticClass:"selected-product-box"},[a("i",{staticClass:"fas fa-times",on:{click:function(e){t.closeProductModal()}}}),t._v(" "),a("img",{attrs:{src:t.productModalProduct.item_data.image_url}}),t._v(" "),a("h1",[t._v(t._s(t.productModalProduct.item_data.name))]),t._v(" "),a("h3",[t._v(t._s(t.productModalProduct.item_data.description))]),t._v(" "),a("table",t._l(t.productModalProduct.item_data.variations,function(e){return a("tr",[a("td",[t._v(t._s(e.item_variation_data.name)+" ")]),t._v(" "),a("td",[t._v("$"+t._s(e.item_variation_data.price_money.amount))]),t._v(" "),a("td",[a("button",{on:{click:function(a){t.addItemToCart(e)}}},[t._v("I'll take it!")])])])})),t._v(" "),a("p",[t._v(t._s(t.message))])])]):t._e()],1)},staticRenderFns:[]};e.a=n},rF3j:function(t,e){},uExR:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Loader"}},uL8o:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Q6FB"),o=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);var i=a("+TC7"),u=a("VU/8")(o.a,i.a,!1,null,null,null);e.default=u.exports},vQVo:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("YcGa"),o=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);var i=a("hX4M"),u=a("VU/8")(o.a,i.a,!1,null,null,null);e.default=u.exports},vmgX:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("FEs4"),o=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);var i=a("nmPp"),u=a("VU/8")(o.a,i.a,!1,null,null,null);e.default=u.exports},wd27:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("uExR"),o=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);var i=a("NqS7"),u=a("VU/8")(o.a,i.a,!1,null,null,null);e.default=u.exports},xJD8:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});r(a("mtWM")),r(a("YaEn"));var n=r(a("TVmP")),o=r(a("uL8o"));function r(t){return t&&t.__esModule?t:{default:t}}e.default={name:"App",components:{Nav:o.default,Footer:n.default}}},xSIj:function(t,e,a){"use strict";var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main",attrs:{id:"cart"}},[t.cart.length>0?a("div",[a("h1",[t._v("Cart")]),t._v(" "),a("table",t._l(t.cart,function(e){return a("tr",[a("td",[a("img",{attrs:{src:e.itemImg}})]),t._v(" "),a("td",[t._v(t._s(e.itemName))]),t._v(" "),a("td",{staticClass:"item_price"},[t._v("$"+t._s(e.itemPrice))]),t._v(" "),a("td",{staticClass:"item_quantity"},[t._v(t._s(e.itemQuantity))]),t._v(" "),a("td",[a("i",{staticClass:"fas fa-minus-circle",on:{click:function(a){t.handleRemoveItem(e)}}})])])})),t._v(" "),a("h3",[t._v(" Subtotal: $"+t._s(t.cartSubtotal))]),t._v(" "),a("p",[t._v("(Shipping + taxes calculated at checkout)")]),t._v(" "),a("button",{on:{click:function(e){t.handleCheckout()}}},[t._v("I'm ready to checkout!")])]):a("div",[a("h2",[t._v("You haven't added anything to your cart yet!")]),t._v(" "),a("div",{staticClass:"link-wrapper"},[a("router-link",{attrs:{to:"/product_categories",exact:""}},[t._v("View Collection")])],1)])])},staticRenderFns:[]};e.a=n},"xW+n":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n(a("7+uW")),n(a("NYxO")),n(a("mtWM"));function n(t){return t&&t.__esModule?t:{default:t}}e.default={state:{cart:[]},getters:{cart:function(t){return t.cart}},actions:{ADD_ITEM_TO_CART:function(t,e){(0,t.commit)("ADD_NEW_ITEM_TO_CART",e)},REMOVE_ITEM_FROM_CART:function(t,e){(0,t.commit)("REMOVE_ITEM",e)}},mutations:{ADD_NEW_ITEM_TO_CART:function(t,e){var a=e[1].item_variation_data,n=!1;t.cart.forEach(function(t){t.itemId==a.item_id&&(t.itemQuantity+=1,n=!0)}),n||t.cart.push({itemId:a.item_id,itemImg:e[0].item_data.image_url,itemName:e[0].item_data.name,itemVariationName:a.name,itemPrice:a.price_money.amount,itemQuantity:1})},REMOVE_ITEM:function(t,e){t.cart.forEach(function(a,n){e.itemId==a.itemId&&(a.itemQuantity-=1),0==a.itemQuantity&&t.cart.splice(n,1)})}}}},xzKZ:function(t,e,a){"use strict";var n={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{attrs:{id:"footer"}},[e("ul",[e("li",[e("a",{attrs:{href:"https://www.instagram.com/careydueweke/",target:"_blank"}},[e("i",{staticClass:"fab fa-instagram"})])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://www.facebook.com/careydueweke/",target:"_blank"}},[e("i",{staticClass:"fab fa-facebook-f"})])])])])}]};e.a=n}},["NHnr"]);
//# sourceMappingURL=app.2abe9d49c63c2d01fbb7.js.map