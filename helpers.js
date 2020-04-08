/**
 * Non si sa perchè ma in una beforeRequest le sostituzioni non vengono
 * fatte se non dopo la chiamata. Di conseguenza dobbiamo sostituire
 * manualmente noi le variabili che ci servono con il casting necessario.
 * @param {*} requestParams 
 * @param {*} context 
 * @param {*} ee 
 * @param {*} next 
 */
function convertFiltersToInt(requestParams, context, ee, next) {
  requestParams.json.filter.channels =
    requestParams.json.filter.channels.map(c => {
      if (c.id.includes('channelId')) {
        return ({ ...c, id: parseInt(context.vars.channelId) });
      } else {
        return ({ ...c, id: parseInt(c.id) });
      }
    });
  return next();
}

module.exports = {
  convertFiltersToInt
};
