function createBarcode() {
	var code,
	    type,
	    crc,
	    width,
	    height;
	
	code = $('#code').val();
	type = $('#type option:selected').val();
	width = $('#width').val() || 1;
	height = $('#height').val() || 50;
	
	if ('std25' === type || 'int25' === type || 'code93' === type || 'msi' === type) {
		if ('checked' === $('#crc:checked').val()) {
			crc = true;
		} else {
			crc = false;
		}
		$('#output').barcode({code: code, crc: crc}, type, {barWidth: width, barHeight: height});
	} else {
		$('#output').barcode(code, type, {barWidth: width, barHeight: height});
	}
}
