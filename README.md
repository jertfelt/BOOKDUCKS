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




