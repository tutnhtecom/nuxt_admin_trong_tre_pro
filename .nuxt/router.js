import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a7ca4eb8 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _3cc7da33 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _2a51a092 = () => interopDefault(import('../pages/admin/complain/index.vue' /* webpackChunkName: "pages/admin/complain/index" */))
const _4bf28abe = () => interopDefault(import('../pages/admin/dashboard/index.vue' /* webpackChunkName: "pages/admin/dashboard/index" */))
const _c28e1b8e = () => interopDefault(import('../pages/admin/materials/index.vue' /* webpackChunkName: "pages/admin/materials/index" */))
const _23fa30b8 = () => interopDefault(import('../pages/admin/medias/index.vue' /* webpackChunkName: "pages/admin/medias/index" */))
const _b38c51d8 = () => interopDefault(import('../pages/admin/notification/index.vue' /* webpackChunkName: "pages/admin/notification/index" */))
const _4002330e = () => interopDefault(import('../pages/admin/orders/index.vue' /* webpackChunkName: "pages/admin/orders/index" */))
const _5a14e356 = () => interopDefault(import('../pages/admin/parents/index.vue' /* webpackChunkName: "pages/admin/parents/index" */))
const _35c5e11a = () => interopDefault(import('../pages/admin/review-lesson/index.vue' /* webpackChunkName: "pages/admin/review-lesson/index" */))
const _fb9113fc = () => interopDefault(import('../pages/admin/service/index.vue' /* webpackChunkName: "pages/admin/service/index" */))
const _09b77681 = () => interopDefault(import('../pages/admin/students/index.vue' /* webpackChunkName: "pages/admin/students/index" */))
const _5f25b5e4 = () => interopDefault(import('../pages/admin/teacher-training/index.vue' /* webpackChunkName: "pages/admin/teacher-training/index" */))
const _2b3397c1 = () => interopDefault(import('../pages/admin/videos/index.vue' /* webpackChunkName: "pages/admin/videos/index" */))
const _60fbc0a2 = () => interopDefault(import('../pages/admin/dashboard/customer_reports/index.vue' /* webpackChunkName: "pages/admin/dashboard/customer_reports/index" */))
const _3809884e = () => interopDefault(import('../pages/admin/dashboard/salary/index.vue' /* webpackChunkName: "pages/admin/dashboard/salary/index" */))
const _4e3fd74b = () => interopDefault(import('../pages/admin/dashboard/sales_report/index.vue' /* webpackChunkName: "pages/admin/dashboard/sales_report/index" */))
const _ba19220c = () => interopDefault(import('../pages/admin/dashboard/user_report/index.vue' /* webpackChunkName: "pages/admin/dashboard/user_report/index" */))
const _4f9c84e4 = () => interopDefault(import('../pages/admin/lsm/result-training/index.vue' /* webpackChunkName: "pages/admin/lsm/result-training/index" */))
const _94d7c72c = () => interopDefault(import('../pages/admin/lsm/students/index.vue' /* webpackChunkName: "pages/admin/lsm/students/index" */))
const _23c45c12 = () => interopDefault(import('../pages/admin/lsm/teacher-training/index.vue' /* webpackChunkName: "pages/admin/lsm/teacher-training/index" */))
const _54571668 = () => interopDefault(import('../pages/admin/materials/create/index.vue' /* webpackChunkName: "pages/admin/materials/create/index" */))
const _24c006dc = () => interopDefault(import('../pages/admin/materials/create_bg/index.vue' /* webpackChunkName: "pages/admin/materials/create_bg/index" */))
const _b4ed49ee = () => interopDefault(import('../pages/admin/medias/create/index.vue' /* webpackChunkName: "pages/admin/medias/create/index" */))
const _7b3d4e7b = () => interopDefault(import('../pages/admin/my/notification/index.vue' /* webpackChunkName: "pages/admin/my/notification/index" */))
const _466f152d = () => interopDefault(import('../pages/admin/notification/create/index.vue' /* webpackChunkName: "pages/admin/notification/create/index" */))
const _18802bf3 = () => interopDefault(import('../pages/admin/orders/create/index.vue' /* webpackChunkName: "pages/admin/orders/create/index" */))
const _1403610c = () => interopDefault(import('../pages/admin/review-lesson/form-review/index.vue' /* webpackChunkName: "pages/admin/review-lesson/form-review/index" */))
const _1e492302 = () => interopDefault(import('../pages/admin/service/create/index.vue' /* webpackChunkName: "pages/admin/service/create/index" */))
const _fbde9dc0 = () => interopDefault(import('../pages/admin/students/create/index.vue' /* webpackChunkName: "pages/admin/students/create/index" */))
const _7e160154 = () => interopDefault(import('../pages/admin/system/about/index.vue' /* webpackChunkName: "pages/admin/system/about/index" */))
const _fc5b87ce = () => interopDefault(import('../pages/admin/system/banner/index.vue' /* webpackChunkName: "pages/admin/system/banner/index" */))
const _7c739e8c = () => interopDefault(import('../pages/admin/system/configs/index.vue' /* webpackChunkName: "pages/admin/system/configs/index" */))
const _b20d73e2 = () => interopDefault(import('../pages/admin/system/educational-ecosystem/index.vue' /* webpackChunkName: "pages/admin/system/educational-ecosystem/index" */))
const _1cc8ed98 = () => interopDefault(import('../pages/admin/system/support/index.vue' /* webpackChunkName: "pages/admin/system/support/index" */))
const _d0fa1d18 = () => interopDefault(import('../pages/admin/system/tax/index.vue' /* webpackChunkName: "pages/admin/system/tax/index" */))
const _1811e54b = () => interopDefault(import('../pages/admin/system/tutorial/index.vue' /* webpackChunkName: "pages/admin/system/tutorial/index" */))
const _0d7e0c1a = () => interopDefault(import('../pages/admin/teacher-training/create/index.vue' /* webpackChunkName: "pages/admin/teacher-training/create/index" */))
const _11aa93a2 = () => interopDefault(import('../pages/admin/teacher-training/training-result/index.vue' /* webpackChunkName: "pages/admin/teacher-training/training-result/index" */))
const _3c50a1d8 = () => interopDefault(import('../pages/admin/users/admins/index.vue' /* webpackChunkName: "pages/admin/users/admins/index" */))
const _4ffef93a = () => interopDefault(import('../pages/admin/users/parent/index.vue' /* webpackChunkName: "pages/admin/users/parent/index" */))
const _2c433361 = () => interopDefault(import('../pages/admin/users/teachers/index.vue' /* webpackChunkName: "pages/admin/users/teachers/index" */))
const _96db79d2 = () => interopDefault(import('../pages/admin/lsm/students/create/index.vue' /* webpackChunkName: "pages/admin/lsm/students/create/index" */))
const _d0a63796 = () => interopDefault(import('../pages/admin/review-lesson/form-review/create/index.vue' /* webpackChunkName: "pages/admin/review-lesson/form-review/create/index" */))
const _2e0e3d2d = () => interopDefault(import('../pages/admin/users/admins/create/index.vue' /* webpackChunkName: "pages/admin/users/admins/create/index" */))
const _1316d2c2 = () => interopDefault(import('../pages/admin/users/admins/roles/index.vue' /* webpackChunkName: "pages/admin/users/admins/roles/index" */))
const _7320371c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _0329cc39 = () => interopDefault(import('../pages/admin/dashboard/salary/_id/index.vue' /* webpackChunkName: "pages/admin/dashboard/salary/_id/index" */))
const _d6e46914 = () => interopDefault(import('../pages/admin/lsm/result-training/_id.vue' /* webpackChunkName: "pages/admin/lsm/result-training/_id" */))
const _5a561b56 = () => interopDefault(import('../pages/admin/lsm/students/_id/index.vue' /* webpackChunkName: "pages/admin/lsm/students/_id/index" */))
const _c581cd3c = () => interopDefault(import('../pages/admin/lsm/teacher-training/_id/index.vue' /* webpackChunkName: "pages/admin/lsm/teacher-training/_id/index" */))
const _614435b6 = () => interopDefault(import('../pages/admin/materials/detail/_id.vue' /* webpackChunkName: "pages/admin/materials/detail/_id" */))
const _b874bbc4 = () => interopDefault(import('../pages/admin/materials/edit/_id.vue' /* webpackChunkName: "pages/admin/materials/edit/_id" */))
const _28ed15f7 = () => interopDefault(import('../pages/admin/review-lesson/form-review/_id/index.vue' /* webpackChunkName: "pages/admin/review-lesson/form-review/_id/index" */))
const _a7ad4e54 = () => interopDefault(import('../pages/admin/students/edit/_id.vue' /* webpackChunkName: "pages/admin/students/edit/_id" */))
const _6685ccbc = () => interopDefault(import('../pages/admin/system/configs/_id.vue' /* webpackChunkName: "pages/admin/system/configs/_id" */))
const _0cfe7857 = () => interopDefault(import('../pages/admin/teacher-training/training-result/_id.vue' /* webpackChunkName: "pages/admin/teacher-training/training-result/_id" */))
const _385b1fff = () => interopDefault(import('../pages/admin/users/admins/_id/index.vue' /* webpackChunkName: "pages/admin/users/admins/_id/index" */))
const _4fe4e725 = () => interopDefault(import('../pages/admin/users/parent/_id/index.vue' /* webpackChunkName: "pages/admin/users/parent/_id/index" */))
const _c4bc9468 = () => interopDefault(import('../pages/admin/users/teachers/_id/index.vue' /* webpackChunkName: "pages/admin/users/teachers/_id/index" */))
const _30670fe1 = () => interopDefault(import('../pages/admin/lsm/students/_id/detail/index.vue' /* webpackChunkName: "pages/admin/lsm/students/_id/detail/index" */))
const _03f73f1f = () => interopDefault(import('../pages/admin/lsm/teacher-training/_id/create/index.vue' /* webpackChunkName: "pages/admin/lsm/teacher-training/_id/create/index" */))
const _5a1f5f51 = () => interopDefault(import('../pages/admin/lsm/teacher-training/_id/create_course/index.vue' /* webpackChunkName: "pages/admin/lsm/teacher-training/_id/create_course/index" */))
const _23d71669 = () => interopDefault(import('../pages/admin/users/parent/_id/complain/index.vue' /* webpackChunkName: "pages/admin/users/parent/_id/complain/index" */))
const _1916cf60 = () => interopDefault(import('../pages/admin/users/parent/_id/history_service/index.vue' /* webpackChunkName: "pages/admin/users/parent/_id/history_service/index" */))
const _6c681d60 = () => interopDefault(import('../pages/admin/users/teachers/_id/change-level/index.vue' /* webpackChunkName: "pages/admin/users/teachers/_id/change-level/index" */))
const _4a6c59de = () => interopDefault(import('../pages/admin/users/teachers/_id/change-service/index.vue' /* webpackChunkName: "pages/admin/users/teachers/_id/change-service/index" */))
const _77f5e44a = () => interopDefault(import('../pages/admin/users/teachers/_id/course-history/index.vue' /* webpackChunkName: "pages/admin/users/teachers/_id/course-history/index" */))
const _727feafa = () => interopDefault(import('../pages/admin/users/teachers/_id/edit/index.vue' /* webpackChunkName: "pages/admin/users/teachers/_id/edit/index" */))
const _d6b6c840 = () => interopDefault(import('../pages/admin/users/teachers/_id/recharge/index.vue' /* webpackChunkName: "pages/admin/users/teachers/_id/recharge/index" */))
const _a1beeb88 = () => interopDefault(import('../pages/admin/users/teachers/_id/training-results/index.vue' /* webpackChunkName: "pages/admin/users/teachers/_id/training-results/index" */))
const _255b4244 = () => interopDefault(import('../pages/admin/lsm/teacher-training/_id/detail/abc.vue' /* webpackChunkName: "pages/admin/lsm/teacher-training/_id/detail/abc" */))
const _e1e673b6 = () => interopDefault(import('../pages/admin/users/teachers/_id/recharge/history/index.vue' /* webpackChunkName: "pages/admin/users/teachers/_id/recharge/history/index" */))
const _22409d50 = () => interopDefault(import('../pages/admin/dashboard/salary/_id/create/_date_l.vue' /* webpackChunkName: "pages/admin/dashboard/salary/_id/create/_date_l" */))
const _8cd2c73e = () => interopDefault(import('../pages/admin/lsm/students/_id/detail/_id_lesson/index.vue' /* webpackChunkName: "pages/admin/lsm/students/_id/detail/_id_lesson/index" */))
const _aa3fcd5e = () => interopDefault(import('../pages/admin/lsm/teacher-training/_id/detail/_course_id/index.vue' /* webpackChunkName: "pages/admin/lsm/teacher-training/_id/detail/_course_id/index" */))
const _57c90475 = () => interopDefault(import('../pages/admin/lsm/teacher-training/_id/edit/_course_id.vue' /* webpackChunkName: "pages/admin/lsm/teacher-training/_id/edit/_course_id" */))
const _b35529e6 = () => interopDefault(import('../pages/admin/users/teachers/_id/training-results/_results_id.vue' /* webpackChunkName: "pages/admin/users/teachers/_id/training-results/_results_id" */))
const _7c2cf90e = () => interopDefault(import('../pages/admin/lsm/students/_id/detail/_id_lesson/edit/index.vue' /* webpackChunkName: "pages/admin/lsm/students/_id/detail/_id_lesson/edit/index" */))
const _ad7b7760 = () => interopDefault(import('../pages/admin/lsm/teacher-training/_id/detail/_course_id/create/index.vue' /* webpackChunkName: "pages/admin/lsm/teacher-training/_id/detail/_course_id/create/index" */))
const _6c5163a5 = () => interopDefault(import('../pages/admin/lsm/teacher-training/_id/detail/_course_id/teachers/index.vue' /* webpackChunkName: "pages/admin/lsm/teacher-training/_id/detail/_course_id/teachers/index" */))
const _29633041 = () => interopDefault(import('../pages/admin/lsm/teacher-training/_id/detail/_course_id/edit/_id_lesson.vue' /* webpackChunkName: "pages/admin/lsm/teacher-training/_id/detail/_course_id/edit/_id_lesson" */))
const _3d0b161b = () => interopDefault(import('../pages/admin/lsm/students/_id/detail/_id_lesson/_id_baihoc/index.vue' /* webpackChunkName: "pages/admin/lsm/students/_id/detail/_id_lesson/_id_baihoc/index" */))
const _3137bb06 = () => interopDefault(import('../pages/admin/complain/_id/index.vue' /* webpackChunkName: "pages/admin/complain/_id/index" */))
const _9561d20e = () => interopDefault(import('../pages/admin/orders/_id/index.vue' /* webpackChunkName: "pages/admin/orders/_id/index" */))
const _2a806341 = () => interopDefault(import('../pages/admin/parents/_id/index.vue' /* webpackChunkName: "pages/admin/parents/_id/index" */))
const _b39641f6 = () => interopDefault(import('../pages/admin/review-lesson/_id/index.vue' /* webpackChunkName: "pages/admin/review-lesson/_id/index" */))
const _52ff68ec = () => interopDefault(import('../pages/admin/students/_id/index.vue' /* webpackChunkName: "pages/admin/students/_id/index" */))
const _b6167cc6 = () => interopDefault(import('../pages/admin/materials/_id/create/index.vue' /* webpackChunkName: "pages/admin/materials/_id/create/index" */))
const _b42652f2 = () => interopDefault(import('../pages/admin/materials/_id/histories/index.vue' /* webpackChunkName: "pages/admin/materials/_id/histories/index" */))
const _cecc196e = () => interopDefault(import('../pages/admin/medias/_id/edit.vue' /* webpackChunkName: "pages/admin/medias/_id/edit" */))
const _21cfea38 = () => interopDefault(import('../pages/admin/orders/_id/lesson/index.vue' /* webpackChunkName: "pages/admin/orders/_id/lesson/index" */))
const _74a62d02 = () => interopDefault(import('../pages/admin/service/_id/edit/index.vue' /* webpackChunkName: "pages/admin/service/_id/edit/index" */))
const _3633731c = () => interopDefault(import('../pages/admin/service/_id/lesson-content/index.vue' /* webpackChunkName: "pages/admin/service/_id/lesson-content/index" */))
const _10eb8428 = () => interopDefault(import('../pages/admin/service/_id/lesson-price/index.vue' /* webpackChunkName: "pages/admin/service/_id/lesson-price/index" */))
const _60ec96ff = () => interopDefault(import('../pages/admin/service/_id/sale/index.vue' /* webpackChunkName: "pages/admin/service/_id/sale/index" */))
const _1d7d516a = () => interopDefault(import('../pages/admin/students/_id/detail/index.vue' /* webpackChunkName: "pages/admin/students/_id/detail/index" */))
const _039e51d6 = () => interopDefault(import('../pages/admin/videos/_id/create/index.vue' /* webpackChunkName: "pages/admin/videos/_id/create/index" */))
const _3ceadbba = () => interopDefault(import('../pages/admin/videos/_id/edit/index.vue' /* webpackChunkName: "pages/admin/videos/_id/edit/index" */))
const _fb582044 = () => interopDefault(import('../pages/admin/materials/_id/histories/_id_list.vue' /* webpackChunkName: "pages/admin/materials/_id/histories/_id_list" */))
const _39942fae = () => interopDefault(import('../pages/admin/students/_id/detail/_package_id/index.vue' /* webpackChunkName: "pages/admin/students/_id/detail/_package_id/index" */))
const _0292895a = () => interopDefault(import('../pages/admin/students/_id/detail/_package_id/create/index.vue' /* webpackChunkName: "pages/admin/students/_id/detail/_package_id/create/index" */))
const _5f235404 = () => interopDefault(import('../pages/admin/students/_id/detail/_package_id/edit/_lesson_id.vue' /* webpackChunkName: "pages/admin/students/_id/detail/_package_id/edit/_lesson_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/inspire",
    component: _a7ca4eb8,
    name: "inspire"
  }, {
    path: "/login",
    component: _3cc7da33,
    name: "login"
  }, {
    path: "/admin/complain",
    component: _2a51a092,
    name: "admin-complain"
  }, {
    path: "/admin/dashboard",
    component: _4bf28abe,
    name: "admin-dashboard"
  }, {
    path: "/admin/materials",
    component: _c28e1b8e,
    name: "admin-materials"
  }, {
    path: "/admin/medias",
    component: _23fa30b8,
    name: "admin-medias"
  }, {
    path: "/admin/notification",
    component: _b38c51d8,
    name: "admin-notification"
  }, {
    path: "/admin/orders",
    component: _4002330e,
    name: "admin-orders"
  }, {
    path: "/admin/parents",
    component: _5a14e356,
    name: "admin-parents"
  }, {
    path: "/admin/review-lesson",
    component: _35c5e11a,
    name: "admin-review-lesson"
  }, {
    path: "/admin/service",
    component: _fb9113fc,
    name: "admin-service"
  }, {
    path: "/admin/students",
    component: _09b77681,
    name: "admin-students"
  }, {
    path: "/admin/teacher-training",
    component: _5f25b5e4,
    name: "admin-teacher-training"
  }, {
    path: "/admin/videos",
    component: _2b3397c1,
    name: "admin-videos"
  }, {
    path: "/admin/dashboard/customer_reports",
    component: _60fbc0a2,
    name: "admin-dashboard-customer_reports"
  }, {
    path: "/admin/dashboard/salary",
    component: _3809884e,
    name: "admin-dashboard-salary"
  }, {
    path: "/admin/dashboard/sales_report",
    component: _4e3fd74b,
    name: "admin-dashboard-sales_report"
  }, {
    path: "/admin/dashboard/user_report",
    component: _ba19220c,
    name: "admin-dashboard-user_report"
  }, {
    path: "/admin/lsm/result-training",
    component: _4f9c84e4,
    name: "admin-lsm-result-training"
  }, {
    path: "/admin/lsm/students",
    component: _94d7c72c,
    name: "admin-lsm-students"
  }, {
    path: "/admin/lsm/teacher-training",
    component: _23c45c12,
    name: "admin-lsm-teacher-training"
  }, {
    path: "/admin/materials/create",
    component: _54571668,
    name: "admin-materials-create"
  }, {
    path: "/admin/materials/create_bg",
    component: _24c006dc,
    name: "admin-materials-create_bg"
  }, {
    path: "/admin/medias/create",
    component: _b4ed49ee,
    name: "admin-medias-create"
  }, {
    path: "/admin/my/notification",
    component: _7b3d4e7b,
    name: "admin-my-notification"
  }, {
    path: "/admin/notification/create",
    component: _466f152d,
    name: "admin-notification-create"
  }, {
    path: "/admin/orders/create",
    component: _18802bf3,
    name: "admin-orders-create"
  }, {
    path: "/admin/review-lesson/form-review",
    component: _1403610c,
    name: "admin-review-lesson-form-review"
  }, {
    path: "/admin/service/create",
    component: _1e492302,
    name: "admin-service-create"
  }, {
    path: "/admin/students/create",
    component: _fbde9dc0,
    name: "admin-students-create"
  }, {
    path: "/admin/system/about",
    component: _7e160154,
    name: "admin-system-about"
  }, {
    path: "/admin/system/banner",
    component: _fc5b87ce,
    name: "admin-system-banner"
  }, {
    path: "/admin/system/configs",
    component: _7c739e8c,
    name: "admin-system-configs"
  }, {
    path: "/admin/system/educational-ecosystem",
    component: _b20d73e2,
    name: "admin-system-educational-ecosystem"
  }, {
    path: "/admin/system/support",
    component: _1cc8ed98,
    name: "admin-system-support"
  }, {
    path: "/admin/system/tax",
    component: _d0fa1d18,
    name: "admin-system-tax"
  }, {
    path: "/admin/system/tutorial",
    component: _1811e54b,
    name: "admin-system-tutorial"
  }, {
    path: "/admin/teacher-training/create",
    component: _0d7e0c1a,
    name: "admin-teacher-training-create"
  }, {
    path: "/admin/teacher-training/training-result",
    component: _11aa93a2,
    name: "admin-teacher-training-training-result"
  }, {
    path: "/admin/users/admins",
    component: _3c50a1d8,
    name: "admin-users-admins"
  }, {
    path: "/admin/users/parent",
    component: _4ffef93a,
    name: "admin-users-parent"
  }, {
    path: "/admin/users/teachers",
    component: _2c433361,
    name: "admin-users-teachers"
  }, {
    path: "/admin/lsm/students/create",
    component: _96db79d2,
    name: "admin-lsm-students-create"
  }, {
    path: "/admin/review-lesson/form-review/create",
    component: _d0a63796,
    name: "admin-review-lesson-form-review-create"
  }, {
    path: "/admin/users/admins/create",
    component: _2e0e3d2d,
    name: "admin-users-admins-create"
  }, {
    path: "/admin/users/admins/roles",
    component: _1316d2c2,
    name: "admin-users-admins-roles"
  }, {
    path: "/",
    component: _7320371c,
    name: "index"
  }, {
    path: "/admin/dashboard/salary/:id",
    component: _0329cc39,
    name: "admin-dashboard-salary-id"
  }, {
    path: "/admin/lsm/result-training/:id?",
    component: _d6e46914,
    name: "admin-lsm-result-training-id"
  }, {
    path: "/admin/lsm/students/:id",
    component: _5a561b56,
    name: "admin-lsm-students-id"
  }, {
    path: "/admin/lsm/teacher-training/:id",
    component: _c581cd3c,
    name: "admin-lsm-teacher-training-id"
  }, {
    path: "/admin/materials/detail/:id?",
    component: _614435b6,
    name: "admin-materials-detail-id"
  }, {
    path: "/admin/materials/edit/:id?",
    component: _b874bbc4,
    name: "admin-materials-edit-id"
  }, {
    path: "/admin/review-lesson/form-review/:id",
    component: _28ed15f7,
    name: "admin-review-lesson-form-review-id"
  }, {
    path: "/admin/students/edit/:id?",
    component: _a7ad4e54,
    name: "admin-students-edit-id"
  }, {
    path: "/admin/system/configs/:id",
    component: _6685ccbc,
    name: "admin-system-configs-id"
  }, {
    path: "/admin/teacher-training/training-result/:id",
    component: _0cfe7857,
    name: "admin-teacher-training-training-result-id"
  }, {
    path: "/admin/users/admins/:id",
    component: _385b1fff,
    name: "admin-users-admins-id"
  }, {
    path: "/admin/users/parent/:id",
    component: _4fe4e725,
    name: "admin-users-parent-id"
  }, {
    path: "/admin/users/teachers/:id",
    component: _c4bc9468,
    name: "admin-users-teachers-id"
  }, {
    path: "/admin/lsm/students/:id/detail",
    component: _30670fe1,
    name: "admin-lsm-students-id-detail"
  }, {
    path: "/admin/lsm/teacher-training/:id?/create",
    component: _03f73f1f,
    name: "admin-lsm-teacher-training-id-create"
  }, {
    path: "/admin/lsm/teacher-training/:id?/create_course",
    component: _5a1f5f51,
    name: "admin-lsm-teacher-training-id-create_course"
  }, {
    path: "/admin/users/parent/:id/complain",
    component: _23d71669,
    name: "admin-users-parent-id-complain"
  }, {
    path: "/admin/users/parent/:id/history_service",
    component: _1916cf60,
    name: "admin-users-parent-id-history_service"
  }, {
    path: "/admin/users/teachers/:id/change-level",
    component: _6c681d60,
    name: "admin-users-teachers-id-change-level"
  }, {
    path: "/admin/users/teachers/:id/change-service",
    component: _4a6c59de,
    name: "admin-users-teachers-id-change-service"
  }, {
    path: "/admin/users/teachers/:id/course-history",
    component: _77f5e44a,
    name: "admin-users-teachers-id-course-history"
  }, {
    path: "/admin/users/teachers/:id/edit",
    component: _727feafa,
    name: "admin-users-teachers-id-edit"
  }, {
    path: "/admin/users/teachers/:id/recharge",
    component: _d6b6c840,
    name: "admin-users-teachers-id-recharge"
  }, {
    path: "/admin/users/teachers/:id/training-results",
    component: _a1beeb88,
    name: "admin-users-teachers-id-training-results"
  }, {
    path: "/admin/lsm/teacher-training/:id?/detail/abc",
    component: _255b4244,
    name: "admin-lsm-teacher-training-id-detail-abc"
  }, {
    path: "/admin/users/teachers/:id/recharge/history",
    component: _e1e673b6,
    name: "admin-users-teachers-id-recharge-history"
  }, {
    path: "/admin/dashboard/salary/:id/create/:date_l?",
    component: _22409d50,
    name: "admin-dashboard-salary-id-create-date_l"
  }, {
    path: "/admin/lsm/students/:id/detail/:id_lesson",
    component: _8cd2c73e,
    name: "admin-lsm-students-id-detail-id_lesson"
  }, {
    path: "/admin/lsm/teacher-training/:id?/detail/:course_id",
    component: _aa3fcd5e,
    name: "admin-lsm-teacher-training-id-detail-course_id"
  }, {
    path: "/admin/lsm/teacher-training/:id?/edit/:course_id",
    component: _57c90475,
    name: "admin-lsm-teacher-training-id-edit-course_id"
  }, {
    path: "/admin/users/teachers/:id/training-results/:results_id?",
    component: _b35529e6,
    name: "admin-users-teachers-id-training-results-results_id"
  }, {
    path: "/admin/lsm/students/:id/detail/:id_lesson/edit",
    component: _7c2cf90e,
    name: "admin-lsm-students-id-detail-id_lesson-edit"
  }, {
    path: "/admin/lsm/teacher-training/:id?/detail/:course_id/create",
    component: _ad7b7760,
    name: "admin-lsm-teacher-training-id-detail-course_id-create"
  }, {
    path: "/admin/lsm/teacher-training/:id?/detail/:course_id/teachers",
    component: _6c5163a5,
    name: "admin-lsm-teacher-training-id-detail-course_id-teachers"
  }, {
    path: "/admin/lsm/teacher-training/:id?/detail/:course_id/edit/:id_lesson",
    component: _29633041,
    name: "admin-lsm-teacher-training-id-detail-course_id-edit-id_lesson"
  }, {
    path: "/admin/lsm/students/:id/detail/:id_lesson/:id_baihoc",
    component: _3d0b161b,
    name: "admin-lsm-students-id-detail-id_lesson-id_baihoc"
  }, {
    path: "/admin/complain/:id",
    component: _3137bb06,
    name: "admin-complain-id"
  }, {
    path: "/admin/orders/:id",
    component: _9561d20e,
    name: "admin-orders-id"
  }, {
    path: "/admin/parents/:id",
    component: _2a806341,
    name: "admin-parents-id"
  }, {
    path: "/admin/review-lesson/:id",
    component: _b39641f6,
    name: "admin-review-lesson-id"
  }, {
    path: "/admin/students/:id",
    component: _52ff68ec,
    name: "admin-students-id"
  }, {
    path: "/admin/materials/:id/create",
    component: _b6167cc6,
    name: "admin-materials-id-create"
  }, {
    path: "/admin/materials/:id/histories",
    component: _b42652f2,
    name: "admin-materials-id-histories"
  }, {
    path: "/admin/medias/:id/edit",
    component: _cecc196e,
    name: "admin-medias-id-edit"
  }, {
    path: "/admin/orders/:id/lesson",
    component: _21cfea38,
    name: "admin-orders-id-lesson"
  }, {
    path: "/admin/service/:id/edit",
    component: _74a62d02,
    name: "admin-service-id-edit"
  }, {
    path: "/admin/service/:id/lesson-content",
    component: _3633731c,
    name: "admin-service-id-lesson-content"
  }, {
    path: "/admin/service/:id/lesson-price",
    component: _10eb8428,
    name: "admin-service-id-lesson-price"
  }, {
    path: "/admin/service/:id/sale",
    component: _60ec96ff,
    name: "admin-service-id-sale"
  }, {
    path: "/admin/students/:id/detail",
    component: _1d7d516a,
    name: "admin-students-id-detail"
  }, {
    path: "/admin/videos/:id/create",
    component: _039e51d6,
    name: "admin-videos-id-create"
  }, {
    path: "/admin/videos/:id/edit",
    component: _3ceadbba,
    name: "admin-videos-id-edit"
  }, {
    path: "/admin/materials/:id/histories/:id_list",
    component: _fb582044,
    name: "admin-materials-id-histories-id_list"
  }, {
    path: "/admin/students/:id/detail/:package_id",
    component: _39942fae,
    name: "admin-students-id-detail-package_id"
  }, {
    path: "/admin/students/:id/detail/:package_id/create",
    component: _0292895a,
    name: "admin-students-id-detail-package_id-create"
  }, {
    path: "/admin/students/:id/detail/:package_id/edit/:lesson_id?",
    component: _5f235404,
    name: "admin-students-id-detail-package_id-edit-lesson_id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
