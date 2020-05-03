mkdir ssl
openssl genrsa -out ssl/private.key 4096
openssl req -new -sha256 \
	-out ssl/private.csr \
	-key ssl/private.key \
	-config ssl.conf
openssl x509 -req \
	-days 3650 \
	-in ssl/private.csr \
	-signkey ssl/private.key \
	-out ssl/private.crt \
	-extensions req_ext \
	-extfile ssl.conf
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain ssl/private.crt
openssl x509 -in ssl/private.crt -out ssl/private.pem -outform PEM
