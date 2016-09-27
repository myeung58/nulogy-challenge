var MarkupService = function(basePrice, labor, material) {
  if (typeof basePrice !== 'number' ||
      typeof labor !== 'number' ||
      typeof material !== 'string') { return; }

  var markup = {
    BASE: 0.05,
    LABOR: 0.012,
    DRUGS: 0.075,
    FOOD: 0.13,
    ELECTRONICS: 0.02
  };

  return {
    baseMarkup: function() {
      var baseMarkup = basePrice * (1 + markup.BASE) - basePrice;
      return parseFloat(baseMarkup.toFixed(2));
    },
    laborMarkup: function() {},
    categoryMarkup: function() {},
    totalMarkup: function() {}
  };
};

module.exports = MarkupService;
