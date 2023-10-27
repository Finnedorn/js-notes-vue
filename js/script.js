//i primi passi per usare vue sono:
//incollare il link vue nell'html e incollare nel js questo contenuto:

//se osservi bene, puoi notare che questa non è altro che una destrutturazione

//const { createApp } = Vue

//questo è un macro metodo (chiamato option object) che ha dentro un altro metodo che ha come ritorno un messaggio riportato da mount (corrisponde ad append div)
/*
createApp({
  data() {
    return {
      message: 'Hello Vue!'
    }
  },
  methods : {
    Msg(){
        this.message = this.message === 'Hello Vue!' ? 'pippo' : 'Hello Vue!';
    }
  },
  
  //montalo in app
}).mount('#app')
*/

//in questo caso è solo linkato ad div#app

//dentro all'option obj posso avere anche altri due elementi 
//i methods o i life Cycle Hooks


//proviamo da noi:
const {createApp} = Vue;

const miaApp = createApp({
    data() {
        return {
            title: 'La mia prima app in Vue',
            text: '',
            miaClasse: 'red',
            mioTag: '<h2>Sottotitolo</h2>'
        }
    },
    methods: {
        //se la funzione avesse parametri dovrei specificarli pure nell'html
        changeClass() {
            this.miaClasse = this.miaClasse === 'red' ? 'blue' : 'red';
            console.log('ciao');
        }
    }
});
//nota! ricordati ogni volata di linkare il macro div in cui lavorerai !!!!
miaApp.mount('#app');


/*secondo esempio:creo un toggle per il titolo
const {createSecondApp} = Vue;

const miaSecondaApp = createSecondApp({
    data() {
        return {
            title2: 'La mia prima app in Vue',
            text2: '',
            //creo una classe che mi faccia da flag
            isRed: true,
        }
    },
    methods: {
        //se è red cambialo in false e viceversa (è bindato al click)
        changeClass2() {
            this.isRed = !this.isRed
        }
    }
});
//nota! ricordati ogni volata di linkare il macro div in cui lavorerai !!!!
miaSecondaApp.mount('#secondapp');
*/


/*terzo esempio
const {createSecondApp} = Vue;

const miaSecondaApp = createSecondApp({
    data() {
        return {
            title2: 'La mia prima app in Vue',
            text2: '',
            isRed: true,
            //creo un count che parta da 0
            count: 0
        }
    },
    methods: {
        changeClass2() {
            this.isRed = !this.isRed
        }
    }
});
//nota! ricordati ogni volata di linkare il macro div in cui lavorerai !!!!
miaSecondaApp.mount('#secondapp');
*/

/*terzo esempio modificato
const {createSecondApp} = Vue;

const miaSecondaApp = createSecondApp({
    data() {
        return {
            title2: 'La mia prima app in Vue',
            text2: '',
            isRed: true,
            //creo un count che parta da 0
            count: 0
        }
    },
    methods: {
        changeClass2() {
            this.isRed = !this.isRed
        },
        addCount() {
            count++;
        }
    }
});
//nota! ricordati ogni volata di linkare il macro div in cui lavorerai !!!!
miaSecondaApp.mount('#secondapp');
*/