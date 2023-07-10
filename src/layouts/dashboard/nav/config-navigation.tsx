// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);
const icon_page = (name: string) => (
  <SvgColor src={`/assets/icons/payments/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const ICONS = {
  blog: icon('ic_blog'),
  cart: icon('ic_cart'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
  payment: icon_page('ic_paypal'),
};

const navConfig = [
  {
    subheader: 'management',
    items: [
      // USER
      {
        title: 'user',
        path: PATH_DASHBOARD.user.account,
        icon: ICONS.user,
        children: [
          // { title: 'create', path: PATH_DASHBOARD.user.new },
          // { title: 'edit', path: PATH_DASHBOARD.user.demoEdit },
          { title: 'account', path: PATH_DASHBOARD.user.account },
        ],
      },
      {
        title: 'e-ordering',
        path: PATH_DASHBOARD.eCommerce.root,
        icon: ICONS.cart,
        children: [
          { title: 'shop', path: PATH_DASHBOARD.eCommerce.shop },
          // { title: 'product', path: PATH_DASHBOARD.eCommerce.demoView },
          { title: 'order-list', path: PATH_DASHBOARD.eCommerce.list },
          // { title: 'add item', path: PATH_DASHBOARD.eCommerce.new },
          { title: 'checkout', path: PATH_DASHBOARD.eCommerce.checkout },
        ],
      },

      // INVOICE
      {
        title: 'Transactions',
        path: PATH_DASHBOARD.invoice.root,
        icon: ICONS.invoice,
        children: [
          { title: 'list', path: PATH_DASHBOARD.invoice.list },
        ],
      },
    ],
  },
];
export const differentMenu = [
  // GENERAL
  // ----------------------------------------------------------------------
  {

    subheader: 'general',
    items: [
      {
        title: 'food1',
        path: PATH_DASHBOARD.eCommerce.shop,
        // icon: ICONS.user,
        children: [
          { title: 'food2', path: PATH_DASHBOARD.eCommerce.shop },
          { title: 'food3', path: PATH_DASHBOARD.eCommerce.shop },
          { title: 'food4', path: PATH_DASHBOARD.eCommerce.shop },
        ],
      },
    ],
  },
];
export const differentMenu1 = [
  // GENERAL
  // ----------------------------------------------------------------------

];
export default navConfig;
