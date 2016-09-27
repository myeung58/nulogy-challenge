var MarkupService = function(basePrice, labor, material) {
  if (typeof basePrice !== 'number' ||
      typeof labor !== 'number' ||
      typeof material !== 'string') { return; }

  return {
    baseMarkup: function() {},
    laborMarkup: function() {},
    categoryMarkup: function() {},
    totalMarkup: function() {}
  };
};

module.exports = MarkupService;
