(window.webpackJsonp=window.webpackJsonp||[]).push([[91,14,15,30],{1016:function(t,e,n){"use strict";n(876)},1017:function(t,e,n){var o=n(21)((function(i){return i[1]}));o.push([t.i,".service-title[data-v-46547561]{color:#2d2d2d;font-family:SVN-Gilroy;font-size:14px;font-style:normal;font-weight:600;line-height:normal}.support-hr[data-v-46547561]{margin:25px 0}.img-note[data-v-46547561]{color:#2d2d2d;font-family:SVN-Gilroy;font-size:12px;font-style:italic;font-weight:400;line-height:normal}.box-x[data-v-46547561]{background:#fff;border:1px solid #e5e5e5;border-radius:10px;overflow:hidden}.box-x .box-img[data-v-46547561]{border-radius:10px;height:109px;overflow:hidden}.box-x .box-img img[data-v-46547561]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.input-group-service[data-v-46547561]{margin-bottom:24px}.btn-service-delete[data-v-46547561],.btn-service-upload[data-v-46547561]{cursor:pointer}.action-benefits[data-v-46547561]{cursor:pointer;position:absolute;right:4px;top:7px}.action-benefits div[data-v-46547561]{width:32px}.form-benefits[data-v-46547561]{background:#fff;border:1px solid #e5e5e5;border-radius:10px;color:#0056b1;font-family:SVN-Gilroy;font-size:14px;font-style:normal;font-weight:400;height:calc(1.6em + 1rem + 2px);line-height:normal;padding:.575rem .75rem}",""]),o.locals={},t.exports=o},1186:function(t,e,n){"use strict";n.r(e);var o=n(253),r=n(166),l=n(1),d=n(708),c=(n(220),n(13)),v=n(0),h=(n(42),n(6),n(2),n(51),n(58),n(749),n(507),n(4),n(88),n(268),n(25),n(20),n(3),n(15),n(747)),f=n(746),_=n(729),m=n(65),C=(n(506),n(29)),x=n.n(C),k={components:{ButtonComponent:_.default},layout:"admin",head:{title:"thêm mới dịch vụ",meta:[{hid:"description",name:"description",content:"Home page description"}]},data:function(){var t;return t={title:{name:"Thêm mới dịch vụ",previous:"/admin/service"},khoa_dich_vu:!1,suneditorInstance:null,image:null,suneditorcam_hop_dong_dich_vu:null,hop_dong_dich_vu:null,ten_dich_vu:null,gia_tri:"Nhập nội dung",suneditorcam_ketInstance:null,cam_ket:"Nhập nội dung",name_benefit:"",link_benefit:"",name_benefit_edit:"",link_benefit_edit:"",id_benefit_edit:"",do_tuoi:[],do_tuoi_id:0,loai_dich_vu:[],loai_dich_vu_id:0,todos:[]},Object(v.a)(t,"image",null),Object(v.a)(t,"file",null),Object(v.a)(t,"link",null),t},computed:{token:function(){return JSON.parse(localStorage.getItem("user")).auth_key}},methods:{delete_img:function(){this.image=null,this.file=null},handleFileChange:function(t){var img=t.target.files[0];this.file=img,img&&(this.image=URL.createObjectURL(img))},add_benefit:function(){if(console.log(this.name_benefit,this.link_benefit),""!=this.name_benefit&&""!=this.link_benefit){var t=this.todos.length+1;this.todos.push({id:t,name_benefit:this.name_benefit,link_benefit:this.link_benefit}),this.name_benefit="",this.link_benefit="",this.$refs["my-modal"].hide()}else x.a.error("Bạn cần nhập đầy đủ thông tin")},deleteTodo:function(t){this.todos=this.todos.filter((function(e){return e.id!==t}))},show_edit:function(t){var e=this.todos.find((function(e){return e.id===t}));e?(console.log(e),this.name_benefit_edit=e.name_benefit,this.link_benefit_edit=e.link_benefit,this.id_benefit_edit=e.id):x.a.error("Lỗi thao tác id:"+t)},edit_benefit:function(){var t=this;if(""!=this.name_benefit_edit&&""!=this.link_benefit_edit){console.log(this.name_benefit_edit,this.id_benefit_edit);var e=this.todos.findIndex((function(e){return e.id===t.id_benefit_edit}));-1!==e&&(this.todos[e].name_benefit=this.name_benefit_edit,this.todos[e].link_benefit=this.link_benefit_edit,this.$refs["my-modal-edit"].hide(),this.name_benefit_edit="",this.link_benefit_edit="",this.id_benefit_edit="")}else x.a.error("Bạn cần nhập đầy đủ thông tin")},load_role:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.default.get("dich-vu/loai-dich-vu",{"Content-Type":"multipart/form-data",Authorization:"Bearer "+t.token}).then((function(e){var n;t.loai_dich_vu=null==e||null===(n=e.data)||void 0===n?void 0:n.data.map((function(t){return{value:t.id,text:t.name}})),t.loai_dich_vu_id=t.loai_dich_vu[0].value}));case 2:return e.next=4,m.default.get("dich-vu/get-do-tuoi",{"Content-Type":"multipart/form-data",Authorization:"Bearer "+t.token}).then((function(e){var n;t.do_tuoi=null==e||null===(n=e.data)||void 0===n?void 0:n.data.map((function(t){return{value:t.id,text:t.name}})),t.do_tuoi_id=t.do_tuoi[0].value}));case 4:case"end":return e.stop()}}),e)})))()},send_data:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!=e.hop_dong_dich_vu&&null!=e.hop_dong_dich_vu){t.next=3;break}return x.a.error("vui lòng nhập đủ thông tin"),t.abrupt("return");case 3:return(n=new FormData).append("khoa_dich_vu",e.khoa_dich_vu?1:0),n.append("ten_dich_vu",e.ten_dich_vu),n.append("gia_tri",e.gia_tri),n.append("do_tuoi_id",e.do_tuoi_id),n.append("cam_ket",e.cam_ket),n.append("hop_dong_dich_vu",e.hop_dong_dich_vu),n.append("image",e.file),n.append("link",e.link),n.append("loai_dich_vu_id",e.loai_dich_vu_id),e.todos.forEach((function(t,e){n.append("quyen_loi[".concat(e,"][name]"),t.name_benefit),n.append("quyen_loi[".concat(e,"][link]"),t.link_benefit)})),n.forEach((function(t,e){console.log("".concat(e,": ").concat(t))})),t.next=17,m.default.post("dich-vu/tao-moi",n,{"Content-Type":"multipart/form-data",Authorization:"Bearer "+e.token}).then((function(t){var n;200==(null==t?void 0:t.status)&&(x.a.success(null==t||null===(n=t.data)||void 0===n?void 0:n.message),e.$router.push("/admin/service"))}));case 17:case"end":return t.stop()}}),t)})))()}},mounted:function(){var t=this;this.$store.dispatch("title/set_title",this.title),this.load_role();var e=h.a.create(document.getElementById("gia_tri")||"gia_tri",{toolbarContainer:"#toolbar_container",showPathLabel:!1,charCounter:!0,width:"auto",height:"auto",minHeight:"100px",maxHeight:"250px",plugins:f.a,buttonList:[["undo","redo","font","fontSize","formatBlock"],["bold","underline","italic","strike","subscript","superscript","removeFormat"],["fontColor","hiliteColor","outdent","indent","align","horizontalRule","list","table"],["link","image","video","fullScreen","showBlocks","codeView","preview","print","save"]],callBackSave:function(t,e){this.gia_tri=t,console.log(t)}});this.suneditorInstance=e,this.suneditorInstance.onChange=function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(n,o){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.gia_tri=n,e.next=3,console.log(t.gia_tri);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();var n=h.a.create(document.getElementById("cam_ket")||"cam_ket",{toolbarContainer:"#toolbar_container",showPathLabel:!1,charCounter:!0,width:"auto",height:"auto",minHeight:"100px",maxHeight:"250px",plugins:f.a,buttonList:[["undo","redo","font","fontSize","formatBlock"],["bold","underline","italic","strike","subscript","superscript","removeFormat"],["fontColor","hiliteColor","outdent","indent","align","horizontalRule","list","table"],["link","image","video","fullScreen","showBlocks","codeView","preview","print","save"]],callBackSave:function(t,e){this.cam_ket=t,console.log(t)}});this.suneditorcam_ketInstance=n,this.suneditorcam_ketInstance.onChange=function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(n,o){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.cam_ket=n,e.next=3,console.log(t.cam_ket);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();var o=h.a.create(document.getElementById("hop_dong_dich_vu")||"hop_dong_dich_vu",{toolbarContainer:"#toolbar_container",showPathLabel:!1,charCounter:!0,width:"auto",height:"auto",minHeight:"100px",maxHeight:"250px",plugins:f.a,buttonList:[["undo","redo","font","fontSize","formatBlock"],["bold","underline","italic","strike","subscript","superscript","removeFormat"],["fontColor","hiliteColor","outdent","indent","align","horizontalRule","list","table"],["link","image","video","fullScreen","showBlocks","codeView","preview","print","save"]],callBackSave:function(t,e){this.hop_dong_dich_vu=t,console.log(t)}});this.suneditorcam_ketInstance=o,this.suneditorcam_ketInstance.onChange=function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(n,o){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.hop_dong_dich_vu=n,e.next=3,console.log(t.hop_dong_dich_vu);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}},w=k,y=(n(1016),n(36)),component=Object(y.a)(w,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-mp"},[e("div",{staticClass:"service-edit"},[e("div",{staticClass:"mb-7 d-none d-sm-block"},[e("div",{staticClass:"d-flex justify-content-between align-items-center"},[e("title-header",[t._v("\n                    Thêm dịch vụ\n                ")])],1)]),t._v(" "),e("b-row",[e("b-col",{staticClass:"mt-0 pt-0",attrs:{cols:"12",sm:"9",md:"7"}},[e("div",{staticClass:"w-100"},[e("div",{staticClass:"mt-2 d-flex justify-content-between align-items-center"},[e("span",[e("svg",{attrs:{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M14.8263 6.4735C14.5997 6.38016 14.2997 6.3335 13.9263 6.3335H10.4063C9.24634 6.3335 8.83301 6.74683 8.83301 7.92016V13.0802C8.83301 13.4668 8.87967 13.7668 8.97967 14.0002C9.18634 14.4802 9.62634 14.6668 10.4063 14.6668H13.9263C15.0863 14.6668 15.4997 14.2468 15.4997 13.0802V7.92016C15.4997 7.12683 15.313 6.68016 14.8263 6.4735ZM12.833 13.1668H11.4997C11.4863 13.1668 11.4663 13.1668 11.453 13.1602C11.353 13.1535 11.2663 13.1202 11.193 13.0535C11.073 12.9668 10.9997 12.8268 10.9997 12.6668C10.9997 12.3935 11.2263 12.1668 11.4997 12.1668H12.833C13.1063 12.1668 13.333 12.3935 13.333 12.6668C13.333 12.9402 13.1063 13.1668 12.833 13.1668Z",fill:"#FC4D32"}}),t._v(" "),e("path",{attrs:{d:"M14.8262 4.12683V4.66683C14.8262 5.0335 14.5262 5.3335 14.1595 5.3335H10.4062C8.69952 5.3335 7.83285 6.20683 7.83285 7.92016V14.0002C7.83285 14.3668 7.53285 14.6668 7.16618 14.6668H5.86618C5.59952 14.6668 5.38618 14.4535 5.38618 14.1935C5.38618 13.9268 5.59952 13.7202 5.86618 13.7202H7.16618V11.1668H4.83285C3.35285 11.0935 2.17285 9.8735 2.17285 8.3735V4.12683C2.17285 2.58683 3.42618 1.3335 4.97285 1.3335H12.0329C13.5729 1.3335 14.8262 2.58683 14.8262 4.12683Z",fill:"#FC4D32"}})]),t._v(" "),e("span",{staticClass:"service-title"},[t._v("Khóa dịch vụ")])]),t._v(" "),e("span",[e("b-form-checkbox",{attrs:{switch:"",size:"lg"},model:{value:t.khoa_dich_vu,callback:function(e){t.khoa_dich_vu=e},expression:"khoa_dich_vu"}})],1)]),t._v(" "),e("hr",{staticClass:"support-hr"}),t._v(" "),e("div",{staticClass:"mt-3 mb-6"},[e("div",{staticClass:"mb-2"},[e("strong",{staticClass:"service-title"},[e("svg",{attrs:{width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M2.22003 12.6735L2.2067 12.6868C2.0267 12.2935 1.91337 11.8468 1.8667 11.3535C1.91337 11.8402 2.04003 12.2802 2.22003 12.6735Z",fill:"#FFB761"}}),t._v(" "),e("path",{attrs:{d:"M6.5 6.91992C7.37629 6.91992 8.08666 6.20954 8.08666 5.33325C8.08666 4.45696 7.37629 3.74658 6.5 3.74658C5.6237 3.74658 4.91333 4.45696 4.91333 5.33325C4.91333 6.20954 5.6237 6.91992 6.5 6.91992Z",fill:"#FFB761"}}),t._v(" "),e("path",{attrs:{d:"M11.2934 1.3335H5.70671C3.28004 1.3335 1.83337 2.78016 1.83337 5.20683V10.7935C1.83337 11.5202 1.96004 12.1535 2.20671 12.6868C2.78004 13.9535 4.00671 14.6668 5.70671 14.6668H11.2934C13.72 14.6668 15.1667 13.2202 15.1667 10.7935V9.26683V5.20683C15.1667 2.78016 13.72 1.3335 11.2934 1.3335ZM14.08 8.3335C13.56 7.88683 12.72 7.88683 12.2 8.3335L9.42671 10.7135C8.90671 11.1602 8.06671 11.1602 7.54671 10.7135L7.32004 10.5268C6.84671 10.1135 6.09337 10.0735 5.56004 10.4335L3.06671 12.1068C2.92004 11.7335 2.83337 11.3002 2.83337 10.7935V5.20683C2.83337 3.32683 3.82671 2.3335 5.70671 2.3335H11.2934C13.1734 2.3335 14.1667 3.32683 14.1667 5.20683V8.40683L14.08 8.3335Z",fill:"#FFB761"}})]),t._v(" "),e("span",[t._v("Hình ảnh")])]),t._v(" "),e("i",{staticClass:"img-note"},[t._v("(Tối thiểu không quá 2mb)")])]),t._v(" "),e("div",{staticClass:"input-grop"},[e("div",{staticClass:"box-x d-flex justify-content-between p-2"},[e("div",{staticClass:"box-img"},[e("input",{attrs:{type:"file",hidden:"",id:"img"},on:{change:t.handleFileChange}}),t._v(" "),t.image?e("img",{attrs:{src:t.image,alt:""}}):e("img",{attrs:{src:n(745),alt:""}}),t._v(" "),e("input",{staticClass:"d-none",attrs:{id:"images",type:"file"}})]),t._v(" "),e("div",{staticClass:"action"},[e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"mb-3 btn-service-delete",attrs:{title:"Xoá ảnh"},on:{click:function(e){return t.delete_img()}}},[e("svg",{attrs:{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("circle",{attrs:{cx:"16",cy:"16",r:"16",fill:"#F2F2F2"}}),t._v(" "),e("g",{attrs:{"clip-path":"url(#clip0_207_5736)"}},[e("path",{attrs:{d:"M16.0639 11.1534C18.1966 11.1534 20.3323 11.1594 22.4651 11.1475C22.7971 11.1475 22.9227 11.1802 22.8779 11.5789C22.6266 13.849 22.3634 16.1222 22.2108 18.4013C22.1241 19.6896 22.0194 20.9719 21.9147 22.2572C21.8549 22.9951 21.7921 23.4801 21.6604 24.2061C21.4899 25.1344 21.1071 26.0002 19.755 25.9883C17.2813 25.9913 14.8076 25.9645 12.3368 26.0002C11.3198 26.0151 10.5152 25.8038 10.2789 24.2061C10.0127 22.412 9.44433 14.1019 9.44433 14.1019L9.21699 11.7157C9.21699 11.7157 9.15418 11.1534 9.70755 11.1534C11.8283 11.1534 13.9461 11.1534 16.0669 11.1534H16.0639ZM16.5784 18.55C16.5784 17.2736 16.5784 15.9972 16.5784 14.7208C16.5784 14.2983 16.363 14.0305 16.028 14.0216C15.6541 14.0127 15.3849 14.3072 15.3849 14.7387C15.3849 17.2766 15.3849 19.8145 15.3879 22.3554C15.3879 22.8047 15.6361 23.1052 15.9981 23.1171C16.3361 23.129 16.5724 22.8107 16.5724 22.3376C16.5724 21.0761 16.5724 19.8115 16.5724 18.55H16.5784ZM19.4649 18.5411C19.4649 17.2498 19.4649 15.9556 19.4649 14.6643C19.4649 14.4977 19.4858 14.331 19.3153 14.212C19.1239 14.0781 18.9444 13.9591 18.6961 14.0692C18.3791 14.209 18.2834 14.453 18.2864 14.7803C18.2953 17.2944 18.2953 19.8115 18.3013 22.3257C18.3013 22.8017 18.5316 23.1082 18.8816 23.1112C19.2316 23.1171 19.4709 22.8017 19.4709 22.3376C19.4709 21.0731 19.4709 19.8086 19.4709 18.5441L19.4649 18.5411ZM13.6918 18.5708C13.6918 17.2528 13.6918 15.9347 13.6918 14.6167C13.6918 14.218 13.5213 14.0305 13.1594 14.0246C12.8453 14.0186 12.5911 14.2686 12.5911 14.6167C12.5881 17.2379 12.5881 19.8621 12.5911 22.4834C12.5911 22.8583 12.8663 23.1409 13.1833 23.1082C13.5513 23.0695 13.7038 22.8702 13.6978 22.4863C13.6799 21.1832 13.6918 19.877 13.6918 18.5738V18.5708Z",fill:"#979797"}}),t._v(" "),e("path",{attrs:{d:"M15.9776 10.0553C13.7461 10.0553 11.5147 10.0553 9.28024 10.0553C8.58927 10.0553 8 9.51382 8 8.88008C8 8.29097 8.58628 7.72864 9.25631 7.72269C10.5844 7.71079 11.9125 7.70781 13.2406 7.72864C13.6085 7.73459 13.7222 7.63938 13.7042 7.26152C13.6713 6.59802 14.2786 6.01486 14.9576 6.00891C15.6366 6.00296 16.3156 6.04462 16.9916 5.99999C17.7035 5.95238 18.3436 6.6129 18.2868 7.23771C18.2509 7.63641 18.4124 7.73162 18.7893 7.72566C20.0755 7.70781 21.3617 7.74947 22.645 7.71674C23.5094 7.69591 24.3081 8.35048 23.8833 9.40076C23.7308 9.7816 23.312 10.0494 22.7616 10.0494C20.599 10.0494 18.4393 10.0494 16.2767 10.0494C16.178 10.0494 16.0793 10.0494 15.9806 10.0494L15.9776 10.0553Z",fill:"#979797"}})]),t._v(" "),e("defs",[e("clipPath",{attrs:{id:"clip0_207_5736"}},[e("rect",{attrs:{width:"16",height:"20",fill:"white",transform:"translate(8 6)"}})])])])]),t._v(" "),e("label",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"btn-service-upload d-block",attrs:{for:"img",title:"Tải ảnh lên"}},[e("svg",{attrs:{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("circle",{attrs:{cx:"16",cy:"16",r:"16",fill:"#F2F2F2"}}),t._v(" "),e("path",{attrs:{d:"M10 11.3846L16 6M16 6L22 11.3846M16 6L16 13",stroke:"#979797","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M15 15V18.9375C15 19.4898 15.4477 19.9375 16 19.9375C16.5523 19.9375 17 19.4898 17 18.9375V15H23C24.1046 15 25 15.8954 25 17V22C25 23.1046 24.1046 24 23 24H9C7.89543 24 7 23.1046 7 22V17C7 15.8954 7.89543 15 9 15H15Z",fill:"#979797"}})])])])])])]),t._v(" "),e("hr",{staticClass:"support-hr"}),t._v(" "),e("div",{staticClass:"mt-2 mb-2 d-flex justify-content-between align-items-center"},[e("span",[e("svg",{attrs:{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M13.0588 6.87422L12.9518 6.72022C12.7645 6.48222 12.5438 6.29322 12.2896 6.15321C11.9485 5.95021 11.5606 5.84521 11.1593 5.84521H2.83224C2.43094 5.84521 2.0497 5.95021 1.7019 6.15321C1.44105 6.30022 1.20696 6.50322 1.013 6.75522C0.631757 7.26622 0.451171 7.89622 0.511366 8.52622L0.758837 11.7952C0.845786 12.7822 0.959489 14.0002 3.07971 14.0002H10.9185C13.0387 14.0002 13.1457 12.7822 13.2394 11.7882L13.4869 8.53322C13.547 7.94522 13.3999 7.35722 13.0588 6.87422ZM8.59764 10.7382H5.39389C5.13305 10.7382 4.92571 10.5142 4.92571 10.2482C4.92571 9.98222 5.13305 9.75822 5.39389 9.75822H8.59764C8.85848 9.75822 9.06582 9.98222 9.06582 10.2482C9.06582 10.5212 8.85848 10.7382 8.59764 10.7382Z",fill:"#4EAEEA"}}),t._v(" "),e("path",{attrs:{d:"M12.6927 4.34012C12.7476 4.72504 12.318 4.98641 11.9403 4.89386C11.6905 4.83262 11.4319 4.80201 11.166 4.80201H2.83229C2.56037 4.80201 2.2915 4.83564 2.03302 4.9006C1.66012 4.99432 1.23376 4.74232 1.23376 4.35783V3.262C1.23376 0.763001 1.9628 0 4.35056 0H5.13979C6.09623 0 6.3972 0.322 6.78513 0.847001L7.58774 1.967C7.75495 2.205 7.76164 2.219 8.05593 2.219H9.64776C11.6278 2.219 12.4653 2.74472 12.6927 4.34012Z",fill:"#4EAEEA"}})]),t._v(" "),e("span",{staticClass:"service-title"},[t._v("Tên dịch vụ "),e("span",{staticClass:"text-danger"},[t._v("*")])])])]),t._v(" "),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.ten_dich_vu,expression:"ten_dich_vu"}],staticClass:"form-control form-benefits",attrs:{type:"text",placeholder:"Nhập tên"},domProps:{value:t.ten_dich_vu},on:{input:function(e){e.target.composing||(t.ten_dich_vu=e.target.value)}}})]),t._v(" "),e("hr",{staticClass:"support-hr"}),t._v(" "),e("div",{staticClass:"mt-2 mb-2 d-flex justify-content-between align-items-center"},[e("span",[e("svg",{attrs:{width:"16",height:"11",viewBox:"0 0 16 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M2.75 4.71429C3.57734 4.71429 4.25 4.0096 4.25 3.14286C4.25 2.27612 3.57734 1.57143 2.75 1.57143C1.92266 1.57143 1.25 2.27612 1.25 3.14286C1.25 4.0096 1.92266 4.71429 2.75 4.71429ZM13.25 4.71429C14.0773 4.71429 14.75 4.0096 14.75 3.14286C14.75 2.27612 14.0773 1.57143 13.25 1.57143C12.4227 1.57143 11.75 2.27612 11.75 3.14286C11.75 4.0096 12.4227 4.71429 13.25 4.71429ZM14 5.5H12.5C12.0875 5.5 11.7148 5.67433 11.443 5.9567C12.3875 6.49933 13.0578 7.47902 13.2031 8.64286H14.75C15.1648 8.64286 15.5 8.29174 15.5 7.85714V7.07143C15.5 6.20469 14.8273 5.5 14 5.5ZM8 5.5C9.45078 5.5 10.625 4.26987 10.625 2.75C10.625 1.23013 9.45078 0 8 0C6.54922 0 5.375 1.23013 5.375 2.75C5.375 4.26987 6.54922 5.5 8 5.5ZM9.8 6.28571H9.60547C9.11797 6.53125 8.57656 6.67857 8 6.67857C7.42344 6.67857 6.88438 6.53125 6.39453 6.28571H6.2C4.70937 6.28571 3.5 7.55268 3.5 9.11429V9.82143C3.5 10.4721 4.00391 11 4.625 11H11.375C11.9961 11 12.5 10.4721 12.5 9.82143V9.11429C12.5 7.55268 11.2906 6.28571 9.8 6.28571ZM4.55703 5.9567C4.28516 5.67433 3.9125 5.5 3.5 5.5H2C1.17266 5.5 0.5 6.20469 0.5 7.07143V7.85714C0.5 8.29174 0.835156 8.64286 1.25 8.64286H2.79453C2.94219 7.47902 3.6125 6.49933 4.55703 5.9567Z",fill:"#00C092"}})]),t._v(" "),e("span",{staticClass:"service-title"},[t._v("Loại dịch vụ")])])]),t._v(" "),e("div",[e("b-form-select",{attrs:{options:t.loai_dich_vu,"aria-placeholder":"Chọn loại dịch vụ",name:"loai_dich_vu_id"},model:{value:t.loai_dich_vu_id,callback:function(e){t.loai_dich_vu_id=e},expression:"loai_dich_vu_id"}})],1),t._v(" "),e("div",{staticClass:"mt-2 mb-2 d-flex justify-content-between align-items-center"},[e("span",[e("svg",{attrs:{width:"16",height:"11",viewBox:"0 0 16 11",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M2.75 4.71429C3.57734 4.71429 4.25 4.0096 4.25 3.14286C4.25 2.27612 3.57734 1.57143 2.75 1.57143C1.92266 1.57143 1.25 2.27612 1.25 3.14286C1.25 4.0096 1.92266 4.71429 2.75 4.71429ZM13.25 4.71429C14.0773 4.71429 14.75 4.0096 14.75 3.14286C14.75 2.27612 14.0773 1.57143 13.25 1.57143C12.4227 1.57143 11.75 2.27612 11.75 3.14286C11.75 4.0096 12.4227 4.71429 13.25 4.71429ZM14 5.5H12.5C12.0875 5.5 11.7148 5.67433 11.443 5.9567C12.3875 6.49933 13.0578 7.47902 13.2031 8.64286H14.75C15.1648 8.64286 15.5 8.29174 15.5 7.85714V7.07143C15.5 6.20469 14.8273 5.5 14 5.5ZM8 5.5C9.45078 5.5 10.625 4.26987 10.625 2.75C10.625 1.23013 9.45078 0 8 0C6.54922 0 5.375 1.23013 5.375 2.75C5.375 4.26987 6.54922 5.5 8 5.5ZM9.8 6.28571H9.60547C9.11797 6.53125 8.57656 6.67857 8 6.67857C7.42344 6.67857 6.88438 6.53125 6.39453 6.28571H6.2C4.70937 6.28571 3.5 7.55268 3.5 9.11429V9.82143C3.5 10.4721 4.00391 11 4.625 11H11.375C11.9961 11 12.5 10.4721 12.5 9.82143V9.11429C12.5 7.55268 11.2906 6.28571 9.8 6.28571ZM4.55703 5.9567C4.28516 5.67433 3.9125 5.5 3.5 5.5H2C1.17266 5.5 0.5 6.20469 0.5 7.07143V7.85714C0.5 8.29174 0.835156 8.64286 1.25 8.64286H2.79453C2.94219 7.47902 3.6125 6.49933 4.55703 5.9567Z",fill:"#00C092"}})]),t._v(" "),e("span",{staticClass:"service-title"},[t._v("Độ tuổi "),e("span",{staticClass:"text-danger"},[t._v("*")])])])]),t._v(" "),e("div",[e("b-form-select",{attrs:{options:t.do_tuoi,"aria-placeholder":"Chọn"},model:{value:t.do_tuoi_id,callback:function(e){t.do_tuoi_id=e},expression:"do_tuoi_id"}})],1),t._v(" "),e("hr",{staticClass:"support-hr"}),t._v(" "),e("div",{staticClass:"mt-4 mb-6"},[e("div",{staticClass:"mb-2"},[e("div",{staticClass:"mb-3"},[e("div",{staticClass:"d-flex justify-content-between align-items-center"},[e("title-header",[t._v("\n                                        Quyền lợi "),e("span",{staticClass:"text-danger"},[t._v("*")])]),t._v(" "),e("button-add",{directives:[{name:"b-modal",rawName:"v-b-modal.my-modal",modifiers:{"my-modal":!0}}],attrs:{addClass:"btn-add-more-law"}},[e("span",{staticClass:"mdi mdi-plus"})])],1)])]),t._v(" "),e("b-modal",{ref:"my-modal",attrs:{id:"my-modal","hide-footer":"",centered:"",title:"Thêm quyền lợi"},scopedSlots:t._u([{key:"default",fn:function(n){var o=n.hide;return[e("div",[e("div",{staticClass:"my-4 pb-3"},[e("div",[e("b-form-group",[e("label",[t._v("Tên quyền lợi:")]),t._v(" "),e("b-form-input",{attrs:{name:"link",placeholder:"Nhập tên quyền lợi"},model:{value:t.name_benefit,callback:function(e){t.name_benefit=e},expression:"name_benefit"}})],1)],1),t._v(" "),e("div",[e("b-form-group",[e("label",[t._v("Đường dẫn:")]),t._v(" "),e("b-form-input",{attrs:{name:"link",placeholder:"Nhập đường dẫn"},model:{value:t.link_benefit,callback:function(e){t.link_benefit=e},expression:"link_benefit"}})],1)],1)]),t._v(" "),e("div",{staticClass:"mt-4 pb-3 d-flex justify-content-between align-items-center w-100"},[e("button",{staticClass:"btn-cancel me-1",on:{click:function(t){return o()}}},[t._v("Hủy")]),t._v(" "),e("button",{staticClass:"btn-delete ms-1",on:{click:function(e){return t.add_benefit()}}},[t._v("Thêm")])])])]}}])}),t._v(" "),e("b-modal",{ref:"my-modal-edit",attrs:{id:"my-modal-edit","hide-footer":"",centered:"",title:"Sửa quyền lợi"},scopedSlots:t._u([{key:"default",fn:function(n){var o=n.hide;return[e("div",[e("div",{staticClass:"my-4 pb-3"},[e("div",[e("b-form-group",[e("label",[t._v("Tên quyền lợi:")]),t._v(" "),e("b-form-input",{attrs:{name:"link",placeholder:"Nhập tên quyền lợi"},model:{value:t.name_benefit_edit,callback:function(e){t.name_benefit_edit=e},expression:"name_benefit_edit"}})],1)],1),t._v(" "),e("div",[e("b-form-group",[e("label",[t._v("Đường dẫn:")]),t._v(" "),e("b-form-input",{attrs:{name:"link",placeholder:"Nhập đường dẫn"},model:{value:t.link_benefit_edit,callback:function(e){t.link_benefit_edit=e},expression:"link_benefit_edit"}})],1)],1)]),t._v(" "),e("div",{staticClass:"mt-4 pb-3 d-flex justify-content-between align-items-center w-100"},[e("button",{staticClass:"btn-cancel me-1",on:{click:function(t){return o()}}},[t._v("Hủy")]),t._v(" "),e("button",{staticClass:"btn-delete ms-1",on:{click:function(e){return t.edit_benefit()}}},[t._v("Sửa")])])])]}}])}),t._v(" "),t._l(t.todos,(function(n,c){return e("div",{key:c,staticClass:"input-group-service"},[e("div",{staticClass:"service-title mb-2"},[e("span",[t._v(t._s(c+1)+". "+t._s(null==n?void 0:n.name_benefit))])]),t._v(" "),e("div",{staticClass:"d-block position-relative"},[e("input",{staticClass:"form-control form-benefits",attrs:{type:"text",placeholder:"Nhập đường dẫn"},domProps:{value:null==n?void 0:n.link_benefit}}),t._v(" "),e("div",{staticClass:"text-center action-benefits"},[e(d.a,{attrs:{"offset-y":"","open-on-hover":"",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,r=n.attrs;return[e("div",t._g(t._b({},"div",r,!1),o),[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"4",height:"18",viewBox:"0 0 4 18",fill:"none"}},[e("path",{attrs:{d:"M2 10C2.55228 10 3 9.55228 3 9C3 8.44772 2.55228 8 2 8C1.44772 8 1 8.44772 1 9C1 9.55228 1.44772 10 2 10Z",stroke:"#979797","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{d:"M2 3C2.55228 3 3 2.55228 3 2C3 1.44772 2.55228 1 2 1C1.44772 1 1 1.44772 1 2C1 2.55228 1.44772 3 2 3Z",stroke:"#979797","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),e("path",{attrs:{d:"M2 17C2.55228 17 3 16.5523 3 16C3 15.4477 2.55228 15 2 15C1.44772 15 1 15.4477 1 16C1 16.5523 1.44772 17 2 17Z",stroke:"#979797","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])])]}}],null,!0)},[t._v(" "),e(o.a,[e(r.a,[e(l.c,{directives:[{name:"b-modal",rawName:"v-b-modal.my-modal-edit",modifiers:{"my-modal-edit":!0}}],on:{click:function(e){return t.show_edit(null==n?void 0:n.id)}}},[t._v("Sửa quyền\n                                                    lợi")])],1),t._v(" "),e(r.a,[e(l.c,{on:{click:function(e){return t.deleteTodo(null==n?void 0:n.id)}}},[t._v("Xóa")])],1)],1)],1)],1)])])}))],2),t._v(" "),e("hr",{staticClass:"support-hr"}),t._v(" "),e("div",{staticClass:"mt-4 mb-6"},[e("div",{staticClass:"mb-2"},[e("div",{staticClass:"mb-3"},[e("div",{staticClass:"d-flex justify-content-between align-items-center"},[e("title-header",[t._v("\n                                        Giá trị "),e("span",{staticClass:"text-danger"},[t._v("*")])])],1)])]),t._v(" "),e("div",{},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.gia_tri,expression:"gia_tri"}],attrs:{id:"gia_tri"},domProps:{value:t.gia_tri},on:{input:function(e){e.target.composing||(t.gia_tri=e.target.value)}}})])]),t._v(" "),e("hr",{staticClass:"support-hr"}),t._v(" "),e("div",{staticClass:"mt-4 mb-6"},[e("div",{staticClass:"mb-2"},[e("div",{staticClass:"mb-3"},[e("div",{staticClass:"d-flex justify-content-between align-items-center"},[e("title-header",[t._v("\n                                        Cam kết "),e("span",{staticClass:"text-danger"},[t._v("*")])])],1)])]),t._v(" "),e("div",{},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.cam_ket,expression:"cam_ket"}],attrs:{id:"cam_ket"},domProps:{value:t.cam_ket},on:{input:function(e){e.target.composing||(t.cam_ket=e.target.value)}}})])]),t._v(" "),e("hr",{staticClass:"support-hr"}),t._v(" "),e("div",{staticClass:"mt-4 mb-6"},[e("div",{staticClass:"mb-2"},[e("div",{staticClass:"mb-3"},[e("div",{staticClass:"d-flex justify-content-between align-items-center"},[e("title-header",[t._v("\n                                        Hợp đồng dịch vụ "),e("span",{staticClass:"text-danger"},[t._v("*")])])],1)])]),t._v(" "),e("div",[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.hop_dong_dich_vu,expression:"hop_dong_dich_vu"}],attrs:{id:"hop_dong_dich_vu"},domProps:{value:t.hop_dong_dich_vu},on:{input:function(e){e.target.composing||(t.hop_dong_dich_vu=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"mt-3"},[e("div",{staticClass:"mb-2"},[e("div",{staticClass:"mb-3"},[e("div",{staticClass:"d-flex justify-content-between align-items-center"},[e("title-header",[t._v("\n                                            Chi tiết dịch vụ "),e("span",{staticClass:"text-danger"},[t._v("*")])])],1)])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.link,expression:"link"}],staticClass:"form-control form-benefits",attrs:{type:"text",placeholder:"Nhập đường dẫn"},domProps:{value:t.link},on:{input:function(e){e.target.composing||(t.link=e.target.value)}}})])]),t._v(" "),e("hr",{staticClass:"support-hr"}),t._v(" "),e("div",{staticClass:"mt-8",on:{click:function(e){return t.send_data()}}},[e("button-component",[t._v("Lưu thay đổi")])],1)])])],1)],1)])}),[],!1,null,"46547561",null);e.default=component.exports;installComponents(component,{TitleHeader:n(726).default,ButtonAdd:n(730).default,ButtonComponent:n(729).default})},723:function(t,e,n){var content=n(728);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("794e685a",content,!0,{sourceMap:!1})},724:function(t,e,n){var content=n(732);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("6ef7f2ae",content,!0,{sourceMap:!1})},725:function(t,e,n){var content=n(734);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("7e2793ea",content,!0,{sourceMap:!1})},726:function(t,e,n){"use strict";n.r(e);n(727);var o=n(36),component=Object(o.a)({},(function(){return(0,this._self._c)("h3",{staticClass:"title-component"},[this._t("default")],2)}),[],!1,null,"4f45fb1e",null);e.default=component.exports},727:function(t,e,n){"use strict";n(723)},728:function(t,e,n){var o=n(21)((function(i){return i[1]}));o.push([t.i,".title-component[data-v-4f45fb1e]{color:#2d2d2d;font-family:SVN-Gilroy;font-size:19px;font-style:normal;font-weight:700;line-height:normal;margin:0}",""]),o.locals={},t.exports=o},729:function(t,e,n){"use strict";n.r(e);var o=n(277),r={props:{addClass:{type:String,default:""},typeBtn:{type:String,default:"button"}},computed:{computedClasses:function(){return""==this.addClass?"primary button":this.addClass+" button"}}},l=(n(731),n(36)),component=Object(l.a)(r,(function(){var t=this;return(0,t._self._c)(o.a,{class:t.computedClasses+" hover",attrs:{height:"100%",type:t.typeBtn}},[t._t("default")],2)}),[],!1,null,"8383f84e",null);e.default=component.exports},730:function(t,e,n){"use strict";n.r(e);var o={props:{addClass:{type:String,default:""}},computed:{computedClasses:function(){return this.addClass+" button"}}},r=(n(733),n(36)),component=Object(r.a)(o,(function(){var t=this;return(0,t._self._c)("div",{class:t.computedClasses+" hover"},[t._t("default")],2)}),[],!1,null,"346bd5ea",null);e.default=component.exports},731:function(t,e,n){"use strict";n(724)},732:function(t,e,n){var o=n(21)((function(i){return i[1]}));o.push([t.i,".button[data-v-8383f84e]{border-radius:42px;color:#fff!important;cursor:pointer;font-family:SVN-Gilroy!important;font-size:16px!important;font-style:normal!important;font-weight:500!important;padding:12px!important;text-align:center!important;transition:.3s;width:100%!important}.danger[data-v-8383f84e]{background:#fc4d32;border:1px solid #fc4d32!important}.danger[data-v-8383f84e]:hover{background:#e7371c}.silver[data-v-8383f84e]{background:#e5e5e5!important;color:#2d2d2d!important}.silver[data-v-8383f84e]:hover{background:#9c9c9c}.primary[data-v-8383f84e]{background:#0056b1!important;border:1px solid #0056b1!important}.primary[data-v-8383f84e]:hover{background:#004691!important}.hover[data-v-8383f84e]{font-family:SVN-Gilroy;font-size:16px;font-style:normal;font-weight:500;line-height:20px;transition:.3s}.btn-header[data-v-8383f84e]{display:inline;padding:8px 28px}",""]),o.locals={},t.exports=o},733:function(t,e,n){"use strict";n(725)},734:function(t,e,n){var o=n(21)((function(i){return i[1]}));o.push([t.i,".button[data-v-346bd5ea]{background:#e8f3ff;border:1px solid #4eaeea;border-radius:42px;color:#4eaeea;cursor:pointer;padding:10px;text-align:center}.btn-success-2[data-v-346bd5ea]{background:#e3f9e5;border:1px solid #18cb3f;color:#18cb3f}.btn-danger-2[data-v-346bd5ea]{background:#ffebe8;border:1px solid #c91919;color:#c91919}.hover[data-v-346bd5ea]{font-family:SVN-Gilroy;font-size:16px;font-style:normal;font-weight:500;line-height:20px;transition:.3s}.hover[data-v-346bd5ea]:hover{background:transparent}.btn-header[data-v-346bd5ea]{display:inline;padding:8px 28px}.btn-add-more-law[data-v-346bd5ea]{display:inline;font-size:20px;height:44px;text-align:center;width:44px}",""]),o.locals={},t.exports=o},745:function(t,e,n){t.exports=n.p+"img/Rectangle4052.4da3e7c.png"},876:function(t,e,n){var content=n(1017);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("d5164690",content,!0,{sourceMap:!1})}}]);