<template>
  <section class="text-gray-600 body-font relative">
    <div class="absolute inset-0 bg-gray-300">
      <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Beirut+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style="filter: grayscale(1) contrast(1.2) opacity(0.4);"></iframe>
      <!-- <img class="object-cover h-screen w-screen" src="http://source.unsplash.com/1920x1280/?music" alt=""> -->
    </div>
    <div class="container px-5 py-24 mx-auto flex">
      <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
        <div>
          <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-6">
              <div class="px-4 sm:px-0">
                <h3 class="text-lg font-medium leading-6 text-gray-900">Donate</h3>
                <p class="mt-1 text-sm text-gray-600">
                  Please enter the amount. But 3$ to get a coffee is fine. Anonymous donations are allowed.
                </p>
              </div>
            </div>
            <div class="mt-5 md:mt-0 md:col-span-6">

                <form id="payment-form" >
                  <div class="col-span-6 sm:col-span-4">
                    <label for="price" class="block text-sm font-medium text-gray-700">Amount</label>
                    <div class="mt-1 relative rounded-md shadow-sm">
                      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span class="text-gray-500 sm:text-sm">
                          <span v-show="payCurrency === 'USD'">$</span>
                          <span v-show="payCurrency === 'EUR'">€</span>
                          <span v-show="payCurrency === 'GBP'">£</span>
                          <span v-show="payCurrency === 'JPY'">¥</span>
                        </span>
                      </div>
                      <input v-model="payAmount" type="text" name="price" id="price" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0.00">
                      <div class="absolute inset-y-0 right-0 flex items-center">
                        <label for="currency" class="sr-only">Currency</label>
                        <select v-model="payCurrency" id="currency" name="currency" class="w-24 focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                              <option value="USD" selected="selected" label="US dollar">USD</option>
                              <option value="EUR" label="Euro">EUR</option>
                              <option value="JPY" label="Japanese yen">JPY</option>
                              <option value="GBP" label="Pound sterling">GBP</option>
                              <option disabled>──────────</option>
                              <option value="AED" label="United Arab Emirates dirham">AED</option>
                              <option value="AFN" label="Afghan afghani">AFN</option>
                              <option value="ALL" label="Albanian lek">ALL</option>
                              <option value="AMD" label="Armenian dram">AMD</option>
                              <option value="ANG" label="Netherlands Antillean guilder">ANG</option>
                              <option value="AOA" label="Angolan kwanza">AOA</option>
                              <option value="ARS" label="Argentine peso">ARS</option>
                              <option value="AUD" label="Australian dollar">AUD</option>
                              <option value="AWG" label="Aruban florin">AWG</option>
                              <option value="AZN" label="Azerbaijani manat">AZN</option>
                              <option value="BAM" label="Bosnia and Herzegovina convertible mark">BAM</option>
                              <option value="BBD" label="Barbadian dollar">BBD</option>
                              <option value="BDT" label="Bangladeshi taka">BDT</option>
                              <option value="BGN" label="Bulgarian lev">BGN</option>
                              <option value="BHD" label="Bahraini dinar">BHD</option>
                              <option value="BIF" label="Burundian franc">BIF</option>
                              <option value="BMD" label="Bermudian dollar">BMD</option>
                              <option value="BND" label="Brunei dollar">BND</option>
                              <option value="BOB" label="Bolivian boliviano">BOB</option>
                              <option value="BRL" label="Brazilian real">BRL</option>
                              <option value="BSD" label="Bahamian dollar">BSD</option>
                              <option value="BTN" label="Bhutanese ngultrum">BTN</option>
                              <option value="BWP" label="Botswana pula">BWP</option>
                              <option value="BYN" label="Belarusian ruble">BYN</option>
                              <option value="BZD" label="Belize dollar">BZD</option>
                              <option value="CAD" label="Canadian dollar">CAD</option>
                              <option value="CDF" label="Congolese franc">CDF</option>
                              <option value="CHF" label="Swiss franc">CHF</option>
                              <option value="CLP" label="Chilean peso">CLP</option>
                              <option value="CNY" label="Chinese yuan">CNY</option>
                              <option value="COP" label="Colombian peso">COP</option>
                              <option value="CRC" label="Costa Rican colón">CRC</option>
                              <option value="CUC" label="Cuban convertible peso">CUC</option>
                              <option value="CUP" label="Cuban peso">CUP</option>
                              <option value="CVE" label="Cape Verdean escudo">CVE</option>
                              <option value="CZK" label="Czech koruna">CZK</option>
                              <option value="DJF" label="Djiboutian franc">DJF</option>
                              <option value="DKK" label="Danish krone">DKK</option>
                              <option value="DOP" label="Dominican peso">DOP</option>
                              <option value="DZD" label="Algerian dinar">DZD</option>
                              <option value="EGP" label="Egyptian pound">EGP</option>
                              <option value="ERN" label="Eritrean nakfa">ERN</option>
                              <option value="ETB" label="Ethiopian birr">ETB</option>
                              <option value="EUR" label="EURO">EUR</option>
                              <option value="FJD" label="Fijian dollar">FJD</option>
                              <option value="FKP" label="Falkland Islands pound">FKP</option>
                              <option value="GBP" label="British pound">GBP</option>
                              <option value="GEL" label="Georgian lari">GEL</option>
                              <option value="GGP" label="Guernsey pound">GGP</option>
                              <option value="GHS" label="Ghanaian cedi">GHS</option>
                              <option value="GIP" label="Gibraltar pound">GIP</option>
                              <option value="GMD" label="Gambian dalasi">GMD</option>
                              <option value="GNF" label="Guinean franc">GNF</option>
                              <option value="GTQ" label="Guatemalan quetzal">GTQ</option>
                              <option value="GYD" label="Guyanese dollar">GYD</option>
                              <option value="HKD" label="Hong Kong dollar">HKD</option>
                              <option value="HNL" label="Honduran lempira">HNL</option>
                              <option value="HKD" label="Hong Kong dollar">HKD</option>
                              <option value="HRK" label="Croatian kuna">HRK</option>
                              <option value="HTG" label="Haitian gourde">HTG</option>
                              <option value="HUF" label="Hungarian forint">HUF</option>
                              <option value="IDR" label="Indonesian rupiah">IDR</option>
                              <option value="ILS" label="Israeli new shekel">ILS</option>
                              <option value="IMP" label="Manx pound">IMP</option>
                              <option value="INR" label="Indian rupee">INR</option>
                              <option value="IQD" label="Iraqi dinar">IQD</option>
                              <option value="IRR" label="Iranian rial">IRR</option>
                              <option value="ISK" label="Icelandic króna">ISK</option>
                              <option value="JEP" label="Jersey pound">JEP</option>
                              <option value="JMD" label="Jamaican dollar">JMD</option>
                              <option value="JOD" label="Jordanian dinar">JOD</option>
                              <option value="JPY" label="Japanese yen">JPY</option>
                              <option value="KES" label="Kenyan shilling">KES</option>
                              <option value="KGS" label="Kyrgyzstani som">KGS</option>
                              <option value="KHR" label="Cambodian riel">KHR</option>
                              <option value="KID" label="Kiribati dollar">KID</option>
                              <option value="KMF" label="Comorian franc">KMF</option>
                              <option value="KPW" label="North Korean won">KPW</option>
                              <option value="KRW" label="South Korean won">KRW</option>
                              <option value="KWD" label="Kuwaiti dinar">KWD</option>
                              <option value="KYD" label="Cayman Islands dollar">KYD</option>
                              <option value="KZT" label="Kazakhstani tenge">KZT</option>
                              <option value="LAK" label="Lao kip">LAK</option>
                              <option value="LBP" label="Lebanese pound">LBP</option>
                              <option value="LKR" label="Sri Lankan rupee">LKR</option>
                              <option value="LRD" label="Liberian dollar">LRD</option>
                              <option value="LSL" label="Lesotho loti">LSL</option>
                              <option value="LYD" label="Libyan dinar">LYD</option>
                              <option value="MAD" label="Moroccan dirham">MAD</option>
                              <option value="MDL" label="Moldovan leu">MDL</option>
                              <option value="MGA" label="Malagasy ariary">MGA</option>
                              <option value="MKD" label="Macedonian denar">MKD</option>
                              <option value="MMK" label="Burmese kyat">MMK</option>
                              <option value="MNT" label="Mongolian tögrög">MNT</option>
                              <option value="MOP" label="Macanese pataca">MOP</option>
                              <option value="MRU" label="Mauritanian ouguiya">MRU</option>
                              <option value="MUR" label="Mauritian rupee">MUR</option>
                              <option value="MVR" label="Maldivian rufiyaa">MVR</option>
                              <option value="MWK" label="Malawian kwacha">MWK</option>
                              <option value="MXN" label="Mexican peso">MXN</option>
                              <option value="MYR" label="Malaysian ringgit">MYR</option>
                              <option value="MZN" label="Mozambican metical">MZN</option>
                              <option value="NAD" label="Namibian dollar">NAD</option>
                              <option value="NGN" label="Nigerian naira">NGN</option>
                              <option value="NIO" label="Nicaraguan córdoba">NIO</option>
                              <option value="NOK" label="Norwegian krone">NOK</option>
                              <option value="NPR" label="Nepalese rupee">NPR</option>
                              <option value="NZD" label="New Zealand dollar">NZD</option>
                              <option value="OMR" label="Omani rial">OMR</option>
                              <option value="PAB" label="Panamanian balboa">PAB</option>
                              <option value="PEN" label="Peruvian sol">PEN</option>
                              <option value="PGK" label="Papua New Guinean kina">PGK</option>
                              <option value="PHP" label="Philippine peso">PHP</option>
                              <option value="PKR" label="Pakistani rupee">PKR</option>
                              <option value="PLN" label="Polish złoty">PLN</option>
                              <option value="PRB" label="Transnistrian ruble">PRB</option>
                              <option value="PYG" label="Paraguayan guaraní">PYG</option>
                              <option value="QAR" label="Qatari riyal">QAR</option>
                              <option value="RON" label="Romanian leu">RON</option>
                              <option value="RON" label="Romanian leu">RON</option>
                              <option value="RSD" label="Serbian dinar">RSD</option>
                              <option value="RUB" label="Russian ruble">RUB</option>
                              <option value="RWF" label="Rwandan franc">RWF</option>
                              <option value="SAR" label="Saudi riyal">SAR</option>
                              <option value="SEK" label="Swedish krona">SEK</option>
                              <option value="SGD" label="Singapore dollar">SGD</option>
                              <option value="SHP" label="Saint Helena pound">SHP</option>
                              <option value="SLL" label="Sierra Leonean leone">SLL</option>
                              <option value="SLS" label="Somaliland shilling">SLS</option>
                              <option value="SOS" label="Somali shilling">SOS</option>
                              <option value="SRD" label="Surinamese dollar">SRD</option>
                              <option value="SSP" label="South Sudanese pound">SSP</option>
                              <option value="STN" label="São Tomé and Príncipe dobra">STN</option>
                              <option value="SYP" label="Syrian pound">SYP</option>
                              <option value="SZL" label="Swazi lilangeni">SZL</option>
                              <option value="THB" label="Thai baht">THB</option>
                              <option value="TJS" label="Tajikistani somoni">TJS</option>
                              <option value="TMT" label="Turkmenistan manat">TMT</option>
                              <option value="TND" label="Tunisian dinar">TND</option>
                              <option value="TOP" label="Tongan paʻanga">TOP</option>
                              <option value="TRY" label="Turkish lira">TRY</option>
                              <option value="TTD" label="Trinidad and Tobago dollar">TTD</option>
                              <option value="TVD" label="Tuvaluan dollar">TVD</option>
                              <option value="TWD" label="New Taiwan dollar">TWD</option>
                              <option value="TZS" label="Tanzanian shilling">TZS</option>
                              <option value="UAH" label="Ukrainian hryvnia">UAH</option>
                              <option value="UGX" label="Ugandan shilling">UGX</option>
                              <option value="USD" label="United States dollar">USD</option>
                              <option value="UYU" label="Uruguayan peso">UYU</option>
                              <option value="UZS" label="Uzbekistani soʻm">UZS</option>
                              <option value="VES" label="Venezuelan bolívar soberano">VES</option>
                              <option value="VND" label="Vietnamese đồng">VND</option>
                              <option value="VUV" label="Vanuatu vatu">VUV</option>
                              <option value="WST" label="Samoan tālā">WST</option>
                              <option value="XAF" label="Central African CFA franc">XAF</option>
                              <option value="XCD" label="Eastern Caribbean dollar">XCD</option>
                              <option value="XOF" label="West African CFA franc">XOF</option>
                              <option value="XPF" label="CFP franc">XPF</option>
                              <option value="ZAR" label="South African rand">ZAR</option>
                              <option value="ZMW" label="Zambian kwacha">ZMW</option>
                              <option value="ZWB" label="Zimbabwean bonds">ZWB</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div class="col-span-6 sm:col-span-4 mt-2">
                    <label for="email_address" class="block text-sm font-medium text-gray-700">Email address</label>
                    <input required v-model="custEmail" type="text" name="email_address" id="email_address" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                  </div>

                  <div class="col-span-6 sm:col-span-3 mt-2">
                <label for="first_name" class="block text-sm font-medium text-gray-700">First name</label>
                <input required v-model="custFirstname" type="text" name="first_name" id="first_name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
              </div>

              <div class="col-span-6 sm:col-span-3 mt-2">
                <label for="last_name" class="block text-sm font-medium text-gray-700">Last name</label>
                <input required v-model="custLastname" type="text" name="last_name" id="last_name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
              </div>

                  <label for="card-element" class="block text-sm font-medium text-gray-700 mt-2">Card details</label>
                  <div ref="card" id="card-element" class="mt-1 form-control border border-gray-300 px-3 py-2 w-full rounded-md shadow-md">
                    <!-- A Stripe Element will be inserted here. -->
                  </div>
                  <!-- Used to display Element errors. -->
                  <div id="card-errors" role="alert" class="text-red-600 text-xs mt-2">{{ msg }}</div>

                  <button :disabled="lockSubmit" class="mt-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="submit" v-on:click.prevent="purchase">Donate {{payCurrency}} {{payAmount}}</button>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { apiUrl } from '@/env.json'
import axios from 'axios'

export default {
  mounted: function () {
    var self=this;
    self.stripe= window.Stripe(self.spk);
    self.card = self.stripe.elements().create('card');
    self.card.mount(self.$refs.card);

    console.log('stripe key: ' + self.spk);
  },
  data () {
    return {
      spk: process.env.STRIPE_KEY || "pk_test_51IHPrGGrVUCQrQF7GzGUqErBudr5gE6HScm57Et46MkllKNJ9oEkNhghGdPjnlzpOchCOSylaR2paK85hwIVhAbn00Kgmxuzyl",
      stripe:undefined,
      card:undefined,
      msg: '',
      payAmount:"10.00",
      payCurrency:"USD",
      custFirstname: '',
      custLastname: '',
      custEmail: '',
      lockSubmit:false,
      api: process.env.VUE_APP_API || apiUrl
    }
  },
  methods:{
    purchase() {
      var self = this;
      self.lockSubmit=true

      self.stripe.createToken(self.card).then(function(result) {
        if (result.error) {
          this.msg = result.error.message;
          self.$forceUpdate(); // Forcing the DOM to update so the Stripe Element can update.
          self.lockSubmit=false
          return;
        }
        else{
          self.msg = 'Processing...';
          console.log(result.token.id);
          self.processTransaction(result.token.id)
        }
      })
      .catch((err) => {
        console.log("error: "+err.message)
        self.lockSubmit=false
      });
    },
    async processTransaction(transactionToken) {
      var self = this;
      const query = `
        query {
          donate(
            firstname: "${self.custFirstname}",
            lastname: "${self.custLastname}",
            email: "${self.custEmail}",
            token: "${transactionToken}",
            amount: ${self.payAmount * 100},
            currency: "${self.payCurrency}")
        }`;
      let response = await axios.post(process.env.VUE_APP_API || apiUrl, { query });
      console.log(response);

      if (response.data.data.donate !== null) {
        this.msg = 'Transaction succeeded';
      } else {
        this.msg = response.data.errors[0].message;
      }
      self.lockSubmit = false;
    },
    processTransaction2(transactionToken){
      var self=this;
      var dt= {
        firstname: self.custFirstname,
        lastname: self.custLastname,
        email: self.custEmail,
        amount: self.payAmount * 100,
        // amount: self.stripCurrency(self.payAmount), //stripe uses an int [with shifted decimal place] so we must convert our payment amount
        currency: self.payCurrency,
        description: "Donation",
        token:transactionToken
      };
      var route=self.api+"/charge"
      axios.post(route, dt
        // {
        // headers: {
        //   'Access-Control-Allow-Origin': '*',
        //   'Content-Type': 'application/json',
        // }
    //  }
    ).then(response => {
        if(response.status===200){
          if (response.data.error === false) {
            console.log("Transaction succeeded");
            this.msg = 'Transaction succeeded';
            self.lockSubmit=false;
          } else
            throw new Error(response.data.error.raw.message);
        }
        else{
          throw new Error("Failed transaction")
        }
      }).catch((err) => {
        console.log("error: "+err.message)
        this.msg = err.message;
        self.lockSubmit=false
      });
    },
    stripCurrency(val){
      return val.replace(',','').replace('$','').replace('.','')
    }
  }
}
</script>
