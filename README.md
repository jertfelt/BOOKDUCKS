Skoluppgift i kursen "Interaktion med CMS", Nackademin.
En första trevande erfarenhet av backend i kombination med frontend.
Inlämningsuppgift där jag jobbat med API:er och att skapa en headless CMS genom STRAPI (https://strapi.io/) och Javascript.
I projektet har jag även fingrat på backend och ytterst lite node.js

På grund av en bugg i post-funktionen (axios post) så fungerar den inte alltid, response-delen körs inte alltid igång även fast request skickas till servern.
Vi tror att det är en bugg som ligger hos strapi, men ej säkert. Detta gör iallafall att vissa funktioner inte alltid är pålitliga, och att mycket tid i projektet gick ut på att felsöka detta problem, istället för att förfina koden.

Funktioner som saknas men som kommer att tillkomma närhelst jag hinner:
- Återställa lösenord 
- Kunna ta bort en bok man laddat upp (DELETE)
- Att sortera efter genre

Verktyg:
Axios
Postman
Strapi
Node.js 
Visual Studio Code

Metoder:
Querystrings
Post-method & Get-method (axios)
Async functions
Headless CMS

Språk:
Javascript
CSS/SASS
HTML5

Några problem som jag löste på mitt sätt:
I Strapi kringgick jag problemet (de jobbar på att fixa det) med att Users för tillfället inte visar upp något på populate=* genom att göra Relation mellan Users och Books/Audiobooks. 

![image](https://user-images.githubusercontent.com/30622818/163668418-e0ac46e0-6e86-4f56-a662-da72b1919582.png)
![image](https://user-images.githubusercontent.com/30622818/163668526-52a1b920-27a0-446a-b001-fbcf6688ea3d.png)
![image](https://user-images.githubusercontent.com/30622818/163668531-fe8c370c-2f10-4f3f-855f-0a5cd31e71bf.png)
![image](https://user-images.githubusercontent.com/30622818/163668700-7b9bffc7-5111-4b0b-89cf-0fa5815ccabb.png)

Instruktioner:
Individuellt projektarbete - BookDucks

Du har fått i uppdrag att ta fram en applikation för ett community vid namn BookDucks som lånar/utbyter böcker och ljudböcker på CD med varandra.

Backend

    Du ska använda Strapi som CMS.

    Genom CMS-gränssnittet ska man kunna lägga till:

        En bok med dess titel, författare, antal sidor, betyg (valfri skala t.ex 1-10), samt en bild på bokomslaget.

        En ljudbok med dess titel, utgivningsdatum, längd, betyg (valfri skala t.ex 1-10), samt en bild på bokomslaget.

        Samtliga böcker och ljudböcker ska även vara kopplad till en registrerad användare (som relation, id eller annat sätt) som lånar ut boken/ljudboken. (Du kan skapa upp användare med Strapis inbyggda User-collection type).

        (VG) Samtliga böcker och ljudböcker ska även ha en eller flera av följande genrer: Romantik, humor, skräck, barnvänlig, fantasy, sci-fi, action. (Skapa en content-type för dina genrer. Du kan också skapa egna genrer om du vill.


Frontend

    Användaren ska kunna se en lista på samtliga böcker och ljudböcker som finns tillgängliga för utlåning. Skriv ut samtliga egenskaper för böckerna/ljudböckerna. Skriv även ut kontaktuppgifter för användaren som lånar ut boken/ljudboken (användarnamn samt email).

    Det ska vara möjligt för en användare att logga in samt registrera sig på sidan.

    Det ska tydligt framgå om användaren är inloggad i applikationen.

    Det ska finnas en profilsida - Denna sida ska dock kräva inloggning för att visas.

    Profilsidan som visar information om användarens användarnamn, email, id, samt vilket datum användaren registrerade sig. (VG) Sidan ska även innehålla en lista över samtliga böcker och ljudböcker som användaren har lagt ut för utlåning.

    (VG) - Det ska även finnas ytterligare en sida där registrerade användare kan lägga ut böcker och ljudböcker för utlåning. Denna sida ska kräva att användaren är inloggad. Se till att användaren kan lägga till samtliga egenskaper för boken/ljudboken, inklusive bild på bokomslag och genrer. 

    Sidan ska ha ett professionellt utseende.

    Sidan ska fungera utan några större buggar.


