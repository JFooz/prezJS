console.log('hello world');

// Déclaration de variable. Typage dynamique. a devient un number ici.
var a = 12;
var type = typeof a;
// le type number correpsond à double en Java. chiffre à virgule sur 64bits. 
console.log(type);
//a devient un string 
a = "Coucou";
var type = typeof a;
console.log(type);

/**
 * Objets en js 
 */
/**
 * n'est pas contenu dans une classe contrairement à java. L'obj en js n'est pas réutilisable(pas possible de faire un new personne).
 *  Obj littéral en js. Cela a servi de base pour le JSON  
 */
var personne = {
    age: 25,
    taille: 192,
    prenom: 'adrien'
};

/**
 * valable en node 10
 */

class HumainES2015 {
    constructor() {
        this.age = 25;
        this.taille = 192;
        this.prenom = 'adrien';
    }
    /**
     * ceci est une méthode
     */
    courir() {
        // le this est obligatoire pour utiliser l'attibut d'une classe
        console.log(this.prenom + ' court');
    }
}

/**
 * Pour réutiliser la structure de personne1 
 * il faut en faire une copie.
 */
/**
 * equivalent avec ES2015. valable avec node 12.
 * 
 */

class HumainES2018 {
    age = 25;
    taille = 192;
    prenom = 'adrien';
}
console.log(personne);
/**
 * l'écriture ES2015 sert plus à de la config, quand on a besoin qu'une seule fois de l'obj. 
 * Si on a besoin d'instancier plusieurs fois ES
 */
/**
 * Pour créer une fonction. Une fonction qui se trouve dans une classe est une méthode.
 */
function direBonjour() {
    console.log('Bonjour');
}
direBonjour();

/**
 * une fonction peut etre enregirster comme une variable
 * c'est une fonction anonyme.
 * l'interet est de pouvoir faire évoluer une variable
 */
var n = function() {
    console.log('ceci est une fonction anonyme');
};
/**
 * pour appeler la fonction anonyme il faut ajouter des ()
 * on execute le contenu de n
 */
n();
// indique le type
console.log(n);
//undefined pq ne retourne rien
console.log(n());


//fonction fléchée. à privilégier. dispo depuis ES2015
var m = () => {
    console.log('ceci est une fonction flechée !')
};
// fonction avec paramètres. valade également pour les fonctions classiques 
var fp = (a, b, c) => {
    console.log(a, b, c);
};
fp(456, "coucou", personne);


/**
 *  il est nécessaire de documenter les fonctions car les var sont dynamiques
 * et peuvent etre de nimporte quel type
 */
/**
 * 
 * @param {number} a
 * @param {number} b 
 */
var division = (a, b) => {
    var resultat = a/b;
    console.log(resultat);
}
division(5,8);


/**
 * les callbacks ---------------------
 * Fonctions lambdas
 */

/**
 * 
 * @param {Function} f : une fonction fournie en paramètre d'une autre fonction : Callback (en java lambda)
 */
 var execute = (f) => {
    console.log('Début de l\'execution');
}