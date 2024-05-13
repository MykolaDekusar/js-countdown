Simulare un count down di 10 secondi che alla fine dice "Buon anno!"
Potete stampare il messaggio in pagina con un semplice alert.
Bonus 1
Mostrate il conteggio alla rovescia in pagina;
Bonus 2
Aggiungete un bottone che interrompe il count down e mostra il messaggio;

- Creo una funzione setTimeout di 10000ms (10s) che mi va a prendere la funzione buonAnno il compito della quale è rimuovere la class = "hide" dall'html

- Utilizzo la funzione asincrona setInterval per richiamare la funzione decreaseTime ogni secondo e decrementare il contatore da 10 a 0
---- Una volta che il contatore raggiunge lo 0 utilizzo clearIntervalper fermare la funzione e aggiungere la classe "hide" al contatore

- Aggiungo un eventlistener al bottone che al click mi ferma la funzione setInterval, la fa sparire e mi mostra la scritta buonAnno