 // Напиши клас Client який створює об'єкт з властивостями login email.
 // Оголоси приватні властивості #login #email, доступ до яких зроби 
 // через геттер та сеттер login email

 class Client {
    #login;
    #email;

    constructor(login, email){
        this.#email = email;
        this.login = login;
    }

    get login(){
        return this.#login;
    }

    get email(){
        return this.#email;
    }

    set login(newLogin){
        this.#login = newLogin;
    }

    set email(newEmail){
        this.#email = newEmail;
    }
 }