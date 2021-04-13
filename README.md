`npm install -g sb-pubsub-cli`


### Configure

Create your env file:

```
# env.sh
export SB_CONNECTION_STRING="Endpoint=sb://..."
export SB_TOPIC=main
export SB_SUB=danthedev
```

Source it

```
source env.sh
```


### Subscribe

```
sbsub
```


### Publish


```
sbpub ./SomeMessage.json

```
