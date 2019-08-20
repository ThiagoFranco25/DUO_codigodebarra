$(document).on("click","#a",function(){
  cordova.plugins.barcodeScanner.scan(
      function (result) {
        if(result.text == 280720550){
          $(location).attr("href","https://www.apple.com/br/shop/buy-ipad/ipad-mini/64gb-cinza-espacial-wifi");
        }
         else if(result.text == "989895555"){
          $(location).attr("https://www.samsung.com/br/smartphones/galaxy-j8-j810/SM-J810MZKKZTO/");
        }
        else if(result.text == result){
          $(location).attr("url",result)
        }
      },
      function (error) {
          navigator.notification.alert("Scanning failed: " + error);
      },
      {
          preferFrontCamera : false, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: false, // Android, launch with the torch switched on (if available)
          saveHistory: false, // Android, save scan history (default false)
          prompt : "Coloque um código de barras dentro da área de digitalização", // Android
          resultDisplayDuration: 1500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417, CODE_39, RSS_EXPANDED", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : false, // iOS
          disableSuccessBeep: false // iOS and Android
      }
   );
});