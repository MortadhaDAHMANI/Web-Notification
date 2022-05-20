function notifAll(messago, titlo, img='n1.png',typo='info', delayo, autoHido=false, closeBtno=false,overlayo=false,posH="left", posV="bottom"){
			notify({
				type: typo, //alert | success | error | warning | info
				title: titlo,
				message: messago,
				position: {
					x: posH, //right | left | center
					y: posV //top | bottom | center
				},
				icon: '<img src="./'+img+'.png" />', //<i>
				size: "normal", //normal | full | small
				overlay: overlayo, //true | false
				closeBtn: closeBtno, //true | false
				overflowHide: false, //true | false
				spacing: 20, //number px
				theme: "default", //default | dark-theme
				autoHide: autoHido, //true | false
				delay: delayo, //number ms
				onShow: null, //function
				onClick: null, //function
				onHide: null, //function
				template: '<div class="notify"><div class="notify-text"></div></div>'
			});
}
