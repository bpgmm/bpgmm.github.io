(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{208:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("Batch search enables the user to find metabolites through the m/z or the neutral masses. The service is accessed through the following URI:")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://ceumass.eps.uspceu.es/api/batch",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://ceumass.eps.uspceu.es/api/batch"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("To perform a query, the user must send a POST request. This request must include:")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("The query's attributes, its name, type, default value (the value which will be used if the user does not specify the attribute) and optativity are defined in the next table.")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("As the value of some attributes is restricted to a range of literals, the next table shows the defined enumeration types.")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("The following example shows a query to the Batch Search service:")]),t._v(" "),t._m(4),a("p",[t._v("If the request contains no errors and is therefore correctly processed, the service returns a set of putative annotations for the masses submitted.")]),t._v(" "),a("p",[t._v("Table 9 Batch Search service – Response - Results")]),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("Each putative annotation structure contains the name of the putative annotation compound, its formula, its molecular weight, the difference between the molecular weight and the corresponding experimental mass (ppm), and references of the compound in external databases.")]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("While some of these attributes are related with score rules, please bear in mind that rules are only applied when using the Batch Advanced Search service. Therefore, when using the batch search, all the putative annotations returned will have a score of -2, which shows that the rules engine has not been used in this type of search.\nThis example shows the results of a successful request:")]),t._v(" "),t._m(7)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"batch-search"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#batch-search","aria-hidden":"true"}},[this._v("#")]),this._v(" Batch search")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("A Content-type header set to application/json.")]),this._v(" "),e("li",[this._v("A request body with a JSON object that includes all data needed for the query: masses to search in CMM, tolerance allowed for the putative annotations regarding the masses, metabolite types to search, masses mode, ionization mode, possible adducts formed when running the experiment and databases that will be included in the search.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default value")]),t._v(" "),a("th",[t._v("Optativity")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("masses")]),t._v(" "),a("td",[t._v("array of doubles")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("mandatory")])]),t._v(" "),a("tr",[a("td",[t._v("tolerance")]),t._v(" "),a("td",[t._v("double (range: [0..100])")]),t._v(" "),a("td",[t._v("10")]),t._v(" "),a("td",[t._v("mandatory")])]),t._v(" "),a("tr",[a("td",[t._v("tolerance_mode")]),t._v(" "),a("td",[t._v("tolerance_mode_enum")]),t._v(" "),a("td",[t._v("“ppm”")]),t._v(" "),a("td",[t._v("mandatory")])]),t._v(" "),a("tr",[a("td",[t._v("databases")]),t._v(" "),a("td",[t._v("array of database_enum")]),t._v(" "),a("td",[t._v("“all-except-mine”")]),t._v(" "),a("td",[t._v("mandatory")])]),t._v(" "),a("tr",[a("td",[t._v("metabolites_type")]),t._v(" "),a("td",[t._v("metabolites_type_enum")]),t._v(" "),a("td",[t._v("“all-except-peptides”")]),t._v(" "),a("td",[t._v("mandatory")])]),t._v(" "),a("tr",[a("td",[t._v("masses_mode")]),t._v(" "),a("td",[t._v("masses_mode_enum")]),t._v(" "),a("td",[t._v("“mz”")]),t._v(" "),a("td",[t._v("mandatory")])]),t._v(" "),a("tr",[a("td",[t._v("ion_mode")]),t._v(" "),a("td",[t._v("ion_mode_enum")]),t._v(" "),a("td",[t._v("“positive”")]),t._v(" "),a("td",[t._v("mandatory")])]),t._v(" "),a("tr",[a("td",[t._v("adducts")]),t._v(" "),a("td",[t._v("array of positive_enum")]),t._v(" "),a("td",[t._v("[“M+H”, “M+2H”, “M+Na”, “M+K”, “M+NH4'”, “M+H-H2O”]")]),t._v(" "),a("td",[t._v("mandatory")])]),t._v(" "),a("tr",[a("td",[t._v("adducts")]),t._v(" "),a("td",[t._v("array of negative_enum")]),t._v(" "),a("td",[t._v("[“M-H”, “M+Cl”, “M+FA-H”, “M-H-H2O”]")]),t._v(" "),a("td",[t._v("mandatory")])]),t._v(" "),a("tr",[a("td",[t._v("adducts")]),t._v(" "),a("td",[t._v("array of neutral_enum")]),t._v(" "),a("td",[t._v("[“M”]")]),t._v(" "),a("td",[t._v("mandatory")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Values")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("tolerance_mode_enum")]),t._v(" "),a("td",[t._v("“ppm”, “mDa”")])]),t._v(" "),a("tr",[a("td",[t._v("database_enum")]),t._v(" "),a("td",[t._v("“all”, “all-except-mine”, “HMDB”, “LipidMaps”, “Metlin”, “Kegg”, “in-house”, “mine”")])]),t._v(" "),a("tr",[a("td",[t._v("metabolites_type_enum")]),t._v(" "),a("td",[t._v("“all-except-peptides”, “only-lipids”, “all-including-peptides”")])]),t._v(" "),a("tr",[a("td",[t._v("masses_mode_enum")]),t._v(" "),a("td",[t._v("“neutral”, ”mz”")])]),t._v(" "),a("tr",[a("td",[t._v("ion_mode_enum")]),t._v(" "),a("td",[t._v("“neutral”, ”positive”, “negative”")])]),t._v(" "),a("tr",[a("td",[t._v("positive_enum")]),t._v(" "),a("td",[t._v("''allPositives'', M+3H, M+2H+Na, M+H+2K, M+H+2Na, M+3Na, M+2H, M+H+NH4, M+H+Na, M+H+K, M+ACN+2H, M+2Na, M+2ACN+2H, M+3ACN+2H, M+H, M+Na, M+K, M+NH4, M+H-H2O, 2M+H, 2M+Na, M+H+HCOONa, 2M+H-H2O, M+CH3OH+H, M+ACN+H, M+2Na-H, M+IsoProp+H, M+ACN+Na, M+2K-H, M+DMSO+H, M+2ACN+H, M+IsoProp+Na+H, 2M+NH4, 2M+K, 2M+ACN+H, 2M+ACN+Na, M+H-2H2O, M+NH4-H2O, M+Li, 2M+2H+3H2O, M+H+CH3COOH, M+H+CH3COOHNa")])]),t._v(" "),a("tr",[a("td",[t._v("negative_enum")]),t._v(" "),a("td",[t._v("''allNegatives'', M-3H, M-2H, M-H2O-H, M-H, M+Na-2H, M+Cl, M+K-2H, M+FA-H, M+Hac-H, M+Br, M+TFA-H, 2M-H, 2M+FA-H, 2M+Hac-H, 3M-H, M-H+HCOONa, M+F")])]),t._v(" "),a("tr",[a("td",[t._v("neutral_enum")]),t._v(" "),a("td",[t._v("''allNeutral'', ''M''")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n "metabolites_type": "all-except-peptides",\n "databases": ["hmdb"],\n "masses_mode": "mz",\n "ion_mode": "positive",\n "adducts": ["all"],\n "tolerance": 10.0,\n "tolerance_mode": "ppm",\n "masses": [400.3432, ..., 288.2174]\n}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default value")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("results")]),t._v(" "),a("td",[t._v("Array of putative_annotation_object")]),t._v(" "),a("td",[t._v("-")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("identifier")]),t._v(" "),a("td",[t._v("integer")])]),t._v(" "),a("tr",[a("td",[t._v("EM")]),t._v(" "),a("td",[t._v("double")])]),t._v(" "),a("tr",[a("td",[t._v("name")]),t._v(" "),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("formula")]),t._v(" "),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("adduct")]),t._v(" "),a("td",[t._v("positive_enum")])]),t._v(" "),a("tr",[a("td",[t._v("adduct")]),t._v(" "),a("td",[t._v("negative_enum")])]),t._v(" "),a("tr",[a("td",[t._v("adduct")]),t._v(" "),a("td",[t._v("neutral_enum")])]),t._v(" "),a("tr",[a("td",[t._v("molecular_weight")]),t._v(" "),a("td",[t._v("double")])]),t._v(" "),a("tr",[a("td",[t._v("error_ppm")]),t._v(" "),a("td",[t._v("integer")])]),t._v(" "),a("tr",[a("td",[t._v("ionizationScore")]),t._v(" "),a("td",[t._v("integer (Range: -2, [0..2])")])]),t._v(" "),a("tr",[a("td",[t._v("FinalScore")]),t._v(" "),a("td",[t._v("integer (Range: -2, [0..2])")])]),t._v(" "),a("tr",[a("td",[t._v("cas")]),t._v(" "),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("kegg_compound")]),t._v(" "),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("kegg_uri")]),t._v(" "),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("hmdb_compound")]),t._v(" "),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("hmdb_uri")]),t._v(" "),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("lipidmaps_compound")]),t._v(" "),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("lipidmaps_uri")]),t._v(" "),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("metlin_compound")]),t._v(" "),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("metlin_uri")]),t._v(" "),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("pubchem_compound")]),t._v(" "),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("pubchem_uri")]),t._v(" "),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("pathways")]),t._v(" "),a("td",[t._v("array of strings")])]),t._v(" "),a("tr",[a("td",[t._v("inChiKey")]),t._v(" "),a("td",[t._v("string")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n "results": [\n  {\n   "identifier": 32600,\n   "EM": 400.3432,\n   "name": "Palmitoylcarnitine",\n   "formula": "C23H45NO4",\n   "adduct": "M+H",\n   "molecular_weight": 399.334858933,\n   "error_ppm": 3,\n   "ionizationScore": -2,\n   "finalScore": -2,\n   "cas": "2364-67-2",\n   "kegg_compound": "C02990",\n   "kegg_uri": "http://www.genome.jp/dbget-bin/www_bget?cpd:C02990",\n   "hmdb_compound": "HMDB0000222",\n   "hmdb_uri": "http://www.hmdb.ca/metabolites/HMDB0000222",\n   "lipidmaps_compound": "LMFA07070004",\n   "lipidmaps_uri": "http://www.lipidmaps.org/data/LMSDRecord.php?LMID=LMFA07070004",\n   "metlin_compound": "961",\n   "metlin_uri": "https://metlin.scripps.edu/metabo_info.php?molid=961",\n   "pubchem_compound": "11953816",\n   "pubchem_uri": "https://pubchem.ncbi.nlm.nih.gov/compound/11953816",\n   "pathways": []\n  },\n  ...\n ]\n}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br")])])}],!1,null,null,null);e.default=n.exports}}]);