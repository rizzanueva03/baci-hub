/**
 * baci-back-to-home.js
 * Drop this script on every GHL form page.
 * It injects a floating "Back to Home" button that returns to the hub.
 *
 * Usage: <script src="https://yourdomain.com/back-to-home.js"></script>
 * Or paste the contents into a Custom HTML element above the form.
 */
(function(){
  var HOME = 'https://app.bacicoffeehouse.com'; /* Update to your hub URL */

  var style = document.createElement('style');
  style.textContent = [
    '#baci-home-btn{',
      'position:fixed;bottom:22px;right:22px;z-index:9999;',
      'display:flex;align-items:center;gap:8px;',
      'background:#1A0F0A;color:#FAF5EE;',
      'border:1px solid rgba(255,255,255,.15);',
      'border-radius:999px;',
      'padding:11px 18px 11px 14px;',
      'font-family:Inter,system-ui,sans-serif;font-size:13px;font-weight:600;',
      'text-decoration:none;',
      'box-shadow:0 4px 20px rgba(0,0,0,.35);',
      'cursor:pointer;',
      'transition:background .15s,transform .12s;',
      '-webkit-tap-highlight-color:transparent;',
    '}',
    '#baci-home-btn:hover{background:#2C1A12;transform:translateY(-1px);}',
    '#baci-home-btn:active{transform:scale(.97);}',
    '#baci-home-btn .bh-icon{font-size:16px;line-height:1;}',
    '@media(max-width:480px){#baci-home-btn{bottom:16px;right:16px;padding:10px 14px 10px 12px;font-size:12px;}}'
  ].join('');
  document.head.appendChild(style);

  var btn = document.createElement('a');
  btn.id = 'baci-home-btn';
  btn.href = HOME;
  btn.setAttribute('aria-label', 'Back to home');
  btn.innerHTML = '<span class="bh-icon">🏠</span><span>Home</span>';

  document.body.appendChild(btn);
})();
