export const NuxtLogo = () => import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const Tutorial = () => import('../../components/Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))
export const VuetifyLogo = () => import('../../components/VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c))
export const ChartBarChart = () => import('../../components/Chart/BarChart.vue' /* webpackChunkName: "components/chart-bar-chart" */).then(c => wrapFunctional(c.default || c))
export const ReportCustomerReport = () => import('../../components/Report/CustomerReport.vue' /* webpackChunkName: "components/report-customer-report" */).then(c => wrapFunctional(c.default || c))
export const ReportOrderReport = () => import('../../components/Report/OrderReport.vue' /* webpackChunkName: "components/report-order-report" */).then(c => wrapFunctional(c.default || c))
export const ReportSalaryReport = () => import('../../components/Report/SalaryReport.vue' /* webpackChunkName: "components/report-salary-report" */).then(c => wrapFunctional(c.default || c))
export const ReportSalesReport = () => import('../../components/Report/SalesReport.vue' /* webpackChunkName: "components/report-sales-report" */).then(c => wrapFunctional(c.default || c))
export const ReportUserReport = () => import('../../components/Report/UserReport.vue' /* webpackChunkName: "components/report-user-report" */).then(c => wrapFunctional(c.default || c))
export const ButtonAdd = () => import('../../components/button/ButtonAdd.vue' /* webpackChunkName: "components/button-add" */).then(c => wrapFunctional(c.default || c))
export const ButtonComponent = () => import('../../components/button/ButtonComponent.vue' /* webpackChunkName: "components/button-component" */).then(c => wrapFunctional(c.default || c))
export const ButtonFilter = () => import('../../components/button/ButtonFilter.vue' /* webpackChunkName: "components/button-filter" */).then(c => wrapFunctional(c.default || c))
export const ButtonWeb = () => import('../../components/button/ButtonWeb.vue' /* webpackChunkName: "components/button-web" */).then(c => wrapFunctional(c.default || c))
export const CardItem = () => import('../../components/card/CardItem.vue' /* webpackChunkName: "components/card-item" */).then(c => wrapFunctional(c.default || c))
export const CardMaterials = () => import('../../components/card/CardMaterials.vue' /* webpackChunkName: "components/card-materials" */).then(c => wrapFunctional(c.default || c))
export const CardResultTraining = () => import('../../components/card/CardResultTraining.vue' /* webpackChunkName: "components/card-result-training" */).then(c => wrapFunctional(c.default || c))
export const CardService = () => import('../../components/card/CardService.vue' /* webpackChunkName: "components/card-service" */).then(c => wrapFunctional(c.default || c))
export const CardServiceOrder = () => import('../../components/card/CardServiceOrder.vue' /* webpackChunkName: "components/card-service-order" */).then(c => wrapFunctional(c.default || c))
export const CardTeacherTraining = () => import('../../components/card/CardTeacherTraining.vue' /* webpackChunkName: "components/card-teacher-training" */).then(c => wrapFunctional(c.default || c))
export const CardTeacherTrainingUsers = () => import('../../components/card/CardTeacherTrainingUsers.vue' /* webpackChunkName: "components/card-teacher-training-users" */).then(c => wrapFunctional(c.default || c))
export const InputFieldSuneditor = () => import('../../components/inputField/Suneditor.vue' /* webpackChunkName: "components/input-field-suneditor" */).then(c => wrapFunctional(c.default || c))
export const ServiceDetailServiceInfo = () => import('../../components/service/DetailServiceInfo.vue' /* webpackChunkName: "components/service-detail-service-info" */).then(c => wrapFunctional(c.default || c))
export const IconsRightSvg = () => import('../../components/icons/RightSvg.vue' /* webpackChunkName: "components/icons-right-svg" */).then(c => wrapFunctional(c.default || c))
export const TitleHeader = () => import('../../components/title/TitleHeader.vue' /* webpackChunkName: "components/title-header" */).then(c => wrapFunctional(c.default || c))
export const UserAvatar = () => import('../../components/user/Avatar.vue' /* webpackChunkName: "components/user-avatar" */).then(c => wrapFunctional(c.default || c))
export const UserAvatarSiderbar = () => import('../../components/user/AvatarSiderbar.vue' /* webpackChunkName: "components/user-avatar-siderbar" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
