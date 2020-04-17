function JSFactory() {
    this.createFramework = function (type) {
        var framework;
 
        if (type === "angular") {
            framework = new Angular();
        } else if (type === "react") {
            framework = new React();
        } else if (type === "vue") {
            framework = new Vue();
        } else if (type === "ember") {
            framework = new Ember();
        }
 
        framework.publish = function () {
            log.add("using " + framework.type);
        }
 
        return framework;
    }
}
 
var Angular = function () {
    this.type = "angular";
};
 
var React = function () {
    this.type = "react";
};
 
var Vue = function () {
    this.type = "vue";
};
 
var Ember = function () {
    this.type = "ember";
};
 
// log helper
var log = (function () {
    var log = "";
    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { console.log(log); log = ""; }
    }
})();
 
function run() {
    var frameworks = [];
    var factory = new JSFactory();
    frameworks.push(factory.createFramework("angular"));
    frameworks.push(factory.createFramework("react"));
    frameworks.push(factory.createFramework("vue"));
    frameworks.push(factory.createFramework("ember"));
    for (var i = 0, len = frameworks.length; i < len; i++) {
        frameworks[i].publish();
    }
    log.show();
}

run()
