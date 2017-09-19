module.exports = ({ reply, i18n }, next) => {
  reply(i18n.t('common.welcome'));
  return next()
};
