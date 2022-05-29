class User {
    constructor(email,nome,cognome,stato) {
		this.rank = "USR";
        this.email = email;
        this.nome = nome;
        this.cognome = cognome;
        this.stato = stato; 
  	}  
}


module.exports = User;
