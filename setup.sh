cd ./app/client
while [`npm install`]
do
echo 'installing node modules in app/client. Please wait....'
done
cd ../craft
while [`composer install`]
do
echo 'installing composer dependencies in app/craft. Please wait....'
done
./craft setup