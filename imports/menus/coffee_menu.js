const { Markup } = require('micro-bot');


module.exports = (ctx) => {
  ctx.reply(ctx.i18n.t('common.menu.coffee'), Markup
    .keyboard([
      ['Капучино', 'Латте', 'Флет Уайт'],
      ['Раф', 'Гляссе', 'Макиатто']])
    .resize()
    .extra());
};
