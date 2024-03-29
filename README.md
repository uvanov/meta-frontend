## MRP Frontend Repository

Technologies used: 
- [Redux Toolkit](https://redux-toolkit.js.org/usage/usage-guide)
- [@emotion](https://emotion.sh/docs/styled)

File structure: 
```
meta-role-play-frontend/
├─ node_modules/
├─ public/
│  ├─ index.html
├─ src/
│  ├─ @types/
│  │  ├─ types.d.ts [ In this moment file are using just for declare CEF-object into window-interface ]
│  ├─ components/
│  ├─ hooks/
│  │  ├─ state.ts [ Contains wrappers for Redux-hooks with typification. Dispatch or select state only with it.  ]
│  ├─ store/
│  │  ├─ store.ts [ Redux store initialization ] 
│  ├─ App.tsx [ Root Component ] 
│  ├─ CEF.ts [ Declaring CEF-object into Window for data-transfer Client -> CEF ] 
│  ├─ index.tsx [ Application's Entry Point ]
```

```
 While developing, i'll try to leave some comments. Hope it will be helpful.
 But if u are in a totally pizdec - just message me by Telegram: @uvanov_tg
```

<br>

## CEF-Execute API 
I created a small api, which can help you to interact with Redux-store and React interfaces. 
You can see a global object into window, called "CEF'. There is his methods list. 

### Authentication

| Method | Description | Parameters |   
| --- | --- | --- |   
| Visibility | Change visibility of authentication interface | visibility: `boolean` |
| Clear | Clear server errors from one of the windows ( can't clear client-side validation errors ) | interfaceToClear: **string** (`authorization`, `registration`, `recovery`)|

<br>

#### Authentication.Authorization

| Method | Description | Parameters |   
|---|---|---|
| Error | Display error to one of the inputs | field: **string** (`login`, `password`), text: **string**| 

<br>

#### Authentication.Registration

| Method | Description | Parameters |   
|---|---|---|
| Error | Display error to one of the inputs | field: **string** (`login`, `email`, `password`, `repeatPassword`, `promo`), text: **string**| 

<br>

#### Authentication.Recovery

| Method | Description | Parameters |   
|---|---|---|
| Error | Display error to one of the inputs | field: **string** (`email`, `code`), text: **string**| 

<br><br>

### SelectCharacter

| Method | Description | Parameters |   
| --- | --- | --- |   
| Visibility | Change visibility of authentication interface | visibility: `boolean` |
| SetUserCharacters | Send user's character list to CEF | characters: Array `({ data: { name: string, cash: number, bank: number, fraction: string, job: string, status: string }, empty: boolean, blocked: boolean })` |
<br>

**( If `empty` or `blocked` are true, other string-parameters must be empty string and number-parameters must equal 0  )**

<br><br>

### CharacterCreator

| Method | Description | Parameters |   
| --- | --- | --- |   
| Visibility | Change visibility of character-creator interface | visibility: `boolean` |
| SetNameValid | Send the user the validity status of his name  | valid: `boolean` / `null` (null to hide valid-mark) |
| SetSurnameValid | Send the user the validity status of his surname | valid: `boolean` / `null` (null to hide valid-mark) |
<br>

<br>

### SelectSpawn

| Method | Description | Parameters |   
| --- | --- | --- |   
| Visibility | Change visibility of select-spawn interface | visibility: `boolean` |
| SetSpawnPoints | Show the available spawn point to user  | points: [ <br>{ index: 0, blocked: `boolean`, nearBuis: `string`, health: `string`, food: `string` }, <br>{ index: 1, blocked: `boolean`, houseNumber: `number`, houseClass: `string`, houseMoney: `string` }, <br>{ index: 2, blocked: `boolean`, fractionType: `string`, fractionName: `string`, fractionRank: `string` } <br>] |
<br>



### Chat

| Method | Description | Parameters |   
| --- | --- | --- |   
| AddMessage | Add message to client's chat window | message: { timestamp: `string`, message: `string` } |

Messages support a little markdown-system: <br>
`<{#ffffff} To colorize text >` <br>
`% Wrap by percent-symbol to make it bold % `
<br>

### Hud

| Method | Description | Parameters |   
| --- | --- | --- |   
| Visibility | Change visibility of hud interface | visibility: `boolean` |
| SetSafeZoneFromLeft | Set horizontal space for mini-map | fromLeft: `string` |
| SetSafeZoneFromBottom | Set vertical space for mini-map | fromBottom: `string` |
| SetPlayerId | Set player id to display | id: `number` |
| SetServerOnline | Set server online to display | online: `number` |
<br>

#### Hud.Hints

| Method | Description | Parameters |   
| --- | --- | --- |   
| SetOpened | Set the hint visibility state  | opened: `boolean` |
<br>

#### Hud.Information

| Method | Description | Parameters |   
| --- | --- | --- |   
| SetMoney | Set player's money to display  | money: `number` |
| SetFood | Set player's satiety to display  | food: `number` |
| SetDateDay | Set game-world date ( 00.00.0000 )  | day: `string` |
| SetDateTime | Set game-world time ( 00:00 )  | time: `string` |
<br>

#### Hud.Speedometer

| Method | Description | Parameters |   
| --- | --- | --- |   
| Visibility | Set the speedometer visibility status  | visibility: `boolean` |
| SetMaximumSpeed | Set the maximum possible speed of vehicle for correct speedometer render  | speed: `number` |
| SetSpeed | Set speed to show on speedometer  | speed: `number` |
| SetFuel | Set fuel level to display  | fuel: `number` |
| SetEngineHealth | Set engine health to display  | health: `number` |
|  |   |  |
| SetEngineTurnedOn | Set engine turned state  | turnedOn: `boolean` |
| SetDoorsUnlocked | Set doors openness state  | unlocked: `boolean` |
| SetSeatBelt | Set seatbelt active state  | seatBelt: `boolean` |
| SetHeadlights | Set headlight working mod  | headlights: `string` (`high (Ближний)`, `low (Дальний)`, `off`) |
| SetTurnSignals | Set turn signals | headlights: `string` (`left`,`right`,`both`,`off`) |
<br>