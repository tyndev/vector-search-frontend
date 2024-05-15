This is the frontend of a vector search project. The backend can be found at [vector-search-backend](https://github.com/tyndev/vector-search-backend).  


## Folder Structure Reminders
`/app/`
This contains the routes of the application including their layout and page files.

`/components/server/`
This contains the `server components` that make up a particular page or layout. Some can be used across multiple routes. 

`/components/client/`
This contains the `client components` that make up a particular page or layout. Some can be used across multiple routes. 

`/components/ui/`
These are the primitives such as buttons that make up the `components`. 

`/lib/actions/`
This contains `server actions` which can be used in either `client components` or `server components` and are async functions executed `server side` for handling things like form submissions and data mutations.

`/lib/utils.ts`
This could grow into justifying its own folder. 

`/lib/database/`
This may go away if I end up thinking database interactions can be located in the `actions` folder.

`/lib/hooks/`
Any react hooks that would be used on the client side. 

`/public/`

`/styles/`

