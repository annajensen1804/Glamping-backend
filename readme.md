# Glamping backend – dagens opgave

> **VIGTIGT: I må IKKE bruge AI** (fx ChatGPT, Copilot, Claude el.lign.)
> – hverken til jeres forklaringer eller til koden. Alt skal skrives med jeres egne
> ord og jeres egen kode. Formålet er, at I selv forstår, hvad der sker.

> Fejlen med `MONGODB_URI` i går skyldtes, at `dotenv`-pakken ikke var
> installeret. Den er nu installeret, så vores kald til databasen virker.

## Kom i gang

1. Installer pakkerne: `npm install`
2. Sørg for at have en `.env`-fil i projektmappen med linjen:
   ```
   MONGODB_URI=mongodb://localhost:27017/glamping
   ```
3. Start serveren: `npm run dev` (bruger nodemon, så den genstarter automatisk)
4. I terminalen skal der stå **"Forbundet til MongoDB!"** og **Serveren kører på
   http://localhost:3042**

## Opgaven

### Del 1 – Forklar koden (`// FORKLAR:`)

Rundt om i koden har jeg skrevet kommentarer, der starter med `// FORKLAR:`.
Hver af dem stiller et spørgsmål om en linje kode. **Erstat hver
`// FORKLAR:`-linje med jeres egen forklaring** med jeres egne ord.

I finder `// FORKLAR:`-markører i disse filer:

- `server.js`
- `database.js`
- `models/Activity.js`
- `routes/activityRoutes.js`
- `handlers/activityHandler.js`

### Del 2 – Flyt stays og reviews ud

I går flyttede vi vores **activities**-data, ruter og funktioner ud i `models/`,
`handlers/` og `routes/`. Nu skal I gøre det samme med **stays** og **reviews**.

Lige nu ligger de stadig direkte i `server.js`. Brug activities som skabelon og
lav for hver af stays og reviews:

- [ ] En **model** i `models/` (fx `models/Stay.js`) — et schema med de rigtige
      felter
- [ ] En **handler** i `handlers/` (fx `handlers/stayHandler.js`) — funktionerne
      der henter/opretter data
- [ ] En **route** i `routes/` (fx `routes/stayRoutes.js`) — ruterne der peger
      på handlerne
- [ ] Tilslut routeren i `server.js` med `server.use(...)`
- [ ] Slet den gamle inline-kode for stays/reviews i `server.js`

**Felter I kan tage udgangspunkt i** (kig i `stays.json` og `reviews.json`):

- **Stay:** title, teaser, description, numberOfPersons, discountInPercent,
  price, includes, image
- **Review:** name, age, image, review, stay

### Test i Postman

I skal teste **alle fire metoder** for både stays og reviews i Postman (og gerne
activities, som I allerede har lavet):

- [ ] **GET** alle — fx `GET http://localhost:3042/stays`
- [ ] **GET** én enkelt via id — fx `GET http://localhost:3042/stay/<id>`
- [ ] **POST** opret en ny — fx `POST http://localhost:3042/stay` (husk at sende
      data i **Body → raw → JSON**)
- [ ] **PUT** opdater en eksisterende — fx `PUT http://localhost:3042/stay/<id>`
- [ ] **DELETE** slet en — fx `DELETE http://localhost:3042/stay/<id>`

Brug et `id` fra et af de svar, I får retur fra en GET eller POST.

### Dobbelttjek i MongoDB Compass

Når I har lavet POST, PUT og DELETE i Postman, så **åbn MongoDB Compass** og
tjek, at databasen faktisk er ændret:

- [ ] Forbind til `mongodb://localhost:27017`
- [ ] Åbn databasen `glamping`
- [ ] Kontrollér, at jeres **nye dokument** dukkede op efter POST
- [ ] Kontrollér, at dokumentet blev **ændret** efter PUT
- [ ] Kontrollér, at dokumentet er **væk** efter DELETE

### Del 3 – Aflevering

1. Opret et **git repository** for projektet.
2. Aflever **linket** til repository'et inde på opgaven i Teams.

> Husk: `node_modules` og `.env` skal IKKE med i jeres repository. De er
> allerede sat op til at blive ignoreret i `.gitignore`.
