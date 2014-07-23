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
	
	
//	validate(code, type);
	
	
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

function readBarcode() {
	cordova.plugins.barcodeScanner.scan(
		function (result) {
			alert('We got a barcode\n' +
				'Result: ' + result.text + '\n' +
				'Format: ' + result.format + '\n' +
				'Cancelled: ' + result.cancelled);
			}, 
		function (error) {
			alert('Scanning failed: ' + error);
		}
	);
}

function validate(code, type) {
	var len = code.length;
	
	// バーコードの種類チェック
	// チェックを逆にして、各種類に対応したバリデーションを行うほうがいい？
	if ('codabar' !== type
		&& 'code11' !== type
		&& 'code39' !== type
		&& 'code128' !== type
		&& 'ean8' !== type
		&& 'ean13' !== type
		&& 'std25' !== type
		&& 'int25' !== type
		&& 'msi' !== type
		&& 'datamatrix' !== type) {
		// error
	}
	
	
	
	// 桁数チェック
	// 必要：ean13, ean8
	// 不要：codabar, code11, code93, code128, msi, datamatrix
	// 偶数チェック？：std25, int25
	if ('ean8' === type) {
		if (8 !== len) {
			
		}
	} else if ('ean13' === type) {
		if (13 !== len) {
			
		}
	}
	
	// 文字種チェック
	//		英字チェック(大文字・小文字それぞれ)
	//		全角文字チェック(datamatrix以外全てエラー)
	//		記号チェック
	//		半角スペースチェック
	
	
	
}









