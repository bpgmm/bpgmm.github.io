(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{179:function(e,t,i){"use strict";i.r(t);var n=i(0),a=Object(n.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._v(" "),i("p",[e._v("Ceu Mass Mediator scores the putative annotations based on expert knowledge. This knowledge applied is especially devoted to lipids using Liquid Chromatography. It uses 143 rules divided in three main types:")]),e._v(" "),i("ul",[i("li",[e._v("χ"),i("sub",[e._v("1")]),e._v(": Propensity of particular adducts formation depending on the lipid class, ionisation mode and mobile phase modifier used. Lipids belonging to particular class may always form some adducts in certain experimental conditions, whereas they may form others in different conditions. The mobile phase modifier used is indicated manually by the user. For example, phosphocholine in negative mode primarily form [M+HCOO]- or [M+CH3COO]- depending on the modifier used (HCOO- or CH3COO-); they may also form [M+Cl]- with lower intensity; and they never form [M-H]-. Lipid classes used in these rules are obtained from the "),i("a",{attrs:{href:"https://www.lipidmaps.org/data/classification/LM_classification_exp.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("LipidMaps Classification"),i("OutboundLink")],1),e._v(":\n"),e._m(1)]),e._v(" "),e._m(2),e._v(" "),e._m(3)]),e._v(" "),e._m(4),e._v(" "),e._m(5)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"annotations-rules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#annotations-rules","aria-hidden":"true"}},[this._v("#")]),this._v(" Annotations rules")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[e._v("PC")]),e._v(" "),i("li",[e._v("LPC")]),e._v(" "),i("li",[e._v("PE")]),e._v(" "),i("li",[e._v("LPE")]),e._v(" "),i("li",[e._v("PI")]),e._v(" "),i("li",[e._v("PG")]),e._v(" "),i("li",[e._v("PS")]),e._v(" "),i("li",[e._v("LPS")]),e._v(" "),i("li",[e._v("PA")]),e._v(" "),i("li",[e._v("MG")]),e._v(" "),i("li",[e._v("DG")]),e._v(" "),i("li",[e._v("TG")]),e._v(" "),i("li",[e._v("CER")]),e._v(" "),i("li",[e._v("SM")]),e._v(" "),i("li",[e._v("CE")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("χ"),t("sub",[this._v("2")]),this._v(": Relationship between signals of different adducts from the same compound (Lynn et al., 2015). We only expect certain types of adducts when others are present. For example, glycerophosphoethanolamines (PE) may form [M+Na]+ adduct, but only when [M+H]+ adduct is also formed in higher abundance. If an experimental mass (738.5044 Da) is compatible with a [M+Na]+ adduct of PE(34:2), but the adduct [M+H]+ (716.5225 Da) is not present in the whole data matrix, CMM decreases the score of the annotation of PE(34:2) for experimental mass 738.5044 Da and adduct [M+Na]+.")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("li",[e._v("χ"),i("sub",[e._v("3")]),e._v(": Relative RT based on the lipid class and the length and number of double bounds in the lipid carbon chains (Godzien et al., 2016). For example, RT of LPG(18:0) must be greater than RT of LPG(16:0); and RT of LPG(18:0) must be greater than RT of LPG(18:2).\nCMM calculates a score for each of these three rule types (χ"),i("sub",[e._v("1")]),e._v(", χ"),i("sub",[e._v("2")]),e._v(", χ"),i("sub",[e._v("3")]),e._v(") and then it integrates them by computing their weighted geometric mean:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"/images/annotation_rules_equation.jpg",alt:"annotation_rules_equation"}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("where ω"),i("sub",[e._v("i")]),e._v(" is the weight of each score and χ"),i("sub",[e._v("i")]),e._v(" is the punctuation for each score. ω"),i("sub",[e._v("1")]),e._v(" = 1, ω"),i("sub",[e._v("2")]),e._v(" = 1 and ω"),i("sub",[e._v("3")]),e._v(" ∈ [0, 2]. ω"),i("sub",[e._v("3")]),e._v(" depends on the number of rules applied for lipid elution time. This is the only rule type that can be triggered a variable number of times for the same annotation, depending on how many other lipid annotations with which the retention time of the annotation to be scored can be compared with. The more rules have been triggered, the more evidence supporting or refuting the annotation would have been gathered, the more weight this evidence should have on the final score. Internally all χ"),i("sub",[e._v("i")]),e._v(" ∈ [0, 1], corresponding 0 with a completely refuted annotation, 1 with an annotation for which all the possible evidence is available and it is positive, and the value of 0.5 with an annotation for which there is no evidence (neither refuting nor supporting) but the annotation’s mass matches the query parameters. However, scores are multiplied by 2 in the user interface because our experience has shown us that it is more intuitive to the researchers to see a final score in the interval [0, 2].")])}],!1,null,null,null);t.default=a.exports}}]);