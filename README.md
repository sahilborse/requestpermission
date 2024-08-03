## created an Restful Api for user request permission 


POST request /grantpermission/:id 
// updates database if user permission field if already present

else create new user using user id and update permission field to true

GET request /grantPermission/:id
// return json response in bolean format for particular id permission field

