import{_ as r,o as s,c,a as i,b as e,d as a,w as d,e as l,r as n}from"./app.e05538c0.js";const u={},p=l('<h2 id="lettura-necessaria" tabindex="-1"><a class="header-anchor" href="#lettura-necessaria" aria-hidden="true">#</a> Lettura Necessaria</h2><p>I dispositivi iOS e iPadOS possono essere aggiornati solo alle versioni firmware che Apple ha &quot;firmato&quot;. Questo di solito significa che \xE8 possibile aggiornare solo alle versioni pi\xF9 recenti del firmware. Questo \xE8 un male per il jailbreak, siccome la maggior parte dei jailbreak si basano su exploit che sono stati patchati in versioni pi\xF9 recenti.</p><p>Fortunatamente, possiamo usare diversi &quot;profili&quot; per ritardare un aggiornamento del firmware. Questo \xE8 destinato alle organizzazioni che richiedono pi\xF9 tempo per aggiornare i loro dispositivi, ma possiamo anche usarli per aggiornare a versioni del firmware non firmate.</p><p>Ma questo ha un limite di tempo. Potrai aggiornare solo alle seguenti versioni del firmware prima delle rispettive date di scadenza:</p><ul><li><strong>15.3.1</strong> - 12 giugno 2022</li><li><strong>15.4</strong> - 29 giugno, 2022</li><li><strong>15.4.1</strong> - 14 agosto, 2022</li></ul>',5),g=i("code",null,"UTC 00:00",-1),h={href:"https://dhinakg.github.io/delayed-otas.html",target:"_blank",rel:"noopener noreferrer"},m=l('<p>Se al momento non si dispone di un jailbreak (o si sceglie di non fare il jailbreak per un qualsiasi motivo), dovrai utilizzare metodi avanzati, che coinvolgono cose come il ripristino di tutti i contenuti e le impostazioni, per essere in grado di aggiornare.</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>A seconda della versione iOS di destinazione, non sar\xE0 possibile farlo se hai usato futurerestore dopo le seguenti date:</p><ul><li>15.3.1: 14 Marzo 2022</li><li>15.4: 31 Marzo 2022</li><li>15.4.1: 16 Maggio 2022</li></ul></div><h2 id="preparazione" tabindex="-1"><a class="header-anchor" href="#preparazione" aria-hidden="true">#</a> Preparazione</h2><ol><li>Collega il tuo iDevice al tuo computer e fai un backup tramite iTunes o Finder</li></ol><p>Dopo aver fatto un backup, ci\xF2 che \xE8 necessario fare dopo dipende dal fatto che si usi macOS o Windows</p><h2 id="macos-apple-configurator-2" tabindex="-1"><a class="header-anchor" href="#macos-apple-configurator-2" aria-hidden="true">#</a> macOS - Apple Configurator 2</h2><ol><li>Vai nell&#39;App Store sul tuo Mac</li><li>Cerca <code>Apple Configurator 2</code> e installalo</li><li>Configura Apple Configurator 2</li><li>Clicca Get Started</li><li>Clicca sul tuo dispositivo e poi clicca su Prepare</li><li>Seleziona <code>Manual Configuration</code></li><li>Scegli <code>Do not enroll in MDM</code></li><li>Vai su <code>Organization</code>e clicca su <code>New Organization</code></li><li>Accedi al tuo ID Apple oppure fai clic su Skip <ul><li>Se hai scelto di saltare l&#39;accesso al tuo ID Apple, aggiungi un nome, poi fai clic su Next</li></ul></li><li>Scegli <code>Generate a new supervision identity</code><ul><li>Se lo hai gi\xE0 fatto prima su Apple Configurator 2, puoi <code>Scegliere un&#39;identit\xE0 di supervisione esistente</code></li></ul></li><li>Configura l&#39;Assistente di Configurazione iOS come desideri <ul><li>Se hai dimenticato di eseguire il backup dei dati in precedenza nella guida, questo \xE8 l&#39;ultimo step in cui sarai in grado di farlo.</li></ul></li><li>Clicca <code>Prepare</code>, che canceller\xE0 i dati del tuo dispositivo e lo supervisioner\xE0</li></ol><h2 id="windows-imazing" tabindex="-1"><a class="header-anchor" href="#windows-imazing" aria-hidden="true">#</a> Windows - iMazing</h2><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Questo metodo richiede l&#39;acquisto di iMazing, se non si dispone di soldi per acquistare iMazing, non \xE8 possibile seguire questo metodo</p></div>',9),f={href:"https://imazing.com/download/windows",target:"_blank",rel:"noopener noreferrer"},_=l("<li>Dopo aver impostato iMazing, clicca sull&#39;opzione <code>Supervision</code></li><li>Fari clic su Next, fai clic sul pulsante sotto <code>Organization</code>, poi fai clic su Choose</li><li>Clicca sul pulsante <code>+</code> nell&#39;angolo in basso a sinistra della nuova finestra</li><li>Aggiungi un nome, quindi fai clic su <code>Save</code></li><li>Fai clic su Choose, poi clicca su Next <ul><li>Se hai dimenticato di eseguire il backup dei dati in precedenza nella guida, questo \xE8 l&#39;ultimo step in cui sarai in grado di farlo.</li></ul></li><li>Digita il numero indicato nella casella di testo, poi fai clic su <code>Next</code>, iMazing canceller\xE0 i dati del dispositivo e lo supervisioner\xE0</li>",6),v=i("h2",{id:"aggiornare-la-versione-del-firmware",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#aggiornare-la-versione-del-firmware","aria-hidden":"true"},"#"),e(" Aggiornare la versione del firmware")],-1),b=i("li",null,"Quando il dispositivo si avvia dopo essere stato cancellato, configuralo, poi apri questa pagina sul dispositivo",-1),z=i("li",null,[i("a",{href:"/assets/files/delay_15_3_1.mobileconfig"},"15.3.1")],-1),k={href:"https://dhinakg.github.io/delayed-otas.html",target:"_blank",rel:"noopener noreferrer"},S=i("li",null,"Riavvia il dispositivo",-1),w=i("li",null,"Collega il tuo dispositivo all'alimentazione e connettiti a Internet con Wi-Fi",-1),x=i("li",null,"Apri l'app delle Impostazioni",-1),C=i("li",null,[e("Vai su "),i("code",null,"Generali"),e(" -> "),i("code",null,"Aggiornamento Software")],-1),q=i("li",null,"Assicurati che la versione visualizzata sia la versione alla quale desideri aggiornare",-1),A=i("li",null,"Scarica e installa l'aggiornamento",-1),D=i("li",null,"Una volta aggiornato, rimuovi il profilo di aggiornamento tramite le Impostazioni",-1),I=i("p",null,"Dopo l'aggiornamento, \xE8 possibile rimuovere la supervisione e ripristinare il backup effettuato in precedenza cancellando tutti i contenuti e le impostazioni.",-1),M={href:"https://repo.cadoth.net/",target:"_blank",rel:"noopener noreferrer"},O=l('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Se l&#39;aggiornamento \xE8 andato a buon fine, continua con <a href="/get-started">Cominciamo!</a> per eseguire il jailbreak del tuo dispositivo.</p></div><h2 id="risoluzione-problemi" tabindex="-1"><a class="header-anchor" href="#risoluzione-problemi" aria-hidden="true">#</a> Risoluzione problemi</h2><h3 id="ios-e-aggiornato" tabindex="-1"><a class="header-anchor" href="#ios-e-aggiornato" aria-hidden="true">#</a> &quot;iOS \xE8 aggiornato&quot;</h3><ol><li>Rimuovi eventuali profili beta installati</li><li>Installare il tweak OTADisabler e poi disinstallalo</li><li>Riavvia il dispositivo <ul><li>\xC8 inoltre possibile utilizzare un ldrestart o un userspace reboot</li></ul></li></ol><h3 id="impossibile-controllare-gli-aggiornamenti" tabindex="-1"><a class="header-anchor" href="#impossibile-controllare-gli-aggiornamenti" aria-hidden="true">#</a> &quot;Impossibile controllare gli aggiornamenti&quot;</h3>',5),N=i("li",null,"Ripristina il rootFS attraverso il tuo jailbreak",-1),R=i("li",null,'Disattiva "Disable updates"',-1),T=i("li",null,"Ri-esegui il jailbreak usando unc0ver",-1),P=i("h3",{id:"la-schermata-si-freeza",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#la-schermata-si-freeza","aria-hidden":"true"},"#"),e(" La schermata si freeza")],-1),j=i("p",null,"Riattiva il daemon OTA usando il tweak iCleaner",-1),V=i("hr",null,null,-1),y={href:"https://github.com/dhinakg/",target:"_blank",rel:"noopener noreferrer"};function E(F,G){const o=n("ExternalLinkIcon"),t=n("router-link");return s(),c("div",null,[p,i("p",null,[e("Il tempo \xE8 indicato in "),g,e(". Per ulteriori date di scadenza, controlla "),i("a",h,[e("dhinakg.github.io/delayed-otas.html"),a(o)]),e(".")]),m,i("ol",null,[i("li",null,[e("Scarica e installa iMazing da "),i("a",f,[e("qui"),a(o)])]),_]),v,i("ol",null,[b,i("li",null,[e("Tocca una versione qui sotto per installare il rispettivo profilo di aggiornamento: "),i("ul",null,[z,i("li",null,[e("Per ulteriori versioni del firmware, controlla "),i("a",k,[e("dhinakg.github.io/delayed-otas.html"),a(o)]),e(".")])])]),S,w,x,C,q,A,D]),I,i("p",null,[e("Se hai problemi con l'aggiornamento, installa "),i("a",M,[e("OTAEnabler"),a(o)]),e(" e riavvia. Se hai ancora problemi continua a leggere qui sotto.")]),O,i("ol",null,[N,i("li",null,[e("Installa e apri "),a(t,{to:"/it_IT/installing-unc0ver"},{default:d(()=>[e("l'applicazione")]),_:1}),e(" di unc0ver")]),R,T]),P,j,V,i("p",null,[e("Crediti a "),i("a",y,[e("dhinakg"),a(o)]),e(" per aver scoperto questo metodo.")])])}var L=r(u,[["render",E],["__file","index.html.vue"]]);export{L as default};
