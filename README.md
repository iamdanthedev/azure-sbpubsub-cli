`npm install -g sb-pubsub-cli`


### Configure

Create your env file:

```sh
# env.sh
export SB_CONNECTION_STRING="Endpoint=sb://..."
export SB_TOPIC=main
export SB_SUB=danthedev
```

Source it

```sh
source env.sh
```


### Subscribe

```sh
sbsub
```


### Publish

```sh
sbpub ./SomeMessage.json
```


```json
{
  "body": {
    "name": "TimereportStatusChangedEvent",
    "body": {
      "timereportId": "607560c692142f22ba66923e",
      "year": 2021,
      "week": 21,
      "workplace": "Aleris Joneberg Plaza",
      "department": "",
      "bookingId": "607560c5027ceab5002e65b8",
      "consultantId": "606d538fdb9661347b8e1a76",
      "status": "ApprovedByCustomer",
      "currentStatus": null,
      "userName": "Dan",
      "userId": "5ca25a5d47cce70021be7a23"
    }
  },
  "applicationProperties": {
    "Name": "TimereportStatusChangedEvent"
  }
}
```
