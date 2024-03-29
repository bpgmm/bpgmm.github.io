(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{196:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("This feature, explaining in depth in the "),s("router-link",{attrs:{to:"./../spectra-quality-controller/"}},[t._v("spectra quality controller section")]),t._v(", allows the user to analyse how reliable is the spectrum obtained by applying some particular rules derived from the study of hundreds of MS/MS spectra. The service is accessed through the following URI:")],1),t._v(" "),s("p",[s("a",{attrs:{href:"http://ceumass.eps.uspceu.es/mediator/api/spectralquality",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://ceumass.eps.uspceu.es/mediator/api/spectralquality"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("To perform a query, the user must send a POST request. This request must include:")]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("The query's attributes, its name, type, default value (the value which will be used if the user does not specify the attribute) and optativity are defined below:")]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("Since the value of some attributes is restricted to a range of literals, the enumeration types used are described below:")]),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("The next example shows the JSON structure of a query for the Spectral Quality Controller Search service:")]),t._v(" "),t._m(4),s("p",[t._v("The output from this service shows the obtained score on each of the following dimensions: intensity, noise, scans, coelution and crosstalk. Also, an overall score is provided:")]),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("This example shows the results of a successful request:")]),t._v(" "),t._m(6)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"spectral-quality-controller"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spectral-quality-controller","aria-hidden":"true"}},[this._v("#")]),this._v(" Spectral Quality Controller")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("A Content-type header set to application/json.")]),this._v(" "),e("li",[this._v("A request body with a JSON object that includes all data needed for the query: The average signal of the MS mode, intensity of the MS/MS spectra and the level of noise, the number of scans, the number of samples, the coelution ions and the crosstalk phenomena.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Default value")]),t._v(" "),s("th",[t._v("Optativity")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("averageSignal")]),t._v(" "),s("td",[t._v("integer (Range: 0..109)")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("mandatory")])]),t._v(" "),s("tr",[s("td",[t._v("intensity")]),t._v(" "),s("td",[t._v("integer (Range: 0..100)")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("mandatory")])]),t._v(" "),s("tr",[s("td",[t._v("noise")]),t._v(" "),s("td",[t._v("integer (Range: 0..100)")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("mandatory")])]),t._v(" "),s("tr",[s("td",[t._v("scans")]),t._v(" "),s("td",[t._v("integer (Range: 0..100)")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("mandatory")])]),t._v(" "),s("tr",[s("td",[t._v("samples")]),t._v(" "),s("td",[t._v("integer (Range: 0..100)")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("mandatory")])]),t._v(" "),s("tr",[s("td",[t._v("coelution")]),t._v(" "),s("td",[t._v("coelution_enum")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("mandatory")])]),t._v(" "),s("tr",[s("td",[t._v("crosstalk")]),t._v(" "),s("td",[t._v("crosstalk_enum")]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("mandatory")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("coelution")]),t._v(" "),s("td",[t._v("“no-coelution”, “with-known-compound”, “with-unknown-compound”")])]),t._v(" "),s("tr",[s("td",[t._v("crosstalk")]),t._v(" "),s("td",[t._v("“no”, “soft”, “hard”")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n    "averageSignal": 50000,\n    "intensity": 80000,\n    "noise": 10,\n    "scans": 3,\n    "samples": 1,\n    "coelution": "with-known-compound",\n    "crosstalk": "soft"\n}\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Default value")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("overallScore")]),t._v(" "),s("td",[t._v("double (Range: 0..5)")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("intensity")]),t._v(" "),s("td",[t._v("double (Range: 0..1)")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("noise")]),t._v(" "),s("td",[t._v("double (Range: 0..1)")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("scans")]),t._v(" "),s("td",[t._v("double (Range: 0..1)")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("coelution")]),t._v(" "),s("td",[t._v("double (Range: 0..1)")]),t._v(" "),s("td",[t._v("-")])]),t._v(" "),s("tr",[s("td",[t._v("crosstalk")]),t._v(" "),s("td",[t._v("double (Range: 0..1)")]),t._v(" "),s("td",[t._v("-")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n    "overallScore": 2.916666666666667,\n    "intensity": 1,\n    "noise": 0.6666666666666667,\n    "scans": 0.25,\n    "coelution": 0.5,\n    "crosstalk": 0.5\n}\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])])}],!1,null,null,null);e.default=n.exports}}]);