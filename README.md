# Check Certs

A quick cli tool to check the ssl validity of a number of domains. Also warns of certificates that are expiring soon (within two months).

## Install

`npm install -g check-certs`

## Usage

`check-certs [domains...]`

For example.

~~~
❯ check-certs google.com yahoo.com mozilla.org xsp.xdp.broadsoft.com
✅   google.com (Feb 2 2017, 03:31:00)
✅   yahoo.com (Oct 30 2017, 11:59:59)
⚠️   mozilla.org (Dec 29 2016, 12:00:00)
⛔️   xsp.xdp.broadsoft.com (Error: self signed certificate)
~~~

Licence: MIT
 
