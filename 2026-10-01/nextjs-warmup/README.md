Next.js Warm-up (Kodutöö #4)

What does Next.js provide beyond React alone?
Next.js annab Reactile juurde näiteks lehtede routing-u, serveris jooksva koodi ja API endpoint-id. Ehk ei pea kõike ise eraldi kokku ehitama.

Why does the counter need 'use client'?
Sest Counter kasutab useState-i ja nuppu, millele kasutaja vajutab. See osa peab seega brauseris jooksma.

Where does the code in app/api/message/route.js run?
See kood jookseb serveris, mitte brauseris.

How is this endpoint similar to an Express route?
Mõlemal juhul tuleb request mingi kindla route-i pihta ja server saadab sellele vastuse tagasi. Siin kasutab Next.js selle jaoks oma route handler-it.

Why must secrets remain on the server?
Sest brauseris olevat koodi saab kasutaja näha. Näiteks paroole ja API võtmeid ei tohiks sinna panna.
