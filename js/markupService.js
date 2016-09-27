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
      if (basePrice <= 0) { return 0; }

      var baseMarkup = basePrice * (1 + markup.BASE) - basePrice;
      return parseFloat(baseMarkup.toFixed(2));
    },
    laborMarkup: function() {
      if (labor <= 0 ) { return 0; }

      var base = basePrice + this.baseMarkup(),
        laborMarkup = base * (1 + (labor * markup.LABOR)) - base;

      return parseFloat(laborMarkup.toFixed(2));
    },
    categoryMarkup: function() {
      if (!markup[material.toUpperCase()]) { return 0; }

      var base = basePrice + this.baseMarkup(),
        categoryMarkup = base * (1 + markup[material.toUpperCase()]) - base;

      return parseFloat(categoryMarkup.toFixed(2));
    },
    getTotal: function() {
      var base = basePrice + this.baseMarkup(),
        total = base + this.laborMarkup() + this.categoryMarkup();

      return parseFloat(total.toFixed(2));
    }
  };
};

module.exports = MarkupService;
