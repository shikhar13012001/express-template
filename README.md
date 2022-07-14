#### MOCK BUILD API

### How to use api

##### FRONTEND

```javascript
const data = fetch("API_ROUTE", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    data: { name: "John Doe", email: "email@email.com", password: "password" },
  }),
});
```

```javascript
/** @response {object}

**/
{
  data: {
    _id: "5e9f8f8f8f8f8f8f8f8f8f8",
    name: "John Doe",
    email: "email@email.com"
    ...other fields
    }
}
```
```
prefix: /api/v1/
```


##### TESTING

Tests needs to be updated , test will fail due to change in schema

```

```
