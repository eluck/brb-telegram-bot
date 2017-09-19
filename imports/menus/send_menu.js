const { Markup } = require('micro-bot');
const isDevelopment = require('/imports/lib/is-development');


module.exports = (ctx) => {
  const menu = [
    [ctx.i18n.t('common.menu.coffee'), ctx.i18n.t('common.menu.altcoffee')],
    [ctx.i18n.t('common.menu.tea'), ctx.i18n.t('common.menu.coctails')],
    [ctx.i18n.t('common.menu.breakfast'), ctx.i18n.t('common.menu.decerts')],
    [ctx.i18n.t('common.menu.order')]
  ];
  if (isDevelopment) menu.unshift(['/start']);
  ctx.reply(ctx.i18n.t('common.menuMessage'), Markup.keyboard(menu).resize().extra());
};
