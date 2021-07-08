Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {
            mail: [],
            finish : false,
            mailN : 5,
        },
        created() {
            this.getMail(this.mailN);
        },
        methods: {

            getMail: function (n) {
                for(let i = 0 ; i<n; i++){
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail ')
                        .then((response) => {  // appena il server ci risponde, si attiva questa funzione
                            console.log(response.data.response);
                            console.log(this);
                            this.mail.push(response.data.response);
                        });
                    }
                    finish = true;
                }
        }  
    }
);