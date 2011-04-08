function generate() {
	var payer = document.forms['form_gen']['t_payer'].value;
	var title = document.forms['form_gen']['t_title'].value;
	
	document.forms['form_gen']['output'].value = "<div typeof=\"payment:Payment\">\n\t<div property=\"payment:Payer\">"+payer+"</div>\n\t<div property=\"dc:title\">"+title+"</div>\n</div>";
}