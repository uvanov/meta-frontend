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