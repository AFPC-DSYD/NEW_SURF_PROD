webpackJsonp([1],{0:function(t,e){},"0YvR":function(t,e){},1:function(t,e){},2:function(t,e){},3:function(t,e){},"42Pq":function(t,e){},"57yv":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark primary-color-dark fixed-top"},[a("img",{attrs:{src:s("jBjs"),height:"30px"}}),t._v(" "),a("div",{staticClass:"navbar-brand white-text"},[a("router-link",{staticClass:"white-text",attrs:{to:"/"}},[t._v("STARS-RAW")])],1),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavDropdown"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("router-link",{staticClass:"nav-item",attrs:{to:"/",tag:"li","active-class":"active",exact:""}},[a("a",{staticClass:"nav-link"},[t._v("SURF")])])],1)])])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"navbar-toggler hoverable",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],n={render:a,staticRenderFns:o};e.a=n},Drc2:function(t,e){},M93x:function(t,e,s){"use strict";function a(t){s("lfmB")}var o=s("xJD8"),n=s("nL9m"),r=s("VU/8"),i=a,c=r(o.a,n.a,!1,i,null,null);e.a=c.exports},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("hKoQ"),o=(s.n(a),s("7+uW")),n=s("M93x"),r=s("YaEn"),i=s("mtWM"),c=s.n(i),l=s("K3J8"),d=(s.n(l),s("qb6w")),u=(s.n(d),s("k1UT")),v=(s.n(u),s("QxPg")),p=s("mZf6"),f=s.n(p),m=s("sLGz"),h=s.n(m),_=s("0vJk"),C=s.n(_),g=s("wtEF");Object(a.polyfill)(),s("hKoQ").polyfill(),String.prototype.startsWith||(String.prototype.startsWith=function(t,e){return this.substr(e||0,t.length)===t}),c.a.defaults.headers.get.Accepts="application/json",v.a.library.add(f.a,h.a,C.a),new o.a({el:"#app",router:r.a,store:g.a,template:"<App/>",components:{App:n.a}})},Ruci:function(t,e,s){"use strict";var a=s("uXZL"),o=s.n(a),n=s("4QAo"),r=(s.n(n),s("NA1M")),i=(s.n(r),s("mtWM")),c=s.n(i);e.a={data:function(){return{showGrid:!1,step3:!1,showButton:!1,board:"",workbook:{Sheets:[""],SheetNames:[""]},force:"officer",type:"masked",sheet_json:[],headers:[],selectedCol:-1,currentSheetIndex:0,myGrid:{data:[""]},myGrid2:{data:[""]},href:"",ssnList:[],numGood:0,numBad:0,state:{headers:[""],tickets:[""],myGrid:[]}}},mounted:function(){this.myGrid=canvasDatagrid(),document.getElementById("myGrid").appendChild(this.myGrid),this.myGrid2=canvasDatagrid(),document.getElementById("myGrid2").appendChild(this.myGrid2)},computed:{typeString:function(){var t=this.type;return"masked"==t?"Masked":"unmasked"==t?"Unmasked":"with"==t?"With Proffesional Speciality":"without"==t?"Without Proffesional Speciality":void 0},currentSheetName:function(){return this.workbook.SheetNames[this.currentSheetIndex]},worksheet:function(){return this.workbook.Sheets[this.currentSheetName]},columns:function(){return this.headers[this.currentSheetIndex]},dropDownText:function(){return-1==this.selectedCol?"Select SSN Column":this.columns[this.selectedCol]}},watch:{currentSheetIndex:function(t){this.myGrid.data=this.sheet_json[this.currentSheetIndex],this.selectedCol=-1},force:function(t){console.log(t),this.type="officer"==t?"masked":"with",this.numGood=0}},methods:{onReturn:function(t){var e={1:"GOOD",7:"NOT FOUND ON FILE",8:"DUPLICATE"};if(t.data){var s=t.data;s.forEach(function(t){t.STATUS=e[t.STATUS]});var a=this.parse(s,"SSN",2);this.myGrid2.data=a,this.step3=!0}},validate:function(){var t=this,e=[];this.parse(this.ssnList,"SSN",1).forEach(function(t){t.SSN_FORMAT&&e.push(t.SSN)}),console.log(e);var a=s("1nuA"),o={_PROGRAM:"/REN - Dashboard Home V1/makeHTML",nPage:"validate",force:this.force,type:this.type,list:e.join(",")};console.log(o),c.a.post("https://starsraw.afpc.randolph.af.mil/SASStoredProcess/do",a.stringify(o)).then(function(e){console.log(e.data),t.onReturn(e.data)}).catch(console.error)},runSurf:function(){var t=[];this.parse(this.ssnList,"SSN",1).forEach(function(e){e.SSN_FORMAT&&t.push(e.SSN)}),console.log(t);var e=s("1nuA"),a={_PROGRAM:"/REN - Dashboard Home V1/makeHTML",nPage:"validate",force:this.force,type:this.type,board:this.board,list:t.join(",")};console.log(a),this.href="https://starsraw.afpc.randolph.af.mil/SASStoredProcess/do?"+e.stringify(a),console.log(this.href),this.$refs.surfButton.click()},parse:function(t,e,s){var a=this;this.ssnList=[];var o=0,n=0,r="",i=!1;return t.forEach(function(t){if(t[e]){r=t[e].replace(/\W/g,""),i=/^\d+$/.test(r),r.length>9&&(i=!1);var c=9-r.length;c>0&&(r="0".repeat(c)+r),i||(r=t[e]);var l="";2==s?(l=t.STATUS,"GOOD"==l?o+=1:n+=1):1==s&&(i||(n+=1)),1==s?a.ssnList.push({SSN:r,SSN_FORMAT:i}):2==s&&a.ssnList.push({SSN:r,SSN_FORMAT:i,VALIDATED:l})}}),this.numGood=o,this.numBad=n,this.ssnList},processSSN:function(){var t=this.columns[this.selectedCol];if("UNKNOWN 1"==t)t="__EMPTY";else if(t.startsWith("UNKNOWN ")){var e=t.substr(8);t="__EMPTY_"+e}var s=this.parse(this.sheet_json[this.currentSheetIndex],t,1);this.myGrid2.data=s,this.step3=!0},selectCol:function(t){this.selectedCol=t},changeSheet:function(t){this.currentSheetIndex=t},onFileChange:function(t){var e=t.target.files||t.dataTransfer.files;e.length&&this.createImage(e[0])},createImage:function(t){var e=(new Image,new FileReader),s=this;e.onload=function(t){s.image=t.target.result},e.readAsDataURL(t)},removeImage:function(t){this.image=""},get_header_row:function(t){var e,s=[],a=o.a.utils.decode_range(t["!ref"]),n=a.s.r;for(e=a.s.c;e<=a.e.c;++e){var r=t[o.a.utils.encode_cell({c:e,r:n})],i="UNKNOWN "+e;r&&r.t&&(i=o.a.utils.format_cell(r)),s.push(i)}return s},fixdata:function(t){for(var e="",s=0,a=10240;s<t.byteLength/a;++s)e+=String.fromCharCode.apply(null,new Uint8Array(t.slice(s*a,s*a+a)));return e+=String.fromCharCode.apply(null,new Uint8Array(t.slice(s*a)))},workbook_to_json:function(t){var e={};return t.SheetNames.forEach(function(s){var a=o.a.utils.sheet_to_row_object_array(t.Sheets[s]);a.length>0&&(e[s]=a)}),e},handleDrop:function(t){var e=this;t.stopPropagation(),t.preventDefault(),console.log("DROPPED");var s,a,n=t.dataTransfer.files;for(s=0,a=n[s];s!=n.length;++s){var r=new FileReader;a.name;r.onload=function(t){var s=t.target.result,a=e.fixdata(s);e.workbook=o.a.read(btoa(a),{type:"base64"});for(var n in e.workbook.Sheets){var r=e.workbook.Sheets[n];e.sheet_json.push(o.a.utils.sheet_to_json(r)),e.headers.push(e.get_header_row(r))}e.myGrid.data=e.sheet_json[e.currentSheetIndex]},r.readAsArrayBuffer(a)}this.showGrid=!0},handleDragover:function(t){t.stopPropagation(),t.preventDefault(),t.dataTransfer.dropEffect="copy"}}}},TVmP:function(t,e,s){"use strict";function a(t){s("cxMp")}var o=s("UthT"),n=s.n(o),r=s("uzRA"),i=s("VU/8"),c=a,l=i(n.a,r.a,!1,c,null,null);e.a=l.exports},UthT:function(t,e){},YaEn:function(t,e,s){"use strict";var a=s("7+uW"),o=s("/ocq"),n=s("d5XC");a.a.use(o.a),e.a=new o.a({routes:[{path:"/",name:"Surf",component:n.a},{path:"*",redirect:"/"}],scrollBehavior:function(t,e,s){return{x:0,y:0}}})},cxMp:function(t,e){},d5XC:function(t,e,s){"use strict";function a(t){s("42Pq")}var o=s("Ruci"),n=s("vn4D"),r=s("VU/8"),i=a,c=r(o.a,n.a,!1,i,"data-v-fd3e4c0e",null);e.a=c.exports},jBjs:function(t,e,s){t.exports=s.p+"static/img/afpc_log.e969ea7.png"},k1UT:function(t,e){},lfLh:function(t,e,s){"use strict";function a(t){s("0YvR")}var o=s("Drc2"),n=s.n(o),r=s("57yv"),i=s("VU/8"),c=a,l=i(n.a,r.a,!1,c,"data-v-7464f633",null);e.a=l.exports},lfmB:function(t,e){},nL9m:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid grey lighten-5"},[s("app-navbar"),t._v(" "),s("div",{staticClass:"pt-5 mt-3",staticStyle:{"min-height":"800px"}},[s("router-view")],1),t._v(" "),s("app-footer")],1)},o=[],n={render:a,staticRenderFns:o};e.a=n},qb6w:function(t,e){},uzRA:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"page-footer primary-color-dark center-on-small-only"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[t._m(0),t._v(" "),s("div",{staticClass:"col-md-4"},[s("h5",{staticClass:"title mb-2 mt-3 font-bold"},[t._v("Links")]),t._v(" "),s("ul",[s("router-link",{staticClass:"footer-link",attrs:{to:"/",tag:"li"}},[s("a",{staticClass:"nav-link"},[t._v("SURF")])])],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2)])])])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-4"},[s("p",{staticClass:"no-marg"},[t._v("For more information, questions or concerns please contact:")]),t._v(" "),s("h5",{staticClass:"title mb-2 mt-3 font-bold"},[t._v("AFPC DSYD")]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-2"},[s("p",{staticClass:"no-marg"},[t._v("Email: ")]),t._v(" "),s("p",{staticClass:"no-marg"},[t._v("DSN:  ")]),t._v(" "),s("p",{staticClass:"no-marg"},[t._v("COM:  ")])]),t._v(" "),s("div",{staticClass:"col"},[s("p",{staticClass:"no-marg"},[s("a",{staticClass:"font-bold",attrs:{href:"mailto:DSYD.WorkFlow@us.af.mil?Subject=PERS_STAT Assistance"}},[t._v("DSYD.WorkFlow@us.af.mil")])]),t._v(" "),s("p",{staticClass:"no-marg"},[t._v("312-665-3540")]),t._v(" "),s("p",{staticClass:"no-marg"},[t._v("210-565-3540")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-4"},[s("h5",{staticClass:"title mb-2 mt-3 font-bold"},[t._v(" Additional Links")]),t._v(" "),s("ul")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer-copyright"},[s("div",{staticClass:"container-fluid"},[t._v("\n                    © 2017-2018 Copyright: United States Air Force\n                ")])])}],n={render:a,staticRenderFns:o};e.a=n},vn4D:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h1",[t._v("SURF")]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col inline-form-group",attrs:{id:"radioSelect"}},[s("label",{staticClass:"custom-control custom-radio"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.force,expression:"force"}],staticClass:"custom-control-input",attrs:{name:"force",type:"radio",value:"officer"},domProps:{checked:t._q(t.force,"officer")},on:{change:function(e){t.force="officer"}}}),t._v(" "),s("span",{staticClass:"custom-control-indicator"}),t._v(" "),s("span",{staticClass:"custom-control-description"},[t._v("Officer")])]),t._v(" "),s("label",{staticClass:"custom-control custom-radio"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.force,expression:"force"}],staticClass:"custom-control-input",attrs:{name:"force",type:"radio",value:"enlisted"},domProps:{checked:t._q(t.force,"enlisted")},on:{change:function(e){t.force="enlisted"}}}),t._v(" "),s("span",{staticClass:"custom-control-indicator"}),t._v(" "),s("span",{staticClass:"custom-control-description"},[t._v("Enlisted")])])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col inline-form-group",attrs:{id:"radioSelect"}},[s("label",{directives:[{name:"show",rawName:"v-show",value:"officer"==t.force,expression:"force=='officer'"}],staticClass:"custom-control custom-radio"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],staticClass:"custom-control-input",attrs:{name:"type",type:"radio",value:"masked"},domProps:{checked:t._q(t.type,"masked")},on:{change:function(e){t.type="masked"}}}),t._v(" "),s("span",{staticClass:"custom-control-indicator"}),t._v(" "),s("span",{staticClass:"custom-control-description"},[t._v("Mased ")])]),t._v(" "),s("label",{directives:[{name:"show",rawName:"v-show",value:"officer"==t.force,expression:"force=='officer'"}],staticClass:"custom-control custom-radio"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],staticClass:"custom-control-input",attrs:{name:"type",type:"radio",value:"unmasked"},domProps:{checked:t._q(t.type,"unmasked")},on:{change:function(e){t.type="unmasked"}}}),t._v(" "),s("span",{staticClass:"custom-control-indicator"}),t._v(" "),s("span",{staticClass:"custom-control-description"},[t._v("Unmasked")])]),t._v(" "),s("label",{directives:[{name:"show",rawName:"v-show",value:"enlisted"==t.force,expression:"force=='enlisted'"}],staticClass:"custom-control custom-radio"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],staticClass:"custom-control-input",attrs:{name:"type",type:"radio",value:"with"},domProps:{checked:t._q(t.type,"with")},on:{change:function(e){t.type="with"}}}),t._v(" "),s("span",{staticClass:"custom-control-indicator"}),t._v(" "),s("span",{staticClass:"custom-control-description"},[t._v("With Proffesional Speciality")])]),t._v(" "),s("label",{directives:[{name:"show",rawName:"v-show",value:"enlisted"==t.force,expression:"force=='enlisted'"}],staticClass:"custom-control custom-radio"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],staticClass:"custom-control-input",attrs:{name:"type",type:"radio",value:"without"},domProps:{checked:t._q(t.type,"without")},on:{change:function(e){t.type="without"}}}),t._v(" "),s("span",{staticClass:"custom-control-indicator"}),t._v(" "),s("span",{staticClass:"custom-control-description"},[t._v("Without Proffesional Speciality")])])])]),t._v(" "),s("p",[t._v("This page is used to generate SURFs.")]),t._v(" "),s("br"),t._v(" "),s("h2",[t._v("Step 1: Upload SSN list ")]),t._v(" "),s("div",{staticClass:"container-responsive"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{attrs:{id:"drop"},on:{drop:t.handleDrop,dragover:t.handleDragover,dragenter:t.handleDragover}},[t._v("Drop File Here")])])]),t._v(" "),s("br"),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showGrid,expression:"showGrid"}],staticClass:"container"},[s("div",{staticClass:"row"},[t._m(0),t._v(" "),s("div",{staticClass:"col-3"},[s("div",{staticClass:"dropdown"},[s("button",{staticClass:"btn btn-sm btn-primary dropdown-toggle",attrs:{type:"button",id:"dropdownMenu1","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(" "+t._s(t.dropDownText)+" ")]),t._v(" "),s("div",{staticClass:"dropdown-menu dropdown-primary"},t._l(t.columns,function(e,a){return s("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.selectCol(a)}}},[t._v(" "+t._s(e)+" ")])}))])]),t._v(" "),s("div",{staticClass:"col-2"},[t.selectedCol>=0?s("button",{staticClass:"btn btn-sm btn-amber",on:{click:function(e){e.preventDefault(),t.processSSN(e)}}},[t._v(" Process SSNs ")]):t._e()]),t._v(" "),s("div",{staticClass:"col"},t._l(t.workbook.SheetNames,function(e,a){return s("button",{class:["btn","btn-sm",a==t.currentSheetIndex?"btn-success":"btn-info"],on:{click:function(e){e.preventDefault(),t.changeSheet(a)}}},[t._v(" \n\t\t    \t\t\t\t"+t._s(e)+" \n\t\t    \t\t\t")])}))]),t._v(" "),t._m(1),t._v(" "),s("br"),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.step3,expression:"step3"}],staticClass:"row"},[t._m(2),t._v(" "),s("div",{staticClass:"col-4"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.board,expression:"board"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Board Name"},domProps:{value:t.board},on:{input:function(e){e.target.composing||(t.board=e.target.value)}}})])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.step3,expression:"step3"}],staticClass:"row"},[s("div",{staticClass:"col-12 no-left"},[s("button",{staticClass:"btn btn-sm btn-danger "},[t._v(" Bad: "+t._s(t.numBad)+" ")]),t._v(" "),s("button",{class:["btn","btn-sm","btn-amber"],attrs:{"data-toggle":"tooltip","data-placement":"top",title:"Validate with our records"},on:{click:t.validate}},[t._v(" Validate List ")]),t._v(" "),t.numGood>0?s("button",{class:["btn","btn-sm","btn-success"],attrs:{"data-toggle":"tooltip","data-placement":"top",title:"Make sure the currect type of SURF is requested"},on:{click:t.runSurf}},[t._v(" Run ("+t._s(t.numGood)+") "+t._s(t.force)+" "+t._s(t.typeString)+" ")]):t._e()])]),t._v(" "),t._m(3),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("a",{directives:[{name:"show",rawName:"v-show",value:t.showButton,expression:"showButton"}],ref:"surfButton",staticClass:"btn btn-sm btn-info ",attrs:{href:t.href,download:t.board+" "+t.typeString+".zip"}},[t._v(" TEST ")])])])])])])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-3 no-left"},[s("h2",[t._v("Step 2:Preprocess")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{attrs:{id:"myGrid"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-4",staticStyle:{"margin-left":"0","padding-left":"0"}},[s("h2",[t._v("Step 3:Confirm SSNs")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{attrs:{id:"myGrid2"}})])}],n={render:a,staticRenderFns:o};e.a=n},wtEF:function(t,e,s){"use strict";s.d(e,"a",function(){return n});var a=s("7+uW"),o=s("NYxO");a.a.use(o.a);var n=new o.a.Store({state:{asDate:"Undetermined",resetAfsc:!1,startAfsc:!1}})},xJD8:function(t,e,s){"use strict";var a=s("lfLh"),o=s("TVmP");e.a={components:{"app-navbar":a.a,"app-footer":o.a}}}},["NHnr"]);
//# sourceMappingURL=app.bfdb1b7c9a34340ee5ef.js.map