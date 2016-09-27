/*
  @param basePrice NUMBER base price amount
  @param labor NUMBER number of people involved in the job
  @param material STRING type of material involved
 */
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
  },
  baseWithMarkup = basePrice * (1 + markup.BASE);

  return {
    baseMarkup: function() {
      if (basePrice <= 0) { return 0; }

      var baseMarkup = baseWithMarkup - basePrice;

      return parseFloat(baseMarkup.toFixed(2));
    },
    laborMarkup: function() {
      if (labor <= 0 ) { return 0; }

      var laborMarkup = baseWithMarkup * (1 + (labor * markup.LABOR)) - baseWithMarkup;

      return parseFloat(laborMarkup.toFixed(2));
    },
    categoryMarkup: function() {
      if (!markup[material.toUpperCase()]) { return 0; }

      var categoryMarkup = baseWithMarkup * (1 + markup[material.toUpperCase()]) - baseWithMarkup;

      return parseFloat(categoryMarkup.toFixed(2));
    },
    getTotal: function() {
      var total = baseWithMarkup + this.laborMarkup() + this.categoryMarkup();

      return parseFloat(total.toFixed(2));
    }
  };
};

module.exports = MarkupService;
