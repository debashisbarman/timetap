# TimeTap: Appointment Booking RESTful APIs

Welcome to **TimeTap**, a collection of **Appointment Booking RESTful APIs** with the following features:

* [x] Users with two different roles, `user` (default) and `admin`.
* [ ] Authenticated user can check availabilities and book appointments.
* [ ] Admin users can check, create, update and remove users, availabilities and appointments.

## Documentation

### Authorization

Before you can start using our APIs, you must get an access token to authenticate with the APIs.

### Get access token

To get the access token

```
curl --request POST \
     --url https://api.timetap.io/api/auth/token \
     --header 'Content-Type: application/json' \
     --data: {
       "email": [Your email address],
       "password": [Your password]
     }
```

### Users

Users are the one who can use the our APIs.

#### Create an user

To create a **regular** user.

```
curl --request POST \
     --url https://api.timetap.io/api/user/createUser \
     --header 'Content-Type: application/json' \
     --data '{
       "name": "Trishna Barman",
       "email": "trishna@example.com",
       "password": "Admin123!"}'
```

To create a **admin** user.

```
curl --request POST \
     --url https://api.timetap.io/api/user/createUser \
     --header 'Content-Type: application/json' \
     --data '{
       "name": "Trishna Barman",
       "email": "trishna@example.com",
       "password": "Admin123!"
       "role": "admin"}'
```
