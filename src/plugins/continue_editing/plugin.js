/**
 * Plugin: "continue_editing" (selectize.js)
 * @author Aleksandr Vyguzov <avyguzov@croc.ru>
 */

Selectize.define('continue_editing', function(options) {
    if (this.settings.mode !== 'single') return;

    var self = this;

    options.text = options.text || function(option) {
        return option[this.settings.labelField];
    };

    this.onFocus = (function(e) {
        var original = self.onFocus;

        return function(e) {
            original.apply(this, arguments);

            var index = this.caretPos - 1;
            if (index >= 0 && index < this.items.length) {
                var option = this.options[this.items[index]];
                var currentValue = options.text.apply(this, [option]);
                if (this.deleteSelection({keyCode: KEY_BACKSPACE})) {
                    this.removeItem(currentValue);
                    this.setTextboxValue(currentValue);
                }
            }
        };
    })();
});