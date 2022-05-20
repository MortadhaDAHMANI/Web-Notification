function notifAll(messago, titlo, img='n1.png',typo='info', delayo, autoHido=false, closeBtno=false,overlayo=false,posH="left", posV="bottom"){
			notify({
				type: typo, //alert | success | error | warning | info
				title: titlo,
				message: messago,
				position: {
					x: posH, //right | left | center
					y: posV //top | bottom | center
				},
				icon: '<img src="./'+img+'.png" />', //img
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

function notifAllf(messago, titlo, ico='<i class="fa-solid fa-paper-plane"></i>',typo='info', delayo, autoHido=false, closeBtno=false,overlayo=false,posH="left", posV="bottom"){
			notify({
				type: typo, //alert | success | error | warning | info
				title: titlo,
				message: messago,
				position: {
					x: posH, //right | left | center
					y: posV //top | bottom | center
				},
				//icon: '<i class="'+ico+'"></i>',//<i>
				icon: ico,//<i>
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

/*
fa-2xs 	0.625em	10px
fa-xs 	0.75em 	12px
fa-sm 	0.875em	14px
fa-lg 	1.25em 	20px
fa-xl 	1.5em 	24px
fa-2xl 	2em 	32px
*/