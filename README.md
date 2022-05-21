# Web-Notification
The simple JavaScript notifications for Web support with image and font awesome icons

![alt iviny](https://raw.githubusercontent.com/MortadhaDAHMANI/Web-Notification/main/notif.png)

## Quick Start

### With image steps
1. jquery.notify.css `<link type="text/css" rel='stylesheet' href="./jquery.notify.css"/>`
3. jquery.min.js `<script type="text/javascript" src="./jquery.min.js"></script>`
4. jquery.notify.min.js `<script type="text/javascript" src="./jquery.notify.min.js"></script>`
5. mynotify.js `<script type="text/javascript" src="./mynotify.js"></script>`
6. use notifAll to display a notify for info, success, warning or error

```js
// Display an info notif with no title IMG | (n2 is a name of png/jpg file)/(time in the ms)
notifAll('', 'IMG [On]','n2', 'info', 10000, false, true,false,"right", "bottom");
```
### With font awesome steps
1. `<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/js/all.js"></script>`
2. `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.css" />`
3. `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/fontawesome.css" />`
4. `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/regular.css" />`

```js
// Display an info notif with no title FA <i> | (n2 is a name of png/jpg file)/(time in the ms)
notifAllf('', 'ICO [On]','<i class="fa-solid fa-paper-plane fa-xl"></i>', 'info', 10000, false, true,false,"right", "bottom");
```

#### Size
| Fa    |  em | px |
| ----- | --- | ------ |
| fa-xs | 0.75em | 12px|
| fa-sm | 0.875em | 14px|
| fa-lg | 1.25em | 20px|
| fa-xl | 1.5em | 24px|
| fa-2xl | 2em | 32px|


### Useful links
* [Font Awesome](https://fontawesome.com/icons/ "Font Awesome ico")
* [Font Awesome Github](https://github.com/FortAwesome/Font-Awesome "Font Awesome Github")
* [CDN](https://cdnjs.com/libraries/font-awesome "CDN")

#### Debug
- [https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/fontawesome.css](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/fontawesome.css)

### Donation
If this project help you, you can give me a tip ;)

<!---
[![Donate](https://img.shields.io/badge/Donate-PayPal-blue.svg?style=for-the-badge&logo=paypal&link=https://www.paypal.com/paypalme2/billzgithub)](https://paypal.me/mamdpay)
-->

<a href="https://paypal.me/mamdpay" rel="In"> <img src="https://www.pngarts.com/files/4/Paypal-Donate-PNG-High-Quality-Image.png" alt="Donation" height="70"></a>

<!--a href="https://www.linkedin.com/in/mortadhadahmani" rel="In"> <img src="https://ps.w.org/button-paypal-donation/assets/icon-256x256.jpg" alt="Donation" height="150"></a-->

<!--a href="https://paypal.me/mamdpay" rel="In"> <img src="https://www.paypalobjects.com/webstatic/mktg/logo/AM_mc_vs_dc_ae.jpg" alt="Donation" height="100"></a-->

<!--a href="https://paypal.me/mamdpay" rel="In"> <img src="https://wildflowercottage.org/wp-content/uploads/2019/03/paypal_donate_button_png_996391.png" alt="Donation" height="150"></a-->

### Author
* This version has been created by: [**Mortadha DAHMANI**](mailto:mortadha.dahmani@gmail.com)

<a href="https://www.linkedin.com/in/mortadhadahmani" rel="In"> <img src="https://raw.githubusercontent.com/MortadhaDAHMANI/MortadhaDahmani/main/in2.jpg" alt="In" height="40"></a>

### Revision History
* Initial Release : 25 Mars 2021

### License
* _Web-Notification_ is distributed under the **LGPL** version 3 license.
