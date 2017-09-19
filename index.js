const path = require('path');
const { Composer, Markup } = require('micro-bot');
const TelegrafI18n = require('telegraf-i18n');

const sendWelcome = require('./common/send_welcome');
const sendMenu = require('./common/send_menu');
const coffeeMenu = require('./common/coffee_menu');

const bot = new Composer();
const i18n = new TelegrafI18n({
  defaultLanguage: 'ru',
  directory: path.resolve(__dirname, 'locales')
});


bot.use(i18n);
bot.command('/start', sendWelcome, sendMenu);
bot.command('help', ctx => ctx.i18n.t('common.help'));





// Scenario blueprint

const Order = [];

bot.hears('☕️ Кофе на основе молока', coffeeMenu);

bot.hears('Капучино', ctx => ctx.reply('Выберете объем', Markup
  .keyboard([
    ['Большой (130Р)', 'Маленький (100Р)']])
  .resize()
  .extra()));

bot.hears('Большой (130Р)', ctx => ctx.reply('Товар добавлен в заказы', Order.push('- Капучино большой (130Р)'), ctx.reply(ctx.i18n.t('common.menuMessage'), Markup
  .keyboard([
    [ctx.i18n.t('common.menu.coffee'), ctx.i18n.t('common.menu.altcoffee')],
    [ctx.i18n.t('common.menu.tea'), ctx.i18n.t('common.menu.coctails')],
    [ctx.i18n.t('common.menu.breakfast'), ctx.i18n.t('common.menu.decerts')],
    [ctx.i18n.t('common.menu.order')]])
  .resize()
  .extra())));

bot.hears('📋 Заказ', ctx => ctx.reply(Order[0], Markup
  .keyboard([
    ['Подтвердить заказ']])
  .resize()
  .extra()));


bot.hears('Подтвердить заказ', ctx => ctx.reply('Ваш кофе уже готовится! Be right back!', Markup
  .keyboard([
    ['Новый заказ']])
  .resize()
  .extra()));

bot.hears('Новый заказ', coffeeMenu);


module.exports = bot;
