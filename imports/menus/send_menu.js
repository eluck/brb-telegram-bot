const { Markup } = require('micro-bot');


module.exports = (ctx) => {
  ctx.reply(ctx.i18n.t('common.menuMessage'), Markup
    .keyboard([
      [ctx.i18n.t('common.menu.coffee'), ctx.i18n.t('common.menu.altcoffee')],
      [ctx.i18n.t('common.menu.tea'), ctx.i18n.t('common.menu.coctails')],
      [ctx.i18n.t('common.menu.breakfast'), ctx.i18n.t('common.menu.decerts')],
      [ctx.i18n.t('common.menu.order')]])
    .resize()
    .extra());
};
