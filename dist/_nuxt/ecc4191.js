(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1092:function(t,n,e){"use strict";e(915)},1093:function(t,n,e){var o=e(21)((function(i){return i[1]}));o.push([t.i,".btn-excel[data-v-0cd2711c]{background:#00c092}.btn-excel[data-v-0cd2711c],.btn-pdf[data-v-0cd2711c]{align-items:center;border-radius:46px;color:#fff;display:flex;flex-shrink:0;font-family:SVN-Gilroy;font-size:14px;font-style:normal;font-weight:500;gap:10px;justify-content:center;line-height:normal;padding:12px 32px}.btn-pdf[data-v-0cd2711c]{background:#0056b1}.blade-id[data-v-0cd2711c]{display:inline;display:initial}.box-img[data-v-0cd2711c]{border-radius:50%;height:55px;overflow:hidden;width:55px}.box-img img[data-v-0cd2711c]{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}",""]),o.locals={},t.exports=o},1230:function(t,n,e){"use strict";e.r(n);var o=e(850),r=e(1153),l=(e(20),e(13)),d=(e(42),e(14),e(6),e(15),e(65)),c=e(506),v=e.n(c),_=e(29),h=e.n(_),m={layout:"admin",data:function(){return{title:{name:"Tạo phiếu lương",previous:"/admin/dashboard/salary"},data:null,date:(new Date).toISOString().substr(0,7),month:1,menu:!1,modal:!1,tong_tien:0,tong_tien_2:0,ghi_chu:null}},validate:function(t){var n=t.params;return/^\d+$/.test(n.id)},computed:{id:function(){return this.$route.params.id},date_l:function(){return this.$route.params.date_l},token:function(){return JSON.parse(localStorage.getItem("user")).auth_key}},methods:{load_data:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function n(){var e,o,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.date_l,r=o.split("-"),n.next=4,d.default.get("chi-luong/tao-phieu-luong?thang=".concat((null!==(e=t.$route.query.t)&&void 0!==e?e:r[1])+"/"+r[0],"&id=")+t.id,{"Content-Type":"multipart/form-data",Authorization:"Bearer "+t.token}).then((function(n){var e,o,r=null==n||null===(e=n.data)||void 0===e?void 0:e.data;t.data=r,t.tong_tien=null===(o=t.data)||void 0===o?void 0:o.so_tien_con_lai}));case 4:case"end":return n.stop()}}),n)})))()},send_data:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function n(){var e,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(o=new FormData).append("tong_tien",t.tong_tien),o.append("phieu_luong_id",null===(e=t.data)||void 0===e?void 0:e.phieu_luong_id),o.append("ghi_chu",t.ghi_chu),n.next=6,d.default.post("chi-luong/thanh-toan",o,{"Content-Type":"multipart/form-data",Authorization:"Bearer "+t.token}).then((function(n){var e;200==(null==n?void 0:n.status)&&(h.a.success(null==n||null===(e=n.data)||void 0===e?void 0:e.message),t.$refs["my-modal"].hide(),t.load_data())}));case 6:case"end":return n.stop()}}),n)})))()},send_data_2:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function n(){var e,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(o=new FormData).append("tong_tien",t.tong_tien_2),o.append("phieu_luong_id",null===(e=t.data)||void 0===e?void 0:e.phieu_luong_id),o.append("ghi_chu",t.ghi_chu),n.next=6,d.default.post("chi-luong/thanh-toan",o,{"Content-Type":"multipart/form-data",Authorization:"Bearer "+t.token}).then((function(n){var e;200==(null==n?void 0:n.status)&&(h.a.success(null==n||null===(e=n.data)||void 0===e?void 0:e.message),t.$refs["my-modal-2"].hide(),t.load_data())}));case 6:case"end":return n.stop()}}),n)})))()},export_excel:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function n(){var e,o,r,l,c,_;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return v.a.fire({title:"Đang xử lý yêu cầu!",html:"Vui lòng chờ...",timerProgressBar:!0}).then((function(t){t.dismiss===v.a.DismissReason.timer&&console.log("I was closed by the timer")})),o=new Date,o.getDate(),r=o.getMonth()+1,l=o.getFullYear(),c=t.date_l,_=c.split("-"),console.log("".concat(r,"/").concat(l)),n.next=10,d.default.get("chi-luong/export-phieu-luong?id=".concat(t.id,"&thang=").concat((null!==(e=t.$route.query.t)&&void 0!==e?e:_[1])+"/"+_[0]),{"Content-Type":"multipart/form-data",Authorization:"Bearer "+t.token}).then((function(t){var n;v.a.close(),h.a.success("Tải xuống thành công"),window.open(null==t||null===(n=t.data)||void 0===n?void 0:n.data)}));case 10:case"end":return n.stop()}}),n)})))()},export_pdf:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function n(){var e,o,r,l,c,_;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return v.a.fire({title:"Đang xử lý yêu cầu!",html:"Vui lòng chờ...",timerProgressBar:!0}).then((function(t){t.dismiss===v.a.DismissReason.timer&&console.log("I was closed by the timer")})),o=new Date,o.getDate(),r=o.getMonth()+1,l=o.getFullYear(),c=t.date_l,_=c.split("-"),console.log("".concat(r,"/").concat(l)),n.next=10,d.default.get("/chi-luong/pdf-phieu-luong?id=".concat(t.id,"&thang=").concat((null!==(e=t.$route.query.t)&&void 0!==e?e:_[1])+"/"+_[0]),{"Content-Type":"multipart/form-data",Authorization:"Bearer "+t.token}).then((function(t){var n;v.a.close(),h.a.success("Tải xuống thành công"),window.open(null==t||null===(n=t.data)||void 0===n?void 0:n.data)}));case 10:case"end":return n.stop()}}),n)})))()}},mounted:function(){var t;this.title.previous="/admin/dashboard/salary/"+this.id+"?t="+(null!==(t=this.$route.query.t)&&void 0!==t?t:1),this.$store.dispatch("title/set_title",this.title),this.load_data()}},f=(e(1092),e(36)),component=Object(f.a)(m,(function(){var t,n,e,l,d,c,v,_,h,m,f,y,x,C=this,w=C._self._c;return w("div",{staticClass:"content-mp"},[w(r.a,[w(o.a,{staticClass:"mt-0 pt-0",attrs:{xs:"12",sm:"12",md:"8",lg:"8",xl:"8"}},[w("div",[w("div",{staticClass:"my-4 d-flex flex-wrap"},[w("button",{staticClass:"btn-excel",on:{click:function(t){return C.export_excel()}}},[C._v("\n                        Xuất Excel\n                    ")]),C._v(" "),w("button",{staticClass:"btn-pdf ms-3",on:{click:function(t){return C.export_pdf()}}},[C._v("\n                        In phiếu\n                    ")])]),C._v(" "),w("div",{staticClass:"card"},[w("div",{staticClass:"card-header bg-primary text-light text-center"},[w("b",[C._v("PHIẾU LƯƠNG")])]),C._v(" "),w("div",{staticClass:"card-body"},[w("table",{staticClass:"table"},[w("tr",[w("td",{attrs:{colspan:"2"}},[w("div",{staticClass:"text-center"},[w("b",[C._v(C._s(null===(t=C.data)||void 0===t?void 0:t.thoi_gian))])])])]),C._v(" "),w("tr",[w("td",[w("b",[C._v("Họ và tên")])]),C._v(" "),w("td",[w("b",[C._v(C._s(null===(n=C.data)||void 0===n||null===(n=n.giaoVien)||void 0===n?void 0:n.hoten))])])]),C._v(" "),w("tr",[w("td",[w("b",[C._v("Mã đối tác")])]),C._v(" "),w("td",[w("b",[C._v(C._s(null===(e=C.data)||void 0===e||null===(e=e.giaoVien)||void 0===e?void 0:e.id))])])])]),C._v(" "),w("table",{staticClass:"table table-bordered"},[w("thead",[w("tr",[w("td",[w("b",[C._v("Chi tiết khoản mục")])]),C._v(" "),w("td",[w("b",[C._v("Ngày công thực tế")])]),C._v(" "),w("td",[w("b",[C._v("Đơn giá")])])])]),C._v(" "),w("tr",[w("td",{attrs:{colspan:"3"}},[w("b",[C._v("1. Thông tin tính lương")])])]),C._v(" "),C._l(null===(l=C.data)||void 0===l?void 0:l.donDichVu,(function(t,n){var e;return w("tr",{key:n},[w("td",[w("div",[C._v("Mã đơn dịch vụ")]),C._v(" "),w("div",{staticClass:"text-primary"},[w("nuxt-link",{attrs:{to:"/admin/orders/"+(null==t?void 0:t.id)}},[w("span",[C._v(C._s(null!==(e=null==t?void 0:t.ma_don_hang)&&void 0!==e?e:"Chưa cập nhật"))])])],1)]),C._v(" "),w("td",[w("span",[C._v(C._s(null==t?void 0:t.so_buoi))])]),C._v(" "),w("td",[w("span",[C._v(C._s(C.formatCurrency(null==t?void 0:t.tong_tien)))])])])})),C._v(" "),w("tr",[w("td",[w("div",[C._v("Làm thêm giờ")])]),C._v(" "),w("td",[w("span",[C._v("-")])]),C._v(" "),w("td",[w("span",[C._v(C._s(C.formatCurrency(null===(d=C.data)||void 0===d?void 0:d.themGio)))])])]),C._v(" "),w("tr",[w("td",{attrs:{colspan:"2"}},[w("b",[C._v("2. Tổng lương theo ngày công thực tế")])]),C._v(" "),w("td",[w("b",[C._v(C._s(C.formatCurrency(null===(c=C.data)||void 0===c?void 0:c.tongThucTe)))])])]),C._v(" "),w("tr",[w("td",{attrs:{colspan:"2"}},[w("b",[C._v("3. Thu nhập bổ sung")])]),C._v(" "),w("td",[w("b",[C._v(C._s(C.formatCurrency(null===(v=C.data)||void 0===v?void 0:v.tongPhuPhi)))])])]),C._v(" "),C._l(null===(_=C.data)||void 0===_?void 0:_.phuPhiKhac,(function(t,n){return w("tr",{key:n},[w("td",{attrs:{colspan:"2"}},[w("span",[C._v(C._s(null==t?void 0:t.name))])]),C._v(" "),w("td",[w("span",[C._v(C._s(C.formatCurrency(null==t?void 0:t.so_tien)))])])])})),C._v(" "),w("tr",[w("td",{attrs:{colspan:"2"}},[w("b",[C._v("4. Các khoản giảm trừ")])]),C._v(" "),w("td",[w("b",[C._v(C._s(C.formatCurrency(null===(h=C.data)||void 0===h?void 0:h.tongGiamTru)))])])]),C._v(" "),C._l(null===(m=C.data)||void 0===m?void 0:m.giamTru,(function(t,n){return w("tr",{key:n},[w("td",{attrs:{colspan:"2"}},[w("span",[C._v(C._s(null==t?void 0:t.name))])]),C._v(" "),w("td",[w("span",[C._v(C._s(C.formatCurrency(null==t?void 0:t.so_tien)))])])])})),C._v(" "),w("tr",[w("td",{attrs:{colspan:"2"}},[w("b",[C._v("Thành tiền")])]),C._v(" "),w("td",[w("b",[C._v(C._s(C.formatCurrency(null===(f=C.data)||void 0===f?void 0:f.thanhTien)))])])]),C._v(" "),w("tr",[w("td",{attrs:{colspan:"2"}},[w("b",[C._v("Số tiền đã thanh toán")])]),C._v(" "),w("td",[w("b",[C._v(C._s(C.formatCurrency(null===(y=C.data)||void 0===y?void 0:y.so_tien_da_thanh_toan)))])])]),C._v(" "),w("tr",[w("td",{attrs:{colspan:"2"}},[w("b",[C._v("Số tiền còn lại")])]),C._v(" "),w("td",[w("b",[C._v(C._s(C.formatCurrency(null===(x=C.data)||void 0===x?void 0:x.so_tien_con_lai)))])])])],2)]),C._v(" "),w("button",{directives:[{name:"b-modal",rawName:"v-b-modal.my-modal",modifiers:{"my-modal":!0}}],staticClass:"btn btn-primary mb-3"},[C._v("Thanh toán toàn bộ số tiền còn lại")]),C._v(" "),w("button",{directives:[{name:"b-modal",rawName:"v-b-modal.my-modal-2",modifiers:{"my-modal-2":!0}}],staticClass:"btn btn-success mb-3"},[C._v("Thanh toán 1 phần số tiền còn lại")])])]),C._v(" "),w("b-modal",{ref:"my-modal",attrs:{id:"my-modal","hide-footer":"",centered:"",title:"Thanh toán số tiền còn lại"},scopedSlots:C._u([{key:"default",fn:function(t){var n=t.hide;return[w("form",{attrs:{id:"form"}},[w("div",{staticClass:"my-4 pb-3"},[w("div",[w("b-form-group",[w("label",[C._v("Tổng số tiền còn lại:")]),C._v(" "),w("b-form-input",{attrs:{type:"number",name:"tong_tien",placeholder:"Nhập số tiền"},model:{value:C.tong_tien,callback:function(t){C.tong_tien=t},expression:"tong_tien"}})],1)],1),C._v(" "),w("div",[w("b-form-group",[w("label",[C._v("Ghi chú:")]),C._v(" "),w("b-form-input",{attrs:{name:"ghi_chu",placeholder:"Nhập ghi chú"},model:{value:C.ghi_chu,callback:function(t){C.ghi_chu=t},expression:"ghi_chu"}})],1)],1)]),C._v(" "),w("div",{staticClass:"mt-4 pb-3 d-flex justify-content-between align-items-center w-100"},[w("button",{staticClass:"btn-cancel me-1",attrs:{type:"button"},on:{click:function(t){return n()}}},[C._v("Hủy")]),C._v(" "),w("button",{staticClass:"btn-delete ms-1",attrs:{type:"button"},on:{click:C.send_data}},[C._v("Xác nhận")])])])]}}])}),C._v(" "),w("b-modal",{ref:"my-modal-2",attrs:{id:"my-modal-2","hide-footer":"",centered:"",title:"Thanh toán 1 phần số tiền còn lại"},scopedSlots:C._u([{key:"default",fn:function(t){var n=t.hide;return[w("form",{attrs:{id:"form"}},[w("div",{staticClass:"my-4 pb-3"},[w("div",[w("b-form-group",[w("label",[C._v("Tổng số tiền còn lại:")]),C._v(" "),w("b-form-input",{attrs:{type:"number",name:"tong_tien_2",placeholder:"Nhập số tiền"},model:{value:C.tong_tien_2,callback:function(t){C.tong_tien_2=t},expression:"tong_tien_2"}})],1)],1),C._v(" "),w("div",[w("b-form-group",[w("label",[C._v("Ghi chú:")]),C._v(" "),w("b-form-input",{attrs:{name:"ghi_chu",placeholder:"Nhập ghi chú"},model:{value:C.ghi_chu,callback:function(t){C.ghi_chu=t},expression:"ghi_chu"}})],1)],1)]),C._v(" "),w("div",{staticClass:"mt-4 pb-3 d-flex justify-content-between align-items-center w-100"},[w("button",{staticClass:"btn-cancel me-1",attrs:{type:"button"},on:{click:function(t){return n()}}},[C._v("Hủy")]),C._v(" "),w("button",{staticClass:"btn-delete ms-1",attrs:{type:"button"},on:{click:C.send_data_2}},[C._v("Xác nhận")])])])]}}])})],1)],1)],1)}),[],!1,null,"0cd2711c",null);n.default=component.exports},915:function(t,n,e){var content=e(1093);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(22).default)("f7e423fc",content,!0,{sourceMap:!1})}}]);