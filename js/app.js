const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        email: null,
        emails: [],
      }
    },
    methods: {
        generateEmail(n) {
            for(let i = 0; i < n; i++){
            axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) =>{
            // console.log(response.data.response)
                this.email = response.data.response
                this.emails.push(this.email)
                

            
   
        })
        }
    }
    },
    created(){
        this.generateEmail()
        
    },
    
  }).mount('#app')
  