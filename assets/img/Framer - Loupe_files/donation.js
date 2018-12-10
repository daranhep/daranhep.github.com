/* eslint-disable */

// Loads an external JS file and append it to the head, from:
// http://zcourts.com/2011/10/06/dynamically-requireinclude-a-javascript-file-into-a-page-and-be-notified-when-its-loaded
function require(file,callback){
  var head=document.getElementsByTagName("head")[0];
  var script=document.createElement('script');
  script.src=file;
  script.type='text/javascript';
  // real browsers:
  script.onload=callback;
  // MSIE:
  script.onreadystatechange = function() {
    if (_this.readyState == 'complete')
      callback();
  };
  head.appendChild(script);
}

/**
 * checks if email is valid
 * @param {String} email
 * @return {Bool} true or false
 */
function validateDonorEmail(email) {
  if (/^([A-Za-z0-9_\-\.\+])+\@([A-Za-z0-9_\-\.\+])+\.([A-Za-z]{2,4})$/.test(email)) {
    return true;
  }

  return false;
}

/**
 * Adds missing parameters to donation source, based on donation context (page or banner).
 *
 * Full syntax cases:
 * - Donation page: 'ctx=page;uid=genji;ref=http%3A%2F%2Fexample.com'
 * - IA banner page: 'ctx=ia;uid=hanzo;url=http%3A%2F%2Farchive.org'
 *
 * @param {string} donationSource The existing donation source string
 * @return {string} The new donation source string with missing parameters supplied.
 */
function enhancedDonationSource(donationSource) {
  var output = donationSource;
  if (donationSource.match(/ctx=page/)) {
    if (!donationSource.match(/;ref=/)) {
      output += ';ref=' + encodeURIComponent(document.referrer);
    }
  } else { // Banner
    if (!donationSource.match(/;url=/)) {
      output += ';url=' + encodeURIComponent(location.href);
    }
  }
  return output;
};

document.addEventListener('DOMContentLoaded', function () {
  function Donate() {
    return {
      stripeHandler: null,
      checkoutJSloaded: false,
      StripeCheckoutLoadRetries: 25,

      addEvent: function (el, type, handler) {
        // if (!el) {console.log("Element not defined"); return;}
        if (el.attachEvent) el.attachEvent('on' + type, handler);
        else el.addEventListener(type, handler);
      },

      jsSupported: function () {
        document.querySelector('body').className.replace(new RegExp('\\bnojs\\b', 'g'), '');
      },

      setupSubscriptionButtons: function () {
        var that = this;
        var selectedDonationType = document.querySelector(".donationtype input[name='type']:checked");
        if (selectedDonationType === null)
          return;
        donationType = selectedDonationType.id;

        if (donationType == 'type_subscription') {
          that.toggleButtons('type_subscription');
        } else {
          that.toggleButtons('type_oneoff');
        }

        this.addEvent(document.getElementById('type_subscription'), 'change', function (ev) {
          if (ev.target.checked) {
            that.toggleButtons('type_subscription');
          }
        });

        this.addEvent(document.getElementById('type_oneoff'), 'change', function (ev) {
          if (ev.target.checked) {
            that.toggleButtons('type_oneoff');
          }
        });
      },

      /**
       * Toggling buttons when user choose donation type
       * @param {String} donationType
       */
      toggleButtons: function (donationType) {
        var subButtons = document.getElementById('subscription_buttons');
        var oneButtons = document.getElementById('oneoff_buttons');

        if (donationType == 'type_oneoff') {
          oneButtons.style.display = 'block';
          subButtons.style.display = 'none';
        } else {
          oneButtons.style.display = 'none';
          subButtons.style.display = 'block';
        }
      },

      uncheckOnOwnAmount: function () {
        this.addEvent(document.getElementById('amount_custom'), 'click', function (ev) {
          document.getElementById('custamt').checked = true;
        });
      },

      addCloseSupport: function () {
        const bannerClose = function hideDonationBannerOnClickingXbutton() {
          document.getElementById('donate_banner').style.display = "none";
          // set a cookie to make the donate banner not show for 3 days..
          // see includes/js-cookies.js for Cookies.set() function documentation
          Cookies.set('donation', 'x', {path: '/', expires: 3, domain: '.archive.org'});
          Cookies.set('donation', 'x', {path: '/', expires: 3, domain: '.openlibrary.org'});
        }

        this.addEvent(document.getElementById("donate_close"), 'click', bannerClose);
      },

      addRememberSupport: function() {
        var donate = this,
            donateLaterLinkId = 'donate_later',
            donateLateDropdown = document.getElementById('donate_dropdown'),
            remindForm = document.forms['donate_reminder_form'],
            baseUrl = remindForm.getAttribute('data-base-url');

        if (!baseUrl || !baseUrl.length) {
          baseUrl = 'https://archive.org';
        }

        donate.addEvent(document.getElementById(donateLaterLinkId), 'click', function(event) {
          if (donateLateDropdown.className.indexOf('is-open') < 0) {
            donateLateDropdown.classList.add('is-open');
          }

          remindForm.elements['email'].focus();
          event.preventDefault();
        });

        donate.addEvent(document.getElementById('close_donate_dropdown'), 'click', function() {
          donateLateDropdown.classList.remove('is-open');

          document.getElementById(donateLaterLinkId).focus();
        });

        donate.addEvent(window, "keydown", function (e) {
          const ESC_KEYCODE = 27;
          if (e.keyCode === ESC_KEYCODE) {
            document.getElementById('close_donate_dropdown').click();
          }
        });

        donate.remindFormHandler = function(email, firstName, lastName) {
          var formData = new FormData();
          var xhr = new XMLHttpRequest();

          formData.append('email', email);
          formData.append('first_name', firstName || '');
          formData.append('last_name', lastName || '')

          xhr.open('POST', baseUrl + '/donate/remindDonate.php', true);

          xhr.onreadystatechange = function () {
            var reminderResponse = document.getElementById('donate_reminder_success');
            document.getElementById('donate_reminder_form').classList.add('hidden');

            if (xhr.readyState != 4 || xhr.status != 200) {
              reminderResponse.innerHTML = '<h2>Hmmm...</h2>' +
                                            '<p>Something is amiss. Can you try again in a little while?</p>';
              reminderResponse.classList.remove('hidden');

              return;
            }

            // successfully registered
            reminderResponse.innerHTML = '<h2>Thank You!</h2>' +
                                          '<p>Please check your email for opt-in verification.</p>';
            reminderResponse.classList.remove('hidden');

            // set a cookie to make the donate banner not show for 30 days (till the end of campaign) ...
            // see includes/js-cookies.js for Cookies.set() function documentation
            Cookies.set('donation', 'x', {path: '/', expires: 30, domain: '.archive.org'});
            Cookies.set('donation', 'x', {path: '/', expires: 30, domain: '.openlibrary.org'});
          };

          xhr.send(formData);
        }

        donate.addEvent(remindForm, 'submit', function(e) {
          e.preventDefault();

          if (!validateDonorEmail(remindForm.elements['email'].value)) {
            var errorEmail = document.getElementById('donate_reminder_form').getElementsByClassName('error-email')[0];
            errorEmail.style.display = 'block';
            return;
          }

          var donateLaterLink = document.getElementById(donateLaterLinkId);
          var sourceContext = donateLaterLink.getAttribute('data-source-context') || '';
          if (typeof archive_analytics !== 'undefined') {
            archive_analytics.send_event(
              'DonateBanner' + sourceContext,
              'MaybeLaterFormSubmit',
              window.location.pathname,
              { service: 'ao_no_sampling' },
            )
          }

          donate.remindFormHandler(
            remindForm.elements['email'].value,
            remindForm.elements['first-name'].value,
            remindForm.elements['last-name'].value
          );
        });
      },

      /**
       * @param {Function} callback
       * @param {String}   baseUrl
       */
      setupStripeHandler: function(callback, baseUrl) {
        var donate = this;
        var maxRetries = 25;

        if (!baseUrl) {
          baseUrl = 'https://archive.org';
        }

        if (donate.stripeHandler !== null){
          callback();
          return;
        }

        if (typeof(StripeCheckout)=='undefined'){
          donate.StripeCheckoutLoadRetries--;
          if (donate.StripeCheckoutLoadRetries > 0){
            if (typeof(console)!='undefined'  &&  typeof(console.log)!='undefined')
              console.log('wait 1 sec and recheck setup... '+donate.StripeCheckoutLoadRetries+' reload attempts left..');
            setTimeout(function(){ donate.setupStripeHandler(callback, baseUrl); }, 1000);
            return;
          }
        }


        var public_key = document.getElementById('stripe_public_key').value;

        donate.stripeHandler = StripeCheckout.configure({
          key: public_key,
          image: baseUrl + '/images/logo_arches.png',
          token: function (token) {
            // Use the token to create the charge with a server-side script.
            // You can access the token ID with `token.id`
            var donationtype = document.querySelector(".donationtype input[name='type']:checked").value;
            var amount = populateDonationAmount('a1'); // Amount field on stripe donation form has id="a1"
            var formData = new FormData();
            var xhr = new XMLHttpRequest();

            formData.append('charge_token', token.id);
            formData.append('email', token.email);
            formData.append('type', donationtype);
            formData.append('amount', amount);
            formData.append('source', donate.source);
            formData.append('address_city', token.card.address_city);
            formData.append('address_state', token.card.address_state);
            formData.append('address_zip', token.card.address_zip);
            formData.append('address_country', token.card.address_country);
            xhr.open('POST', baseUrl + '/services/stripe-charge.php', true);
            xhr.onreadystatechange = function () {
              if (xhr.readyState != 4 || xhr.status != 200) {
                // alert("We apologize but something went wrong.  Will you please try again?");
                return;
              }
              // alert("Success: " + xhr.responseText);
              data = JSON.parse(xhr.responseText);
              if (!data.status) {
                alert("We apologize but something went wrong.  Will you please try again?");
              } else {
                if (data.data.charge_id === undefined || data.data.customer_id === undefined)
                  alert("We apologize but something went wrong.  Will you please try again?")

                const ONETIME = 'one-time'
                document.querySelector("#stripeComplete input[name='email']").value = token.email;
                document.querySelector("#stripeComplete input[name='type']").value = donationtype;
                document.querySelector("#stripeComplete input[name='amount']").value = amount;
                document.querySelector("#stripeComplete input[name='chargeID']").value = data.data.charge_id;

                if (donationtype === ONETIME) {
                  // Get existing stripe customer_id
                  // Open up-sell pop when user pay one-time donation
                  const customerId = data.data.customer_id;
                  setupUpSellPopUp(customerId, amount);
                } else {
                  // redirect to thank you page...
                  document.getElementById("stripeComplete").submit();
                }
              }
            };

            xhr.send(formData);
          }
        });

        callback();
      },

      addStripeSupport: function () {
        // Stripe necessary script

        var public_key = document.getElementById('stripe_public_key').value;
        if (!public_key) {
          // console.log("Stripe public key not defined.");
          return;
        }
        var donate = this;

        /**
         * @param {String} description
         * @param {String} panelLabel
         * @param {String} baseUrl
         */
        var payWithStripe = function payWithStripe(description, panelLabel, baseUrl) {
          var amount = populateDonationAmount('a1'); // Amount field on stripe donation form has id="a1"
          if (amount == false)
            return;
          var cents = amount * 100;

          donate.setupStripeHandler(
            function setupStripeHandlerCallback() {
              donate.stripeHandler.open({
                image: baseUrl + '/images/logo_arches.png',
                name: "Internet Archive",
                description: description,
                amount: cents,
                panelLabel: panelLabel,
                billingAddress: true
              });
            },
            baseUrl
          );
        };

        /**
         * @param {String} baseUrl
         */
        var payWithStripe1 = function payWithStripe1(baseUrl) {
          donate.checkoutJSloaded = true;
          payWithStripe('One Time Donation', 'Donate {{amount}}', baseUrl);
          return false;
        };

        /**
         * @param {String} baseUrl
         */
        var payWithStripeM = function(baseUrl) {
          donate.checkoutJSloaded = true;
          payWithStripe('Monthly Donation', 'Donate {{amount}} Monthly', baseUrl);
          return false;
        };

        var stripeOneTime = document.getElementById('stripeOneTime');
        var stripeMonthly = document.getElementById('stripeMonthly');

        // When clicked -- open Checkout with further options

        // ONLY include the JS  *on demand* (ie: user pressing a [Credit] button)
        // because Stripe loads and iframe and all sorts of resources from stripe.com
        // and their CDN and that would mean a "drive by" bugging of our IA users
        // just loading a page w/ a donation banner on it and nothing more.
        //    -tracey dec 2015
        this.addEvent(stripeOneTime, 'click', function (e) {
          var baseUrl = stripeOneTime.getAttribute('data-base-url');

          if (e.preventDefault) // IE, oh facepalm
            e.preventDefault();
          donate.source = enhancedDonationSource(stripeOneTime.getAttribute('data-source'));
          if (!donate.checkoutJSloaded){
            require('https://checkout.stripe.com/checkout.js', function(){
              return payWithStripe1(baseUrl);
            });
          } else {
            return payWithStripe1(baseUrl);
          }
        });

        this.addEvent(stripeMonthly, 'click', function (e) {
          var baseUrl = stripeMonthly.getAttribute('data-base-url');

          if (e.preventDefault) // IE, oh facepalm
            e.preventDefault();
          donate.source = enhancedDonationSource(stripeMonthly.getAttribute('data-source'));
          if (!donate.checkoutJSloaded){
            require('https://checkout.stripe.com/checkout.js', function(){
              return payWithStripeM(baseUrl);
            });
          }
          return payWithStripeM(baseUrl);
        });

        // Close Checkout on page navigation
        this.addEvent(window, "popstate", function () {
          donate.setupStripeHandler(function(){
            donate.stripeHandler.close();
          });
        });
      },

      handlePaypalSubmission: function() {
        this.addEvent(document.getElementById('paypalOneTime'), 'submit', function(e) {
          return populatePaypalTransactionFields('a2', 'paypalOneTime'); // Amount field on one-time donation form has id="a2"
        });
        this.addEvent(document.getElementById('paypalMonthly'), 'submit', function(e) {
          return populatePaypalTransactionFields('a5', 'paypalMonthly'); // Amount field on monthly donation form has id="a5"
        });
      }
    };
  }

  var d = new Donate();
  d.jsSupported();
  d.setupSubscriptionButtons();
  d.uncheckOnOwnAmount();
  d.addStripeSupport();
  d.addCloseSupport();
  d.addRememberSupport();
  d.handlePaypalSubmission();
});

/**
 * Validates the donation amount, alerting the user if invalid or populating the specified amount field if valid.
 * @param {string} amountFieldId The id of the form field containing the transaction amount to be populated
 * @return {number|boolean} Donation value or else `false` if invalid
 */
function populateDonationAmount(amountFieldId) {
  // regex the number from the string & return, else null
  function valid_int(val) {
    // only accept a number, possibly preceded by '$', and possibly containing a decimal
    var re = /^\$?\s*(\d+\.?\d*)\s*$/;
    var m;

    if ((m = re.exec(val)) !== null) {
      if (m.index === re.lastIndex) {
        re.lastIndex++;
      }
      // return the matched number group, parsed as Float
      return parseFloat(m[1]);
    }
    return null;
  }

  var v = document.querySelector("input[name=amount]:checked").value;
  if (v == null || v === '') {
    v = document.getElementById('amount_custom').value;
  }
  // If empty value for bitcoin donation on donate/subscribe.php page
  // TODO: Check for deprecation of this page and thus, this check.
  if (amountFieldId !== 'a3' && (v == null || v === '')) {
    alert('Please choose an amount for your donation!');
    return false;
  }
  // confirm only a number, no stray characters & not '0'
  v = valid_int(v);
  if (v == null || v == 0 || v == '0' || v < 5) {
    alert("Please enter a valid amount, minimum $5.00.\n\nWhy is there a minimum donation?\nUnfortunately some people use online donations to test stolen credit cards. Requiring a minimum donation helps deter this fraud.");
    return false;
  }
  var el = document.getElementById(amountFieldId);
  if (el) el.value = v; // for paypal
  return v;
}

/**
 * Adds missing parameters to Paypal transaction form.
 * @param {string} amountFieldId The id of the form field containing the transaction amount to be populated
 * @param {string} donationFormId The id of the form field containing the donation source
 * @return {boolean} Value that will be returned by the onsubmit handler, i.e. `false` to halt submission
 */
function populatePaypalTransactionFields(amountFieldId, donationFormId) {
  if (populateDonationAmount(amountFieldId) === false) {
    return false;
  }
  var sourceField = document.querySelector('#' + donationFormId + ' input[name=custom]');
  if (sourceField) {
    sourceField.value = enhancedDonationSource(sourceField.value);
  }
  return true;
}


/*
 * Populate popup window to ask for recurring payment
 *
 * @param {string} customer_id
 * @param {string} amount
 */
function setupUpSellPopUp(customerId, amount) {
  // Populate window to ask for recurring payment
  if (amount <= 10)
    amount = 5;
  else if (amount > 10 && amount <= 25)
    amount = 10;
  else if (amount > 25 && amount <= 100)
    amount = 25;
  else if (amount > 100)
    amount = 50;

  // set customerId and amount in hidden fields
  document.querySelector(".upsell-popup input[name='customer_id']").value = customerId;
  document.querySelector(".upsell-popup input[name='upsell_amount']").value = amount;

  document.getElementById("upsell-popup").style.cssText = "display: block";
  document.getElementById("overlay-modal").style.cssText = "display: block";
  document.body.style.overflow = "hidden";
}


/*
 * Process Upsell monthly donation
 */
function upSellYesEvent() {
  var customerElement = document.querySelector(".upsell-popup input[name='customer_id']")
  if (customerElement === null) return;
  customerId = customerElement.value;

  var amountElement = document.querySelector(".upsell-popup input[name='upsell_amount']")
  if (amountElement === null) return;
  amount = amountElement.value;
  if (!amount || amount < 1) return;

  document.getElementById('up_sell_yes').style.pointerEvents = 'none';

  var upSellData = new FormData();
  var xhr = new XMLHttpRequest();

  upSellData.append('up_sell', true);
  upSellData.append('customer_id', customerId);
  upSellData.append('amount', amount);
  upSellData.append('currency', 'usd');

  var stripeOneTime = document.getElementById('stripeOneTime');
  var baseUrl = stripeOneTime.getAttribute('data-base-url');
  if (!baseUrl || !baseUrl.length) {
    baseUrl = 'https://archive.org';
  }

  xhr.open('POST', baseUrl + '/services/stripe-charge.php', true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState != 4 || xhr.status != 200) {
      return;
    }
    data = JSON.parse(xhr.responseText);

    if (!data.status) {
      alert("We apologize but something went wrong.  Will you please try again?");
    } else {
      // redirect to thank you page...
      document.getElementById("stripeComplete").submit();
    }
  };

  xhr.send(upSellData);
}

/*
 * redirect to thank you page... when user don't want to become monthly donor
 */
function closeUpSellModal() {
  document.getElementById("upsell-popup").style.cssText = "display: none";
  document.getElementById("overlay-modal").style.cssText = "display: none";
  document.body.style.overflow = "scroll";
  // redirect to thank you page...
  document.getElementById("stripeComplete").submit();
}
