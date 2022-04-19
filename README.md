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
│  │  ├─ global.d.ts [ In this moment file are using just mor declae CEF-object into window-interface ]
│  ├─ components/
│  ├─ hooks/
│  │  ├─ state.ts [ Consider wrappers for Redux-hooks with typification. Dispatch or select state only with it.  ]
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